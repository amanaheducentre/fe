<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  layout: "sidebar",
});
</script>

<template>
  <div class="flex w-full h-full justify-center">
    <div class="w-4xl py-8">
      <iframe
        src="https://www.youtube-nocookie.com/embed/naz0-szzYXk"
        title="YouTube video player"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        style="aspect-ratio: 16/9; width: 100%"
      ></iframe>
    </div>
  </div>
</template>
