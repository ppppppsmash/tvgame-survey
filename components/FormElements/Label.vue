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
    <h5>{{ props.label }}</h5>
  </label>
</template>