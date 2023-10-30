<script setup>
import { useMouse, useWindowSize } from '@vueuse/core'

const route = useRoute()
const { width, height } = useWindowSize()

const params = reactive({
  enableBlur: true,
  movementDuration: 20,
  parallaxFactor: 0.2
})

// @TODO: useMouseInElement to replace useMouse to improve performance
// const { x, y } = useMouse({ touch: false })
const { x, y } = { x: ref(0), y: ref(0) }
const fromCenterX = computed(() => {
  if (!process.client) return 0
  return -(x.value - width.value / 2) * params.parallaxFactor
})
const fromCenterY = computed(() => {
  if (!process.client) return 0
  return Math.max(-(y.value - height.value / 2) * params.parallaxFactor, -350)
})

const rootClass = computed(() => {
  return `type-${route.meta.heroType || 'default'}`
})
</script>

<template>
  <div class="site-hero-bg" :style="{'--movement-duration': `${params.movementDuration}s`, '--cursor-x': fromCenterX, '--cursor-y': fromCenterY}" :class="rootClass">
  <div class="gradient-overlay"></div>
  <div class="dotted-layer">
    <client-only>
      <MouseTrailSketch />
    </client-only>
    <div class="muted-dots"></div>
  </div>
  <div class="blur-layer" v-if="params.enableBlur"></div>
  <div class="blobs-container">
    <div class="ellipse ellipse-1">
      <div class="parallax-layer">
        <div class="ellipse-blob"></div>
      </div>
    </div>
    <div class="ellipse ellipse-2">
      <div class="parallax-layer">
        <div class="ellipse-blob"></div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="stylus">
.site-hero-bg
  position absolute
  z-index: -1
  top: 0
  left: 0
  width: 100vw
  background: rgb(0, 0, 0)
  height: 100vh
  overflow: hidden

  --ellipse: #244EE7
  --movement-height: 800px
  --movement-min-top: 50px
  --y: s('calc(var(--cursor-y) * 1px)')
  --x: s('calc(var(--cursor-x) * 1px)')

  > *
    position absolute
    width: 100%

  .dotted-layer
    --dot: #656565
    z-index: 23
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 52%, rgba(0, 0, 0, 1) 44%, transparent 90%)

    .mouse-trail-sketch
      position absolute
      mix-blend-mode: lighten
      mask-image: radial-gradient(white 2px, transparent 2px)
      mask-size: 30px 30px

    .muted-dots
      background-image: radial-gradient(var(--dot) 2px, transparent 2px)
      background-size: 30px 30px
      height: 1674px

  .blobs-container
    height: 1200px
    overflow: hidden

    > *
      position absolute

  .blur-layer
    z-index: 10
    background: rgba(0, 0, 0, 0.1)
    backdrop-filter: blur(150px)
    backface-visibility: hidden
    height: 1600px
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 52%, rgba(0, 0, 0, 1) 80%, transparent 90%)

  @keyframes movement1
    from
      transform: translate3d(0, 0, 0)

    25%
      transform: translate3d(0, var(--movement-height), 0)

    50%
      transform: translate3d(-80vw, var(--movement-height), 0)

    75%
      transform: translate3d(-80vw, 0, 0)

    to
      transform: translate3d(0, 0, 0)

  @keyframes movement2
    0%
      transform: translate3d(0, 567px, 0)

    25%
      transform: translate3d(0, var(--movement-min-top), 0)

    50%
      transform: translate3d(80vw, var(--movement-min-top), 0)

    75%
      transform: translate3d(80vw, var(--movement-height), 0)

    to
      transform: translate3d(0, 567px, 0)

  @keyframes morph1
    0%
      border-radius: 49% 51% 70% 30% / 30% 45% 55% 70%

    to
      border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%

  @keyframes morph2
    0%
      border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%

    to
      border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%

  @keyframes spin
    transform: rotate(1turn)

  .ellipse
    inset auto
    // transform: translate3d(-50%, -50%, 0)

  .parallax-layer
    width: 100%
    height: 100%

  .ellipse-blob
    width: 100%
    height: 100%
    background-color: var(--ellipse)
    transform-origin: 55% 55%

  .ellipse-1
    top: 0
    right: 20px
    width: 500px
    height: 531px
    animation: movement1 var(--movement-duration) linear infinite

    .parallax-layer
      transform: translate3d(var(--x), var(--y), 0)

    .ellipse-blob
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%
      animation: morph1 5s linear infinite alternate, spin 10s linear infinite

  .ellipse-2
    width: 400px
    height: 365px
    left: 0px
    top: 0
    animation: movement2 var(--movement-duration) linear infinite
    --ellipse: #6A89F8

    .parallax-layer
      transform: translate3d(calc(var(--x) * -1), calc(var(--y) * -1), 0)

    .ellipse-blob
      transform-origin: 20% 20%
      border-radius: 78% 22% 26% 74% / 81% 27% 73% 19%
      animation: morph2 4s linear infinite alternate, spin 14s linear infinite reverse

  .gradient-overlay
    z-index: 240
    height: 2619px
    background: linear-gradient(180deg, #000000 4.32%, rgba(0, 0, 0, 0.65) 50.97%, #000000 88.49%);

    /html.dark &
      height: 1691px
      background: linear-gradient(180deg, #000000 4.32%, rgba(0, 0, 0, 0.65) 50.97%, #000000 88.49%);

  @media $mediaInMobile
    display: none

  /html.dark &
    --ellipse: #244EE7

  &.type-blog
    .gradient-overlay
      // background: linear-gradient(180deg, #FFFFFF 4.32%, rgba(255, 255, 255, 0.75) 70.08%, #FFFFFF 88.49%);

      /html.dark &
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 4.32%, rgba(0, 0, 0, 0.16) 40.27%, rgba(0, 0, 0, 0.8) 53.86%, rgba(0, 0, 0, 0.8) 60.4%, rgba(0, 0, 0, 0.8) 88.49%);

</style>
