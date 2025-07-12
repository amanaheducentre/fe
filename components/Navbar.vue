<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const labelClass = "text-black text-md bg-transparent mx-1 hover:text-sky-500";
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
      label: "PROGRAM",
      class: labelClass,
      children: [
        {
          label: "Serasi",
          description: "Sekolah Ramah Inklusi",
          icon: "i-lucide-house",
          to: "#",
        },
        {
          label: "CORONA",
          description: "Coding dan Robotik Amanah",
          icon: "i-lucide-cloud-download",
          to: "#",
        },
        {
          label: "Arunika",
          icon: "i-lucide-swatch-book",
          description: "Bimbel dan Kursus Menggambar",
          to: "#",
        },
        {
          label: "Lensa",
          icon: "i-lucide-swatch-book",
          description: "Learn English with GSA",
          to: "#",
        },
        {
          label: "GSA",
          icon: "i-lucide-swatch-book",
          description: "Griya Sinau Amanah",
          to: "#",
        },
      ],
    },
    {
      label: "TESTIMONI",
      to: "#",
      class: labelClass,
    },

    {
      label: "BLOG",
      to: "#",
      class: labelClass,
    },
    {
      label: "BEASISWA",
      to: "#",
      class: labelClass,
    },
  ],
  [{}],
]);
</script>

<template>
  <UNavigationMenu
    orientation="horizontal"
    :items="items"
    :ui="{
      viewport: 'sm:w-(--reka-navigation-menu-viewport-width)',
      content: 'sm:w-auto',
      childList: 'sm:w-96 p-1',
      childLinkDescription: 'text-balance line-clamp-2',
    }"
    class="data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48 h-18"
  >
    <template #amanah>
      <div>
        <NuxtLink to="/" class="flex items-center px-4 py-2">
          <img src="/img/lkp.png" class="h-12 w-auto" />
        </NuxtLink>
      </div>
    </template>
  </UNavigationMenu>
</template>
