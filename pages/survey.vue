<script setup>
import { formConfig } from '~/config/formConfig'

definePageMeta({
  layout: 'survey'
})

</script>

<template>
  <div>

    <MessageCard />

    <FormCard :formConfig="formConfig" />

  </div>
</template>