<script setup lang="ts">
interface Props {
  title?: string;
  images: string[];
  themeColor?: string;
  useSecondaryColor?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Galeri Foto",
  themeColor: "primary",
  useSecondaryColor: false,
});

const selectedImage = ref<string | null>(null);

const openLightbox = (image: string) => {
  selectedImage.value = image;
};

const closeLightbox = () => {
  selectedImage.value = null;
};
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
            v-for="(image, index) in images"
            :key="index"
            class="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            @click="openLightbox(image)"
          >
            <NuxtImg
              :src="image"
              :alt="`Gallery image ${index + 1}`"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              sizes="sm:50vw md:33vw lg:25vw"
            />

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-magnifying-glass-plus"
                class="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>

        <!-- Lightbox Modal -->
        <Teleport to="body">
          <div
            v-if="selectedImage"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            @click="closeLightbox"
          >
            <!-- Close Button -->
            <button
              class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              @click.stop="closeLightbox"
            >
              <UIcon name="i-heroicons-x-mark" class="text-4xl" />
            </button>

            <!-- Image -->
            <div class="max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center" @click.stop>
              <NuxtImg
                :src="selectedImage"
                alt="Gallery image enlarged"
                class="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </Teleport>
      </div>
    </div>
  </section>
</template>
