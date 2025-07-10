<script setup lang="ts">
import { ref } from "vue";

const programList = ref([
  {
    logo: "/img/logo.png",
    desc: "Amanah Edu Centre",
  },
  {
    logo: "/img/logo.png",
    desc: "Sekolah Ramah Inklusi",
  },
  {
    logo: "/img/logo.png",
    desc: "Coding Robotik Amanah",
  },
  {
    logo: "/img/logo.png",
    desc: "Bimbingan Menggambar",
  },
]);
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full h-screen overflow-hidden">
      <GradientBackground>
        <div class="flex w-[75%] h-full flex-col">
          <span class="hero-title ml-36 mt-52 font-bold text-white text-7xl py-2 leading-22">
            SEKOLAH MONTESSORI <span class="hover:underline transition-all"> #1 DI BANYUWANGI </span>
          </span>
          <span class="hero-desc ml-36 mt-8 text-white text-lg font-bold"
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
    <div class="w-full h-screen bg-gray-100 flex justify-end">
      <div class="w-[75%] h-full flex flex-col justify-center">
        <div class="w-[70%]">
          <div class="hero-title text-7xl leading-22">Sekolah Kami Bukan Sekolah Biasa</div>
          <div class="hero-desc font-bold text-lg mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, assumenda dolorem voluptates atque quae
            dolores consectetur, explicabo nobis voluptate soluta possimus exercitationem! Consectetur omnis
            necessitatibus aperiam perferendis! Deleniti, quia voluptatem. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Aliquam, odit libero excepturi quasi consequuntur corrupti aut tempore. Quia perferendis
            debitis omnis obcaecati voluptate, beatae commodi natus, voluptates cumque sunt temporibus!
          </div>
        </div>
      </div>
    </div>
    <div id="program" class="w-full h-screen flex flex-col justify-center items-center">
      <div class="hero-title text-7xl text-white w-[30%] text-center">Program Kami</div>
      <div class="h-48 mt-8 text-white font-bold flex justify-start items-start">
        <div v-for="program in programList" class="w-28 h-28">
          <ProgramCard :logo="program.logo" :desc="program.desc" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-title {
  font-family: "moderniz";
}

.hero-desc {
  font-family: "League Spartan";
}

#program {
  background: #9b2a2a;
  background: linear-gradient(21deg, rgba(155, 42, 42, 1) 0%, rgba(186, 6, 6, 1) 50%, rgba(84, 0, 0, 1) 100%);
}
</style>
