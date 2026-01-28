<script setup lang="ts">
import type { ProgramPricing } from "~~/shared/types/program";

interface Props {
  title?: string;
  pricing: ProgramPricing[];
  whatsappNumber: string;
  whatsappMessage: string;
  themeColor?: string;
  useSecondaryColor?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Paket & Harga",
  themeColor: "primary",
  useSecondaryColor: false,
});

const buttonColor = computed(() => {
  const colorMap: Record<string, "primary" | "daycare" | "kb" | "tk" | "hs"> = {
    primary: "primary",
    daycare: "daycare",
    kb: "kb",
    tk: "tk",
    hs: "hs",
  };
  return colorMap[props.themeColor] || "primary";
});

const getWhatsappLink = (packageName: string) => {
  const message = `${props.whatsappMessage}\n\nPaket yang diminati: ${packageName}`;
  return `https://wa.me/${props.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
</script>

<template>
  <section id="pricing" class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <ProgramSectionTitle
          :title="title"
          subtitle="Pilih paket yang sesuai dengan kebutuhan Anda"
          :theme-color="themeColor"
          :use-secondary-gradient="useSecondaryColor"
          align="center"
          size="md"
        />

        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <UCard
            v-for="(plan, index) in pricing"
            :key="index"
            :class="[
              'relative hover:shadow-2xl transition-all duration-300 overflow-visible',
              plan.recommended ? `ring-2 ring-${themeColor} scale-105 md:scale-110 shadow-xl` : 'hover:scale-105',
            ]"
          >
            <!-- Recommended Badge -->
            <div v-if="plan.recommended" class="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span :class="['text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg', `bg-${themeColor}`]">
                Paling Populer
              </span>
            </div>

            <div class="text-center">
              <!-- Package Name -->
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {{ plan.name }}
              </h3>

              <!-- Price -->
              <div class="mb-6">
                <div class="text-2xl font-semibold text-gray-600 dark:text-gray-400">Mulai Dari</div>
                <div class="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {{ plan.period }}
                </div>
              </div>

              <!-- Divider -->
              <div class="border-t border-gray-200 dark:border-gray-700 my-6" />

              <!-- Features -->
              <ul class="space-y-3 mb-8 text-left">
                <li v-for="(feature, idx) in plan.features" :key="idx" class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
                </li>
              </ul>

              <!-- CTA Button -->
              <UButton
                :to="getWhatsappLink(plan.name)"
                external
                target="_blank"
                size="lg"
                :color="plan.recommended ? buttonColor : 'neutral'"
                block
                class="shadow-md"
              >
                <UIcon name="i-heroicons-chat-bubble-left-right" class="mr-2" />
                Hubungi Kami
              </UButton>
            </div>
          </UCard>
        </div>

        <!-- Additional Info -->
        <div class="mt-12 text-center">
          <p class="text-gray-600 dark:text-gray-400">
            Hubungi kami untuk informasi harga dan paket yang sesuai dengan kebutuhan Anda
          </p>
          <p class="text-gray-600 dark:text-gray-400 mt-2">
            * Tersedia diskon untuk pendaftaran lebih dari 1 anak atau paket tahunan
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
