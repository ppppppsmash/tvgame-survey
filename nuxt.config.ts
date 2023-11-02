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
    [
      'nuxt-quasar-ui', {
        config: {
          brand: {
            'primary': '#0B2F8F',
            'secondary': '#D5D5D5',
          },
        }
      }
    ],
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
      'ITC Benguiat W01': true,
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
