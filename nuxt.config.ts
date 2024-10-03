// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css',
  ],
  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon'
  ],
  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
    families: {
      'Inter': true,
      'Zen Maru Gothic': true,
      'Mochiy Pop One': true,
      'Murecho': true,
      'Noto Sans JP': true,
      'Rampart One': true,
      'Young Serif': true,
      'ITC Benguiat W01': true
    }
  },
  experimental: {
    /**
     * see: https://v3.nuxtjs.org/api/configuration/nuxt.config#inlinessrstyles
     */
    inlineSSRStyles: false
  },
  tailwindcss: {
    exposeConfig: true
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width',
      title: 'Kurosawa Game Survey',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'Kurosawa Game Survey, Created by arata kurosawa'
        },
        {
          name: 'keywords',
          content: 'tv game, survey'
        },
        {
          name: 'og:locale',
          content: 'ja_JP'
        }
      ],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: https://ogp.me/ns#'
      }
    }
  }
})
