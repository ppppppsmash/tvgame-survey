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

</script>

<template>
  <form>
    <template
      v-for="(field, index) in formConfig"
      :key="index"
    >
      <FormElementsField>
        <FormElementsLabel :props="getLabel(key, field)" />
      </FormElementsField>
    </template>
  </form>
</template>