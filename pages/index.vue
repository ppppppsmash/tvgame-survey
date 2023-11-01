<script setup lang="ts">
const isClick = ref(false)

const animationHandler = () => {
  isClick.value = true
}
</script>

<template>
  <div
    class="w-[100vw] h-[100vh] relative animate-slide-in-bottom"
    :class="isClick ? 'animate-slide-in-bottom' : ''"
  >
    <ThreeModelScene />

    <!-- <Header
      addClass="absolute right-8 bottom-8 text-primary"
    /> -->
    <HeroTitle addClass="absolute right-8 bottom-16 h-[180px]" />

    <ScrollButton />
  </div>
</template>