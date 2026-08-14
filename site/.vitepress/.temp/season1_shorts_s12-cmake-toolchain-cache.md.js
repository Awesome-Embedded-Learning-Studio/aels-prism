import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CMake 交叉编译工具链文件","description":"","frontmatter":{"title":"CMake 交叉编译工具链文件","order":3,"code":"S12","landing":"构建自动化","status":"stub","prev":{"text":"S11 · Make 的 missing separator / .PHONY 撞文件","link":"/season1/shorts/s11-make-separator-phony"},"next":{"text":"短期选题","link":"/season1/shorts/"}},"headers":[],"relativePath":"season1/shorts/s12-cmake-toolchain-cache.md","filePath":"season1/shorts/s12-cmake-toolchain-cache.md","lastUpdated":null}');
const _sfc_main = { name: "season1/shorts/s12-cmake-toolchain-cache.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="s12-cmake-交叉编译工具链文件" tabindex="-1">S12｜CMake 交叉编译工具链文件 <a class="header-anchor" href="#s12-cmake-交叉编译工具链文件" aria-label="Permalink to &quot;S12｜CMake 交叉编译工具链文件&quot;">​</a></h1><blockquote><p>换工具链文件不删 build/，用旧缓存旧编译器编出莫名结果</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。单点闭环、可独立观看。</p><p><strong>来源</strong>：EmbedBox/build-system/cmake.md</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/shorts/s12-cmake-toolchain-cache.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const s12CmakeToolchainCache = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  s12CmakeToolchainCache as default
};
