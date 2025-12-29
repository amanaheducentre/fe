<script setup lang="ts">
import { ref } from "vue";

const { isMobile } = useDevice();

const gradientList = ref([
  "bg-raka-red",
  "bg-raka-orange",
  "bg-raka-mint",
  "bg-raka-blue",
  "bg-raka-pink",
  "bg-raka-maroon",
]);
const bubleCount = ref(4);
const bubleGradients = ref<Array<String>>([]);
const programList = ref([
  {
    logo: "/img/serasi.png",
    desc: "Sekolah Ramah Inklusi",
  },
  {
    logo: "/img/corona.png",
    desc: "Coding Robotik Amanah",
  },
  {
    logo: "/img/arunika.png",
    desc: "Bimbingan Menggambar",
  },
  {
    logo: "/img/lensa.png",
    desc: "Learn English with GSA",
  },

  {
    logo: "/img/gsa.png",
    desc: "Griya Sinau Amanah",
  },
]);

function randomizeBubleGradients() {
  for (let i = 0; i < bubleCount.value; i++) {
    const newColor = gradientList.value[Math.floor(Math.random() * gradientList.value.length)];
    newColor == bubleGradients.value[i] ? i-- : (bubleGradients.value[i] = newColor as string);
  }
}

onMounted(async () => {
  while (true) {
    randomizeBubleGradients();
    await sleep(2010);
  }
});
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full h-screen overflow-hidden">
      <GradientBackground>
        <UContainer class="flex flex-col items-center w-full h-full pt-12">
          <span class="text-moderniz font-bold text-white text-4xl lg:text-7xl py-2 md:leading-11 lg:leading-22">
            SEKOLAH MONTESSORI #1 DI BANYUWANGI
          </span>
          <span class="text-arcon mt-4 text-white text-lg lg:text-lg font-medium text-justify"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit iusto deserunt eaque adipisci
            cupiditate sequi quia praesentium laudantium perspiciatis quaerat ullam, ipsum fuga error veniam dolorem?
            Molestiae, voluptates inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            doloribus tempora a cumque quidem? Reprehenderit corrupti voluptatem nobis magnam sed rerum consectetur
            accusantium cum, minus similique natus dignissimos excepturi eos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus numquam quis sunt, rerum veniam rem eveniet quam error non amet hic in dicta,
            quisquam culpa fugiat molestiae quae incidunt. Impedit!</span
          >
        </UContainer>
      </GradientBackground>
    </div>
    <div class="relative w-screen h-screen overflow-hidden bg-gray-100 flex justify-end">
      <div data-kinesisscroll-item data-ks-strength="50" data-ks-transform="rotate" class="flex absolute w-full h-full">
        <div class="flex w-full h-full justify-center items-center">
          <div class="absolute w-18 h-18 -translate-y-64 translate-x-84">
            <Buble :class="bubleGradients[0]" class="transition-all duration-2000" />
          </div>
          <div class="absolute w-12 h-12 translate-y-64 -translate-x-84">
            <Buble :class="bubleGradients[1]" class="transition-all duration-2000" />
          </div>
          <div class="absolute w-24 h-24 translate-y-84 translate-x-24">
            <Buble :class="bubleGradients[2]" class="transition-all duration-2000" />
          </div>
          <div class="absolute w-14 h-14 -translate-y-75 -translate-x-84">
            <Buble :class="bubleGradients[3]" class="transition-all duration-2000" />
          </div>
        </div>
      </div>
      <div class="w-[75%] h-full flex flex-col justify-center">
        <div class="relative z-9 w-[95%]">
          <div class="text-moderniz text-5xl lg:text-7xl leading-13 lg:leading-22">
            Sekolah Kami Bukan Sekolah Biasa
          </div>
          <div class="text-arcon md:font-md lg:font-bold text-md lg:text-lg mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, assumenda dolorem voluptates atque quae
            dolores consectetur, explicabo nobis voluptate soluta possimus exercitationem! Consectetur omnis
            necessitatibus aperiam perferendis! Deleniti, quia voluptatem. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Aliquam, odit libero excepturi quasi consequuntur corrupti aut tempore. Quia perferendis
            debitis omnis obcaecati voluptate, beatae commodi natus, voluptates cumque sunt temporibus!
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-max flex flex-col justify-center items-center bg-gray-100 text-black">
      <CardCenterSplit background-color="bg-gray-100">
        <template #left>
          <div class="flex flex-col gap-6 text-arcon pr-8">
            <div class="text-2xl md:text-4xl lg:text-6xl font-black tracking-tight">
              Belajar Montessori Secara Online!
            </div>
            <div class="text-justify text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque, incidunt eveniet, quae saepe tempora
              consectetur nihil doloremque delectus similique explicabo? Enim non magni delectus nihil totam, vel rem
              ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic minima perspiciatis eaque blanditiis
              delectus obcaecati necessitatibus rem, nostrum sapiente adipisci rerum repellat sequi ipsa facere nobis
              perferendis officiis excepturi eligendi.
            </div>
          </div>
        </template>
        <template #right>
          <div class="flex justify-end items-center w-full h-full">
            <CarouselImageDesc></CarouselImageDesc>
          </div>
        </template>
      </CardCenterSplit>
    </div>
    <div class="w-full h-max flex flex-col justify-center items-center bg-gray-100 text-white">
      <CardCenterSplit background-color="bg-gradient-red">
        <template #left>
          <div class="grid grid-rows-2 md:pt-16">
            <div class="flex flex-col gap-6 text-arcon md:pr-8">
              <div class="text-justify text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight">
                Belajar Lebih Seru dengan Metode Baru!
              </div>
              <div class="text-justify md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque, incidunt eveniet, quae saepe tempora
                consectetur nihil doloremque delectus similique explicabo? Enim non magni delectus nihil totam, vel rem
                ea.
              </div>
            </div>
            <div class="flex gap-2 bottom-0 w-full h-full flex-col justify-end">
              <div>
                <UButton size="xl" color="neutral">Learn More</UButton>
              </div>
              <div class="text-sm">Mulai dari Rp.185.000/bulan</div>
            </div>
          </div>
        </template>
        <template #right v-if="!isMobile">
          <div class="flex justify-end items-center w-full h-full">
            <NuxtImg class="rounded-3xl aspect-square" src="/img/sample/montessori-1.jpg"></NuxtImg>
          </div>
        </template>
      </CardCenterSplit>
    </div>
  </div>
</template>
