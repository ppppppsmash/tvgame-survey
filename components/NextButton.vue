<script setup>
defineProps({
  name: {
    type: Object,
    default: null
  }
})

</script>

<template>
  <button
    class="w-[100px] h-[40px] bg-symbol text-white rounded-sm absolute"
    type="button"
  >
    <span class="font-black text-black focus:animate-flicker">
      {{ name }}
    </span>
  </button>
</template>