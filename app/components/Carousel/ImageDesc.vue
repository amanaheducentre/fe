<script setup lang="ts">
type Direction = "forward" | "backward" | undefined;
const props = defineProps({
  direction: String,
  speed: Number,
});
import { getSampleImages } from "~/utils/lorem";

const items = ref(getSampleImages(1024, 1024, 6));
const { isMobile } = useDevice();
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    :auto-scroll="{
      direction: props.direction as Direction,
      speed: props.speed,
    }"
    :autoplay="{ delay: 5000 }"
    :items="items"
    :ui="{ item: isMobile ? '' : 'basis-1/3' }"
    class="flex flex-col justify-center items-center overflow-hidden w-full"
  >
    <div class="flex min-w-full min-h-max justify-center items-center relative">
      <NuxtImg :src="item" class="w-full h-full object-cover" />
      <div
        class="flex text-xs sm:text-sm w-[90%] sm:w-[85%] min-h-[20%] rounded-2xl sm:rounded-3xl bottom-0 mb-4 sm:mb-6 lg:mb-8 justify-center items-center bg-gradient-silver absolute z-10 text-center p-3 sm:p-4 shadow-lg"
      >
        Lorem ipsum dolor sit amet
      </div>
    </div>
  </UCarousel>
</template>
