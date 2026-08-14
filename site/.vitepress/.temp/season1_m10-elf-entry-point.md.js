import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ELF 入口点：libc.so.6 之谜","description":"","frontmatter":{"title":"ELF 入口点：libc.so.6 之谜","order":10,"code":"M10","landing":"现代 C++","status":"stub","prev":{"text":"M9 · 运行时加载与库搜索：dlopen","link":"/season1/m9-runtime-loading-dlopen"},"next":{"text":"第一季总览","link":"/season1/"}},"headers":[],"relativePath":"season1/m10-elf-entry-point.md","filePath":"season1/m10-elf-entry-point.md","lastUpdated":null}');
const _sfc_main = { name: "season1/m10-elf-entry-point.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="m10-elf-入口点-libc-so-6-之谜" tabindex="-1">M10｜ELF 入口点：libc.so.6 之谜 <a class="header-anchor" href="#m10-elf-入口点-libc-so-6-之谜" aria-label="Permalink to &quot;M10｜ELF 入口点：libc.so.6 之谜&quot;">​</a></h1><blockquote><p>为何直接执行 .so 通常段错误、libc.so.6 却能打印版本？</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。命令、输出、结论尚未在本机验证，镜头口径以实测为准。</p><p><strong>来源</strong>：ModernCPP/10-dynamic-lib-as-executable.md</p><p>完整规划见<a href="/AELS-Prism/season1/">第一季总览</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/m10-elf-entry-point.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const m10ElfEntryPoint = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  m10ElfEntryPoint as default
};
