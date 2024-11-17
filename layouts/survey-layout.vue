<script setup>
</script>

<template>
  <div class="relative bg-transparent overflow-hidden flex items-center justify-center animate-slide-in-bottom h-[100dvh]">

    <HeroRetroBg />
    <!-- <HeroBg /> -->

    <!-- <Header
      addClass="absolute top-0 left-0 z-50 text-primary"
    /> -->
    <HeroTitle addClass="absolute top-0 left-0 z-50" />

    <main class="relative z-50 sm:w-1/2 w-full sm:px-0 px-8">
      <slot />

      <p
        class="sm:fixed left-1/2 -translate-x-1/2 sm:block hidden bottom-2 text-symbol sm:text-sm font-extrabold font-neon"
      >
      <a href="https://kurosawa.fun" target="_blank">Created&nbsp;&nbsp;&nbsp;by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="underline animate-pulse">Kurosawa</span></a></p>
    </main>
  </div>
</template>
