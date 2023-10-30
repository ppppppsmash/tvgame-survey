<script setup>
import { getValue } from '~/utils/'
import { getComponent } from '~/components/FormElements/ComponentType'

const props = defineProps({
  formConfig: {
    type: Array,
    default: () => []
  }
})

const formFields = props.formConfig.map((field) => {
  let component = getComponent(field.type)
  return { ...field, component }
})

const getLabel = (key, field) => {
  return {key, ...getValue(field, ['label'])}
}

const getFormValue = (key, field) => {
  return {key, ...getValue(field, ['name', 'type', 'text', 'options', 'label'])}
}

</script>

<template>
  <form class="text-white">
    <FormElementsLabel :props="formConfig[0]" />
    <FormElementsCheckBox
      :props="formConfig[0]"
    />

    <FormElementsLabel :props="formConfig[1]" />
    <FormElementsRadio
      :props="formConfig[1]"
    />

    <FormElementsLabel :props="formConfig[2]" />
    <FormElementsInput
      :props="formConfig[2]"
    />

    <FormElementsLabel :props="formConfig[3]" />
    <FormElementsInput
      :props="formConfig[3]"
    />

    <FormElementsLabel :props="formConfig[4]" />
    <FormElementsInput
      :props="formConfig[4]"
    />
  </form>
</template>