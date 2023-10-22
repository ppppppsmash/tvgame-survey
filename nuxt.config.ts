// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css'
  ],
  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@bg-dev/nuxt-naiveui',
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
  }
})
