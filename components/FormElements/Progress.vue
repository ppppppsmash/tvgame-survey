<script setup>
import { useFormStore } from '~/stores/form'
const formStore = useFormStore()
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
  return formStore.progress / props.value.length * 100
})

onMounted(() => {
  console.log(formStore.rooms)
})

watchEffect(() => {
  if (formStore.roomsCheck) {
    formStore.incrementProgress()
  } else if (formStore.satisfactionCheck) {
    formStore.incrementProgress()
  } else if (formStore.feedbackCheck) {
    formStore.incrementProgress()
  } else if (formStore.eventCheck) {
    formStore.incrementProgress()
  } else if (formStore.nameCheck) {
    formStore.incrementProgress()
  } else {
    console.log(`まだいけます！`)
  }
})

</script>

<template>
  <div class="absolute -right-20 -bottom-[160px]">
    <div class="flex items-center gap-x-4">
      <p v-if="formStore.progress" class="font-symbol text-symbol text-xl">{{ progressStatus }}%</p>
    </div>
    
  </div>
</template>