import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Make 的 missing separator / .PHONY 撞文件","description":"","frontmatter":{"title":"Make 的 missing separator / .PHONY 撞文件","order":2,"code":"S11","landing":"构建自动化","status":"stub","prev":{"text":"S4 · 重复定义 vs 未定义","link":"/season1/shorts/s4-multiple-definition"},"next":{"text":"S12 · CMake 交叉编译工具链文件","link":"/season1/shorts/s12-cmake-toolchain-cache"}},"headers":[],"relativePath":"season1/shorts/s11-make-separator-phony.md","filePath":"season1/shorts/s11-make-separator-phony.md","lastUpdated":null}');
const _sfc_main = { name: "season1/shorts/s11-make-separator-phony.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="s11-make-的-missing-separator-phony-撞文件" tabindex="-1">S11｜Make 的 missing separator / .PHONY 撞文件 <a class="header-anchor" href="#s11-make-的-missing-separator-phony-撞文件" aria-label="Permalink to &quot;S11｜Make 的 missing separator / .PHONY 撞文件&quot;">​</a></h1><blockquote><p>空格替 Tab 报 missing separator；目录里出现同名 clean 文件让 make clean 失效</p></blockquote><p>🚧 <strong>占位</strong> —— 待实测与撰写。单点闭环、可独立观看。</p><p><strong>来源</strong>：EmbedBox/build-system/make.md</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("season1/shorts/s11-make-separator-phony.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const s11MakeSeparatorPhony = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  s11MakeSeparatorPhony as default
};
