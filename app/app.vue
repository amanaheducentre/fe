<script setup lang="ts">
import { useHead } from "#app";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

useSeoMeta({
  title: "LKP AManah Edu Centre",
  description: "Lembaga Kursus No.1 di Banyuwangi",
});

useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
});
</script>

<template>
  <SpeedInsights />
  <div class="scroll-smooth">
    <NuxtRouteAnnouncer />
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
