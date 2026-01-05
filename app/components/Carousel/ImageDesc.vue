<script setup lang="ts">
import { getSampleImages } from "~/utils/lorem";

const items = ref(getSampleImages(1024, 1024, 6));
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
                <NuxtImg :src="item" class="rounded-3xl" />
            </div>
            <div
                class="flex text-xs min-w-[85%] min-h-[25%] rounded-3xl bottom-0 mb-8 justify-center items-center bg-gradient-silver absolute z-10 text-center p-4"
            >
                Lorem ipsum dolor sit amet
            </div>
        </div>
    </UCarousel>
</template>
