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
  isShow.value = formStore.satisfaction ? true : false
})

const handleNext = () => {
  setTimeout(() => {
    formStore.satisfactionCheck = true
    formStore.roomsCheck = false
  }, 1000)

  isClick.value = true
}

const radioHandler = (element) => {
  if (formStore.satisfaction === element) {
    return 'font-black bg-symbol'
  } else {
    return 'text-symbol'
  }
}
</script>

<template>
  <div
    :class="isClick ? 'animate-slide-out-top' : ''"
    class="animate-slide-in-bottom"
  >
    <label>
      <h5
        class="animate-analog font-neon font-serif text-symbol text-md sm:text-xl font-extrabold leading-[2.5rem]"
        :data-text="props.label"
      >
        {{ props.label }}
      </h5>
    </label>

    <div class="my-4 sm:my-8 flex items-center gap-x-4 w-full">
      <div
        v-for="(choice, index) in props.options.choices"
        :key="index"
        class="my-2"
      >
        <label
          class="block relative border-2 border-symbol border-solid px-4 py-2 sm:px-8 sm:py-6
            cursor-pointer group hover:bg-symbol"
          :class="radioHandler(choice)"
          @click="formStore.satisfaction = choice"
        >
          <input
            :type="props.type"
            :value="choice"
            v-model="formStore.satisfaction"
            class="hidden"
          />
          <span
            class="font-neon text-md sm:text-lg font-serif group-hover:text-[#000000]"
            :class="radioHandler(choice)"
          >
            {{ choice }}
          </span>
        </label>
      </div>
    </div>

    <NextButton
      :class="[isShow ? 'block animate-scale-in-center' : 'hidden animate-scale-out-center']"
      @click="handleNext"
      :name="props.buttonText"
    />
  </div>
</template>