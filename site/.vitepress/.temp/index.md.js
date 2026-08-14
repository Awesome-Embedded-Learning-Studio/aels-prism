import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AELS Prism","titleTemplate":"Awesome Embedded Learning Studio · 视频文章站","description":"","frontmatter":{"title":"AELS Prism","titleTemplate":"Awesome Embedded Learning Studio · 视频文章站","layout":"page","sidebar":false,"outline":false,"breadcrumb":false},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ChapterNav = resolveComponent("ChapterNav");
  const _component_ChapterLink = resolveComponent("ChapterLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="book-home"><section class="book-cover"><p class="book-eyebrow">Awesome Embedded Learning Studio</p><h1 class="book-title">AELS Prism</h1><p class="book-subtitle">第一季 · 编译、链接与装载</p><p class="book-tagline"> 每一集以一篇文章为正典——第一手教材，命令可复制、输出经实测；视频是叠在文章之上的导览，负责讲解、实跑与动画。没看懂的地方慢下来读文章，想快速建立直觉看视频。 </p><div class="prism-spectrum" aria-hidden="true"></div><nav class="book-actions"><a class="book-btn book-btn--primary" href="season1/">进入第一季</a><a class="book-btn" href="season1/shorts/">短期选题</a></nav></section><section class="book-toc"><h2 class="book-toc-title">主线 · M1–M10</h2><p class="book-toc-desc"> 从一行 gcc 到链接器对账，再到装载器把镜像搬上芯片、把动态库搬进进程。横向使用 EmbedBox 与 Tutorial_AwesomeModernCPP 的现有教程，同一事实只生产一份，跨学习路径复用。 </p>`);
  _push(ssrRenderComponent(_component_ChapterNav, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ChapterLink, {
          num: "M1",
          href: "season1/m1-gcc-stages-and-sections"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`一行 gcc 到 .o 里的段`);
            } else {
              return [
                createTextVNode("一行 gcc 到 .o 里的段")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChapterLink, {
          num: "M2",
          href: "season1/m2-nm-undefined-reference"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`用 nm 看懂 undefined reference`);
            } else {
              return [
                createTextVNode("用 nm 看懂 undefined reference")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChapterLink, {
          num: "M3",
          href: "season1/m3-static-library-archive"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`静态库：ar 归档与按 .o 拉入`);
            } else {
              return [
                createTextVNode("静态库：ar 归档与按 .o 拉入")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChapterLink, {
          num: "M4",
          href: "season1/m4-bare-metal-vma-lma"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`裸机、链接脚本、VMA/LMA`);
            } else {
              return [
                createTextVNode("裸机、链接脚本、VMA/LMA")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChapterLink, {
          num: "M5",
          href: "season1/m5-dynamic-library-fpic-got-plt"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`动态库与 -fPIC：GOT/PLT`);
            } else {
              return [
                createTextVNode("动态库与 -fPIC：GOT/PLT")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChapterLink, {
          num: "M6",
          href: "season1/m6-mangling-extern-c"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`mangling、extern C、ABI`);
            } else {
              return [
                createTextVNode("mangling、extern C、ABI")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChapterLink, {
          num: "M7",
          href: "season1/m7-symbol-visibility"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`符号可见性（导出控制）`);
            } else {
              return [
                createTextVNode("符号可见性（导出控制）")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChapterLink, {
          num: "M8",
          href: "season1/m8-undefined-verdict-interposition"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`未定义裁决与符号介入`);
            } else {
              return [
                createTextVNode("未定义裁决与符号介入")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChapterLink, {
          num: "M9",
          href: "season1/m9-runtime-loading-dlopen"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`运行时加载与库搜索：dlopen`);
            } else {
              return [
                createTextVNode("运行时加载与库搜索：dlopen")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ChapterLink, {
          num: "M10",
          href: "season1/m10-elf-entry-point"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`ELF 入口点：libc.so.6 之谜`);
            } else {
              return [
                createTextVNode("ELF 入口点：libc.so.6 之谜")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ChapterLink, {
            num: "M1",
            href: "season1/m1-gcc-stages-and-sections"
          }, {
            default: withCtx(() => [
              createTextVNode("一行 gcc 到 .o 里的段")
            ]),
            _: 1
          }),
          createVNode(_component_ChapterLink, {
            num: "M2",
            href: "season1/m2-nm-undefined-reference"
          }, {
            default: withCtx(() => [
              createTextVNode("用 nm 看懂 undefined reference")
            ]),
            _: 1
          }),
          createVNode(_component_ChapterLink, {
            num: "M3",
            href: "season1/m3-static-library-archive"
          }, {
            default: withCtx(() => [
              createTextVNode("静态库：ar 归档与按 .o 拉入")
            ]),
            _: 1
          }),
          createVNode(_component_ChapterLink, {
            num: "M4",
            href: "season1/m4-bare-metal-vma-lma"
          }, {
            default: withCtx(() => [
              createTextVNode("裸机、链接脚本、VMA/LMA")
            ]),
            _: 1
          }),
          createVNode(_component_ChapterLink, {
            num: "M5",
            href: "season1/m5-dynamic-library-fpic-got-plt"
          }, {
            default: withCtx(() => [
              createTextVNode("动态库与 -fPIC：GOT/PLT")
            ]),
            _: 1
          }),
          createVNode(_component_ChapterLink, {
            num: "M6",
            href: "season1/m6-mangling-extern-c"
          }, {
            default: withCtx(() => [
              createTextVNode("mangling、extern C、ABI")
            ]),
            _: 1
          }),
          createVNode(_component_ChapterLink, {
            num: "M7",
            href: "season1/m7-symbol-visibility"
          }, {
            default: withCtx(() => [
              createTextVNode("符号可见性（导出控制）")
            ]),
            _: 1
          }),
          createVNode(_component_ChapterLink, {
            num: "M8",
            href: "season1/m8-undefined-verdict-interposition"
          }, {
            default: withCtx(() => [
              createTextVNode("未定义裁决与符号介入")
            ]),
            _: 1
          }),
          createVNode(_component_ChapterLink, {
            num: "M9",
            href: "season1/m9-runtime-loading-dlopen"
          }, {
            default: withCtx(() => [
              createTextVNode("运行时加载与库搜索：dlopen")
            ]),
            _: 1
          }),
          createVNode(_component_ChapterLink, {
            num: "M10",
            href: "season1/m10-elf-entry-point"
          }, {
            default: withCtx(() => [
              createTextVNode("ELF 入口点：libc.so.6 之谜")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="book-toc-note"> 站点与首批内容正在制作中。制作从 <strong>M2（MVP）</strong> 开始跑通「文章 → 视频」流水线，发布服从学习递进（M1 → M10）。详见<a href="season1/">第一季总览</a>。 </p></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
