<script setup>
</script>

<template>
  <div class="w-full my-6 animate-slide-in-bottom">
    <h5
      class="neonText text-center font-neon text-whitetext-md sm:text-2xl font-extrabold leading-[2.5rem]
        mb-8"
    >
      ご回答いただきありがとうございました
    </h5>
    <!-- <div
      class="w-full h-[200px] bg-[url('./images/tv.png')] bg-center bg-[length:200px_auto]"
    ></div> -->

    <div class="test overflow-hidden w-full mx-auto flex justify-center">
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

.test {
	animation: zoom-out 25s ease-in-out forwards;
}

.neonText {
  animation: neon1 1s ease-in-out infinite alternate;
}

@keyframes zoom-out {
  100% { transform:scale(0)} 
}

@keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #DC2626,
      0 0 70px #DC2626, 0 0 80px #DC2626, 0 0 100px #DC2626, 0 0 150px #DC2626;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #DC2626,
      0 0 35px #DC2626, 0 0 40px #DC2626, 0 0 50px #DC2626, 0 0 75px #DC2626;
  }
}
</style>