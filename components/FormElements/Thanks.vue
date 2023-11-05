<script setup>
</script>

<template>
  <div
    id="thanks"
    class="w-full my-6 animate-slide-in-bottom"
  >
    <h5
      class="animate-analog tv-zoom-out text-symbol text-left sm:text-center font-neon text-white text-md sm:text-2xl font-black
        leading-[2.5rem] mb-8"
      data-text="ご回答いただきありがとうございました"
    >
      ご回答いただきありがとうございました
    </h5>
    <div
      class="tv-zoom-out w-full mx-auto flex justify-center mt-4"
    >
      <img
        src="/images/tv.png"
        width="240"
        class="tv absolute w-1/2"
        style="animationDelay: 3.4s"
      />

      <video
        loop
        autoplay
        playsinline
        conntrols
        class="w-1/3 mr-8 mt-2 sm:mr-16 sm:mt-5"
      >
        <source
          src="/video/ghostbusters.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<style lang="scss">
.tv {
  background-image: linear-gradient( #000 0%, transparent );
}

.tv-zoom-out {
	animation: zoom-out 40s ease-in-out forwards;
}

.neonText {
  animation: neon1 1.5s ease-in-out infinite alternate;
}

.titleAction {
  opacity: 0;
  animation: title-action 1s 1s ease-in-out forwards;
}

@keyframes zoom-out {
  100% {
    transform: scale(0)
  } 
}

@keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff,
      0 0 20px  #fff,
      0 0 30px  #fff,
      0 0 40px  #ED2B12,
      0 0 70px  #ED2B12,
      0 0 80px  #ED2B12,
      0 0 100px #ED2B12,
      0 0 150px #ED2B12;
  }
  to {
    text-shadow: 0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #fff,
      0 0 20px #ED2B12,
      0 0 35px #ED2B12,
      0 0 40px #ED2B12,
      0 0 50px #ED2B12,
      0 0 75px #ED2B12;
  }
  }

  @keyframes title-action {
    0% {
      opacity: 0;
      transform: translateY(-200px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
}

.animate-analog {
  margin:0 auto;
}
@keyframes noise-anim {
  $steps:20;
  @for $i from 0 through $steps {
    #{percentage($i*calc(1/$steps))}{
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
    }
  }
}

#thanks {
  @media screen and (min-width:450) {
    .animate-analog:after {
      content: attr(data-text);
      position: absolute;
      left: 21%;
      text-shadow: -1px 0 red;
      top: 0;
      color: #ED2B12;
      background: black;
      overflow: hidden;
      clip: rect(0,900px,0,0); 
      animation: noise-anim 2s infinite linear alternate-reverse;
    }
    .animate-analog:before {
      content: attr(data-text);
      position: absolute;
      left: 21%;
      text-shadow: 1px 0 blue; 
      top:0;
      color: #ED2B12;
      background: black;
      overflow: hidden;
      clip: rect(0,900px,0,0); 
      animation: noise-anim-2 3s infinite linear alternate-reverse;
    }
  }
}

.animate-analog:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  color: #ED2B12;
  background: black;
  overflow: hidden;
  clip: rect(0,900px,0,0); 
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*calc(1/$steps))} {
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}
.animate-analog:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue; 
  top:0;
  color: #ED2B12;
  background: black;
  overflow: hidden;
  clip: rect(0,900px,0,0); 
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}
</style>