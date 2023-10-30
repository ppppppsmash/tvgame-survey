<script setup>
defineProps({
  props: {
    type: Object,
    default: null
  }
})

const feedback = ref('')

const isShow = ref(false)
watchEffect(() => {
  isShow.value = feedback.value ? true : false
})

</script>

<template>
  <div class="w-full my-6">
    <div>
      <label>
        <h5 class="text-2xl font-extrabold leading-[2.5rem]">{{ props.label }}</h5>
      </label>

      <input
        class="w-full leading-8 font-bold border-0 border-b-2 bg-transparent text-xl
          outline-none text-white placeholder-white my-8"
        :type="props.type"
        :name="props.name"
        :placehold="props.options.attrs.placeholder"
        v-model="feedback"
      />
    </div>

    <NextButton
      :class="[isShow ? 'block' : 'hidden']"
      @click="handleNext"
    />
  </div>
</template>