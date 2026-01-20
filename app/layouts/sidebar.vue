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
    <div v-else class="flex flex-1 overflow-hidden">
      <aside class="w-64 lg:w-72 xl:w-80 shrink-0">
        <div class="sticky top-0 h-screen overflow-y-auto">
          <SideBar />
        </div>
      </aside>

      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <footer class="w-full flex justify-center py-4 sm:py-5 text-xs sm:text-sm bg-black text-white">
      &copy; 2025 Amanah Edu Centre
    </footer>
  </div>
</template>
