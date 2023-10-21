<script setup lang="ts">
import { ref } from 'vue'

const isClick = ref(false)

const animationHandler = () => {
  isClick.value = true
}
</script>

<template>
  <div
    class="w-[100vw] h-[100vh] relative bg-neutral-2 animate-slide-in-bottom"
    :class="isClick ? 'animate-slide-in-bottom' : ''"
  >
    <ThreeModelScene />

    <h1 class="absolute right-8 bottom-8 text-neutral-7">
      <div class="md:text-9xl font-black text-primary">
        Webcrew
      </div>
      <div class="md:text-5xl md:px-1 text-secondary font-bold">
        ゲーム会開催終了後アンケート
      </div>
    </h1>

    <ScrollButton />
  </div>
</template>