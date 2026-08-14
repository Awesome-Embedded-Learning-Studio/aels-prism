import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"静态库：ar 归档与按 .o 拉入","description":"","frontmatter":{"title":"静态库：ar 归档与按 .o 拉入","order":3,"code":"M3","landing":"共享","status":"stub","prev":{"text":"M2 · 用 nm 看懂 undefined reference","link":"/season1/m2-nm-undefined-reference"},"next":{"text":"M4 · 裸机、链接脚本、VMA/LMA","link":"/season1/m4-bare-metal-vma-lma"}},"headers":[],"relativePath":"season1/m3-static-library-archive.md","filePath":"season1/m3-static-library-archive.md","lastUpdated":null}');
const _sfc_main = { name: "season1/m3-static-library-archive.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="m3-静态库-ar-归档与按-o-拉入" tabindex="-1">M3｜静态库：ar 归档与按 .o 拉入 <a class="header-anchor" href="#m3-静态库-ar-归档与按-o-拉入" aria-label="Permalink to &quot;M3｜静态库：ar 归档与按 .o 拉入&quot;">​</a></h1><blockquote><p>链接器拿到 libfoo.a 到底怎么找符号？为何按整个 .o 抽取、不走回头路？</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。命令、输出、结论尚未在本机验证，镜头口径以实测为准。</p><p><strong>来源</strong>：ModernCPP/01,03 · EmbedBox/02</p><p>完整规划见<a href="/AELS-Prism/season1/">第一季总览</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/m3-static-library-archive.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const m3StaticLibraryArchive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  m3StaticLibraryArchive as default
};
