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
    class="w-[70px] h-[40px] bg-symbol text-white rounded-sm"
    type="button"
  >
    <span class="font-black text-black">
      {{ name }}
    </span>
  </button>
</template>