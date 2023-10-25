<script setup>
const props = defineProps({
  formField: {
    type: Array,
    default: () => []
  }
})
const form = ref({
  rooms: [],
  like: '',
  feedback: '',
  event: '',
  name: ''
})
</script>

<template>
  <form>
    <template
      v-for="(field, index) in formField"
      :key="index"
    >
      <FormElementsField>
        <p>テストテスト</p>
      </FormElementsField>
    </template>
  </form>
</template>