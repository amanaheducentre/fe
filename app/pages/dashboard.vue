<script setup lang="ts">
import { getSampleImages } from "@/utils/lorem";
import { useCourseStore } from "~/stores/course";
import type { ListCourseByCategory } from "~~/shared/types/course.schema";

definePageMeta({
  middleware: "auth",
  layout: "sidebar",
  keepalive: true,
});

const { user } = useUserSession();
const courseStore = useCourseStore();
const bannerItems = ref([...getSampleImages(1920, 800, 7)]);

const coursesItems = ref<ListCourseByCategory[]>([]);
const isLoading = ref(true);

// Pagination state
const currentPage = ref(1);
const pageSize = 3;
const totalItems = ref(0);

// Calculate total pages
const totalPages = computed(() => Math.ceil(totalItems.value / pageSize));

// Fetch courses with pagination
const fetchCourses = async () => {
  isLoading.value = true;
  try {
    const data = await courseStore.getCourseByCategory(currentPage.value, pageSize);
    coursesItems.value = data;
    totalItems.value = courseStore.raw?.total || 0;
  } catch (error) {
    console.error("Error fetching courses:", error);
  } finally {
    isLoading.value = false;
  }
};

// Watch for page changes
watch(currentPage, () => {
  fetchCourses();
});

fetchCourses();
</script>

<template>
  <div class="w-full overflow-hidden">
    <!-- Header -->
    <div class="w-full">
      <UContainer class="py-3 sm:py-4 md:py-6">
        <div class="flex items-center gap-2 sm:gap-3">
          <UAvatar :src="user?.avatar!" size="lg" class="sm:w-14 sm:h-14 md:w-16 md:h-16" />
          <div class="leading-tight">
            <p class="text-xs sm:text-sm text-gray-500">Halo,</p>
            <p class="text-base sm:text-lg md:text-xl font-semibold line-clamp-1">
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
          prev: 'start-2 sm:start-4 md:start-8',
          next: 'end-2 sm:end-4 md:end-8',
        }"
      >
        <div class="w-full overflow-hidden rounded-none">
          <NuxtImg :src="item" class="w-full aspect-21/9 sm:aspect-21/7 md:aspect-21/6 object-cover" loading="lazy" />
        </div>
      </UCarousel>
    </div>

    <!-- Content -->
    <UContainer class="py-4 sm:py-6 md:py-8 text-arcon space-y-4 sm:space-y-5 md:space-y-6">
      <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-bold">Mau Belajar Apa Hari Ini?</h1>

      <!-- Loading Skeleton -->
      <div v-if="isLoading" class="space-y-6 sm:space-y-8">
        <div v-for="i in 2" :key="i" class="space-y-2 sm:space-y-3">
          <USkeleton class="h-6 sm:h-7 md:h-8 w-48 sm:w-56" />

          <div class="-mx-4 px-4 sm:mx-0 sm:px-0">
            <div
              class="flex gap-3 sm:gap-4 overflow-x-auto pb-3 sm:grid sm:overflow-visible sm:pb-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <div v-for="j in 4" :key="j" class="shrink-0 w-64 sm:w-72 md:w-auto">
                <div class="flex flex-col overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-gray-200 bg-white">
                  <USkeleton class="w-full aspect-16/10" />
                  <div class="flex flex-col gap-2 p-3 sm:p-4">
                    <USkeleton class="h-5 sm:h-6 w-full" />
                    <USkeleton class="h-4 w-3/4" />
                    <div class="flex items-center gap-2 mt-1">
                      <USkeleton class="h-4 w-12" />
                      <USkeleton class="h-4 w-16" />
                    </div>
                    <USkeleton class="h-6 sm:h-7 w-32" />
                    <div class="flex gap-1.5">
                      <USkeleton class="h-5 w-16" />
                      <USkeleton class="h-5 w-16" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Courses Categories -->
      <div v-else v-for="item in coursesItems" :key="item.id" class="space-y-2 sm:space-y-3">
        <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">{{ item.tag }}</h2>

        <!-- Mobile: horizontal scroll. Desktop: grid -->
        <div class="-mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            class="flex gap-3 sm:gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent sm:grid sm:overflow-visible sm:pb-0 sm:snap-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <CardCourseSquare
              v-for="course in item.courses"
              :key="course.id"
              :id="course.id"
              :thumbnail-url="course.thumbnailUrl!"
              :title="course.title"
              :subtitle="course.subtitle!"
              :rating-avg="course.ratingAvg"
              :rating-count="course.ratingCount"
              :price="course.priceCurrent"
              :tags="course.tags"
              class="shrink-0 w-64 sm:w-72 snap-start md:w-auto"
            />
          </div>
        </div>
      </div>
    </UContainer>

    <!-- Floating Pagination -->
    <div
      v-if="!isLoading && totalPages > 1"
      class="fixed bottom-0 left-0 right-0 z-9999 flex justify-center py-4 sm:py-6 pointer-events-none"
    >
      <div class="pointer-events-auto">
        <UPagination
          v-model:page="currentPage"
          :items-per-page="pageSize"
          :total="totalItems"
          variant="ghost"
          class="shadow-sm backdrop-blur-md rounded-full px-2 py-2 hover:px-6 hover:py-3 hover:-translate-y-2 bg-white/50 transition-all"
        />
      </div>
    </div>
  </div>
</template>
