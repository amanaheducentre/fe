<script setup lang="ts">
interface Props {
  title: string;
  tagline: string;
  description: string;
  ageRange: string;
  heroImage: string;
  heroVideo: string;
  ctaText?: string;
  ctaLink?: string;
  themeColor?: string;
  useSecondaryColor?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  ctaText: "Daftar Sekarang",
  ctaLink: "#contact",
  themeColor: "primary",
  useSecondaryColor: false,
});

const buttonColor = computed(() => {
  const colorMap: Record<string, "primary" | "daycare" | "kb" | "tk" | "serasi" | "hs"> = {
    primary: "primary",
    daycare: "daycare",
    kb: "kb",
    tk: "tk",
    serasi: "serasi",
    hs: "hs",
  };
  return colorMap[props.themeColor] || "primary";
});
</script>

<template>
  <section class="relative min-h-[600px] flex items-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <video
        v-if="props.heroVideo"
        loop
        autoplay
        muted
        playsinline
        :src="props.heroVideo"
        class="absolute inset-0 w-full h-full object-cover z-40"
      ></video>
      <NuxtImg
        v-else
        :src="heroImage"
        :alt="title"
        class="w-full h-full object-cover"
        loading="eager"
        sizes="sm:100vw md:100vw lg:100vw"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-transparent z-45" />
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl">
        <!-- Age Badge -->
        <div
          :class="[
            'inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-4 py-2 mb-6',
            `bg-${themeColor}-500/20 border-${themeColor}-500/30`,
          ]"
        >
          <UIcon name="i-heroicons-cake" :class="`text-${themeColor}-400`" />
          <span class="text-sm font-medium text-white">{{ ageRange }}</span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {{ title }}
        </h1>

        <!-- Tagline -->
        <p class="text-xl md:text-2xl text-gray-200 mb-6 font-medium">
          {{ tagline }}
        </p>

        <!-- Description -->
        <p class="text-lg text-gray-300 mb-8 leading-relaxed">
          {{ description }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <UButton :to="ctaLink" size="xl" :color="buttonColor" class="shadow-lg">
            <UIcon name="i-heroicons-rocket-launch" class="mr-2" />
            {{ ctaText }}
          </UButton>

          <UButton to="#pricing" size="xl" color="neutral" variant="outline" class="shadow-lg backdrop-blur-sm">
            <UIcon name="i-heroicons-banknotes" class="mr-2" />
            Lihat Harga
          </UButton>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <UIcon name="i-heroicons-chevron-down" class="text-white text-3xl" />
    </div>
  </section>
</template>
