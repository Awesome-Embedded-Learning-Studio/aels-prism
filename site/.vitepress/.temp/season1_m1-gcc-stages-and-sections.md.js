import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"一行 gcc 到 .o 里的段","description":"","frontmatter":{"title":"一行 gcc 到 .o 里的段","order":1,"code":"M1","landing":"共享","status":"stub","prev":{"text":"第一季总览","link":"/season1/"},"next":{"text":"M2 · 用 nm 看懂 undefined reference","link":"/season1/m2-nm-undefined-reference"}},"headers":[],"relativePath":"season1/m1-gcc-stages-and-sections.md","filePath":"season1/m1-gcc-stages-and-sections.md","lastUpdated":null}');
const _sfc_main = { name: "season1/m1-gcc-stages-and-sections.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="m1-一行-gcc-到-o-里的段" tabindex="-1">M1｜一行 gcc 到 .o 里的段 <a class="header-anchor" href="#m1-一行-gcc-到-o-里的段" aria-label="Permalink to &quot;M1｜一行 gcc 到 .o 里的段&quot;">​</a></h1><blockquote><p>gcc 是黑盒：用 -E/-S/-c 让它逐步停下，钻进 .o 看 .text/.data/.bss/.rodata 各装什么</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。命令、输出、结论尚未在本机验证，镜头口径以实测为准。</p><p><strong>来源</strong>：EmbedBox/01-compile-pipeline.md</p><p>完整规划见<a href="/AELS-Prism/season1/">第一季总览</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/m1-gcc-stages-and-sections.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const m1GccStagesAndSections = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  m1GccStagesAndSections as default
};
