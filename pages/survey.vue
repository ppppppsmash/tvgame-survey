<script setup>
import { useFormStore } from '~/stores/form'
import { formConfig } from '~/config/formConfig'

const formStore = useFormStore()

definePageMeta({
  layout: 'survey-layout'
})

// onMounted(() => {
//   formStore.messageCheck = true
//   formStore.formCheck = false
//   formStore.roomsShow = true
//   formStore.rooms = []
//   formStore.roomsCheck = false
//   formStore.satisfaction = ''
//   formStore.satisfactionCheck = false
//   formStore.feedback = ''
//   formStore.feedbackCheck = false
//   formStore.event = ''
//   formStore.eventCheck = false
//   formStore.name = ''
//   formStore.nameCheck = false
//   formStore.progress = 0
// })
</script>

<template>
  <div>

    <MessageCard />

    <div v-if="formStore.formCheck">
      <FormCard :formConfig="formConfig" />
    </div>

  </div>
</template>