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
  <div class="fixed sm:right-[20%] bottom-[10%] sm:bottom-[10.5%]">
    <div class="flex items-center gap-x-4 w-[260px] sm:w-[280px]">
      <div class="progress-bar w-6/12 h-3 relative bg-black border-symbol border-2 border-solid">
        <div
          class="progress-bar-inner absolute h-full bg-symbol"
          :style="'width:'+ progressStatus + '%'"
        />
      </div>
      <p class="w-4/12 font-symbol text-symbol text-md sm:text-lg">{{formStore.progress + 1}} / {{ props.length }}</p>
    </div>
    
  </div>
</template>

<style>
  @keyframes loading {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
</style>
