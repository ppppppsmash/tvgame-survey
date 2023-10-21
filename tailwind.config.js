/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      primary: '#0B2F8F',
      secondary: '#696969'
    },
    extend: {
      skew: {
        '30': '30deg'
      },
      animation: {
        'scroll-move-default': 'move 3s ease-out infinite',
        'scroll-move-primary': 'move 3s ease-out 1s infinite',
        'scroll-move-secondary': 'move 3s ease-out 2s infinite',
        'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both'
      },
      keyframes: {
        'move': {
          '25%': {
            opacity: '1'
          },
          '33%': {
            opacity: '1',
            transform: 'translateY(30px)'
          },
          '67%': {
            opacity: '1',
            transform: 'translateY(40px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(55px) scale3d(0.5, 0.5, 0.5)'
          }
        },
        'slide-in-bottom': {
          '0%': {
              transform: 'translateY(1000px)',
              opacity: '0'
          },
          to: {
              transform: 'translateY(0)',
              opacity: '1'
          }
        }
      }
    }
  },
  plugins: [],
}
