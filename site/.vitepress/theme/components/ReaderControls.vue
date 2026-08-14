<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

type ReaderTheme = 'light' | 'sepia' | 'dark'
type ReaderFont = 'serif' | 'sans'
type ReaderSize = 'small' | 'default' | 'large'

const STORAGE_KEY = 'prism-reader'

const theme = ref<ReaderTheme>('sepia')
const font = ref<ReaderFont>('serif')
const size = ref<ReaderSize>('default')
const open = ref(false)

const themes: { key: ReaderTheme; label: string }[] = [
  { key: 'light', label: '亮' },
  { key: 'sepia', label: '纸' },
  { key: 'dark', label: '夜' },
]
const fonts: { key: ReaderFont; label: string }[] = [
  { key: 'serif', label: '衬' },
  { key: 'sans', label: '黑' },
]
const sizes: { key: ReaderSize; cls: string }[] = [
  { key: 'small', cls: 'size-sm' },
  { key: 'default', cls: 'size-md' },
  { key: 'large', cls: 'size-lg' },
]

function apply() {
  const html = document.documentElement
  html.setAttribute('data-reader', theme.value)
  html.setAttribute('data-font', font.value)
  html.setAttribute('data-size', size.value)
  // dark 档同步触发 VitePress .dark(代码暗主题 / 内部暗组件)
  html.classList.toggle('dark', theme.value === 'dark')
}

function persist() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ theme: theme.value, font: font.value, size: size.value })
  )
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    const v = JSON.parse(raw)
    if (v.theme === 'light' || v.theme === 'sepia' || v.theme === 'dark') theme.value = v.theme
    if (v.font === 'serif' || v.font === 'sans') font.value = v.font
    if (v.size === 'small' || v.size === 'default' || v.size === 'large') size.value = v.size
  } catch { /* ignore */ }
}

watch([theme, font, size], () => {
  apply()
  persist()
})

onMounted(() => {
  load()
  apply() // 无条件 setAttribute,保证 html 上属性齐全(即使值=默认)
})
</script>

<template>
  <div class="reader-controls">
    <button
      class="reader-toggle"
      :class="{ active: open }"
      :aria-expanded="open"
      aria-label="阅读设置"
      title="阅读设置"
      @click="open = !open"
    >
      <span class="reader-toggle-a">A</span>
    </button>
    <div v-if="open" class="reader-panel" @click.stop>
      <div class="reader-row">
        <span class="reader-label">主题</span>
        <div class="reader-chips">
          <button
            v-for="t in themes"
            :key="t.key"
            class="reader-chip"
            :class="{ active: theme === t.key }"
            @click="theme = t.key"
          >{{ t.label }}</button>
        </div>
      </div>
      <div class="reader-row">
        <span class="reader-label">字体</span>
        <div class="reader-chips">
          <button
            v-for="f in fonts"
            :key="f.key"
            class="reader-chip"
            :class="{ active: font === f.key }"
            @click="font = f.key"
          >{{ f.label }}</button>
        </div>
      </div>
      <div class="reader-row">
        <span class="reader-label">字号</span>
        <div class="reader-chips">
          <button
            v-for="s in sizes"
            :key="s.key"
            class="reader-chip"
            :class="[{ active: size === s.key }, s.cls]"
            @click="size = s.key"
          >A</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reader-controls {
  position: relative;
  display: flex;
  align-items: center;
}
.reader-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--vp-c-border-strong);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.18s ease, color 0.18s ease;
}
.reader-toggle:hover,
.reader-toggle.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.reader-panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 216px;
  padding: 12px 14px;
  border: 1px solid var(--vp-c-border-strong);
  border-radius: 10px;
  background-color: var(--vp-c-bg-elv);
  box-shadow: 0 4px 16px rgba(58, 46, 35, 0.12);
  z-index: 30;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.reader-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.reader-label {
  font-size: 12px;
  color: var(--vp-c-text-3);
}
.reader-chips {
  display: flex;
  gap: 4px;
}
.reader-chip {
  min-width: 30px;
  height: 28px;
  padding: 0 9px;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 12px;
  cursor: pointer;
  transition: border-color 0.18s ease, color 0.18s ease, background-color 0.18s ease;
}
.reader-chip:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.reader-chip.active {
  background-color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}
.reader-chip.size-sm { font-size: 11px; }
.reader-chip.size-md { font-size: 13px; }
.reader-chip.size-lg { font-size: 15px; }
</style>
