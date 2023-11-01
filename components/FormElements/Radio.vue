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
    return 'text-black bg-symbol';
  } else {
    return '';
  }
}
</script>

<template>
  <div
    :class="isClick ? 'animate-slide-out-top' : ''"
    class="animate-slide-in-bottom"
  >
    <label>
      <h5 class="font-serif text-symbol text-2xl font-extrabold leading-[2.5rem]">
        {{ props.label }}
      </h5>
    </label>

    <div class="my-8 flex items-center gap-x-4 w-full">
      <div
        v-for="(choice, index) in props.options.choices"
        :key="index"
        class="my-2"
      >
        <label
          class="block relative border-2 border-symbol border-solid px-8 py-6 cursor-pointer"
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
            class="text-xl text-symbol font-serif"
            :class="radioHandler(choice)"
          >
            {{ choice }}
          </span>
        </label>
      </div>
    </div>

    <NextButton
      :class="[isShow ? 'block' : 'hidden']"
      @click="handleNext"
      :name="props.buttonText"
    />
  </div>
</template>