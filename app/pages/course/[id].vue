<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";

definePageMeta({
  middleware: "auth",
  layout: "sidebar",
});

const courseProgress = ref(100);

const items = ref<BreadcrumbItem[]>([
  { label: "Docs", to: "/docs" },
  { label: "Components", to: "/docs/components" },
  { label: "Breadcrumb", to: "/docs/components/breadcrumb" },
]);

const benefits = ref(["32 Modul Belajar", "Forum Tanya Jawab", "Sertifikat"]);
</script>

<template>
  <section class="relative w-full overflow-hidden">
    <div class="relative w-full h-130 md:h-160 overflow-hidden">
      <GradientBackground />

      <div class="absolute inset-0 pt-24 md:pt-28 px-4 md:px-12">
        <div class="mx-auto max-w-6xl">
          <div class="flex flex-col space-y-8 md:space-y-12 text-white text-arcon md:pr-105">
            <UBreadcrumb
              :items="items"
              class="text-white"
              :ui="{
                link: 'text-white hover:text-white',
                separatorIcon: 'text-white',
              }"
            />

            <p class="text-3xl md:text-6xl font-bold leading-tight">Membuat Berhala Portable</p>

            <p class="text-base md:text-xl max-w-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam minima totam officia non in ipsam
              quas culpa adipisci reiciendis aperiam aspernatur vero error labore sequi sapiente dolorum provident,
              commodi impedit.
            </p>

            <div class="flex flex-wrap gap-x-6 gap-y-3">
              <div class="flex items-center space-x-2">
                <UAvatarGroup :max="3">
                  <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
                  <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
                  <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
                </UAvatarGroup>
                <p class="text-sm md:text-base">17.850 Siswa</p>
              </div>

              <div class="flex items-center space-x-2">
                <Icon name="qlementine-icons:star-filled-16" />
                <div class="flex items-center space-x-1">
                  <p class="text-sm md:text-base">5</p>
                  <p class="text-sm md:text-base">(7.800) Penilaian</p>
                </div>
              </div>

              <div class="flex items-center space-x-2">
                <Icon name="ic:round-bar-chart" size="28" />
                <p class="text-sm md:text-base">Beginner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="relative w-full">
    <aside
      class="w-full px-4 mt-6 space-y-5 z-50 md:mt-0 md:w-auto md:px-0 md:absolute md:right-0 md:-top-102 md:pr-32 md:pb-32"
    >
      <div class="w-full md:min-w-md bg-white border rounded-xl overflow-hidden">
        <iframe
          src="https://www.youtube-nocookie.com/embed/_eQxomah-nA?si=pDSzchUBDKb2NQu7"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="w-full aspect-video"
        ></iframe>

        <div class="flex flex-col space-y-3 p-6 md:p-10 text-arcon">
          <p class="text-lg md:text-xl font-bold">Kelas Telah Selesai</p>

          <UProgress v-model="courseProgress" />

          <div class="flex justify-end">
            <p class="text-[11px] md:text-xs">{{ courseProgress }}% Progress Belajar</p>
          </div>

          <div class="flex w-full justify-center pt-6 md:pt-10">
            <NuxtLink>
              <UButton
                class="font-bold w-full md:w-auto md:px-14 justify-center"
                size="xl"
                color="neutral"
                variant="solid"
              >
                Lihat Roadmap
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="w-full md:min-w-md bg-white border rounded-xl overflow-hidden">
        <div class="flex flex-col space-y-3 p-6 md:p-10 text-arcon">
          <p class="text-lg md:text-xl font-bold">Yang Akan Kamu Dapatkan</p>

          <div v-for="benefit in benefits" :key="benefit" class="flex items-center space-x-2">
            <Icon name="uil:check-circle" />
            <p class="text-sm md:text-base">{{ benefit }}</p>
          </div>
        </div>
      </div>

      <div class="w-full md:min-w-md bg-white border rounded-xl overflow-hidden">
        <div class="flex w-full justify-center p-4 md:p-5">
          <NuxtLink class="flex items-center space-x-2">
            <Icon name="uil:question-circle" size="28" />
            <p class="text-arcon text-lg md:text-2xl font-bold">Lihat Panduan Belajar</p>
          </NuxtLink>
        </div>
      </div>
    </aside>

    <UPage class="relative">
      <UPageBody class="px-4 md:px-12 py-8 md:py-12"> Halo sayanf </UPageBody>
      <template #right />
    </UPage>
  </div>
</template>
