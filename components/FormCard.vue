<script setup>
import { getValue } from '~/utils/'
const props = defineProps({
  formConfig: {
    type: Array,
    default: () => []
  }
})

const getLabel = (key, field) => {
  return {key, ...getValue(field, ['label'])}
}

const getFormValue = (key, field) => {
  return {key, ...getValue(field, ['type', 'options'])}
}

</script>

<template>
  <form class="hidden">
    <template
      v-for="(field, index) in formConfig"
      :key="index"
    >
      <FormElementsField>
        <FormElementsLabel :props="getLabel(key, field)" />
        <FormElementsCheckBox :props="getFormValue(key, field)" />
      </FormElementsField>
    </template>
  </form>
</template>