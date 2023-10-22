<script setup>
const props = defineProps(['addClass'])
const { addClass } = toRefs(props)
</script>

<template>
  <div
    :class="addClass"
    class="px-4"
  >
    <h1 class="text-neutral-7 animate-text-focus-in">
      <div class="text-3xl sm:text-8xl font-black text-primary">
        Webcrew
      </div>
      <div class="text-lg sm:text-4xl md:px-1 text-secondary font-bold">
        ゲーム会開催終了後アンケート
      </div>
    </h1>
  </div>
</template>