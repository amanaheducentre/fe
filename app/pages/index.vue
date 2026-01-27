<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import type { TabsItem } from "@nuxt/ui";
import { getSampleImage } from "@/utils/lorem";

const windowStore = useWindowStore();

const testimonialItems = ref([
  { id: 1001, text: "Layanannya sangat baik dan murah" },
  { id: 1002, text: "Sangat membantu anak-anak belajar" },
  { id: 1003, text: "Kurikulumnya sangat menarik" },
]);

// Intersection Observer untuk update URL hash
let observer: IntersectionObserver | null = null;

const updateUrlHash = (id: string) => {
  if (window.location.hash !== `#${id}`) {
    window.history.replaceState(null, "", `#${id}`);
    windowStore.hashLocation = id;
  }
};

const courseItems = [
  {
    label: "Coding dan Robotik",
    description: "Belajar coding dan robotik dengan menyenangkan dan ramah anak.",
    slot: "account" as const,
    data: [
      {
        id: 1001,
        image: getSampleImage(1024, 1024),
        title: "Contoh Kursus Satu",
        sold: 142,
        tags: ["Bestseller", "New", "Low Price"],
        star: 4,
        rating: 121,
        price: 200000,
      },
      {
        id: 1002,
        image: getSampleImage(1024, 1024),
        title: "Contoh Kursus Dua",
        sold: 142,
        tags: ["Bestseller", "New", "Low Price"],
        star: 4,
        rating: 121,
        price: 200000,
      },
      {
        id: 1003,
        image: getSampleImage(1024, 1024),
        title: "Contoh Kursus Tiga",
        sold: 142,
        tags: ["Bestseller", "New", "Low Price"],
        star: 4,
        rating: 121,
        price: 200000,
      },
    ],
  },
  {
    label: "GSA",
    description: "Belajar dasar membaca, menulis, dan menghitung.",
    slot: "account" as const,
    data: [
      {
        id: 2001,
        image: getSampleImage(1024, 1024),
        title: "Contoh Kursus Empat",
        sold: 142,
        tags: ["Bestseller", "New", "Low Price"],
        star: 4,
        rating: 121,
        price: 200000,
      },
      {
        id: 2002,
        image: getSampleImage(1024, 1024),
        title: "Contoh Kursus Lima",
        sold: 142,
        tags: ["Bestseller", "New", "Low Price"],
        star: 4,
        rating: 121,
        price: 200000,
      },
      {
        id: 2003,
        image: getSampleImage(1024, 1024),
        title: "Contoh Kursus Enam",
        sold: 142,
        tags: ["Bestseller", "New", "Low Price"],
        star: 4,
        rating: 121,
        price: 200000,
      },
    ],
  },
] satisfies TabsItem[];

const { isMobile } = useDevice();

onMounted(() => {
  // Setup Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const id = entry.target.getAttribute("id");
          if (id) {
            updateUrlHash(id);
          }
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.5], // Trigger ketika 50% section terlihat
    },
  );

  // Observe semua section dengan id
  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => {
    observer?.observe(section);
  });
});

onBeforeUnmount(() => {
  // Cleanup observer
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>

<template>
  <div>
    <!-- SECTION 1 (Hero) -->
    <section id="home" class="overflow-hidden bg-gray-100">
      <BackgroundVideo
        src="https://github.com/amanaheducentre/fe/raw/refs/heads/main/public/video/teaser.mp4"
        class="overflow-hidden"
      >
        <UContainer class="flex flex-col text-white items-center justify-center w-full min-h-screen py-20">
          <h1 class="text-hero font-bold text-3xl lg:text-5xl xl:text-6xl leading-tight text-center">
            SEKOLAH MONTESSORI #1 <br />
            DI BANYUWANGI
          </h1>

          <p
            class="text-body mt-6 sm:mt-8 md:mt-10 lg:mt-12 lg:text-lg font-medium text-center sm:text-justify max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit iusto deserunt eaque adipisci
            cupiditate sequi quia praesentium laudantium perspiciatis quaerat ullam, ipsum fuga error veniam dolorem?
            Molestiae, voluptates inventore.
          </p>

          <div
            class="flex flex-col justify-center items-center mt-8 sm:mt-12 transition-opacity duration-600"
            :class="windowStore.yPosition <= 150 ? 'opacity-100' : 'opacity-0'"
          >
            <UButton
              color="neutral"
              class="bg-black/30 backdrop-blur-md transition-all scale-100 hover:scale-105 rounded-full px-4 py-2"
            >
              <a href="#sekolah-kami" class="hover:opacity-70 transition-opacity"> Pelajari Selengkapnya </a>
            </UButton>
          </div>
        </UContainer>
      </BackgroundVideo>
    </section>

    <!-- SECTION 2 (Bubble + Teks) -->
    <section
      id="sekolah-kami"
      class="relative w-full bg-gray-100 scroll-mt-16 sm:scroll-mt-18 py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-clip"
    >
      <div
        class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex items-center"
      >
        <!-- Area model - hanya tampil di desktop besar -->
        <div
          v-if="!isMobile"
          class="hidden lg:flex h-full w-full absolute items-center left-0 -translate-x-32 xl:-translate-x-40 -z-20"
        >
          <NuxtImg src="/img/raja_mafia.png" class="absolute w-96 lg:w-112 xl:w-132 object-contain" />
          <div
            class="rounded-full bg-linear-to-bl from-raka-orange to-raka-red h-96 w-96 lg:h-112 lg:w-112 xl:h-132 xl:w-132"
          />
        </div>

        <!-- Area teks -->
        <div class="w-full flex items-center justify-center lg:justify-end">
          <div class="w-full max-w-full sm:max-w-xl lg:max-w-2xl">
            <h2
              class="text-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-center lg:text-left"
            >
              Sekolah Kami Bukan Sekolah Biasa
            </h2>
            <p class="text-body md:text-lg mt-4 sm:mt-6 lg:mt-8 text-justify leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, assumenda dolorem voluptates atque
              quae dolores consectetur, explicabo nobis voluptate soluta possimus exercitationem! Consectetur omnis
              necessitatibus aperiam perferendis! Deleniti, quia voluptatem. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Aliquam, odit libero excepturi quasi consequuntur corrupti aut tempore. Quia perferendis
              debitis omnis obcaecati voluptate, beatae commodi natus, voluptates cumque sunt temporibus!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 -->
    <section id="montessori" class="flex flex-col w-full bg-gray-100 text-black py-12 sm:py-16 md:py-20 lg:py-24">
      <CarouselImageDesc :speed="0.3" direction="forward" />
      <CarouselImageDesc :speed="0.5" direction="backward" />
      <CarouselImageDesc :speed="0.4" direction="forward" />
    </section>

    <!-- SECTION 4 -->
    <section id="learn-more" class="w-full bg-gray-100 text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div class="mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] flex justify-center px-3 sm:px-4 lg:px-6">
        <CardCenterSplit background-color="bg-gradient-red">
          <template #left>
            <div class="flex flex-col gap-6 sm:gap-8">
              <div class="flex flex-col gap-3 sm:gap-4 text-body">
                <h2
                  class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight"
                >
                  Belajar Lebih Seru dengan Metode Baru!
                </h2>
                <p class="text-justify md:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque, incidunt eveniet, quae saepe
                  tempora consectetur nihil doloremque delectus similique explicabo? Enim non magni delectus nihil
                  totam, vel rem ea.
                </p>
              </div>

              <div class="flex gap-2 flex-col">
                <UButton :size="isMobile ? 'md' : 'xl'" color="neutral" class="w-max px-4"> Learn More </UButton>
                <span class="text-xs sm:text-sm">Mulai dari Rp.185.000/bulan</span>
              </div>
            </div>
          </template>

          <template v-if="!isMobile" #right>
            <div class="flex justify-end items-center w-full h-full">
              <NuxtImg
                class="rounded-2xl sm:rounded-3xl aspect-square w-full max-w-xs sm:max-w-sm lg:max-w-md object-cover"
                src="/img/sample/montessori-1.jpg"
              />
            </div>
          </template>
        </CardCenterSplit>
      </div>
    </section>

    <!-- SECTION 5 -->
    <section id="courses" class="w-full bg-gray-100 text-black py-12 sm:py-16 md:py-20 lg:py-24 box-border">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-body">
        <UContainer>
          <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Berbagai Macam Kelas Untuk Anak Anda
          </h2>
          <p class="text-sm sm:text-base mb-4 sm:mb-6">
            Penuhi kebutuhan ilmu si kecil sejak dalam kandungan cocok untuk usia 0 - 3 tahun!
          </p>

          <UTabs
            :items="courseItems"
            variant="link"
            class="gap-3 sm:gap-4 mt-4 sm:mt-6"
            color="neutral"
            :size="isMobile ? 'lg' : 'xl'"
            :ui="{ trigger: 'font-bold' }"
          >
            <template #account="{ item }">
              <p class="text-muted mb-3 sm:mb-4 text-sm sm:text-base">
                {{ item.description }}
              </p>

              <div
                class="flex overflow-x-auto gap-3 sm:gap-4 p-2 pb-3 -mx-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-w-full"
              >
                <CardCourse v-for="data in item.data" v-bind="data" :key="data.id" />
              </div>
            </template>
          </UTabs>

          <p
            class="p-2 font-bold text-raka-pink mt-3 sm:mt-4 text-sm sm:text-base cursor-pointer hover:underline transition-all"
          >
            Cari Kelas Lainnya →
          </p>
        </UContainer>
      </div>
    </section>

    <!-- SECTION 6 -->
    <section id="testimonials" class="w-full bg-gray-100 text-black py-12 sm:py-16 md:py-20 lg:py-24 box-border">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-body">
        <UContainer>
          <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
            Testimoni Anda Sangat Berarti
          </h2>

          <div
            class="flex gap-3 sm:gap-4 p-2 pb-3 -mx-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-w-full"
          >
            <CardTestimonial v-for="item in testimonialItems" :key="item.id" :text="item.text" />
          </div>

          <p
            class="p-2 font-bold text-raka-pink mt-3 sm:mt-4 text-sm sm:text-base cursor-pointer hover:underline transition-all"
          >
            Lihat Testimoni Lainnya →
          </p>
        </UContainer>
      </div>
    </section>
  </div>
</template>
