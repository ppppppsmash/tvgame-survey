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
  location.href = '/'
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

    <div v-if="formStore.nameCheck">
      <FormElementsThanks />
    </div>

    <FormElementsProgress
      :props="formConfig"
    />

    <button
      class="fixed bottom-[9.5%] sm:bottom-[10%] right-[10%] sm:right-[18%] w-[60px] h-[30px] sm:w-[70px]
        sm:h-[40px] bg-symbol text-white rounded-sm focus:scale-[0.95]"
      type="button"
      @click="reset"
    >
      <span class="font-neon text-xs sm:text-sm font-black text-[#000000]">
        RESET
      </span>
    </button>
  </form>
</template>