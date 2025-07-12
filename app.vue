<script setup lang="ts">
import { initializeKinesis } from "@amineyarman/kinesis";

onMounted(() => {
  initializeKinesis();
});
</script>

<template>
  <div class="fixed bottom-0 right-0 mr-5 mb-18">
    <div class="h-max w-max bg-white p-2 rounded-full shadow-md">
      <NuxtLink to="#" target="_blank">
        <IconsWhatsapp size="52" color="#075e54" />
      </NuxtLink>
    </div>
  </div>
  <div>
    <NuxtRouteAnnouncer />
    <UApp>
      <div
        class="backdrop-blur-md bg-transparent w-full h-full flex justify-center sticky b-[url('/img/bg_navbar.png')] bg-no-repeat bg-cover bg-bottom drop-shadow-md top-0 z-9999"
      >
        <div class="w-full h-14 flex justify-center items-center bg-white/80">
          <Navbar />
        </div>
      </div>
      <NuxtPage />
      <div class="flex justify-center bg-blue-500">
        <Footer> </Footer>
      </div>
    </UApp>
  </div>
</template>
