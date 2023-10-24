<script setup>
</script>

<template>
  <div class="bg-tertiary overflow flex items-center justify-center animate-slide-in-bottom h-screen">

    <Header
      addClass="absolute top-0 left-0 z-50 text-primary"
    />

    <!-- <AnimationBg /> -->

    <main class="relative z-50 w-1/2">
      <slot />
    </main>
  </div>
</template>
