---
title: 第一季：编译、链接与装载
order: 0
---

# 第一季：编译、链接与装载

> 从一行 gcc，到链接器在对账，到装载器把镜像搬上芯片、把动态库搬进进程。

第一季的长期主线已经确定：**编译、链接与装载**。它横向使用 [EmbedBox](https://github.com/Awesome-Embedded-Learning-Studio/EmbedBox) 与 [Tutorial_AwesomeModernCPP](https://github.com/Awesome-Embedded-Learning-Studio/Tutorial_AwesomeModernCPP) 的现有教程，不归任何一篇 Markdown 独占——同一事实只生产一份，跨学习路径复用。

## 知识主干

```text
源码
  ② 预处理 / 编译 / 汇编 四阶段与产物
  ③ 目标文件 = 分段的半成品 (.text/.data/.bss/.rodata)
  ④ 符号表：U=欠的债，T/D/B=已有的资产
  ⑤ 静态链接 = 符号对账：残留 U 即 undefined reference
  ⑥ 静态库 = .o 归档 + 符号索引，按 .o 粒度按需拉入
  ┌────────────────────────────┴────────────────────────────┐
嵌入式落点                                       现代 C++ 落点
  交叉编译 / 链接脚本                               ⑦ 动态库 + PIC：GOT/PLT
  .data 的 VMA/LMA 分离                            ⑧ ABI：mangling / 可见性
  objcopy 抽 .bin/.hex                              ⑨ Loader：库搜索 / dlopen
  → 裸机镜像（无 OS、无动态库、无 PIC）             ⑩ ELF 入口点
```

## 主线集（M1–M10）

| # | 标题 | 落点 | 状态 |
|---|------|------|------|
| [M1](./m1-gcc-stages-and-sections) | 从一行 gcc 到看懂 .o 里的段 | 共享 | ✅ |
| [M2](./m2-nm-undefined-reference) | 用 nm 看懂 undefined reference ★MVP | 共享 | 🚧 |
| [M3](./m3-static-library-archive) | 静态库：ar 归档与按 .o 拉入 | 共享 | 🚧 |
| [M4](./m4-bare-metal-vma-lma) | 裸机、链接脚本、VMA/LMA | 嵌入式 | 🚧 |
| [M5](./m5-dynamic-library-fpic-got-plt) | 动态库与 -fPIC：GOT/PLT | 现代 C++ | 🚧 |
| [M6](./m6-mangling-extern-c) | mangling、extern "C"、ABI | 现代 C++ | 🚧 |
| [M7](./m7-symbol-visibility) | 符号可见性（导出控制） | 现代 C++ | 🚧 |
| [M8](./m8-undefined-verdict-interposition) | 未定义裁决与符号介入 | 现代 C++ | 🚧 |
| [M9](./m9-runtime-loading-dlopen) | 运行时加载与库搜索：dlopen | 现代 C++ | 🚧 |
| [M10](./m10-elf-entry-point) | ELF 入口点：libc.so.6 之谜 | 现代 C++ | 🚧 |

## 短期选题

穿插的[独立短](./shorts/)与主线高光的同源切片，详见[短期总览](./shorts/)。

## 制作顺序

制作从 **M2（MVP）** 开始——先跑通"文章→视频→切片"流水线，再用 M1、M3 验证连续三集的 repeatability，然后走嵌入式落点 M4，再走现代 C++ arc M5–M10。**制作顺序 ≠ 发布顺序**，发布服从学习递进（M1→M10）。

每篇正文文首钉工具链版本与日期；视频是那一天的快照，事实以文章为准。
