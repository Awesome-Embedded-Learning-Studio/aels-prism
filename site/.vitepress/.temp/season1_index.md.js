import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"第一季：编译、链接与装载","description":"","frontmatter":{"title":"第一季：编译、链接与装载","order":0},"headers":[],"relativePath":"season1/index.md","filePath":"season1/index.md","lastUpdated":null}');
const _sfc_main = { name: "season1/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="第一季-编译、链接与装载" tabindex="-1">第一季：编译、链接与装载 <a class="header-anchor" href="#第一季-编译、链接与装载" aria-label="Permalink to &quot;第一季：编译、链接与装载&quot;">​</a></h1><blockquote><p>从一行 gcc，到链接器在对账，到装载器把镜像搬上芯片、把动态库搬进进程。</p></blockquote><p>第一季的长期主线已经确定：<strong>编译、链接与装载</strong>。它横向使用 <a href="https://github.com/Awesome-Embedded-Learning-Studio/EmbedBox" target="_blank" rel="noreferrer">EmbedBox</a> 与 <a href="https://github.com/Awesome-Embedded-Learning-Studio/Tutorial_AwesomeModernCPP" target="_blank" rel="noreferrer">Tutorial_AwesomeModernCPP</a> 的现有教程，不归任何一篇 Markdown 独占——同一事实只生产一份，跨学习路径复用。</p><h2 id="知识主干" tabindex="-1">知识主干 <a class="header-anchor" href="#知识主干" aria-label="Permalink to &quot;知识主干&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>源码</span></span>
<span class="line"><span>  ② 预处理 / 编译 / 汇编 四阶段与产物</span></span>
<span class="line"><span>  ③ 目标文件 = 分段的半成品 (.text/.data/.bss/.rodata)</span></span>
<span class="line"><span>  ④ 符号表：U=欠的债，T/D/B=已有的资产</span></span>
<span class="line"><span>  ⑤ 静态链接 = 符号对账：残留 U 即 undefined reference</span></span>
<span class="line"><span>  ⑥ 静态库 = .o 归档 + 符号索引，按 .o 粒度按需拉入</span></span>
<span class="line"><span>  ┌────────────────────────────┴────────────────────────────┐</span></span>
<span class="line"><span>嵌入式落点                                       现代 C++ 落点</span></span>
<span class="line"><span>  交叉编译 / 链接脚本                               ⑦ 动态库 + PIC：GOT/PLT</span></span>
<span class="line"><span>  .data 的 VMA/LMA 分离                            ⑧ ABI：mangling / 可见性</span></span>
<span class="line"><span>  objcopy 抽 .bin/.hex                              ⑨ Loader：库搜索 / dlopen</span></span>
<span class="line"><span>  → 裸机镜像（无 OS、无动态库、无 PIC）             ⑩ ELF 入口点</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="主线集-m1–m10" tabindex="-1">主线集（M1–M10） <a class="header-anchor" href="#主线集-m1–m10" aria-label="Permalink to &quot;主线集（M1–M10）&quot;">​</a></h2><table tabindex="0"><thead><tr><th>#</th><th>标题</th><th>落点</th><th>状态</th></tr></thead><tbody><tr><td><a href="./m1-gcc-stages-and-sections">M1</a></td><td>一行 gcc 到 .o 里的段</td><td>共享</td><td>🚧</td></tr><tr><td><a href="./m2-nm-undefined-reference">M2</a></td><td>用 nm 看懂 undefined reference ★MVP</td><td>共享</td><td>🚧</td></tr><tr><td><a href="./m3-static-library-archive">M3</a></td><td>静态库：ar 归档与按 .o 拉入</td><td>共享</td><td>🚧</td></tr><tr><td><a href="./m4-bare-metal-vma-lma">M4</a></td><td>裸机、链接脚本、VMA/LMA</td><td>嵌入式</td><td>🚧</td></tr><tr><td><a href="./m5-dynamic-library-fpic-got-plt">M5</a></td><td>动态库与 -fPIC：GOT/PLT</td><td>现代 C++</td><td>🚧</td></tr><tr><td><a href="./m6-mangling-extern-c">M6</a></td><td>mangling、extern &quot;C&quot;、ABI</td><td>现代 C++</td><td>🚧</td></tr><tr><td><a href="./m7-symbol-visibility">M7</a></td><td>符号可见性（导出控制）</td><td>现代 C++</td><td>🚧</td></tr><tr><td><a href="./m8-undefined-verdict-interposition">M8</a></td><td>未定义裁决与符号介入</td><td>现代 C++</td><td>🚧</td></tr><tr><td><a href="./m9-runtime-loading-dlopen">M9</a></td><td>运行时加载与库搜索：dlopen</td><td>现代 C++</td><td>🚧</td></tr><tr><td><a href="./m10-elf-entry-point">M10</a></td><td>ELF 入口点：libc.so.6 之谜</td><td>现代 C++</td><td>🚧</td></tr></tbody></table><h2 id="短期选题" tabindex="-1">短期选题 <a class="header-anchor" href="#短期选题" aria-label="Permalink to &quot;短期选题&quot;">​</a></h2><p>穿插的<a href="./shorts/">独立短</a>与主线高光的同源切片，详见<a href="./shorts/">短期总览</a>。</p><h2 id="制作顺序" tabindex="-1">制作顺序 <a class="header-anchor" href="#制作顺序" aria-label="Permalink to &quot;制作顺序&quot;">​</a></h2><p>制作从 <strong>M2（MVP）</strong> 开始——先跑通&quot;文章→视频→切片&quot;流水线，再用 M1、M3 验证连续三集的 repeatability，然后走嵌入式落点 M4，再走现代 C++ arc M5–M10。<strong>制作顺序 ≠ 发布顺序</strong>，发布服从学习递进（M1→M10）。</p><p>每篇正文文首钉工具链版本与日期；视频是那一天的快照，事实以文章为准。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
