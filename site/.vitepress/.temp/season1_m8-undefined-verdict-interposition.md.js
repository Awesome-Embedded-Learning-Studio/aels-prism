import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"未定义裁决与符号介入","description":"","frontmatter":{"title":"未定义裁决与符号介入","order":8,"code":"M8","landing":"现代 C++","status":"stub","prev":{"text":"M7 · 符号可见性（导出控制）","link":"/season1/m7-symbol-visibility"},"next":{"text":"M9 · 运行时加载与库搜索：dlopen","link":"/season1/m9-runtime-loading-dlopen"}},"headers":[],"relativePath":"season1/m8-undefined-verdict-interposition.md","filePath":"season1/m8-undefined-verdict-interposition.md","lastUpdated":null}');
const _sfc_main = { name: "season1/m8-undefined-verdict-interposition.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="m8-未定义裁决与符号介入" tabindex="-1">M8｜未定义裁决与符号介入 <a class="header-anchor" href="#m8-未定义裁决与符号介入" aria-label="Permalink to &quot;M8｜未定义裁决与符号介入&quot;">​</a></h1><blockquote><p>为何 Linux 容忍 .so 留未定义符号、Windows DLL 却报错？谁的定义赢？</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。命令、输出、结论尚未在本机验证，镜头口径以实测为准。</p><p><strong>来源</strong>：ModernCPP/07,09</p><p>完整规划见<a href="/AELS-Prism/season1/">第一季总览</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/m8-undefined-verdict-interposition.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const m8UndefinedVerdictInterposition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  m8UndefinedVerdictInterposition as default
};
