import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import HomeTipBanner from './components/HomeTipBanner.vue'
import ChapterNav from './components/ChapterNav.vue'
import ChapterLink from './components/ChapterLink.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import ReaderControls from './components/ReaderControls.vue'
import { setupMermaid } from './mermaid-client'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-before': () => h(HomeTipBanner),
      'doc-before': () => h(Breadcrumb),
      'layout-top': () => h(ReadingProgress),
      'nav-bar-content-after': () => h(ReaderControls),
    })
  },
  enhanceApp({ app }) {
    app.component('ChapterNav', ChapterNav)
    app.component('ChapterLink', ChapterLink)
  },
  setup() {
    setupMermaid()
  }
} satisfies Theme
