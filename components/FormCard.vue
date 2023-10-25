<script setup lang="ts">
import { onMounted, ref } from 'vue'

const form = ref({
  rooms: [],
  like: '',
  feedback: '',
  event: '',
  name: ''
})
</script>

<template>
  <div class="bg-black">
    <slot />
  </div>
</template>