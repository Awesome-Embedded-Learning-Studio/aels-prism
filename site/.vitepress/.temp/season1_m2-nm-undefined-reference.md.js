import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"用 nm 看懂 undefined reference","description":"","frontmatter":{"title":"用 nm 看懂 undefined reference","order":2,"code":"M2","landing":"共享","status":"stub","prev":{"text":"M1 · 一行 gcc 到 .o 里的段","link":"/season1/m1-gcc-stages-and-sections"},"next":{"text":"M3 · 静态库：ar 归档与按 .o 拉入","link":"/season1/m3-static-library-archive"}},"headers":[],"relativePath":"season1/m2-nm-undefined-reference.md","filePath":"season1/m2-nm-undefined-reference.md","lastUpdated":null}');
const _sfc_main = { name: "season1/m2-nm-undefined-reference.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="m2-用-nm-看懂-undefined-reference" tabindex="-1">M2｜用 nm 看懂 undefined reference <a class="header-anchor" href="#m2-用-nm-看懂-undefined-reference" aria-label="Permalink to &quot;M2｜用 nm 看懂 undefined reference&quot;">​</a></h1><blockquote><p>为什么编译通过、链接才报 undefined reference？把符号变成 U/T/D/B 可视列</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。命令、输出、结论尚未在本机验证，镜头口径以实测为准。</p><p><strong>来源</strong>：EmbedBox/02-linking.md · ModernCPP/01,03</p><p>完整规划见<a href="/AELS-Prism/season1/">第一季总览</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/m2-nm-undefined-reference.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const m2NmUndefinedReference = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  m2NmUndefinedReference as default
};
