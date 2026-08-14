import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"运行时加载与库搜索：dlopen","description":"","frontmatter":{"title":"运行时加载与库搜索：dlopen","order":9,"code":"M9","landing":"现代 C++","status":"stub","prev":{"text":"M8 · 未定义裁决与符号介入","link":"/season1/m8-undefined-verdict-interposition"},"next":{"text":"M10 · ELF 入口点：libc.so.6 之谜","link":"/season1/m10-elf-entry-point"}},"headers":[],"relativePath":"season1/m9-runtime-loading-dlopen.md","filePath":"season1/m9-runtime-loading-dlopen.md","lastUpdated":null}');
const _sfc_main = { name: "season1/m9-runtime-loading-dlopen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="m9-运行时加载与库搜索-dlopen" tabindex="-1">M9｜运行时加载与库搜索：dlopen <a class="header-anchor" href="#m9-运行时加载与库搜索-dlopen" aria-label="Permalink to &quot;M9｜运行时加载与库搜索：dlopen&quot;">​</a></h1><blockquote><p>怎么运行时加载一个库？ld-linux 按什么优先级找到 .so？</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。命令、输出、结论尚未在本机验证，镜头口径以实测为准。</p><p><strong>来源</strong>：ModernCPP/07,08</p><p>完整规划见<a href="/AELS-Prism/season1/">第一季总览</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/m9-runtime-loading-dlopen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const m9RuntimeLoadingDlopen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  m9RuntimeLoadingDlopen as default
};
