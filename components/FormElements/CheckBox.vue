<script setup>
defineProps({
  props: {
    type: Object,
    default: null
  }
})

</script>

<template>
  <div v-for="(choice, index) in props.options.choices" :key="index">
    <input
      :type="props.type"
      :value="choice"
    />
    <span>{{ choice }}</span>
  </div>
</template>