<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { page, frontmatter } = useData()

interface Crumb {
  text: string
  link?: string
  current?: boolean
}

// 路径段 -> 中文标签 + 链接;未知段回退到段名与累积路径
function segmentLabel(seg: string): { text: string; link: string } | null {
  if (seg === 'season1') return { text: '第一季', link: withBase('/season1/') }
  if (seg === 'shorts') return { text: '短期选题', link: withBase('/season1/shorts/') }
  return null
}

const crumbs = computed<Crumb[]>(() => {
  const path = page.value.relativePath
  if (!path || path === 'index.md') return []
  const parts = path.split('/').filter(Boolean)
  const segs = parts.slice(0, -1) // 目录段
  const filename = parts[parts.length - 1]
  const isIndexFile = filename === 'index.md'

  const list: Crumb[] = []
  // 目录段:当前所在目录(isIndexFile 时的最后一段)不在这里作为链接,留作 current
  const dirSegsToShow = isIndexFile ? segs.slice(0, -1) : segs
  let acc = ''
  for (const s of dirSegsToShow) {
    acc += '/' + s
    const label = segmentLabel(s)
    list.push({ text: label?.text ?? s, link: label?.link ?? withBase(acc + '/') })
  }

  if (isIndexFile) {
    const cur = segs[segs.length - 1]
    const label = segmentLabel(cur)
    list.push({ text: label?.text ?? cur, current: true })
  } else {
    const title = frontmatter.value.title
    if (title) list.push({ text: String(title), current: true })
  }
  return list
})

const show = computed(() => {
  if (frontmatter.value.breadcrumb === false) return false
  return crumbs.value.length > 0
})
</script>

<template>
  <nav v-if="show" class="breadcrumb" aria-label="breadcrumb">
    <template v-for="(c, i) in crumbs" :key="i">
      <a v-if="c.link && !c.current" :href="c.link" class="breadcrumb-link">{{ c.text }}</a>
      <span v-else class="breadcrumb-current" aria-current="page">{{ c.text }}</span>
      <span v-if="i < crumbs.length - 1" class="breadcrumb-sep" aria-hidden="true">›</span>
    </template>
  </nav>
</template>

<style scoped>
.breadcrumb {
  font-family: var(--vp-font-family-base-title);
  font-size: 12px;
  line-height: 1.6;
  color: var(--vp-c-text-3);
  margin: 0 0 1.2em;
  padding-top: 0.5em;
}
.breadcrumb-link {
  color: var(--vp-c-text-3);
  text-decoration: none;
  transition: color 0.12s ease;
}
.breadcrumb-link:hover {
  color: var(--vp-c-brand-1);
}
.breadcrumb-current {
  color: var(--vp-c-text-2);
}
.breadcrumb-sep {
  margin: 0 0.5em;
  color: var(--vp-c-text-3);
  opacity: 0.7;
}
</style>
