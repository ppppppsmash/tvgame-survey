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
  console.log(formStore.progress / props.value.length * 100)
  return formStore.progress / props.value.length * 100
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

const isBGM = ref(false)

const bgmHandler = () => {
  isBGM.value = !isBGM.value
}
</script>

<template>
  <div
    v-if="!formStore.nameCheck"
    class="fixed sm:right-[18%] bottom-[8%] sm:bottom-[9.5%]"
  >
    <div class="flex items-center gap-x-4 w-[260px] sm:w-[280px]">
      <!-- <div class="progress-bar w-6/12 h-3 relative bg-black border-symbol border-2 border-solid">
        <p
          class="progress-bar-inner absolute h-full bg-symbol"
          :style="'width:'+ progressStatus + '%'"
        ></p>
      </div> -->
      <!-- <Icon name="simple-icons:googleforms" class="text-symbol w-6 h-6" /> -->

      
      <div class="relative">
        <RetroTV
          zoom="!mt-0 block h-full"
          :noise="isBGM ? 'noise-bg z-20 left-0 w-[100px] h-[60px]' : 'z-20 left-0 w-[100px] h-[60px]'"
          video="hidden"
          :url="isBGM ? '/video/game_opening.mp4' : ''"
        />
        <div
          class="absolute z-50 top-1/3 left-1/4 bottom-0 cursor-pointer"
          :class="isBGM ? 'hidden' : 'block'"
          @click="bgmHandler"
        >
          <Icon
            name="fluent-emoji-high-contrast:musical-notes"
            class="animate-bounce text-center text-symbol w-7 h-7 z-50"
          />
        </div>

        <div
          class="absolute z-50 top-1/3 left-1/4 bottom-0 cursor-pointer"
          :class="isBGM ? 'block' : 'hidden'"
          @click="bgmHandler"
        >
          <Icon
            name="fluent-emoji-high-contrast:muted-speaker"
            class="text-symbol w-7 h-7"
          />
        </div>
      </div>
      <p
        class="w-4/12 font-neon text-symbol text-md sm:text-lg"
      >
        {{ formStore.progress + 1 }} / {{ props.length }}
      </p>

      
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
