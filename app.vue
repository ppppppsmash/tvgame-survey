<script setup>
useSeoMeta({
  title: 'Kurosawa Game Survey',
  description: 'Kurosawa Game Survey, Created by arata kurosawa',
  ogTitle: 'Kurosawa Game Survey',
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
