<script setup lang="ts">
import type { ProgramFAQ } from "~~/shared/types/program";

interface Props {
  title?: string;
  faqs: ProgramFAQ[];
  themeColor?: string;
  useSecondaryColor?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Pertanyaan yang Sering Diajukan",
  themeColor: "primary",
  useSecondaryColor: false,
});

const items = computed(() =>
  props.faqs.map((faq, index) => ({
    slot: `item-${index}`,
    label: faq.question,
    content: faq.answer,
  })),
);

// Map theme color to valid UI colors
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
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <ProgramSectionTitle
          :title="title"
          subtitle="Temukan jawaban atas pertanyaan umum tentang program kami"
          :theme-color="themeColor"
          :use-secondary-gradient="useSecondaryColor"
          align="center"
          size="md"
        />
      </div>

      <!-- FAQ Accordion -->
      <div class="max-w-4xl mx-auto">
        <UAccordion :items="items">
          <template v-for="(faq, index) in faqs" :key="index" #[`item-${index}`]>
            <div class="text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ faq.answer }}
            </div>
          </template>
        </UAccordion>

        <!-- Contact CTA -->
        <div class="mt-12 text-center">
          <p class="text-gray-600 dark:text-gray-400 mb-4">Masih ada pertanyaan lain?</p>
          <UButton to="#contact" size="lg" :color="buttonColor" variant="outline">
            <UIcon name="i-heroicons-chat-bubble-left-right" class="mr-2" />
            Hubungi Kami
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
