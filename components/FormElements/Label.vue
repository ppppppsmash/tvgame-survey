<script setup lang="ts">
defineProps({
  props: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <label>
    <h5 class="font-rampart sm:text-2xl font-extrabold leading-[2.5rem]">{{ props.label }}</h5>
  </label>
</template>