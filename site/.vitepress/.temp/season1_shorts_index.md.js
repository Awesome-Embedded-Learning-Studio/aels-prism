import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"短期选题","description":"","frontmatter":{"title":"短期选题","order":99},"headers":[],"relativePath":"season1/shorts/index.md","filePath":"season1/shorts/index.md","lastUpdated":null}');
const _sfc_main = { name: "season1/shorts/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="短期选题" tabindex="-1">短期选题 <a class="header-anchor" href="#短期选题" aria-label="Permalink to &quot;短期选题&quot;">​</a></h1><p>第一季推进期间穿插的短期内容。<strong>短期</strong>指选题范围与制作周期，不预设竖屏或固定时长；每个单点闭环、可独立观看，并尽量反哺主线。</p><h2 id="独立短-各自成篇" tabindex="-1">独立短（各自成篇） <a class="header-anchor" href="#独立短-各自成篇" aria-label="Permalink to &quot;独立短（各自成篇）&quot;">​</a></h2><table tabindex="0"><thead><tr><th>#</th><th>选题</th><th>现象</th></tr></thead><tbody><tr><td><a href="./s4-multiple-definition">S4</a></td><td>重复定义 vs 未定义</td><td>multiple definition … first defined here</td></tr><tr><td><a href="./s11-make-separator-phony">S11</a></td><td>Make 的 missing separator / .PHONY 撞文件</td><td>构建自动化</td></tr><tr><td><a href="./s12-cmake-toolchain-cache">S12</a></td><td>CMake 交叉编译工具链文件</td><td>构建自动化</td></tr></tbody></table><h2 id="同源切片-不另拍" tabindex="-1">同源切片（不另拍） <a class="header-anchor" href="#同源切片-不另拍" aria-label="Permalink to &quot;同源切片（不另拍）&quot;">​</a></h2><p>下面这些是各主线集的&quot;最高光那一段&quot;。按&quot;同一事实只生产一份&quot;原则，它们不单独拍摄——主线集录的时候那段高光，同源切片即作为独立短发布：</p><table tabindex="0"><thead><tr><th>切片</th><th>母集</th><th>高光</th></tr></thead><tbody><tr><td>S1</td><td>M2/M3</td><td>链接顺序坑</td></tr><tr><td>S2</td><td>M1</td><td>size/objdump 看段</td></tr><tr><td>S3</td><td>M4</td><td>VMA vs LMA 两个地址</td></tr><tr><td>S5</td><td>M6</td><td>C++ 链不上 C 库</td></tr><tr><td>S6</td><td>M5</td><td>-fPIC/GOT/PLT</td></tr><tr><td>S7</td><td>M7</td><td>-fvisibility=hidden 让符号消失</td></tr><tr><td>S8</td><td>M9</td><td>C++ 的 dlsym 为何失败</td></tr><tr><td>S9</td><td>M9</td><td>strace 看 ld-linux 找 .so</td></tr><tr><td>S10</td><td>M10</td><td>动态库当可执行文件跑</td></tr></tbody></table><p>切片随母集视频完成即出，不占独立制作排期。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/shorts/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
