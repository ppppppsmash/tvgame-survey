<script setup lang="ts">
</script>

<template>
  <div class="absolute bottom-12 left-1/2 -translate-x-1/2
    hover:-translate-y-1 hover:scale-95 duration-300">
    <NuxtLink
      to="/survey"
      class="block"
    >
      <div class="relative w-ful flex justify-center h-[24px]">
        <div
          class="z-50 absolute w-[20px] h-[6px] opacity-0 before:absolute before:content-[' ']
            before:top-4 before:h-full before:w-[51%] before:bg-symbol after:content-[' ']
            after:absolute after:top-4 after:h-full after:w-[51%] after:bg-symbol
            before:left-0 after:right-0 after:w-1/2 before:skew-y-30
            after:-skew-y-30
            animate-scroll-move-default
            animate-scroll-move-primary"
        />
        <div class="z-50 absolute w-[20px] h-[6px] opacity-0 before:absolute before:content-[' ']
            before:top-4 before:h-full before:w-[51%] before:bg-symbol after:content-[' ']
            after:absolute after:top-4 after:h-full after:w-[51%] after:bg-symbol
            before:left-0 after:right-0 after:w-1/2 before:skew-y-30
            after:-skew-y-30
            animate-scroll-move-default
            animate-scroll-move-secondary"
        
        />
        <div class="z-50 absolute w-[20px] h-[6px] opacity-0 before:absolute before:content-[' ']
            before:top-4 before:h-full before:w-[51%] before:bg-symbol after:content-[' ']
            after:absolute after:top-4 after:h-full after:bg-symbol
            before:left-0 after:right-0 after:w-1/2 before:skew-y-30
            after:-skew-y-30
            animate-scroll-move-default"
        />
        <span class="animate-pulse sm:text-md text-xs font-bold text-symbol font-symbol">
          Click Here
        </span>
      </div>
    </NuxtLink>
  </div>
</template>