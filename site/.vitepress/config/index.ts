import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { buildSidebar } from './sidebar'
import { resolvePlugins } from '../plugins'
import type { ProjectConfig } from './schema'
import { resolve } from 'path'

import projectConfig from '../../../project.config'

const primaryLocale = projectConfig.locales.find(l => l.default)!
const defaultTitle = projectConfig.title[primaryLocale.code]
const defaultDesc = projectConfig.description[primaryLocale.code]
const githubUrl = `https://github.com/${projectConfig.github.owner}/${projectConfig.github.repo}`
const editPatternBase = `${githubUrl}/edit/${projectConfig.github.branch}/${projectConfig.github.documentsPath}`

const docsRoot = new URL(`../../../${projectConfig.documentsDir}`, import.meta.url).pathname.replace(/\/$/, '')

function buildLocales(): Record<string, any> {
  const locales: Record<string, any> = {}

  for (const locale of projectConfig.locales) {
    const locKey = locale.default ? 'root' : (locale.prefix?.replace(/\//g, '') || locale.code)
    const title = projectConfig.title[locale.code]
    const desc = projectConfig.description[locale.code]

    const baseConfig: any = {
      label: locale.label,
      lang: locale.code,
      title,
      description: desc,
    }

    if (!locale.default && locale.prefix) {
      baseConfig.link = locale.prefix
    }

    if (!locale.default) {
      baseConfig.themeConfig = {
        nav: projectConfig.nav[locale.code] || [],
        editLink: {
          pattern: `${editPatternBase}${locale.dir ? `/${locale.dir}` : ''}/:path`,
          text: `Edit this page on GitHub`,
        },
      }
    }

    locales[locKey] = baseConfig
  }

  return locales
}

export default defineConfig({
  srcDir: `../${projectConfig.documentsDir}`,
  title: defaultTitle,
  description: defaultDesc,
  lang: primaryLocale.code,
  base: projectConfig.base,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  // 关掉原生 dark 开关:主题(亮/sepia/暗)交由 ReaderControls 读者三件套接管,
  // 通过 html[data-reader=...] 驱动暖色板;dark 档由该组件同步加 .dark class
  // 触发 VitePress 代码主题与内部暗组件。
  appearance: false,

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag.includes('-') || tag.includes('.'),
      },
    },
  },

  locales: buildLocales(),

  head: [
    ['link', { rel: 'icon', href: projectConfig.favicon || `${projectConfig.base}favicon.ico` }],
    // 首屏(before paint)即按 localStorage 应用读者三件套,避免主题/字体闪烁;
    // appearance:false 后,初始 .dark(触发 VitePress 代码暗主题)也由它负责。
    ['script', {}, `(() => { try { const v = JSON.parse(localStorage.getItem('prism-reader') || '{}'); const t = v.theme === 'light' || v.theme === 'dark' ? v.theme : 'sepia'; const h = document.documentElement; h.setAttribute('data-reader', t); if (v.font === 'sans') h.setAttribute('data-font', 'sans'); if (v.size === 'small' || v.size === 'large') h.setAttribute('data-size', v.size); if (t === 'dark') h.classList.add('dark'); } catch (e) {} })()`],
  ],

  markdown: {
    lineNumbers: true,
    math: projectConfig.plugins.math ?? false,
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    config(md) {
      resolvePlugins(md, projectConfig)
    },
  },

  vite: {
    publicDir: resolve(__dirname, '../public'),
    server: {
      watch: {
        // aels-prism 工作区含大量只读 submodule(localview/)与 node_modules/.pnpm，
        // 会撑爆 WSL2 默认 inotify 上限(65536)。dev 改用轮询并排除重型目录绕开；
        // 仅影响 dev，不影响 build。系统级提高 fs.inotify.max_user_watches 后可删此段。
        usePolling: true,
        interval: 1000,
        ignored: [
          '**/.git/**',
          '**/node_modules/**',
          '**/dist/**',
          '**/cache/**',
          '**/.build-cache/**',
          '**/.build-tmp/**',
          '**/localview/**',
          '**/third_party/**',
        ],
      },
    },
    build: {
      chunkSizeWarningLimit: 5000,
    },
  },

  themeConfig: {
    nav: projectConfig.nav[primaryLocale.code] || [],
    sidebar: buildSidebar(docsRoot, projectConfig),

    outline: {
      level: [2, 3],
      label: '本页内容',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    editLink: {
      pattern: `${editPatternBase}/:path`,
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Built with VitePress',
      copyright: projectConfig.copyright,
    },

    socialLinks: [
      { icon: 'github', link: githubUrl },
    ],
  } satisfies DefaultTheme.Config,
})
