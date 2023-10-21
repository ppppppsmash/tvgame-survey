<script setup lang="ts">
import { ref } from 'vue'

const isClick = ref(false)

const animationHandler = () => {
  isClick.value = true
}
</script>

<template>
  <div
    class="w-[100vw] h-[100vh] relative bg-brand/30 animate-slide-in-bottom"
    :class="isClick ? 'animate-slide-in-bottom' : ''"
  >
    <ThreeModelScene />

    <Header
      addClass="absolute right-8 bottom-8"
    />

    <ScrollButton />
  </div>
</template>