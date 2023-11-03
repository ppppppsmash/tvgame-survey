<script setup>
</script>

<template>
  <div class="relative bg-transparent overflow-hidden flex items-center justify-center animate-slide-in-bottom h-screen">

    <HeroRetroBg />
    <!-- <HeroBg /> -->

    <!-- <Header
      addClass="absolute top-0 left-0 z-50 text-primary"
    /> -->
    <HeroTitle addClass="absolute top-0 left-0 z-50" />

    <main class="relative z-50 sm:w-1/2 w-full sm:px-0 px-8">
      <slot />
    </main>
  </div>
</template>
