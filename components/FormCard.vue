<script setup>
import { useFormStore } from '~/stores/form'
import { getValue } from '~/utils/'
import { getComponent } from '~/components/FormElements/ComponentType'
const router = useRouter()

const props = defineProps({
  formConfig: {
    type: Array,
    default: () => []
  }
})

const formStore = useFormStore()

const reset = () => {
  formStore.roomsShow = true
  formStore.rooms = []
  formStore.roomsCheck = false
  formStore.satisfaction = ''
  formStore.satisfactionCheck = false
  formStore.feedback = ''
  formStore.feedbackCheck = false
  formStore.event = ''
  formStore.eventCheck = false
  formStore.name = ''
  formStore.nameCheck = false
  router.push({ path: '/survey' })
}

const handleNext = (prevCheck, nextCheck) => {
  prevCheck = true
  nextCheck = false
  // console.log(prevCheck, nextCheck)
  // formStore.feedbackCheck = true
  // formStore.satisfactionCheck = false
}

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
  <form class="text-white w-full">
    <button
      type="button"
      @click="reset"
    >
      リセット
    </button>

    <FormElementsCheckBox
      :props="formConfig[0]"
    />

    <div v-if="formStore.roomsCheck">
      <FormElementsRadio
        :props="formConfig[1]"
      />
    </div>

    <div v-if="formStore.satisfactionCheck">
      <FormElementsInputFeedback
        :props="formConfig[2]"
      />
    </div>

    <div v-if="formStore.feedbackCheck">
      <FormElementsInputEvent
        :props="formConfig[3]"
      />
    </div>

    <div v-if="formStore.eventCheck">
      <FormElementsInputName
        :props="formConfig[4]"
      />
    </div>

    
  </form>
</template>