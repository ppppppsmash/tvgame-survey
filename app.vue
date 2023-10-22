<script setup>
import { NConfigProvider } from 'naive-ui'

const themeOverrides = {
  common: {
    primaryColor: '#0B2F8F'
  }
}

useSeoMeta({
  title: 'ウェブクルー ゲーム大会 感想アンケート',
  description: 'ウェブクルー ゲーム大会 感想アンケート, Created by liming.pei',
  ogTitle: 'ウェブクルー ゲーム大会 感想アンケート',
  ogImage: '',
  ogUrl: ''
})

useHead({
  htmlAttrs: {
    lang: 'ja'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>

</style>
