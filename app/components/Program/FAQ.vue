<script setup lang="ts">
import type { ProgramFAQ } from "~~/shared/types/program";

interface Props {
  title?: string;
  faqs: ProgramFAQ[];
}

const props = withDefaults(defineProps<Props>(), {
  title: "Pertanyaan yang Sering Diajukan",
});

const items = computed(() =>
  props.faqs.map((faq, index) => ({
    slot: `item-${index}`,
    label: faq.question,
    content: faq.answer,
  })),
);
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ title }}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Temukan jawaban atas pertanyaan umum tentang program kami
        </p>
        <div class="w-20 h-1 bg-primary-500 mx-auto rounded-full mt-4" />
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
          <UButton to="#contact" size="lg" color="primary" variant="outline">
            <UIcon name="i-heroicons-chat-bubble-left-right" class="mr-2" />
            Hubungi Kami
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
