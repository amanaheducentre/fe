<script setup lang="ts">
const props = defineProps({
  src: String,
});
</script>

<template>
  <div class="relative w-full min-h-screen">
    <video
      loop
      autoplay
      muted
      playsinline
      :src="props.src"
      class="absolute inset-0 w-full h-full object-cover z-40"
    ></video>
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/40 z-45"></div>
    <div class="relative z-50 h-full">
      <slot />
    </div>
  </div>
</template>
