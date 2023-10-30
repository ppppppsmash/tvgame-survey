<script setup>
import { getValue } from '~/utils/'
import { getComponent } from '~/components/FormElements/ComponentType'

const props = defineProps({
  formConfig: {
    type: Array,
    default: () => []
  }
})

const formValue = ref({
  rooms: [],
  satisfaction: '',
  feedback: '',
  event: '',
  name: ''
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

const isShow = ref(false)

</script>

<template>
  <form class="text-white">
    <FormElementsCheckBox
      :props="formConfig[0]"
    />

    <FormElementsRadio
      :props="formConfig[1]"
    />

    <FormElementsInput
      :props="formConfig[2]"
    />

    <FormElementsInput
      :props="formConfig[3]"
    />

    <FormElementsInput
      :props="formConfig[4]"
    />
  </form>
</template>