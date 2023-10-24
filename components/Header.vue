<script setup>
const props = defineProps(['addClass'])
const { addClass } = toRefs(props)
</script>

<template>
  <div
    :class="addClass"
    class="px-4"
  >
    <h1 class="animate-text-focus-in">
      <div
        class="text-3xl sm:text-6xl font-black"
      >
        WebCrew
      </div>
      <div class="text-lg text-center sm:text-2xl md:px-1 text-white font-black">
        After-Game Survey
      </div>
    </h1>
  </div>
</template>