<script setup>
import { useFormStore } from '~/stores/form'

defineProps({
  props: {
    type: Object,
    default: null
  }
})

const formStore = useFormStore()

const isClick = ref(false)

const isShow = ref(false)
watchEffect(() => {
  isShow.value = formStore.event ? true : false
})

const handleNext = () => {
  setTimeout(() => {
    formStore.eventCheck = true
    formStore.feedbackCheck = false
  }, 1000)

  isClick.value = true
}
</script>

<template>
  <div
    class="w-full my-6 animate-slide-in-bottom"
    :class="isClick ? 'animate-slide-out-top' : ''"
  >
    <div>
      <label>
        <h5 class="font-serif text-symbol text-md sm:text-xl font-extrabold leading-[2.5rem]">{{props.label }}</h5>
      </label>

      <input
        class="w-full leading-8 font-bold border-0 border-b-2 bg-transparent text-md sm:text-xl
          outline-none text-symbol placeholder-white my-8 border-symbol border-solid"
        :type="props.type"
        :name="props.name"
        :placehold="props.options.attrs.placeholder"
        v-model="formStore.event"
      />
    </div>

    <NextButton
      :class="[isShow ? 'block' : 'hidden']"
      @click="handleNext"
      :name="props.buttonText"
    />
  </div>
</template>