<script setup lang="ts">
import { ref } from "vue";
import type { TabsItem } from "@nuxt/ui";
import { getSampleImage } from "@/utils/lorem";

const testimonialItems = ref([
  { id: 1001, text: "Layanannya sangat baik dan murah" },
  { id: 1002, text: "Sangat membantu anak-anak belajar" },
  { id: 1003, text: "Kurikulumnya sangat menarik" },
]);

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

const scrollPosition = ref(0);
const { isMobile } = useDevice();

const handleScroll = () => {
  scrollPosition.value = window.scrollY || window.pageYOffset;
};

onMounted(async () => {
  window.addEventListener("scroll", handleScroll);
  while (true) {
    await sleep(2010);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="w-full min-h-screen">
    <!-- SECTION 1 (Hero) -->
    <section id="home" class="w-full min-h-screen overflow-hidden">
      <GradientBackground>
        <UContainer class="flex flex-col text-white items-center w-full h-full px-4 sm:px-6 lg:px-8 pt-32">
          <h1
            class="text-moderniz font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-snug lg:leading-[1.05] text-center max-w-5xl"
          >
            SEKOLAH MONTESSORI #1 DI BANYUWANGI
          </h1>

          <p class="text-arcon mt-12 text-base sm:text-lg lg:text-lg font-medium text-justify max-w-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit iusto deserunt eaque adipisci
            cupiditate sequi quia praesentium laudantium perspiciatis quaerat ullam, ipsum fuga error veniam dolorem?
            Molestiae, voluptates inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            doloribus tempora a cumque quidem? Reprehenderit corrupti voluptatem nobis magnam sed rerum consectetur
            accusantium cum, minus similique natus dignissimos excepturi eos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus numquam quis sunt, rerum veniam rem eveniet quam error non amet hic in dicta,
            quisquam culpa fugiat molestiae quae incidunt. Impedit!
          </p>

          <div
            class="flex flex-col justify-center items-center h-full transition-all"
            :class="scrollPosition <= 150 ? '' : 'hidden'"
          >
            <a href="#sekolah-kami">
              <Icon name="uil:angle-down" size="26px" />
            </a>
            <i class="text-xs">Scroll Down</i>
          </div>
        </UContainer>
      </GradientBackground>
    </section>

    <!-- SECTION 2 (Bubble + Teks) -->
    <section id="sekolah-kami" class="relative w-full overflow-hidden bg-gray-100 scroll-mt-18 py-16 sm:py-20 lg:py-28">
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row">
        <!-- Area model -->
        <div v-if="!isMobile" class="flex h-full w-full absolute items-center -translate-x-35 -z-20">
          <NuxtImg src="/img/raja_mafia.png" class="absolute w-132" />
          <div class="rounded-full bg-linear-to-bl from-raka-orange to-raka-red h-132 w-132" />
        </div>

        <!-- Area teks -->
        <div class="w-full flex items-center">
          <div class="w-full max-w-2xl lg:ml-auto">
            <h2 class="text-moderniz text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-[1.05]">
              Sekolah Kami Bukan Sekolah Biasa
            </h2>
            <p class="text-arcon font-medium lg:font-bold text-base sm:text-lg lg:text-lg mt-6 sm:mt-8 text-justify">
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
    <section id="montessori" class="w-full bg-gray-100 text-black py-16 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-[90%] flex justify-center px-4 sm:px-6 lg:px-8">
        <CardCenterSplit background-color="bg-gray-100">
          <template #left>
            <div class="flex flex-col gap-5 sm:gap-6 text-arcon pr-0 lg:pr-8">
              <div class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tight">
                Belajar Montessori Secara Online!
              </div>
              <p class="text-justify text-base sm:text-lg md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque, incidunt eveniet, quae saepe tempora
                consectetur nihil doloremque delectus similique explicabo? Enim non magni delectus nihil totam, vel rem
                ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic minima perspiciatis eaque blanditiis
                delectus obcaecati necessitatibus rem, nostrum sapiente adipisci rerum repellat sequi ipsa facere nobis
                perferendis officiis excepturi eligendi.
              </p>
            </div>
          </template>

          <template #right>
            <div class="flex justify-center lg:justify-end items-center w-full h-full mt-6 lg:mt-0">
              <CarouselImageDesc />
            </div>
          </template>
        </CardCenterSplit>
      </div>
    </section>

    <!-- SECTION 4 -->
    <section id="learn-more" class="w-full bg-gray-100 text-white py-20 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-[90%] flex justify-center px-4 sm:px-6 lg:px-8">
        <CardCenterSplit background-color="bg-gradient-red">
          <template #left>
            <div class="grid gap-8 md:gap-10 md:pt-10 lg:pt-16">
              <div class="flex flex-col gap-4 sm:gap-6 text-arcon md:pr-8">
                <div class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
                  Belajar Lebih Seru dengan Metode Baru!
                </div>
                <div class="text-justify text-base sm:text-lg md:text-xl mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque, incidunt eveniet, quae saepe
                  tempora consectetur nihil doloremque delectus similique explicabo? Enim non magni delectus nihil
                  totam, vel rem ea.
                </div>
              </div>

              <div class="flex gap-2 w-full flex-col justify-end">
                <div>
                  <UButton :size="isMobile ? 'sm' : 'xl'" color="neutral"> Learn More </UButton>
                </div>
                <div class="text-xs md:text-sm">Mulai dari Rp.185.000/bulan</div>
              </div>
            </div>
          </template>

          <template v-if="!isMobile" #right>
            <div class="flex justify-end items-center w-full h-full">
              <NuxtImg
                class="rounded-3xl aspect-square w-full max-w-md object-cover"
                src="/img/sample/montessori-1.jpg"
              />
            </div>
          </template>
        </CardCenterSplit>
      </div>
    </section>

    <!-- SECTION 5 -->
    <section id="courses" class="w-full bg-gray-100 text-black py-16 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-arcon">
        <UContainer>
          <div class="text-xl md:text-4xl font-bold tracking-tight mb-4">Berbagai Macam Kelas Untuk Anak Anda</div>
          <div>Penuhi kebutuhan ilmu si kecil sejak dalam kandungan cocok untuk usia 0 - 3 tahun!</div>

          <UTabs
            :items="courseItems"
            variant="link"
            class="gap-4 mt-6"
            color="neutral"
            size="xl"
            :ui="{ trigger: 'font-bold' }"
          >
            <template #account="{ item }">
              <p class="text-muted mb-4">
                {{ item.description }}
              </p>

              <div class="flex overflow-x-auto gap-4 md:w-full p-2">
                <CardCourse v-for="data in item.data" v-bind="data" :key="data.id" class="shrink-0" />
              </div>
            </template>
          </UTabs>

          <p class="p-2 font-bold text-raka-pink">Cari Kelas Lainnya -></p>
        </UContainer>
      </div>
    </section>

    <!-- SECTION 6 -->
    <section id="testimonials" class="w-full bg-gray-100 text-black py-16 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-arcon">
        <UContainer>
          <div class="text-xl md:text-4xl font-bold tracking-tight mb-6">Testimoni Anda Sangat Berarti</div>

          <div class="flex justify-start gap-4 p-2 overflow-x-scroll">
            <CardTestimonial v-for="item in testimonialItems" :key="item.id" :text="item.text" class="shrink-0" />
          </div>

          <p class="p-2 font-bold text-raka-pink">Lihat Testimoni Lainnya -></p>
        </UContainer>
      </div>
    </section>
  </div>
</template>
