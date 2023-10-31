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
  isShow.value = formStore.rooms.length ? true : false
})

const handleNext = () => {
  formStore.roomsCheck = true
  formStore.roomsShow = false
}
</script>

<template>
  <div
    v-if="formStore.roomsShow"
  >
    <label>
      <h5 class="font-rampart text-2xl font-extrabold leading-[2.5rem]">{{ props.label }}</h5>
    </label>

    <div class="my-8">
      <div
        v-for="(choice, index) in props.options.choices"
        :key="index"
        class="my-2"
      >
        <input
          :type="props.type"
          :value="choice"
          v-model="formStore.rooms"
        />
        <span class="text-xl">{{ choice }}</span>
      </div>
    </div>

    <NextButton
      :class="[isShow ? 'block' : 'hidden']"
      @click="handleNext"
      :name="props.buttonText"
    />
  </div>
</template>