<script setup lang="ts">
const items = [
  "https://picsum.photos/1024/1024?random=1",
  "https://picsum.photos/1024/1024?random=2",
  "https://picsum.photos/1024/1024?random=3",
  "https://picsum.photos/1024/1024?random=4",
  "https://picsum.photos/1024/1024?random=5",
  "https://picsum.photos/1024/1024?random=6",
];
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    :autoplay="{ delay: 5000 }"
    :items="items"
    class="flex flex-col justify-center items-center rounded-3xl overflow-hidden"
  >
    <div class="flex min-w-full min-h-max justify-center items-center">
      <div>
        <NuxtImg :src="item" />
      </div>
      <div
        class="flex text-xs min-w-[85%] min-h-[25%] rounded-3xl bottom-0 mb-8 justify-center items-center bg-gradient-silver absolute z-10 text-center p-4"
      >
        Lorem ipsum dolor sit amet
      </div>
    </div>
  </UCarousel>
</template>
