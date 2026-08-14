import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"重复定义 vs 未定义","description":"","frontmatter":{"title":"重复定义 vs 未定义","order":1,"code":"S4","landing":"共享","status":"stub","prev":{"text":"短期选题","link":"/season1/shorts/"},"next":{"text":"S11 · Make 的 missing separator / .PHONY 撞文件","link":"/season1/shorts/s11-make-separator-phony"}},"headers":[],"relativePath":"season1/shorts/s4-multiple-definition.md","filePath":"season1/shorts/s4-multiple-definition.md","lastUpdated":null}');
const _sfc_main = { name: "season1/shorts/s4-multiple-definition.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="s4-重复定义-vs-未定义" tabindex="-1">S4｜重复定义 vs 未定义 <a class="header-anchor" href="#s4-重复定义-vs-未定义" aria-label="Permalink to &quot;S4｜重复定义 vs 未定义&quot;">​</a></h1><blockquote><p>两个 .o 各定义同名符号 → multiple definition … first defined here；加 static 后冲突消失</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。单点闭环、可独立观看。</p><p><strong>来源</strong>：ModernCPP/01-compilation-and-linking-overview.md</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/shorts/s4-multiple-definition.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const s4MultipleDefinition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  s4MultipleDefinition as default
};
