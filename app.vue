<script setup>
import '@unocss/reset/tailwind.css'

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
  <div class="w-[100vw] h-[100vh] relative bg-neutral-2">
    <ThreeModelScene />

    <h1 class="absolute right-8 bottom-8 text-neutral-7">
      <div class="md:text-9xl font-black">
        xxxx
      </div>
      <div class="md:text-7xl md:px-1">
        アンケート
      </div>
    </h1>
  </div>

  <NuxtPage />
</template>

<style>
:root {
  font-family: 'Zen Maru Gothic', Inter;
}
</style>
