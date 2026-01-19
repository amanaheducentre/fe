<script setup lang="ts">
import { getSampleImages } from "@/utils/lorem";
import type { ListCourseRes } from "~~/shared/types/course.schema";

definePageMeta({
  middleware: "auth",
  layout: "sidebar",
  keepalive: true,
});

type ListCourseCategory = {
  id: number;
  tag: string;
  courses: ListCourseRes["data"]["items"];
};

const { user } = useUserSession();
const bannerItems = ref([...getSampleImages(1920, 800, 7)]);
const coursesItems = ref<ListCourseCategory[]>([]);

useFetch("/api/course").then(({ data }) => {
  coursesItems.value = [];
  const categories = Array.from(new Set(data.value?.items.map((item) => item.category?.name)));
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    coursesItems.value.push({
      id: i + 1,
      tag: categories[i]!,
      courses: data.value?.items.filter((item) => item.category?.name === category)!,
    });
  }
});
</script>

<template>
  <div class="w-full">
    <!-- Header -->
    <div class="w-full">
      <UContainer class="py-4 sm:py-6">
        <div class="flex items-center gap-3 sm:gap-4">
          <UAvatar :src="user?.avatar!" size="xl" class="sm:w-16! sm:h-16!" />
          <div class="leading-tight">
            <p class="text-sm sm:text-base text-gray-500">Halo,</p>
            <p class="text-lg sm:text-xl font-semibold">
              {{ user?.name }}
            </p>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Banner Carousel -->
    <div class="w-full">
      <UCarousel
        v-slot="{ item }"
        loop
        :autoplay="{ delay: 5000 }"
        wheel-gestures
        :items="bannerItems"
        :ui="{
          prev: 'start-3 sm:start-8',
          next: 'end-3 sm:end-8',
        }"
      >
        <!-- tinggi responsif + gambar rapi -->
        <div class="w-full overflow-hidden rounded-none">
          <NuxtImg :src="item" class="w-full aspect-21/9 md:aspect-21/6 object-cover" loading="lazy" />
        </div>
      </UCarousel>
    </div>

    <!-- Content -->
    <UContainer class="py-5 sm:py-8 text-arcon space-y-4 sm:space-y-6">
      <p class="text-xl sm:text-3xl leading-tight font-bold">Mau Belajar Apa Hari Ini?</p>

      <!-- Courses Categories -->
      <div v-for="item in coursesItems" :key="item.id" class="space-y-3">
        <p class="text-lg sm:text-2xl font-bold">{{ item.tag }}</p>

        <!-- Mobile: horizontal scroll. Desktop: grid -->
        <div class="-mx-4 px-4 sm:mx-0 sm:px-">
          <div
            class="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:overflow-visible sm:pb-0 sm:snap-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <CardCourseSquare
              v-for="course in item.courses"
              :key="course.title"
              :data="course"
              class="shrink-0 w-56 snap-start sm:w-auto"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
