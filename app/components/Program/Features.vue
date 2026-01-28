<script setup lang="ts">
import type { ProgramFeature } from "~~/shared/types/program";

interface Props {
  title?: string;
  features: ProgramFeature[];
  benefits?: string[];
  image?: string;
  imagePosition?: "left" | "right";
  themeColor?: string;
  useSecondaryColor?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Keunggulan Program",
  imagePosition: "right",
  themeColor: "primary",
  useSecondaryColor: false,
});
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <!-- Section with Image -->
      <div v-if="image" class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <!-- Image -->
        <div :class="imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <NuxtImg
              :src="image"
              :alt="title"
              class="w-full h-100 lg:h-125 object-cover"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:50vw"
            />
          </div>
        </div>

        <!-- Text Content -->
        <div :class="imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'">
          <ProgramSectionTitle
            :title="title"
            :theme-color="themeColor"
            :use-secondary-gradient="useSecondaryColor"
            align="left"
            size="md"
          />

          <!-- Benefits List -->
          <div v-if="benefits && benefits.length > 0" class="space-y-4">
            <div v-for="(benefit, index) in benefits.slice(0, 6)" :key="index" class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl shrink-0 mt-0.5" />
              <span class="text-gray-700 dark:text-gray-300 text-lg">{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Title (if no image) -->
      <div v-else class="text-center mb-12">
        <ProgramSectionTitle :title="title" :theme-color="themeColor" align="center" size="md" />
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <UCard v-for="(feature, index) in features" :key="index" class="hover:shadow-lg transition-shadow duration-300">
          <div class="flex flex-col items-center text-center">
            <!-- Icon -->
            <div
              :class="[
                'w-16 h-16 rounded-full flex items-center justify-center mb-4',
                `bg-${themeColor}-100 dark:bg-${themeColor}-900/30`,
              ]"
            >
              <UIcon :name="feature.icon" :class="['text-3xl', `text-${themeColor}-600 dark:text-${themeColor}-400`]" />
            </div>

            <!-- Title -->
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {{ feature.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-300">
              {{ feature.description }}
            </p>
          </div>
        </UCard>
      </div>

      <!-- Benefits List (if provided) -->
      <div v-if="benefits && benefits.length > 0" class="mt-12">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Manfaat untuk Anak & Orang Tua
        </h3>
        <div class="max-w-3xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(benefit, index) in benefits" :key="index" class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl shrink-0 mt-0.5" />
              <span class="text-gray-700 dark:text-gray-300">{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
