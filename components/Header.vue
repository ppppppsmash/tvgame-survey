<script setup>
const props = defineProps(['addClass'])
const { addClass } = toRefs(props)
</script>

<template>
  <div :class="addClass">
    <h1 class="text-neutral-7">
      <div class="md:text-9xl font-black text-primary">
        Webcrew
      </div>
      <div class="md:text-5xl md:px-1 text-secondary font-bold">
        ゲーム会開催終了後アンケート
      </div>
    </h1>
  </div>
</template>