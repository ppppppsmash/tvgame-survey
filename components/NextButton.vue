<script setup>
defineProps({
  props: {
    type: Object,
    default: null
  }
})

//const emit = defineEmits(['click'])

</script>

<template>
  <button
    class="w-[70px] h-[40px] bg-white text-white rounded-none"
    type="button"
  >
    <span class="font-black text-primary">
      NEXT
    </span>
  </button>
</template>