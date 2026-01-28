<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  image: string;
  href: string;
  ageRange?: string;
}

const props = defineProps<Props>();

const isHovered = ref(false);
</script>

<template>
  <NuxtLink
    :to="href"
    class="group relative block overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Image Container -->
    <div class="relative aspect-[4/3] overflow-hidden bg-gray-200">
      <NuxtImg
        :src="image"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:33vw"
      />

      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500"
        :class="isHovered ? 'opacity-90' : 'opacity-70'"
      />
    </div>

    <!-- Content Overlay -->
    <div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
      <!-- Age Badge -->
      <div
        v-if="ageRange"
        class="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 transition-all duration-300"
        :class="isHovered ? 'bg-white/30 translate-y-0' : 'translate-y-2'"
      >
        <UIcon name="i-heroicons-cake" class="text-sm" />
        <span class="text-xs font-medium">{{ ageRange }}</span>
      </div>

      <!-- Title -->
      <h3
        class="text-2xl font-bold transition-all duration-300 mb-2"
        :class="isHovered ? 'translate-y-0' : 'translate-y-2'"
      >
        {{ title }}
      </h3>

      <!-- Description -->
      <p
        class="text-sm text-white/90 transition-all duration-500 line-clamp-2"
        :class="isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        {{ description }}
      </p>

      <!-- CTA Arrow -->
      <div
        class="mt-4 flex items-center gap-2 text-sm font-semibold transition-all duration-300"
        :class="isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'"
      >
        <span>Pelajari Lebih Lanjut</span>
        <UIcon
          name="i-heroicons-arrow-right"
          class="text-lg transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </div>

    <!-- Shine Effect on Hover -->
    <div
      class="absolute inset-0 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full"
      style="background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)"
    />
  </NuxtLink>
</template>
