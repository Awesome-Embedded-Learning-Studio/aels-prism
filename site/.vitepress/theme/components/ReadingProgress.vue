<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const width = ref('0%')
let raf = 0

function update() {
  raf = 0
  const el = document.documentElement
  const max = el.scrollHeight - el.clientHeight
  const pct = max > 0 ? (el.scrollTop / max) * 100 : 0
  width.value = `${Math.min(100, Math.max(0, pct))}%`
}

function onScroll() {
  if (raf) return
  raf = requestAnimationFrame(update)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  // mounted 后校正初始宽度(issue #4506:刷新时 scrollY 暂为 0)
  raf = requestAnimationFrame(update)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <div class="reading-progress" :style="{ width }" aria-hidden="true" />
</template>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background-color: var(--vp-c-brand-1);
  z-index: 100;
  transition: width 0.1s linear;
}
@media (prefers-reduced-motion: reduce) {
  .reading-progress {
    transition: none;
  }
}
</style>
