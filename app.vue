<script setup lang="ts">
import { initializeKinesis } from "@amineyarman/kinesis";

useSeoMeta({
  title: "LKP AManah Edu Centre",
  description: "Lembaga Kursus No.1 di Banyuwangi",
});

onMounted(() => {
  initializeKinesis();
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp>
      <div
        class="backdrop-blur-md bg-transparent w-full h-full flex justify-center sticky b-[url('/img/bg_navbar.png')] bg-no-repeat bg-cover bg-bottom drop-shadow-md top-0 z-9999"
      >
        <div class="w-full h-24 flex justify-center items-center bg-white/80">
          <Navbar />
        </div>
      </div>
      <NuxtPage />
      <div class="relative z-9999 flex justify-center bg-blue-500">
        <Footer> </Footer>
      </div>
    </UApp>
  </div>
</template>
