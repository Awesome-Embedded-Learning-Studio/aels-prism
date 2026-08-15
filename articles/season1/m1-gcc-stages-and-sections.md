---
title: 从一行 gcc 到看懂 .o 里的段
description: "把 `gcc demo.c -o demo` 这个黑盒拆成预处理/编译/汇编/链接四步，用 -E/-S/-c 让 gcc 在每步停下交出半成品（demo.i 854 行、add 的汇编、demo.o 是 ELF relocatable），再钻进 .o 看 .text(0x68)/.data(0x4)/.bss(0x190)/.rodata(0xb) 各装什么。本机 gcc 16.1.1 / ld 2.47 实跑：size 报 text 251 / data 12 / bss 400；其中 data=12 而非直觉的 4，是因为 `const char *msg` 落进了需重定位的 .data.rel.local(0x8)。顺带讲清嵌入式为什么把大数组写成无初值是真金白银省 Flash。"
order: 1
code: M1
landing: 共享
status: published
tags: [host, gcc, beginner, sections]
difficulty: beginner
prerequisites:
  - "终端与 Shell：能在命令行跑命令、读输出"
toolchain:
  gcc: "16.1.1 (20260728)"
  ld: "2.47 (GNU Binutils)"
  arch: "x86-64, Arch Linux on WSL2"
verified: "2026-08-13"
sources:
  - "EmbedBox/tutorial/build-system/gcc/01-compile-pipeline.md"
prev:
  text: '第一季总览'
  link: /season1/
next:
  text: 'M2 · 用 nm 看懂 undefined reference'
  link: /season1/m2-nm-undefined-reference
---

# 从一行 gcc 到看懂 .o 里的段

## 这一篇想解决什么

咱们平时敲 `gcc demo.c -o demo`，回车，吐一个能跑的程序出来，只要它不报错，里面的门道咱们懒得管。这套"懒得管"在 host 上撑得住——直到碰嵌入式。芯片上电，谁负责把有初值的全局变量搬进 RAM？那片没初值的大缓冲，谁在启动时给它清零？为什么非得手写一个叫 `Reset_Handler` 的函数？这些问题全压在同一件事上：**编译器到底把咱们写的 C 变成了什么**。所以这一篇笔者不图快，把那一行 gcc 拆开，一步一步实跑给咱们看——每一步它产出了什么、为什么长那样。

编译用 host 上的 `gcc`——笔者这台是 `gcc (GCC) 16.1.1`、`ld 2.47`、x86-64 的 Arch on WSL2；到讲裸机那一篇（M4）再换交叉工具链 `arm-none-eabi-gcc`。一台装了 gcc 的 Linux/WSL 就能跟着做，不要硬件。下面每条命令、每段输出都是笔者本机真跑的，文末附了完整输出记录，照着能复现。

## 先准备一个能体现"段"的玩具程序

为了后面能把 `.text/.data/.bss/.rodata` 都看出来，咱们故意写一个每样都占一点的小程序——有初值的全局、没初值的全局、一个只读字符串、两段函数代码。存成 `demo.c`：

```c
#include <stdio.h>

int counter = 42;        /* 有初值的全局变量 → .data */
int zero_buf[100];       /* 初值为 0 的全局变量 → .bss */
const char *msg = "hi";  /* 只读 → .rodata */

int add(int a, int b) {  /* 代码 → .text */
    return a + b;
}

int main(void) {
    int sum = add(counter, counter);
    zero_buf[0] = sum;
    printf("%s: %d\n", msg, zero_buf[0]);
    return 0;
}
```

注释里笔者提前剧透了每样东西会落到哪个段，但别急着信——咱们等会儿用命令亲自验证。

## 第一步——一行 gcc 其实是四步

直接 `gcc demo.c -o demo && ./demo`，能看到 `hi: 84`（`counter` 加自己就是 84）。可这一行底下跑了**四个阶段**，gcc 只是把它们串起来一气呵成。咱们用 `-E / -S / -c` 三个开关，让它在每个阶段**停下来、把中间产物吐出来**：

```bash
gcc -E demo.c -o demo.i     # ① 预处理
gcc -S demo.i -o demo.s     # ② 编译
gcc -c demo.s -o demo.o     # ③ 汇编
gcc    demo.o   -o demo     # ④ 链接
```

```mermaid
flowchart LR
    A["demo.c"] -->|"-E 预处理"| B["demo.i"]
    B -->|"-S 编译"| C["demo.s"]
    C -->|"-c 汇编"| D["demo.o"]
    D -->|"链接"| E["demo / .bin"]
```

这三个开关名字有点反直觉——`-E` 是 preprocess、`-S` 是 compile to aSsembly、`-c` 是 compile（到 objeCt）。别硬记字母，记住"每一步让 gcc 停一下、把半成品交出来"就行。

### 预处理：`#include` 到底塞进了什么

`gcc -E` 只做预处理——展开 `#include`、替换 `#define`、处理条件编译，纯文本层面的事，跟机器码还没半点关系：

```bash
gcc -E demo.c -o demo.i
wc -l demo.i
```

```text
854 demo.i
```

原来 20 来行的 `demo.c`，预处理完变成 854 行。原因很直白：`#include <stdio.h>` 把整个标准输入输出头文件原样插了进来，`demo.i` 里现在能翻到 `printf` 的声明、一大堆宏、编译器内置定义。这一步的产物就是"展开后的纯 C 源码"，本质上还是人能读的文本。

### 编译：从 C 到汇编

把展开后的源码编译成**汇编**（`-S`）。到这一步还是人能读的——只不过从 C 变成了汇编指令：

```bash
gcc -S demo.i -o demo.s
grep -A8 '^add:' demo.s
```

```asm
add:
.LFB0:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	movl	%edi, -4(%rbp)
```

咱们写的 `int add(int a, int b){ return a+b; }` 这么短一句，到汇编里是一串压栈、建栈帧的指令——函数调用要保护现场。这一步 gcc 真正干了"翻译"的活：把 C 的语义翻成 CPU 能一条条执行的指令序列，只不过先用汇编这种人类可读的记号写出来。`movl %edi, -4(%rbp)` 就是把第一个参数 `a`（按 x86-64 调用约定放在 `%edi` 里）存到栈帧上的局部位置——参数落地了。

### 汇编：从汇编到目标文件 `.o`

`-c` 把汇编变成**目标文件**（object file，`.o`）。从这一步起，产物就不是给人看的了——已经是机器码：

```bash
gcc -c demo.s -o demo.o
file demo.o
```

```text
demo.o: ELF 64-bit LSB relocatable, x86-64, version 1 (SYSV), not stripped
```

`file` 告诉咱们 `demo.o` 是个 **ELF relocatable**（可重定位目标文件）。这时候**还不能直接运行它**——它里面的地址都还是相对的、外部符号（比如 `printf`）还没着落。这正是下一步"链接"要解决的。

### 链接：把零件拼成能跑的程序

最后一步是链接，把 `.o` 跟需要的库（`printf` 在 libc 里）拼到一起，填好所有地址，吐出一个能执行的程序：

```bash
gcc demo.o -o demo
./demo
```

```text
hi: 84
```

到这里咱们把那一行黑盒 gcc 彻底拆穿了——它从来不是一步，是预处理、编译、汇编、链接四步的串联，只是平时它懒得废话、全做完而已。

## 第二步——`.o` 不是一坨，它是分段的

拆完流水线，咱们钻进 `.o` 里看一件对嵌入式至关重要的事：**目标文件不是一整块机器码，它分成好几个"段"（section）**。最直接的看法是 `size`：

```bash
size demo.o
```

```text
   text	   data	    bss	    dec	    hex	filename
    251	     12	    400	    663	    297	demo.o
```

咱们最关心前三列。`text` 是代码、`data` 是有初值的全局/静态变量、`bss` 是初值为 0 的全局/静态变量。回头对照 `demo.c`：`counter = 42` 进了 `data`，`zero_buf[100]`（400 字节）进了 `bss`，函数代码进了 `text`——数字对得上。

> 笔者本机 gcc 16.1.1 跑出来的这组数（251/12/400），和老教程里常见的那组一模一样。这不是说 gcc 几十年没变，而是这个 demo 太小、没触发版本差异；等咱们走到动态库那几篇，同一份代码在不同 gcc 版本下的产物就会拉开差距，到时候笔者会现场把差异指出来。换句话说，**这篇的数字稳，是因为 demo 简单，不是因为编译链静止**。

那为什么嵌入式工程师对这几个段近乎神经质地在意？因为 RAM 太小、Flash 也金贵，咱们必须时刻知道每个东西去了哪、占了多大。这里有个新手很容易忽略的细节：**`bss` 在最终镜像里几乎不占 Flash**。`size` 显示它 400 字节，可这 400 字节是运行时才需要的 RAM；烧进 Flash 的镜像里并不会真存 400 个 0，只存一条"这一段多长、起始地址在哪"的记录，启动代码负责在 RAM 里把它清零。所以"把一个大数组声明成没初值"在嵌入式里是真金白银地省 Flash——这也解释了为什么很多驱动代码里 `static uint8_t big_buf[1024];` 不写 `= {0}`，省的就是这口气。

想看得更细，`objdump -h` 能把每个段单独列出来，连地址和大小都给：

```bash
objdump -h demo.o
```

```text
Idx Name             Size        VMA               LMA               File off  Algn
  0 .text            00000068    0000...000040    2**0
  1 .data            00000004    0000...0000a8    2**2
  2 .bss             00000190    0000...0000b0    2**5
  3 .rodata          0000000b    0000...0000b0    2**0
  4 .data.rel.local  00000008    0000...0000c0    2**3
  ...
```

`0x190` 就是十进制的 400，跟 `size` 的 `bss` 对得上；`.rodata` 的 `0xb`（11 字节）正是那个 `"hi: %d\n"` 格式串。到这里咱们已经能对着段名，反推出源码里每样东西的归宿了。

⚠️ 注意 `size` 报的 `data` 是 12，而不是咱们直觉里的 4（一个 `int counter`）。多出来的 8 字节藏在 `objdump -h` 的第 4 段 `.data.rel.local` 里——那是 `const char *msg` 这个指针本身。它指向的字符串 `"hi"` 在 `.rodata`，但指针自己需要在加载时重定位，GCC 就把它单独放进 `.data.rel.local`，`size` 把它一起算进了 `data`。所以 4（`counter`）+ 8（`msg` 指针）= 12。咱们现在不用吃透"重定位"——记住"看到的数字偶尔比直觉大一点，多半是这类需要重定位的东西"就够了，重定位正是下一篇链接的主场。

## 小结

第一块拼图拼完了：一行 gcc 是预处理→编译→汇编→链接四步，每步都能用 `-E/-S/-c` 单独停下来看产物；而 `.o` 是分段的，`text` 装代码、`data` 装有初值的全局、`bss` 装初值为零的全局（且几乎不占 Flash）、`rodata` 装只读常量，偶尔还会冒出 `.data.rel.local` 这种"需要重定位的指针"小段。把这几件事在脑子里搭牢，后面讲链接脚本和启动代码时咱们才不会懵。

自测几个点：能不能说清 `-E/-S/-c` 各停在哪个阶段、产物能不能直接运行；看到 `size` 的输出，能不能反推源码里哪个变量进了哪个段；为什么把大数组写成"无初值"在嵌入式里是省 Flash。

## 接下来

`.o` 拼成能跑的程序这一步——链接——埋着嵌入式最容易翻车的坑（`undefined reference`、链接顺序、库怎么找符号）。下一篇咱们专门拆开它，并且真的打一个静态库出来链一遍。

> 下一篇：[用 nm 看懂 undefined reference——链接器到底缺了谁（M2）](./m2-nm-undefined-reference)

## 附录：完整输出记录

以下为本文所有关键命令的完整实测输出（工具链：gcc 16.1.1 / GNU ld 2.47 / x86-64 Arch on WSL2，实测日期 2026-08-13）。

```text
######## 工具链版本 ########
gcc (GCC) 16.1.1 20260728
GNU ld (GNU Binutils) 2.47
Linux 6.18.33.2-microsoft-standard-WSL2 x86_64

######## gcc -E 预处理 ########
$ wc -l demo.i
854 demo.i

######## gcc -S 编译到汇编 ########
$ grep -A8 '^add:' demo.s
add:
.LFB0:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	movl	%edi, -4(%rbp)

######## gcc -c 汇编到 .o ########
$ file demo.o
demo.o: ELF 64-bit LSB relocatable, x86-64, version 1 (SYSV), not stripped

######## 链接 + 运行 ########
$ ./demo
hi: 84

######## size demo.o ########
   text	   data	    bss	    dec	    hex	filename
    251	     12	    400	    663	    297	demo.o

######## objdump -h demo.o ########

demo.o:     file format elf64-x86-64

Sections:
Idx Name          Size      VMA               LMA               File off  Algn
  0 .text         00000068  0000000000000000  0000000000000000  00000040  2**0
                  CONTENTS, ALLOC, LOAD, RELOC, READONLY, CODE
  1 .data         00000004  0000000000000000  0000000000000000  000000a8  2**2
                  CONTENTS, ALLOC, LOAD, DATA
  2 .bss          00000190  0000000000000000  0000000000000000  000000b0  2**5
                  ALLOC
  3 .rodata       0000000b  0000000000000000  0000000000000000  000000b0  2**0
                  CONTENTS, ALLOC, LOAD, READONLY, DATA
  4 .data.rel.local 00000008  0000000000000000  0000000000000000  000000c0  2**3
                  CONTENTS, ALLOC, LOAD, RELOC, DATA
  5 .comment      0000001c  0000000000000000  0000000000000000  000000c8  2**0
                  CONTENTS, READONLY
  6 .note.GNU-stack 00000000  0000000000000000  0000000000000000  000000e4  2**0
                  CONTENTS, READONLY
  7 .note.gnu.property 00000030  0000000000000000  0000000000000000  000000e8  2**3
                  CONTENTS, ALLOC, LOAD, READONLY, DATA
  8 .eh_frame     00000058  0000000000000000  0000000000000000  00000118  2**3
                  CONTENTS, ALLOC, LOAD, RELOC, READONLY, DATA

######## readelf -S demo.o (段名 + 地址 + 大小) ########
  [ 1] .text             PROGBITS         0000000000000000  00000040
  [ 2] .rela.text        RELA             0000000000000000  00000000290
  [ 3] .data             PROGBITS         0000000000000000  000000a8
  [ 4] .bss              NOBITS          0000000000000000  000000b0
  [ 5] .rodata           PROGBITS         0000000000000000  000000b0
  [ 6] .data.rel.local   PROGBITS         0000000000000000  000000c0
  [ 7] .rela.data.r[...] RELA             0000000000000000  00000000350
```

## 来源

本文叙事基底来自 [EmbedBox](https://github.com/Awesome-Embedded-Learning-Studio/EmbedBox) 的 `tutorial/build-system/gcc/01-compile-pipeline.md`；全部命令与输出均按文首标注的工具链在本机实测重跑。
