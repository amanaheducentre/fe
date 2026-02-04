<script setup lang="ts">
interface Props {
  title?: string;
  images: string[][];
  themeColor?: string;
  useSecondaryColor?: boolean;
}

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
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="(imageList, index) in images"
            :key="index"
            class="gallery-item relative overflow-hidden rounded-lg group"
          >
            <figure class="hover-gallery">
              <NuxtImg v-for="image in imageList" :src="image" class="rounded-lg" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
