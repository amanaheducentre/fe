<script setup lang="ts">
import { ref } from "vue";

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
    newColor == bubleGradients.value[i] ? i-- : (bubleGradients.value[i] = newColor);
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
        <div class="flex md:w-[75%] h-full flex-col justify-center px-10 md:pl-36">
          <span
            class="hero-title font-bold text-white text-2xl md:text-4xl lg:text-7xl py-2 md:leading-11 lg:leading-22"
          >
            SEKOLAH MONTESSORI #1 <br />
            DI BANYUWANGI
          </span>
          <span class="mt-8 text-white text-sm md:text-md lg:text-lg font-medium lg:font-bold"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit iusto deserunt eaque adipisci
            cupiditate sequi quia praesentium laudantium perspiciatis quaerat ullam, ipsum fuga error veniam dolorem?
            Molestiae, voluptates inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            doloribus tempora a cumque quidem? Reprehenderit corrupti voluptatem nobis magnam sed rerum consectetur
            accusantium cum, minus similique natus dignissimos excepturi eos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus numquam quis sunt, rerum veniam rem eveniet quam error non amet hic in dicta,
            quisquam culpa fugiat molestiae quae incidunt. Impedit!</span
          >
        </div>
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
        <div class="relative z-9 w-[70%]">
          <div class="hero-title text-2xl md:text-4xl lg:text-7xl md:leading-11 lg:leading-22">
            Sekolah Kami Bukan Sekolah Biasa
          </div>
          <div class="md:font-md lg:font-bold text-sm md:text-md lg:text-lg mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, assumenda dolorem voluptates atque quae
            dolores consectetur, explicabo nobis voluptate soluta possimus exercitationem! Consectetur omnis
            necessitatibus aperiam perferendis! Deleniti, quia voluptatem. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Aliquam, odit libero excepturi quasi consequuntur corrupti aut tempore. Quia perferendis
            debitis omnis obcaecati voluptate, beatae commodi natus, voluptates cumque sunt temporibus!
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-screen flex flex-col justify-center items-center bg-gradient-red">
      <div class="hero-title text-2xl md:text-4xl lg:text-7xl text-white md:w-[30%] w-[50%] text-center">
        Program Kami
      </div>
      <div
        class="h-72 md:h-48 mt-8 text-white w-[80%] md:w-max lg:font-bold gap-3 md:gap-5 flex flex-wrap justify-center"
      >
        <div v-for="program in programList" class="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 place-self-center">
          <ProgramCard :logo="program.logo" :desc="program.desc" />
        </div>
      </div>
    </div>
    <div class="w-full h-max flex justify-center">
      <UCard class="my-5 w-[70%] rounded-xl bg-gradient-green">
        <div class="flex flex-col items-center gap-2">
          <div>Masih Punya Pertanyaan ?</div>
          <div class="hero-title text-md md:text-2xl text-center">Tanyakan ke Admin Amanah</div>
          <div class="mt-2">
            <NuxtLink to="#" class="flex rounded-full shadow-md bg-white">
              <div class="flex items-center m-3 gap-1 text-black font-bold text-md">
                <IconsText size="18" color="green" />
                Chat Sekarang
              </div>
            </NuxtLink>
          </div>
        </div>
      </UCard>
    </div>
    <div class="w-full h-full bg-gradient-orange flex justify-center items-center">
      <div class="w-[50%] my-10 flex flex-col justify-center items-center">
        <div class="text-xl lg:text-2xl text-bold hero-title text-white text-center">Paling Banyak Ditanyakan</div>
        <FAQ class="text-white mt-5 w-[50%]"></FAQ>
      </div>
    </div>
  </div>
</template>
