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
      secondary: '#FFFFFF',
      tertiary: '#313640',
      brand: '#E5E5E5',
      symbol: '#ED2B12',
      required: '#DC2626',
    },
    extend: {
      fontFamily: {
        inter: ['Inter'],
        gothic: ['Zen Maru Gothic'],
        mochiy: ['Mochiy Pop One'],
        murecho: ['Murecho'],
        default: ['Noto Sans JP'],
        rampart: ['Rampart One'],
        young: ['Young Serif'],
        symbol: ['ITC Benguiat W01'],
      },
      skew: {
        '30': '30deg'
      },
      animation: {
        'scroll-move-default': 'move 3s ease-out infinite',
        'scroll-move-primary': 'move 3s ease-out 1s infinite',
        'scroll-move-secondary': 'move 3s ease-out 2s infinite',
        'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'text-focus-in': 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'slide-in-fwd-center': 'slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-in-top': 'slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-out-top': 'slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both'
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
        },
        'text-focus-in': {
          '0%': {
              filter: 'blur(12px)',
              opacity: '0'
          },
          to: {
              filter: 'blur(0)',
              opacity: '1'
          }
        },
        'slide-in-fwd-center': {
          '0%': {
              transform: 'translateZ(-1400px)',
              opacity: '0'
          },
          to: {
              transform: 'translateZ(0)',
              opacity: '1'
          }
        },
        'slide-in-top': {
          '0%': {
              transform: 'translateY(-1000px)',
              opacity: '0'
          },
          to: {
              transform: 'translateY(0)',
              opacity: '1'
          }
        },
        'slide-out-top': {
          '0%': {
              transform: 'translateY(0)',
              opacity: '1'
          },
          to: {
              transform: 'translateY(-1000px)',
              opacity: '0'
          }
        }
      }
    }
  },
  plugins: [],
}

