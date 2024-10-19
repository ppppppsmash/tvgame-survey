<script setup>
import { useFormStore } from '~/stores/form'

defineProps({
  props: {
    type: Object,
    default: null
  },
})

const iconArray = [
  'game-icons:pistol-gun',
  'game-icons:running-ninja',
  'game-icons:puzzle',
  'game-icons:elven-castle',
  'game-icons:card-exchange',
  'game-icons:swords-emblem',
  'game-icons:rocket',
  'game-icons:american-football-helmet',
  'game-icons:archery-target',
  'game-icons:help',
]

const formStore = useFormStore()

const isClick = ref(false)

const isShow = ref(false)
watchEffect(() => {
  isShow.value = formStore.rooms.length ? true : false
})

const handleNext = () => {
  setTimeout(() => {
    formStore.roomsCheck = true
    formStore.roomsShow = false
  }, 1000)

  isClick.value = true
}

const checkHandler = (choice) => {
  if (formStore.rooms.includes(choice)) {
    return 'font-black bg-symbol'
  } else {
    return 'text-symbol bg-transparent'
  }
}

</script>

<template>
  <div
    v-if="formStore.roomsShow"
    :class="isClick ? 'animate-slide-out-top' : ''"
    class="animate-slide-in-bottom"
  >
    <label>
      <h5
        class="animate-analog font-neon font-serif text-symbol text-md sm:text-xl font-extrabold leading-[2.5rem]"
        :data-text="props.label"
      >{{ props.label }}</h5>
    </label>

    <div class="my-2 flex flex-wrap gap-4">
      <div
        v-for="(choice, index) in props.options.choices"
        :key="index"
        class="my-2 border border-symbol px-4 py-2 group hover:bg-symbol
          sm:w-[140px] sm:h-[100px] flex flex-col justify-center items-center
          w-[100px] h-[100px] transition-all duration-300 cursor-pointer"
        :class="checkHandler(choice)"
        @click="checkHandler(choice)"
      >
        <Icon
          :name="iconArray[index]"
          class="text-4xl group-hover:text-[#000000]"
          :class="checkHandler(choice)"
          @click="checkHandler(choice)"
        />
        <label
          class="block relative mt-3"
        >
          <input
            :type="props.type"
            :value="choice"
            v-model="formStore.rooms"
            class="hidden"
          >
          <span
            class="neon text-xs md:text-md font-neon group-hover:text-[#000000]"
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