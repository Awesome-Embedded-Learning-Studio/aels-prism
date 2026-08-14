---
title: 短期选题
order: 99
---

# 短期选题

第一季推进期间穿插的短期内容。**短期**指选题范围与制作周期，不预设竖屏或固定时长；每个单点闭环、可独立观看，并尽量反哺主线。

## 独立短（各自成篇）

| # | 选题 | 现象 |
|---|------|------|
| [S4](./s4-multiple-definition) | 重复定义 vs 未定义 | multiple definition … first defined here |
| [S11](./s11-make-separator-phony) | Make 的 missing separator / .PHONY 撞文件 | 构建自动化 |
| [S12](./s12-cmake-toolchain-cache) | CMake 交叉编译工具链文件 | 构建自动化 |

## 同源切片（不另拍）

下面这些是各主线集的"最高光那一段"。按"同一事实只生产一份"原则，它们不单独拍摄——主线集录的时候那段高光，同源切片即作为独立短发布：

| 切片 | 母集 | 高光 |
|------|------|------|
| S1 | M2/M3 | 链接顺序坑 |
| S2 | M1 | size/objdump 看段 |
| S3 | M4 | VMA vs LMA 两个地址 |
| S5 | M6 | C++ 链不上 C 库 |
| S6 | M5 | -fPIC/GOT/PLT |
| S7 | M7 | -fvisibility=hidden 让符号消失 |
| S8 | M9 | C++ 的 dlsym 为何失败 |
| S9 | M9 | strace 看 ld-linux 找 .so |
| S10 | M10 | 动态库当可执行文件跑 |

切片随母集视频完成即出，不占独立制作排期。
