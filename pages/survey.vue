<script setup>
import { useFormStore } from '~/stores/form'
import { formConfig } from '~/config/formConfig'

const formStore = useFormStore()

definePageMeta({
  layout: 'survey-layout'
})
</script>

<template>
  <div>

    <MessageCard />

    <div v-if="formStore.formCheck">
      <FormCard :formConfig="formConfig" />
    </div>

  </div>
</template>