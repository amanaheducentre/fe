<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const labelClass =
  "text-arcon text-black font-light text-md bg-transparent mx-1 flex text-center justify-center items-center";
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Amanah Edu Centre",
      to: "/",
      active: false,
      slot: "amanah" as const,
      class: "w-48 hidden md:flex",
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
          to: "#",
        },
        {
          label: "CORONA",
          description: "Coding dan Robotik Amanah",
          to: "#",
        },
        {
          label: "Arunika",
          description: "Bimbel dan Kursus Menggambar",
          to: "#",
        },
        {
          label: "Lensa",
          description: "Learn English with GSA",
          to: "#",
        },
        {
          label: "GSA",
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
      label: "BEASISWA",
      to: "#",
      class: labelClass + " mr-8",
    },
    {
      label: "LOG IN",
      to: "#",
      class: "text-white font-bold mx-1 bg-gray-500 rounded",
    },
    {
      label: "SIGN UP",
      to: "#",
      class: "text-white font-bold mx-1 bg-raka-orange rounded mr-8",
    },
  ],
]);
</script>

<template>
  <UNavigationMenu
    orientation="horizontal"
    :items="items"
    :ui="{
      item: 'flex justify-center',
      link: 'hover:before:bg-transparent',
      label: 'hover:before:bg-transparent',
      viewport: 'sm:w-(--reka-navigation-menu-viewport-width)',
      content: 'sm:w-auto',
      childList: 'sm:w-96 p-1',
      childLinkLabel: 'text-bold text-md',
      childLinkDescription: 'text-balance line-clamp-2',
    }"
    class="data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48 h-18"
  >
    <template #amanah>
      <div>
        <NuxtLink to="/" class="flex items-center pl-5">
          <img src="/img/lkp.png" class="h-12 w-auto" />
        </NuxtLink>
      </div>
    </template>
  </UNavigationMenu>
</template>
