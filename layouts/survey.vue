<script setup lang="ts">
</script>

<template>
  <div class="animate-slide-in-bottom bg-brand/30">
    <Header
      addClass="relative sm:ml-6"
    />
    <main class="w-full sm:w-8/12 sm:mx-auto px-4">
      <slot />
    </main>
  </div>
</template>