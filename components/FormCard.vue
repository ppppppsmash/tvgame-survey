<script setup>
import { useFormStore } from '~/stores/form'
const router = useRouter()

const props = defineProps({
  formConfig: {
    type: Array,
    default: () => []
  }
})

const formStore = useFormStore()

const reset = () => {
  formStore.messageCheck = true
  formStore.formCheck = false
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
</script>

<template>
  <form class="text-white w-full">
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

  <button
    class="absolute -bottom-20 right-0 w-[70px] h-[40px] bg-symbol text-white rounded-sm"
    type="button"
    @click="reset"
  >
    <span class="font-black text-black">
      RESET
    </span>
  </button>
</template>