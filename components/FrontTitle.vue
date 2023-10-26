<script setup>
const isShow = ref(true)
const router = useRouter()

const timeout = () => {
  setTimeout(() => {
    isShow.value = false
  }, 5000)
}

onMounted(() => {
  timeout()
})

watchEffect(() => {
  if (!isShow.value) {
    setTimeout(() => {
      router.push({ path: '/greeting'})
    }, 1000)
  }
})
</script>

<template>
  <div :class="[!isShow && 'animate-slide-out-top']">
    <div
      class="animate-slide-in-top bg-primary flex items-center justify-center w-full h-screen"
    >
      <div class="relative border-[10px] border-[#FFFFFF] rounded-full px-10 py-2 animate-slide-in-fwd-center">
        <h1 class="text-8xl text-white font-semibold">WebCrew</h1>
        <p class="absolute top-4 right-6 text-white text-xl font-semibold">&reg;</p>
      </div>
    </div>
  </div>
</template>