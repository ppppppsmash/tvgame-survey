<script setup>
const props = defineProps(['zoom', 'noise', 'video', 'url'])
const { zoom, noise, video, url } = toRefs(props) 
</script>

<template>
  <div
      class="w-full mx-auto flex justify-center mt-4"
      :class="zoom"
    >
      <div class="relative">
        <img
          src="/images/tv.png"
          width="240"
          class="tv absolute w-full z-30"
          style="animationDelay: 3.4s"
        />

        <p :class="noise" />

        <video
          loop
          autoplay
          playsinline
          conntrols
          class="z-20 left-0"
          :class="video"
        >
          <source
            :src="url"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
</template>