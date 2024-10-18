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
  isShow.value = formStore.name ? true : false
})

const runtimeConfig = useRuntimeConfig()
const GOOGLE_FORM_ACTION = runtimeConfig.public.googleFormAction

const handleNext = async () => {
  setTimeout(() => {
    formStore.nameCheck = true
    formStore.feedbackCheck = false
  }, 1000)

  isClick.value = true

  const formData = new FormData()

  formStore.rooms.forEach((value) => {
    formData.append('entry.434867502', value)
  })

  formStore.satisfaction.forEach((value) => {
    formData.append('entry.1328896341', value)
  })

  formData.append('entry.1211019803', formStore.feedback)
  formData.append('entry.552695026', formStore.name)

  const { data, pending, error, refresh } = await useAsyncData(
    'formData',
    () => $fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      body: formData
    })
  )
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
          {{ props.label }}
        </h5>
      </label>

      <input
        class="font-neon w-full leading-8 font-bold border-0 border-b-2 bg-transparent text-md sm:text-lg
          outline-none text-symbol placeholder-white my-8 border-symbol border-solid"
        :type="props.type"
        :name="props.name"
        :placehold="props.options.attrs.placeholder"
        v-model="formStore.name"
      />
    </div>

    <NextButton
      class="block animate-scale-in-center"
      @click="handleNext"
      :name="props.buttonText"
    />
  </div>
</template>