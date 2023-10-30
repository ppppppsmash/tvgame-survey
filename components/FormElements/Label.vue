<script setup>
defineProps({
  props: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <label>
    <h5 class="text-2xl font-extrabold leading-[2.5rem]">{{ props.label }}</h5>
  </label>
</template>