---
title: AELS Prism
titleTemplate: Awesome Embedded Learning Studio · 视频文章站
layout: page
sidebar: false
outline: false
breadcrumb: false
---

<div class="book-home">
  <section class="book-cover">
    <p class="book-eyebrow">Awesome Embedded Learning Studio</p>
    <h1 class="book-title">AELS Prism</h1>
    <p class="book-subtitle">第一季 · 编译、链接与装载</p>
    <p class="book-tagline">
      每一集以一篇文章为正典——第一手教材，命令可复制、输出经实测；视频是叠在文章之上的导览，负责讲解、实跑与动画。没看懂的地方慢下来读文章，想快速建立直觉看视频。
    </p>
    <div class="prism-spectrum" aria-hidden="true"></div>
    <nav class="book-actions">
      <a class="book-btn book-btn--primary" href="season1/">进入第一季</a>
      <a class="book-btn" href="season1/shorts/">短期选题</a>
    </nav>
  </section>

  <section class="book-toc">
    <h2 class="book-toc-title">主线 · M1–M10</h2>
    <p class="book-toc-desc">
      从一行 gcc 到链接器对账，再到装载器把镜像搬上芯片、把动态库搬进进程。横向使用 EmbedBox 与 Tutorial_AwesomeModernCPP 的现有教程，同一事实只生产一份，跨学习路径复用。
    </p>
    <ChapterNav>
      <ChapterLink num="M1" href="season1/m1-gcc-stages-and-sections">一行 gcc 到 .o 里的段</ChapterLink>
      <ChapterLink num="M2" href="season1/m2-nm-undefined-reference">用 nm 看懂 undefined reference</ChapterLink>
      <ChapterLink num="M3" href="season1/m3-static-library-archive">静态库：ar 归档与按 .o 拉入</ChapterLink>
      <ChapterLink num="M4" href="season1/m4-bare-metal-vma-lma">裸机、链接脚本、VMA/LMA</ChapterLink>
      <ChapterLink num="M5" href="season1/m5-dynamic-library-fpic-got-plt">动态库与 -fPIC：GOT/PLT</ChapterLink>
      <ChapterLink num="M6" href="season1/m6-mangling-extern-c">mangling、extern C、ABI</ChapterLink>
      <ChapterLink num="M7" href="season1/m7-symbol-visibility">符号可见性（导出控制）</ChapterLink>
      <ChapterLink num="M8" href="season1/m8-undefined-verdict-interposition">未定义裁决与符号介入</ChapterLink>
      <ChapterLink num="M9" href="season1/m9-runtime-loading-dlopen">运行时加载与库搜索：dlopen</ChapterLink>
      <ChapterLink num="M10" href="season1/m10-elf-entry-point">ELF 入口点：libc.so.6 之谜</ChapterLink>
    </ChapterNav>
    <p class="book-toc-note">
      站点与首批内容正在制作中。制作从 <strong>M2（MVP）</strong> 开始跑通「文章 → 视频」流水线，发布服从学习递进（M1 → M10）。详见<a href="season1/">第一季总览</a>。
    </p>
  </section>
</div>
