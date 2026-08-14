import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"裸机、链接脚本、VMA/LMA","description":"","frontmatter":{"title":"裸机、链接脚本、VMA/LMA","order":4,"code":"M4","landing":"嵌入式","status":"stub","prev":{"text":"M3 · 静态库：ar 归档与按 .o 拉入","link":"/season1/m3-static-library-archive"},"next":{"text":"M5 · 动态库与 -fPIC：GOT/PLT","link":"/season1/m5-dynamic-library-fpic-got-plt"}},"headers":[],"relativePath":"season1/m4-bare-metal-vma-lma.md","filePath":"season1/m4-bare-metal-vma-lma.md","lastUpdated":null}');
const _sfc_main = { name: "season1/m4-bare-metal-vma-lma.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="m4-裸机、链接脚本、vma-lma" tabindex="-1">M4｜裸机、链接脚本、VMA/LMA <a class="header-anchor" href="#m4-裸机、链接脚本、vma-lma" aria-label="Permalink to &quot;M4｜裸机、链接脚本、VMA/LMA&quot;">​</a></h1><blockquote><p>同一份 .data 为何在 objdump -h 里有两个地址（RAM 一个、Flash 一个）？</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。命令、输出、结论尚未在本机验证，镜头口径以实测为准。</p><p><strong>来源</strong>：EmbedBox/03-bare-metal.md</p><p>完整规划见<a href="/AELS-Prism/season1/">第一季总览</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/m4-bare-metal-vma-lma.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const m4BareMetalVmaLma = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  m4BareMetalVmaLma as default
};
