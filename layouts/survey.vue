<script setup>
</script>

<template>
  <div class="flex items-center justify-center animate-slide-in-bottom bg-brand/30 h-screen">

    <Header addClass="absolute top-0 left-0 z-50" />

    <AnimationBg />

    <main class="relative z-50 w-1/2">
      <slot />
    </main>
  </div>
</template>
