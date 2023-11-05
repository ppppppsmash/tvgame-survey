<script setup lang="ts">
const isClick = ref(false)

const animationHandler = () => {
  isClick.value = true
}
</script>

<template>
  <div
    class="w-full h-[100dvh] overflow-hidden relative animate-slide-in-bottom"
    :class="isClick ? 'animate-slide-in-bottom' : ''"
  >
    <ThreeModelScene />

    <HeroTitle addClass="absolute left-1/2 -translate-x-[calc(50%+1rem)] sm:left-auto sm:-translate-x-0 sm:right-6 bottom-4 sm:bottom-8 h-[180px]" />

    <ScrollButton />
  </div>
</template>