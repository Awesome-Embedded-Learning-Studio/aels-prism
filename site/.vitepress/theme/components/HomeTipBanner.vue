<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import type { ProjectConfig } from '../config/schema'

const { lang } = useData()

const props = defineProps<{
  config?: ProjectConfig
}>()

const bannerText = computed(() => {
  const cfg = props.config
  if (!cfg?.homeBanner) return ''
  return cfg.homeBanner[lang.value] || cfg.homeBanner[Object.keys(cfg.homeBanner)[0]] || ''
})

const showBanner = computed(() => !!bannerText.value)
</script>

<template>
  <div v-if="showBanner" class="home-tip-banner">
    <span class="home-tip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
      </svg>
    </span>
    <span class="home-tip-text" v-html="bannerText" />
  </div>
</template>

<style scoped>
.home-tip-banner {
  max-width: 1152px;
  margin: -16px auto 32px;
  padding: 12px 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--vp-c-brand-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
}

.home-tip-icon {
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
  display: flex;
  align-items: center;
}

.home-tip-text a {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 500;
}

.home-tip-text a:hover {
  color: var(--vp-c-brand-2);
}
</style>
