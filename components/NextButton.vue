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
    class="w-[80px] h-[30px] sm:w-[100px] sm:h-[40px] bg-symbol text-white rounded-sm absolute"
    type="button"
  >
    <span class="text-xs sm:text-sm font-black text-black focus:animate-flicker">
      {{ name }}
    </span>
  </button>
</template>