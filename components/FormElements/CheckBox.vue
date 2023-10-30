<script setup>
defineProps({
  props: {
    type: Object,
    default: null
  }
})

const rooms = ref([])

const isShow = ref(false)
watchEffect(() => {
  isShow.value = rooms.value.length ? true : false
})

</script>

<template>
  <div>
    <label>
      <h5 class="text-2xl font-extrabold leading-[2.5rem]">{{ props.label }}</h5>
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
          v-model="rooms"
        />
        <span class="text-xl">{{ choice }}</span>
      </div>
    </div>

    <NextButton
      :class="[isShow ? 'block' : 'hidden']"
      @click="handleNext"
    />
  </div>
</template>