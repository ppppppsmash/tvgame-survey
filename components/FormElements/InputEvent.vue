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
        <h5
          class="animate-analog font-neon font-serif text-symbol text-md sm:text-xl font-extrabold leading-[2.5rem]"
          :data-text="props.label"
        >
          {{props.label }}
        </h5>
      </label>

      <input
        class="font-neon w-full leading-8 font-bold border-0 border-b-2 bg-transparent text-md sm:text-lg
          outline-none text-symbol placeholder-white my-8 border-symbol border-solid"
        :type="props.type"
        :name="props.name"
        :placehold="props.options.attrs.placeholder"
        v-model="formStore.event"
      />
    </div>

    <NextButton
    :class="[isShow ? 'block animate-scale-in-center' : 'hidden animate-scale-out-center']"
      @click="handleNext"
      :name="props.buttonText"
    />
  </div>
</template>