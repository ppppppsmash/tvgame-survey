<script setup>
import { useFormStore } from '~/stores/form'

defineProps({
  props: {
    type: Object,
    default: null
  }
})

const formStore = useFormStore()

const isShow = ref(false)
watchEffect(() => {
  isShow.value = formStore.event ? true : false
})

const handleNext = () => {
  formStore.eventCheck = true
  formStore.feedbackCheck = false
}
</script>

<template>
  <div class="w-full my-6">
    <div>
      <label>
        <h5 class="font-rampart text-2xl font-extrabold leading-[2.5rem]">{{props.label }}</h5>
      </label>

      <input
        class="w-full leading-8 font-bold border-0 border-b-2 bg-transparent text-xl
          outline-none text-white placeholder-white my-8"
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