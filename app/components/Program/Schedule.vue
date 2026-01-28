<script setup lang="ts">
import type { ProgramSchedule } from "~~/shared/types/program";

interface Props {
  title?: string;
  schedules: ProgramSchedule[];
  image?: string;
  themeColor?: string;
  useSecondaryColor?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Jadwal Operasional",
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

        <!-- Image (if provided) -->
        <div v-if="image" class="mb-12 max-w-5xl mx-auto">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <NuxtImg
              :src="image"
              :alt="title"
              class="w-full h-[300px] md:h-[400px] object-cover"
              loading="lazy"
              sizes="sm:100vw md:100vw lg:1280px"
            />
          </div>
        </div>

        <!-- Schedule Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UCard
            v-for="(schedule, index) in schedules"
            :key="index"
            class="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div class="text-center">
              <!-- Icon -->
              <div
                :class="[
                  'w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto',
                  `bg-${themeColor}-100 dark:bg-${themeColor}-900/30`,
                ]"
              >
                <UIcon
                  name="i-heroicons-clock"
                  :class="['text-3xl', `text-${themeColor}-600 dark:text-${themeColor}-400`]"
                />
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {{ schedule.title }}
              </h3>

              <!-- Days -->
              <div class="flex items-center justify-center gap-2 mb-2">
                <UIcon name="i-heroicons-calendar-days" class="text-gray-500" />
                <p class="text-gray-600 dark:text-gray-300 font-medium">
                  {{ schedule.days.join(", ") }}
                </p>
              </div>

              <!-- Time -->
              <div class="flex items-center justify-center gap-2 mb-4">
                <UIcon name="i-heroicons-clock" class="text-gray-500" />
                <p :class="['text-lg font-semibold', `text-${themeColor}-600 dark:text-${themeColor}-400`]">
                  {{ schedule.time }}
                </p>
              </div>

              <!-- Description -->
              <p v-if="schedule.description" class="text-sm text-gray-500 dark:text-gray-400">
                {{ schedule.description }}
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>
