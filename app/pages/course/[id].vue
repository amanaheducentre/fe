<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";
import type { CourseData } from "~~/shared/types/course.schema";

definePageMeta({
  middleware: "auth",
  layout: "sidebar",
});

const courseStore = useCourseStore();
const route = useRoute();
const courseId = computed(() => route.params.id as string);
const { isMobile } = useDevice();

const scrollPosition = ref(0);
const courseProgress = ref(0);

const course = ref(courseStore.selected);
const isLoading = computed(() => course.value.id == undefined);

const items = computed<BreadcrumbItem[]>(() => [
  { label: "Beranda", to: "/dashboard" },
  { label: course.value?.category?.name || "Kategori", to: "/dashboard" },
  { label: course.value?.title || "Course", to: `/course/${courseId.value}` },
]);

// Mock data untuk materi dan benefit - bisa diganti dengan data real dari API
const courseModules = ref([
  {
    label: "Pengenalan Dasar",
    content: "Modul pengenalan untuk memahami konsep dasar dari materi yang akan dipelajari.",
    data: [
      { title: "Video Pengenalan", duration: 675, link: "#" },
      { title: "Materi Dasar", duration: 345, link: "#" },
    ],
  },
  {
    label: "Materi Lanjutan",
    content: "Pelajari konsep yang lebih mendalam dan praktis untuk meningkatkan pemahaman.",
    data: [
      { title: "Tutorial Lanjutan", duration: 897, link: "#" },
      { title: "Studi Kasus", duration: 786, link: "#" },
    ],
  },
  {
    label: "Praktik dan Proyek",
    content: "Aplikasikan pengetahuan yang telah dipelajari dalam proyek nyata.",
    data: [{ title: "Proyek Akhir", duration: 574, link: "#" }],
  },
]);

const benefits = ref([
  `${courseModules.value.length} Modul Belajar`,
  "Forum Tanya Jawab",
  "Sertifikat",
  "Akses Selamanya",
]);

const handleScroll = () => {
  scrollPosition.value = window.scrollY || window.pageYOffset;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- HEADER / HERO -->
  <section class="relative w-full overflow-hidden">
    <div class="relative w-full h-112 sm:h-128 md:h-136 lg:h-152 overflow-hidden">
      <GradientBackground />

      <div class="absolute inset-0 pt-16 sm:pt-20 md:pt-24 lg:pt-28 px-4 sm:px-6 md:px-8 lg:px-12">
        <div class="mx-auto max-w-6xl">
          <!-- Loading Skeleton -->
          <div v-if="isLoading" class="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white text-arcon lg:pr-96">
            <USkeleton class="h-4 w-64 sm:w-80 bg-white/20" />
            <USkeleton class="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-full max-w-2xl bg-white/20" />
            <USkeleton class="h-16 sm:h-20 w-full max-w-2xl bg-white/20" />
            <div class="flex flex-wrap gap-4">
              <USkeleton class="h-6 w-32 bg-white/20" />
              <USkeleton class="h-6 w-40 bg-white/20" />
              <USkeleton class="h-6 w-28 bg-white/20" />
            </div>
          </div>

          <!-- Actual Content -->
          <div v-else class="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white text-arcon lg:pr-96">
            <UBreadcrumb
              :items="items"
              class="text-white text-xs sm:text-sm"
              :ui="{
                link: 'text-white hover:text-white/80',
                separatorIcon: 'text-white',
              }"
            />

            <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              {{ course?.title }}
            </h1>

            <p class="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
              {{ course?.subtitle || "Pelajari kursus ini untuk meningkatkan skill Anda." }}
            </p>

            <div class="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
              <div class="flex items-center gap-2">
                <UAvatarGroup :max="3" size="xs" class="sm:size-sm">
                  <UAvatar :src="course?.instructor?.avatar || undefined" :alt="course?.instructor?.name" />
                </UAvatarGroup>
                <p class="text-xs sm:text-sm lg:text-base">
                  {{ course?.studentCount?.toLocaleString("id-ID") || 0 }} Siswa
                </p>
              </div>

              <div class="flex items-center gap-1.5 sm:gap-2">
                <Icon name="qlementine-icons:star-filled-16" class="w-4 h-4 sm:w-5 sm:h-5" />
                <div class="flex items-center gap-1">
                  <p class="text-xs sm:text-sm lg:text-base">{{ Number(course?.ratingAvg || 0).toFixed(1) }}</p>
                  <p class="text-xs sm:text-sm lg:text-base">
                    ({{ course?.ratingCount?.toLocaleString("id-ID") || 0 }}) Penilaian
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-1.5 sm:gap-2">
                <Icon name="ic:round-bar-chart" class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                <p class="text-xs sm:text-sm lg:text-base">{{ course?.category?.name || "Beginner" }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BODY: mobile 1 kolom, desktop 2 kolom -->
  <section class="relative w-full">
    <div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-6 sm:py-8 lg:py-12">
        <!-- MAIN CONTENT -->
        <div class="lg:col-span-8">
          <UPage class="relative">
            <UPageBody class="px-0 py-0">
              <!-- Loading Skeleton -->
              <div v-if="isLoading" class="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                <div v-for="i in 3" :key="i" class="bg-white rounded-xl p-4 sm:p-5 md:p-6 space-y-3">
                  <USkeleton class="h-6 sm:h-7 w-48" />
                  <USkeleton class="h-20 sm:h-24 w-full" />
                  <USkeleton class="h-4 w-3/4" />
                </div>
              </div>

              <!-- Actual Content -->
              <div v-else class="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                <CardSlot title="Tentang Kelas">
                  <p class="text-sm sm:text-base leading-relaxed">
                    {{ course?.subtitle || "Deskripsi kursus tidak tersedia." }}
                  </p>
                </CardSlot>

                <CardSlot title="Tujuan Umum">
                  <p class="text-sm sm:text-base leading-relaxed">
                    Dengan mengikuti kursus <strong>{{ course?.title }}</strong
                    >, Anda akan mempelajari berbagai konsep dan keterampilan yang dibutuhkan untuk menguasai materi
                    ini. Kursus ini dirancang untuk memberikan pemahaman yang mendalam dan praktis.
                  </p>
                </CardSlot>

                <CardSlot title="Daftar Materi">
                  <UAccordion :items="courseModules">
                    <template #content="{ item }">
                      <div class="flex flex-col px-3 sm:px-4 md:px-6 space-y-2">
                        <NuxtLink
                          v-for="data in item.data"
                          :key="data.title + data.duration"
                          :to="data.link"
                          class="flex w-full items-center justify-between gap-3 sm:gap-4 py-1 hover:text-raka-orange transition-colors"
                        >
                          <div class="flex items-center gap-1.5 sm:gap-2 min-w-0">
                            <Icon name="uil:play" class="shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                            <p class="truncate text-sm sm:text-base">{{ data.title }}</p>
                          </div>
                          <div class="shrink-0 text-xs sm:text-sm opacity-80">
                            {{ formatSecondsToHMS(data.duration) }}
                          </div>
                        </NuxtLink>
                      </div>
                    </template>
                  </UAccordion>
                </CardSlot>

                <CardSlot title="Pembimbing Materi">
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div class="sm:col-span-1">
                      <div class="w-full aspect-square overflow-hidden rounded-lg sm:rounded-xl bg-gray-100">
                        <NuxtImg
                          :src="course?.instructor?.avatar || getSampleImage(1000, 1000)"
                          class="w-full h-full object-cover"
                          :alt="course?.instructor?.name"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <CardSlot class="border-none" :title="course?.instructor?.name || 'Instruktur'">
                        <div class="w-20 sm:w-24 md:w-32 h-1 bg-raka-orange rounded-full"></div>
                        <p class="text-sm sm:text-base mt-3 sm:mt-4">
                          Instruktur berpengalaman yang siap membimbing Anda dalam menguasai materi kursus ini.
                        </p>
                      </CardSlot>
                    </div>
                  </div>
                </CardSlot>
              </div>
            </UPageBody>
            <template #right />
          </UPage>
        </div>

        <!-- ASIDE -->
        <aside class="lg:col-span-4">
          <div
            ref="aside"
            class="space-y-4 sm:space-y-5 lg:sticky lg:top-20 transition-all duration-300"
            :class="scrollPosition > 300 ? 'lg:translate-y-0' : 'lg:-translate-y-82'"
          >
            <!-- Loading Skeleton -->
            <template v-if="isLoading">
              <div class="w-full bg-white border rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
                <USkeleton class="w-full aspect-video" />
                <div class="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-5 lg:p-6">
                  <USkeleton class="h-8 sm:h-10 w-48" />
                  <USkeleton class="h-4 w-24" />
                  <USkeleton class="h-12 w-full" />
                </div>
              </div>

              <div class="w-full bg-white border rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
                <div class="flex flex-col space-y-3 p-4 sm:p-5 lg:p-6">
                  <USkeleton class="h-6 w-56" />
                  <div class="space-y-2">
                    <USkeleton class="h-5 w-full" />
                    <USkeleton class="h-5 w-full" />
                    <USkeleton class="h-5 w-full" />
                  </div>
                </div>
              </div>
            </template>

            <!-- Actual Content -->
            <template v-else>
              <!-- Video/Thumbnail Card -->
              <div class="w-full bg-white border rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
                <div class="w-full aspect-video bg-gray-100">
                  <iframe
                    v-if="course?.promoVideoUrl"
                    :src="course.promoVideoUrl"
                    title="Course promo video"
                    frameborder="0"
                    allow="
                      accelerometer;
                      autoplay;
                      clipboard-write;
                      encrypted-media;
                      gyroscope;
                      picture-in-picture;
                      web-share;
                    "
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="w-full h-full"
                  />
                  <NuxtImg
                    v-else
                    :src="course?.thumbnailUrl || getSampleImage(1280, 720)"
                    class="w-full h-full object-cover"
                    :alt="course?.title"
                  />
                </div>

                <div class="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-5 lg:p-6 text-arcon">
                  <div class="flex flex-col space-y-2">
                    <p class="text-2xl sm:text-3xl font-bold text-raka-orange">
                      Rp {{ course?.priceCurrent?.toLocaleString("id-ID") || 0 }}
                    </p>
                    <!-- <p class="text-xs sm:text-sm text-gray-600">{{ course?.currency || "IDR" }}</p> -->
                  </div>

                  <div v-if="courseProgress > 0" class="space-y-2">
                    <p class="text-sm sm:text-base lg:text-lg font-bold">Progress Belajar</p>
                    <UProgress :value="courseProgress" />
                    <div class="flex justify-end">
                      <p class="text-xs sm:text-sm text-gray-600">{{ courseProgress }}% Selesai</p>
                    </div>
                  </div>

                  <div class="flex w-full justify-center pt-2 sm:pt-4">
                    <NuxtLink class="w-full">
                      <UButton
                        class="font-bold w-full justify-center"
                        :size="isMobile ? 'lg' : 'xl'"
                        color="neutral"
                        variant="solid"
                      >
                        {{ courseProgress > 0 ? "Lanjutkan Belajar" : "Mulai Belajar" }}
                      </UButton>
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- Benefits Card -->
              <div class="w-full bg-white border rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
                <div class="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-5 lg:p-6 text-arcon">
                  <p class="text-base sm:text-lg lg:text-xl font-bold">Yang Akan Kamu Dapatkan</p>

                  <div class="space-y-2 sm:space-y-3">
                    <div v-for="benefit in benefits" :key="benefit" class="flex items-center gap-2 sm:gap-3">
                      <Icon name="uil:check-circle" class="text-green-600 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                      <p class="text-xs sm:text-sm md:text-base">{{ benefit }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Guide Link Card -->
              <div class="w-full bg-white border rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
                <div class="flex w-full justify-center p-3 sm:p-4 lg:p-5">
                  <NuxtLink class="flex items-center gap-2 sm:gap-3 hover:text-raka-orange transition-colors">
                    <Icon name="uil:question-circle" class="shrink-0 w-6 h-6 sm:w-7 sm:h-7" />
                    <p class="text-arcon text-sm sm:text-base lg:text-lg font-bold">Lihat Panduan Belajar</p>
                  </NuxtLink>
                </div>
              </div>
            </template>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
