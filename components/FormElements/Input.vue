<script setup>
defineProps({
  props: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <input
    :type="props.type"
    :name="props.name"
  />
</template>