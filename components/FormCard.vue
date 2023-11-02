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
  formStore.progress = 0
  router.push({ path: '/survey' })
}
</script>

<template>
  <form class="text-white w-full relative">
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

    <FormElementsProgress
      :props="formConfig"
    />

    <button
      class="fixed bottom-[30%] right-[12%] w-[70px] h-[40px] bg-symbol text-white rounded-sm"
      type="button"
      @click="reset"
    >
      <span class="font-black text-black">
        RESET
      </span>
    </button>
  </form>
</template>