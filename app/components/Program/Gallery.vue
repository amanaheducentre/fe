<script setup lang="ts">
interface Props {
  title?: string;
  images: string[][];
  themeColor?: string;
  useSecondaryColor?: boolean;
}

const { isMobile } = useDevice();

const props = withDefaults(defineProps<Props>(), {
  title: "Galeri Foto",
  themeColor: "primary",
  useSecondaryColor: false,
});
</script>

<template>
  <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <ProgramSectionTitle
          :title="title"
          :theme-color="themeColor"
          :use-secondary-gradient="useSecondaryColor"
          align="center"
          size="md"
        />

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="(imageList, index) in images"
            :key="index"
            class="gallery-item relative overflow-hidden rounded-lg group"
          >
            <figure v-if="!isMobile" class="hover-gallery">
              <NuxtImg v-for="image in imageList" :src="image" class="rounded-lg" />
            </figure>
            <UCarousel
              v-else
              v-slot="{ item }"
              loop
              :autoplay="{ delay: 3000 }"
              wheel-gestures
              :prev="{ variant: 'solid' }"
              :next="{ variant: 'solid' }"
              :items="imageList"
              :ui="{
                item: 'ps-0',
                prev: 'sm:start-8',
                next: 'sm:end-8',
                container: 'ms-0',
              }"
            >
              <NuxtImg :src="item" class="rounded-lg" />
            </UCarousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
