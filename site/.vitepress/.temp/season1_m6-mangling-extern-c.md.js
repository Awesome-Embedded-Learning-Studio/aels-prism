import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"mangling、extern C、ABI","description":"","frontmatter":{"title":"mangling、extern C、ABI","order":6,"code":"M6","landing":"现代 C++","status":"stub","prev":{"text":"M5 · 动态库与 -fPIC：GOT/PLT","link":"/season1/m5-dynamic-library-fpic-got-plt"},"next":{"text":"M7 · 符号可见性（导出控制）","link":"/season1/m7-symbol-visibility"}},"headers":[],"relativePath":"season1/m6-mangling-extern-c.md","filePath":"season1/m6-mangling-extern-c.md","lastUpdated":null}');
const _sfc_main = { name: "season1/m6-mangling-extern-c.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="m6-mangling、extern-c、abi" tabindex="-1">M6｜mangling、extern C、ABI <a class="header-anchor" href="#m6-mangling、extern-c、abi" aria-label="Permalink to &quot;M6｜mangling、extern C、ABI&quot;">​</a></h1><blockquote><p>undefined reference to _Z7int_maxii？C++ 库为何不能直接给另一套工具链？</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。命令、输出、结论尚未在本机验证，镜头口径以实测为准。</p><p><strong>来源</strong>：ModernCPP/01,05</p><p>完整规划见<a href="/AELS-Prism/season1/">第一季总览</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/m6-mangling-extern-c.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const m6ManglingExternC = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  m6ManglingExternC as default
};
