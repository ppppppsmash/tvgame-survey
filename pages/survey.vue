<script setup>
definePageMeta({
  layout: 'survey'
})
const props = defineProps(['handle_next'])
const { handle_next } = toRefs(props)

</script>

<template>
  <div>

    <MessageCard />

    <FormCard>
      <QuestionElement />
    </FormCard>


  </div>
</template>