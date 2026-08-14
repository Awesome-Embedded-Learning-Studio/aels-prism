import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"符号可见性（导出控制）","description":"","frontmatter":{"title":"符号可见性（导出控制）","order":7,"code":"M7","landing":"现代 C++","status":"stub","prev":{"text":"M6 · mangling、extern C、ABI","link":"/season1/m6-mangling-extern-c"},"next":{"text":"M8 · 未定义裁决与符号介入","link":"/season1/m8-undefined-verdict-interposition"}},"headers":[],"relativePath":"season1/m7-symbol-visibility.md","filePath":"season1/m7-symbol-visibility.md","lastUpdated":null}');
const _sfc_main = { name: "season1/m7-symbol-visibility.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="m7-符号可见性-导出控制" tabindex="-1">M7｜符号可见性（导出控制） <a class="header-anchor" href="#m7-符号可见性-导出控制" aria-label="Permalink to &quot;M7｜符号可见性（导出控制）&quot;">​</a></h1><blockquote><p>动态库默认全暴露，怎么只导出该导出的？</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。命令、输出、结论尚未在本机验证，镜头口径以实测为准。</p><p><strong>来源</strong>：ModernCPP/06</p><p>完整规划见<a href="/AELS-Prism/season1/">第一季总览</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/m7-symbol-visibility.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const m7SymbolVisibility = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  m7SymbolVisibility as default
};
