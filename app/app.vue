<script setup lang="ts">
import { useHead } from "#app";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
import { useWindowStore } from "./stores/window";

useSeoMeta({
  title: "LKP AManah Edu Centre",
  description: "Lembaga Kursus No.1 di Banyuwangi",
});

useHead({
  htmlAttrs: {
    class: "scroll-smooth text-body",
  },
});

const windowStore = useWindowStore();

const handleScroll = () => {
  windowStore.handleScroll(window);
};

onNuxtReady(async () => {
  window.addEventListener("scroll", handleScroll);

  while (true) {
    await sleep(100);
    if (windowStore.scrollDirectionTimeout > 0) {
      windowStore.scrollDirectionTimeout -= 0.1;
    } else {
      windowStore.scrollDirection = true;
    }
  }
});
</script>

<template>
  <SpeedInsights />
  <div class="scroll-smooth">
    <NuxtRouteAnnouncer />
    <UApp>
      <NuxtLayout>
        <ModalLogin />
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
