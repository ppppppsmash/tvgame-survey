<script setup>
definePageMeta({
  layout: 'survey'
})

import { formConfig } from '~/config/formConfig'

console.log(formConfig)
</script>

<template>
  <div>

    <MessageCard />

    <FormCard />

  </div>
</template>