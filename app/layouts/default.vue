<script setup lang="ts">
const { isMobile } = useDevice();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Mobile Layout -->
    <div v-if="isMobile" class="flex-1">
      <div class="sticky top-0 z-50 w-full">
        <NavBar />
      </div>
      <slot />
    </div>

    <!-- Desktop Layout -->
    <div v-else class="flex flex-col">
      <NavBar />
      <slot />
    </div>

    <!-- Footer -->
    <footer class="w-full flex justify-center py-8 text-sm bg-gradient-orange text-white z-9999">
      <Footer />
    </footer>
  </div>
</template>
