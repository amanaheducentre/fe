<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
  image: string;
  imagePosition?: "left" | "right";
  features?: string[];
  backgroundColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imagePosition: "right",
  backgroundColor: "bg-white dark:bg-gray-800",
});
</script>

<template>
  <section class="py-16 md:py-24" :class="backgroundColor">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div :class="imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <NuxtImg
              :src="image"
              :alt="title"
              class="w-full h-[400px] lg:h-[600px] object-cover"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:50vw"
            />
          </div>
        </div>

        <!-- Content -->
        <div :class="imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {{ title }}
          </h2>
          <div class="w-20 h-1 bg-primary-500 rounded-full mb-6" />

          <p v-if="description" class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {{ description }}
          </p>

          <!-- Features/Benefits List -->
          <div v-if="features && features.length > 0" class="space-y-4">
            <div v-for="(feature, index) in features" :key="index" class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 text-2xl flex-shrink-0 mt-0.5" />
              <span class="text-gray-700 dark:text-gray-300 text-lg">{{ feature }}</span>
            </div>
          </div>

          <!-- Slot for custom content -->
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
