<script setup>
import { useFormStore, useFormProgressStore } from '~/stores/form'
const formStore = useFormStore()
const formProgressStore = useFormProgressStore()
const router = useRouter()

const propsValue = defineProps({
  props: {
    type: Object,
    default: null
  }
})

const { props } = toRefs(propsValue)

const progressStatus = computed(() => {
  console.log(formStore.progress, props.value.length)
  return (formStore.progress + 1) / props.value.length * 100
})

watchEffect(() => {
  if (formStore.roomsCheck && !formProgressStore.checkboxProgress ) {
    formStore.incrementProgress()
    formProgressStore.checkboxProgress = true
  } else if (formStore.satisfactionCheck && !formProgressStore.satisfactionProgress) {
    formStore.incrementProgress()
    formProgressStore.satisfactionProgress = true
  } else if (formStore.feedbackCheck && !formProgressStore.feedbackProgress) {
    formStore.incrementProgress()
    formProgressStore.feedbackProgress = true
  } else if (formStore.eventCheck && !formProgressStore.eventProgress) {
    formStore.incrementProgress()
    formProgressStore.eventProgress = true
  } else if (formStore.nameCheck && !formProgressStore.nameProgress) {
    formStore.incrementProgress()
    formProgressStore.nameProgress = true
  } else {
    console.log(`まだいけます！`)
  }
})
</script>

<template>
  <div class="absolute -right-20 -bottom-[160px]">
    <div class="flex items-center gap-x-4">
      <p class="font-symbol text-symbol text-xl">{{ progressStatus }}%</p>
    </div>
    
  </div>
</template>