<script setup lang="ts">
import type { LectureDataRes } from "~~/shared/types/lecture.schema";

definePageMeta({
  middleware: ["auth"],
  layout: "sidebar",
  key: (route) => route.fullPath,
});

const route = useRoute();
const lectureId = computed(() => route.params.lid as string);

const { data: lecture, pending } = useFetch<LectureDataRes["data"]>(() => `/api/lecture/${lectureId.value}`, {
  key: () => `lecture-${lectureId.value}`,
  watch: [lectureId],
});

const isLoading = computed(() => pending.value || !lecture.value);

// Get video asset (primary content)
const videoAsset = computed(() => {
  return lecture.value?.assets?.find((asset) => asset.assetType === "video");
});

// Get other assets (PDFs, documents, etc.)
const downloadableAssets = computed(() => {
  return lecture.value?.assets?.filter((asset) => asset.assetType !== "video") || [];
});

// Format file size
const formatFileSize = (bytes: number | null) => {
  if (!bytes) return "N/A";
  const mb = bytes / (1024 * 1024);
  return mb < 1 ? `${(bytes / 1024).toFixed(2)} KB` : `${mb.toFixed(2)} MB`;
};

// Get asset icon based on type
const getAssetIcon = (type: string) => {
  switch (type) {
    case "pdf":
      return "uil:file-alt";
    case "document":
      return "uil:file-download-alt";
    case "code":
      return "uil:file-code-alt";
    default:
      return "uil:file";
  }
};

// Progress percentage
const progressPercentage = computed(() => {
  if (!lecture.value?.progress || !lecture.value?.durationSeconds) return 0;
  const { lastPositionSeconds } = lecture.value.progress;
  return Math.round((lastPositionSeconds / lecture.value.durationSeconds) * 100);
});

// Format status badge
const getStatusBadge = (status: string) => {
  const badges = {
    not_started: { label: "Belum Dimulai", color: "neutral" },
    in_progress: { label: "Sedang Belajar", color: "primary" },
    completed: { label: "Selesai", color: "success" },
  };
  return badges[status as keyof typeof badges] || badges.not_started;
};
</script>

<template>
  <div class="w-full min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="isLoading" class="w-full">
      <USkeleton class="w-full aspect-video" />
      <UContainer class="py-6 sm:py-8 space-y-6">
        <USkeleton class="h-8 w-3/4" />
        <USkeleton class="h-20 w-full" />
        <USkeleton class="h-6 w-32" />
        <div class="space-y-3">
          <USkeleton class="h-12 w-full" />
          <USkeleton class="h-12 w-full" />
        </div>
      </UContainer>
    </div>

    <!-- Actual Content -->
    <div v-else-if="lecture" class="w-full">
      <!-- Video Player Section -->
      <section class="w-full bg-black">
        <div class="w-full aspect-video">
          <video v-if="videoAsset" :src="videoAsset.url" controls class="w-full h-full" :poster="lecture.courseId">
            Your browser does not support the video tag.
          </video>
          <div v-else class="flex items-center justify-center w-full h-full bg-gray-900 text-white">
            <div class="text-center space-y-3">
              <Icon name="uil:video-slash" class="w-16 h-16 mx-auto opacity-50" />
              <p class="text-lg">Video tidak tersedia</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Lecture Information -->
      <UContainer class="py-6 sm:py-8 lg:py-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-8 space-y-6">
            <!-- Title and Progress -->
            <div class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
              <div class="space-y-3">
                <div class="flex items-start justify-between gap-4">
                  <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {{ lecture.title }}
                  </h1>
                  <UBadge
                    v-if="lecture.progress"
                    :color="getStatusBadge(lecture.progress.status).color as any"
                    variant="subtle"
                    size="md"
                  >
                    {{ getStatusBadge(lecture.progress.status).label }}
                  </UBadge>
                </div>

                <div class="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-600">
                  <div class="flex items-center gap-1.5">
                    <Icon name="uil:clock" class="w-5 h-5" />
                    <span>{{ formatSecondsToHMS(lecture.durationSeconds || 0) }}</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <Icon
                      :name="
                        lecture.type === 'video'
                          ? 'uil:play-circle'
                          : lecture.type === 'quiz'
                            ? 'uil:clipboard-notes'
                            : 'uil:file-alt'
                      "
                      class="w-5 h-5"
                    />
                    <span class="capitalize">{{ lecture.type }}</span>
                  </div>
                  <UBadge v-if="lecture.isPreview" color="success" variant="subtle">
                    <Icon name="uil:eye" class="w-4 h-4 mr-1" />
                    Preview Gratis
                  </UBadge>
                </div>
              </div>

              <!-- Progress Bar -->
              <div v-if="lecture.progress && lecture.progress.status !== 'not_started'" class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-600">Progress Belajar</span>
                  <span class="font-semibold text-gray-900">{{ progressPercentage }}%</span>
                </div>
                <UProgress :value="progressPercentage" color="primary" size="md" />
                <p v-if="lecture.progress.completedAt" class="text-xs text-gray-500">
                  Selesai pada {{ new Date(lecture.progress.completedAt * 1000).toLocaleDateString("id-ID") }}
                </p>
              </div>
            </div>

            <!-- Description -->
            <CardSlot v-if="lecture.description" title="Deskripsi">
              <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                {{ lecture.description }}
              </p>
            </CardSlot>

            <!-- Downloadable Assets -->
            <CardSlot v-if="downloadableAssets.length > 0" title="Materi Pendukung">
              <div class="space-y-3">
                <a
                  v-for="asset in downloadableAssets"
                  :key="asset.id"
                  :href="asset.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-between gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                >
                  <div class="flex items-center gap-3 min-w-0">
                    <Icon :name="getAssetIcon(asset.assetType)" class="w-8 h-8 text-gray-500 shrink-0" />
                    <div class="min-w-0">
                      <p class="text-sm sm:text-base font-medium text-gray-900 truncate">
                        {{ asset.filename || "Download File" }}
                      </p>
                      <p class="text-xs sm:text-sm text-gray-500">
                        {{ asset.assetType.toUpperCase() }} • {{ formatFileSize(asset.sizeBytes) }}
                      </p>
                    </div>
                  </div>
                  <Icon
                    name="uil:download-alt"
                    class="w-5 h-5 text-gray-400 group-hover:text-primary-500 shrink-0 transition-colors"
                  />
                </a>
              </div>
            </CardSlot>

            <!-- Navigation Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <UButton
                color="neutral"
                variant="solid"
                size="lg"
                icon="uil:angle-left"
                class="flex-1 justify-center"
                @click="$router.back()"
              >
                Kembali
              </UButton>
              <UButton
                color="primary"
                variant="solid"
                size="lg"
                trailing-icon="uil:angle-right"
                class="flex-1 justify-center"
              >
                Lanjut ke Materi Berikutnya
              </UButton>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="lg:col-span-4">
            <div class="lg:sticky lg:top-20 space-y-4">
              <!-- Video Info Card -->
              <div class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
                <h3 class="text-lg font-bold text-gray-900">Informasi Video</h3>
                <div class="space-y-3 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Durasi</span>
                    <span class="font-medium text-gray-900">{{
                      formatSecondsToHMS(lecture.durationSeconds || 0)
                    }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Status</span>
                    <span class="font-medium text-gray-900 capitalize">{{ lecture.status }}</span>
                  </div>
                  <div v-if="lecture.publishedAt" class="flex justify-between">
                    <span class="text-gray-600">Dipublikasikan</span>
                    <span class="font-medium text-gray-900">
                      {{ new Date(lecture.publishedAt * 1000).toLocaleDateString("id-ID") }}
                    </span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Total Aset</span>
                    <span class="font-medium text-gray-900">{{ lecture.assets?.length || 0 }} file</span>
                  </div>
                </div>
              </div>

              <!-- Quick Actions -->
              <div class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm space-y-3">
                <h3 class="text-lg font-bold text-gray-900">Aksi Cepat</h3>
                <div class="space-y-2">
                  <UButton color="neutral" variant="soft" block icon="uil:bookmark" class="justify-start">
                    Tandai sebagai Favorit
                  </UButton>
                  <UButton color="neutral" variant="soft" block icon="uil:comment-dots" class="justify-start">
                    Tanya Instruktur
                  </UButton>
                  <UButton color="neutral" variant="soft" block icon="uil:share-alt" class="justify-start">
                    Bagikan Materi
                  </UButton>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </UContainer>
    </div>

    <!-- Error State -->
    <div v-else class="flex items-center justify-center min-h-screen">
      <div class="text-center space-y-4">
        <Icon name="uil:exclamation-triangle" class="w-16 h-16 mx-auto text-gray-400" />
        <h2 class="text-xl font-bold text-gray-900">Materi tidak ditemukan</h2>
        <p class="text-gray-600">Materi yang Anda cari tidak tersedia atau telah dihapus.</p>
        <UButton @click="$router.back()" color="primary" variant="solid"> Kembali </UButton>
      </div>
    </div>
  </div>
</template>
