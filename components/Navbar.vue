<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Amanah Edu Centre",
      to: "/",
      active: false,
      slot: "amanah" as const,
    },
  ],
  [
    {
      label: "Program",
      icon: "i-lucide-book-open",
      children: [
        {
          label: "Serasi",
          description: "Sekolah Ramah Inklusi",
          icon: "i-lucide-house",
          to: "/program/serasi",
        },
        {
          label: "CORONA",
          description: "Coding dan Robotik Amanah",
          icon: "i-lucide-cloud-download",
          to: "/program/corona",
        },
        {
          label: "Arunika",
          icon: "i-lucide-swatch-book",
          description: "Bimbel dan Kursus Menggambar",
          to: "/program/arunika",
        },
      ],
    },
    {
      label: "Promo",
      icon: "i-lucide-box",
      to: "/promo",
    },

    {
      label: "About Us",
      icon: "i-lucide-box",
      to: "/about_us",
    },
  ],
  [
    {
      label: "Help",
      icon: "i-lucide-circle-help",
      disabled: true,
    },
  ],
]);
</script>

<template>
  <UNavigationMenu
    color="primary"
    orientation="horizontal"
    :items="items"
    :ui="{
      viewport: 'sm:w-(--reka-navigation-menu-viewport-width)',
      content: 'sm:w-auto',
      childList: 'sm:w-96',
      childLinkDescription: 'text-balance line-clamp-2',
    }"
    class="data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48 h-18"
  >
    <template #amanah>
      <div>
        <NuxtLink to="/" class="flex items-center px-4 py-2">
          <img src="/favicon.ico" class="h-14 w-auto" />
        </NuxtLink>
      </div>
    </template>
  </UNavigationMenu>
</template>
