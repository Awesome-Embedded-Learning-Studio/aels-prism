import { defineProject } from './site/.vitepress/config/schema'

// 公开身份未最终确定；base 暂用 /AELS-Prism/（= 本地目录名 + 组织习惯）。
// 公开名敲定后改这里 + deploy workflow + favicon 路径即可，全站 URL 随之切换。
export default defineProject({
  name: 'AELS-Prism',
  title: { 'zh-CN': 'AELS Prism' },
  description: {
    'zh-CN':
      'Awesome Embedded Learning Studio · 视频文章站——第一手教材与配套导览视频',
  },
  base: '/AELS-Prism/',
  copyright: 'Copyright © 2025-2026 Awesome-Embedded-Learning-Studio',

  // 文章为体：正典内容放在仓库根 articles/，VitePress 经 srcDir 向上读取
  documentsDir: 'articles',
  siteDir: 'site',

  locales: [{ code: 'zh-CN', label: '中文', default: true }],

  nav: {
    'zh-CN': [
      { text: '首页', link: '/' },
      { text: '第一季', link: '/season1/' },
      {
        text: 'GitHub',
        link: 'https://github.com/Awesome-Embedded-Learning-Studio/AELS-Prism',
      },
    ],
  },

  // 单 volume = season1 一棵连续侧栏；后续季度出现时再加 volume。
  sidebar: {
    volumes: [{ name: 'season1', srcDir: 'season1', urlPrefix: '/season1' }],
  },

  github: {
    owner: 'Awesome-Embedded-Learning-Studio',
    repo: 'AELS-Prism',
    branch: 'main',
    documentsPath: 'articles',
  },

  build: {
    rootPages: ['index.md'],
  },

  // 先全关保首次绿构建；第一篇真实 C/汇编文章（M2 MVP）落地时开 cppTemplateEscape
  plugins: {
    cppTemplateEscape: false,
    kbd: false,
    math: false,
    mermaid: true,
  },

  favicon: '/AELS-Prism/Awesome-Embedded.ico',
})
