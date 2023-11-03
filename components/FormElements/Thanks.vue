<script setup>
</script>

<template>
  <div class="w-full my-6 animate-slide-in-bottom">
    <h5
      class="text-center font-serif text-symbol text-md sm:text-xl font-extrabold leading-[2.5rem]
        mb-8"
    >
      ご回答いただきありがとうございました
    </h5>
    <!-- <div
      class="w-full h-[200px] bg-[url('./images/tv.png')] bg-center bg-[length:200px_auto]"
    ></div> -->

    <div class="overflow-hidden w-full mx-auto flex justify-center">
      <img
        src="/images/tv.png"
        width="240"
        class="tv absolute w-1/2"
      />

      <video
        loop
        autoplay
        playsinline
        conntrols
        class="w-1/3 mr-16 mt-5"
      >
        <source
          src="/video/ghostbusters.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<style>
.tv {
  background-image: linear-gradient( #000 0%, transparent );
}
</style>