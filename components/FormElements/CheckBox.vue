<script setup>
import { useFormStore } from '~/stores/form'

defineProps({
  props: {
    type: Object,
    default: null
  },
})

const formStore = useFormStore()

const isClick = ref(false)

const isShow = ref(false)
watchEffect(() => {
  isShow.value = formStore.satisfaction.length ? true : false
})

const handleNext = () => {
  setTimeout(() => {
    formStore.satisfactionCheck = true
    formStore.roomsCheck = false
  }, 1000)

  isClick.value = true
}

const checkHandler = (choice) => {
  if (formStore.satisfaction.includes(choice)) {
    return 'font-black bg-symbol'
  } else {
    return 'text-symbol'
  }
}
</script>

<template>
  <div
    :class="isClick ? 'animate-slide-out-top' : ''"
    class="animate-slide-in-bottom sm:pl-24 w-full"
  >
    <label>
      <h5
        class="animate-analog font-neon font-serif text-symbol text-md sm:text-xl font-extrabold sm:leading-[2.5rem] leading-none"
        :data-text="props.label"
      >{{ props.label }}</h5>
    </label>

    <div class="sm:my-8 my-4  overflow-y-scroll sm:h-auto h-[280px]">
      <div
        v-for="(choice, index) in props.options.choices"
        :key="index"
        class="mb-1 border border-symbol px-4 py-2 group hover:bg-symbol transition-all duration-300 cursor-pointer"
        :class="checkHandler(choice)"
        @click="checkHandler(choice)"
      >
        <label
          class="block relative cursor-pointer"
        >
          <input
            :type="props.type"
            :value="choice"
            v-model="formStore.satisfaction"
            class="hidden"
          >
          <span
            class="neon text-md sm:text-lg font-neon group-hover:text-[#000000]"
            :class="checkHandler(choice)"
          >{{ choice }}</span>
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
