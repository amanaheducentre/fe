<script setup lang="ts">
const { isMobile } = useDevice();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Mobile Layout -->
    <div class="flex-1">
      <div class="sticky top-0 z-9999 w-full">
        <NavBar />
      </div>
      <slot />
    </div>

    <!-- Footer -->
    <footer class="justify-center py-8 text-sm bg-gradient-orange text-white z-9999">
      <Footer />
    </footer>
  </div>
</template>
