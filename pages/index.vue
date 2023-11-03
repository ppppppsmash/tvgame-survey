<script setup lang="ts">
const isClick = ref(false)

const animationHandler = () => {
  isClick.value = true
}
</script>

<template>
  <div
    class="w-[100vw] h-[100dvh] overflow-hidden relative animate-slide-in-bottom"
    :class="isClick ? 'animate-slide-in-bottom' : ''"
  >
    <ThreeModelScene />

    <HeroTitle addClass="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-8 bottom-6 sm:bottom-16 h-[180px]" />

    <ScrollButton />
  </div>
</template>