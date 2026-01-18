<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";

definePageMeta({
  middleware: "auth",
  layout: "sidebar",
});

const scrollPosition = ref(0);
const courseProgress = ref(100);

const items = ref<BreadcrumbItem[]>([
  { label: "Docs", to: "/docs" },
  { label: "Components", to: "/docs/components" },
  { label: "Breadcrumb", to: "/docs/components/breadcrumb" },
]);

const courseItems = ref([
  {
    label: "Is Nuxt UI free to use?",
    content:
      "Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.",
    data: [
      { title: "Video Youtube", duration: 675, link: "#" },
      { title: "Video Youtube", duration: 345, link: "#" },
      { title: "Video Youtube", duration: 897, link: "#" },
      { title: "Video Youtube", duration: 786, link: "#" },
      { title: "Video Youtube", duration: 574, link: "#" },
    ],
  },
  {
    label: "Can I use Nuxt UI with Vue without Nuxt?",
    content:
      "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.",
    data: [{ title: "Video Youtube", duration: 5000, link: "#" }],
  },
  {
    label: "Is Nuxt UI production-ready?",
    content:
      "Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.",
    data: [{ title: "Video Youtube", duration: 5000, link: "#" }],
  },
]);

const benefits = ref(["32 Modul Belajar", "Forum Tanya Jawab", "Sertifikat"]);

const handleScroll = () => {
  scrollPosition.value = window.scrollY || window.pageYOffset;
};

onMounted(async () => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- HEADER / HERO -->
  <section class="relative w-full overflow-hidden">
    <div class="relative w-full h-136 sm:h-152 lg:h-168 overflow-hidden">
      <GradientBackground />

      <div class="absolute inset-0 pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-6xl">
          <!-- batasi lebar text di desktop supaya ga ketutupan aside -->
          <div class="flex flex-col gap-6 sm:gap-8 lg:gap-10 text-white text-arcon lg:pr-112">
            <UBreadcrumb
              :items="items"
              class="text-white"
              :ui="{
                link: 'text-white hover:text-white',
                separatorIcon: 'text-white',
              }"
            />

            <p class="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">Membuat Berhala Portable</p>

            <p class="text-sm sm:text-base lg:text-xl max-w-2xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam minima totam officia non in ipsam
              quas culpa adipisci reiciendis aperiam aspernatur vero error labore sequi sapiente dolorum provident,
              commodi impedit.
            </p>

            <div class="flex flex-wrap gap-x-6 gap-y-3">
              <div class="flex items-center gap-2">
                <UAvatarGroup :max="3">
                  <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
                  <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
                  <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
                </UAvatarGroup>
                <p class="text-xs sm:text-sm lg:text-base">17.850 Siswa</p>
              </div>

              <div class="flex items-center gap-2">
                <Icon name="qlementine-icons:star-filled-16" />
                <div class="flex items-center gap-1">
                  <p class="text-xs sm:text-sm lg:text-base">5</p>
                  <p class="text-xs sm:text-sm lg:text-base">(7.800) Penilaian</p>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <Icon name="ic:round-bar-chart" size="28" />
                <p class="text-xs sm:text-sm lg:text-base">Beginner</p>
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
              <div class="flex flex-col gap-6 lg:gap-8">
                <CardSlot title="Tentang Kelas">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis obcaecati doloremque, temporibus
                    voluptatibus blanditiis minima aperiam. Modi rerum temporibus ad sed deserunt facere aliquid error
                    perspiciatis recusandae? In, maiores eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quasi saepe delectus non vel fugit veniam ducimus dolores error ipsa ullam culpa dolor reprehenderit
                    similique, sunt, iste architecto veritatis animi excepturi?. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Tenetur inventore eius ratione, minima corporis ut assumenda aperiam sunt, enim
                    blanditiis illo quas magni alias fuga quisquam, voluptatum numquam officiis voluptatibus?
                  </p>
                </CardSlot>

                <CardSlot title="Tujuan Umum">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis obcaecati doloremque, temporibus
                    voluptatibus blanditiis minima aperiam. Modi rerum temporibus ad sed deserunt facere aliquid error
                    perspiciatis recusandae? In, maiores eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor dolorem ducimus vel enim? Sed nobis, nam optio sit vero dolore. Quod nisi esse aspernatur
                    dignissimos non laborum hic, neque impedit.
                  </p>
                </CardSlot>

                <CardSlot title="Daftar Materi">
                  <UAccordion :items="courseItems">
                    <template #content="{ item }">
                      <div class="flex flex-col px-4 sm:px-6 space-y-2">
                        <NuxtLink
                          v-for="data in item.data"
                          :key="data.title + data.duration"
                          :to="data.link"
                          class="flex w-full items-center justify-between gap-4 py-1"
                        >
                          <div class="flex items-center gap-1 min-w-0">
                            <Icon name="uil:play" />
                            <p class="truncate">{{ data.title }}</p>
                          </div>
                          <div class="shrink-0 text-sm opacity-80">
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
                      <div class="w-full aspect-square overflow-hidden rounded-md">
                        <NuxtImg :src="getSampleImage(1000, 1000)" class="w-full h-full object-cover" />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <CardSlot class="border-none" title="Slamet, S.Pd">
                        <div class="w-24 sm:w-32 h-1 bg-raka-orange rounded-full"></div>
                        <p>Selamt Siang</p>
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
          <!-- sticky hanya di desktop -->
          <div
            ref="aside"
            class="space-y-5 lg:sticky lg:top-24 transition-all"
            :class="scrollPosition > 300 ? 'lg:translate-y-0' : 'lg:-translate-y-100'"
          >
            <div class="w-full bg-white border rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube-nocookie.com/embed/_eQxomah-nA?si=pDSzchUBDKb2NQu7"
                title="YouTube video player"
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
                class="w-full aspect-video"
              />

              <div class="flex flex-col space-y-3 p-5 sm:p-6 lg:p-8 text-arcon">
                <p class="text-base sm:text-lg lg:text-xl font-bold">Kelas Telah Selesai</p>

                <UProgress v-model="courseProgress" />

                <div class="flex justify-end">
                  <p class="text-[11px] sm:text-xs">{{ courseProgress }}% Progress Belajar</p>
                </div>

                <div class="flex w-full justify-center pt-4 sm:pt-6">
                  <NuxtLink class="w-full">
                    <UButton class="font-bold w-full justify-center lg:px-14" size="xl" color="neutral" variant="solid">
                      Lihat Roadmap
                    </UButton>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div class="w-full bg-white border rounded-xl overflow-hidden">
              <div class="flex flex-col space-y-3 p-5 sm:p-6 lg:p-8 text-arcon">
                <p class="text-base sm:text-lg lg:text-xl font-bold">Yang Akan Kamu Dapatkan</p>

                <div v-for="benefit in benefits" :key="benefit" class="flex items-center gap-2">
                  <Icon name="uil:check-circle" />
                  <p class="text-sm sm:text-base">{{ benefit }}</p>
                </div>
              </div>
            </div>

            <div class="w-full bg-white border rounded-xl overflow-hidden">
              <div class="flex w-full justify-center p-4 sm:p-5">
                <NuxtLink class="flex items-center gap-2">
                  <Icon name="uil:question-circle" size="28" />
                  <p class="text-arcon text-base sm:text-lg lg:text-2xl font-bold">Lihat Panduan Belajar</p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
