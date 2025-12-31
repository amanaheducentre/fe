<script setup lang="ts">
import { useHead } from "#app";
import { initializeKinesis } from "@amineyarman/kinesis";

useSeoMeta({
  title: "LKP AManah Edu Centre",
  description: "Lembaga Kursus No.1 di Banyuwangi",
});

useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
});

onMounted(() => {
  initializeKinesis();
});
</script>

<template>
  <div class="scroll-smooth">
    <NuxtRouteAnnouncer />
    <UApp>
      <div class="fixed z-9999 flex w-full h-max">
        <Navbar></Navbar>
      </div>
      <NuxtPage />
      <div class="relative z-9999 flex justify-center">
        <Footer> </Footer>
      </div>
    </UApp>
  </div>
</template>
