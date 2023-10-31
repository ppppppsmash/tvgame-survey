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
    class="w-[70px] h-[40px] bg-white text-white rounded-none"
    type="button"
  >
    <span class="font-black text-primary">
      {{ name }}
    </span>
  </button>
</template>