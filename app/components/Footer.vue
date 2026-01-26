<script setup>
import { ref } from "vue";

const links = ref([
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Maps",
    to: "https://maps.app.goo.gl/fUKzsM1HfhfpNeUX7",
  },
]);
const sosmeds = ref([
  {
    label: "Instagram",
    link: "#",
  },
  {
    label: "Facebook",
    link: "#",
  },
  {
    label: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=+6285159946601",
  },
  {
    label: "Tiktok",
    link: "#",
  },
  {
    label: "Youtube",
    link: "#",
  },
]);
</script>

<template>
  <div class="min-w-full min-h-screen md:min-h-full flex justify-center items-center">
    <div class="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 md:p-5 pt-10">
      <div class="text-hero flex p-5 justify-center items-center text-xl lg:text-3xl text-center">
        Sekolah Montessori #1 <br />
        di Banyuwangi
      </div>
      <div class="flex flex-col items-center justify-center md:justify-start">
        <div class="head-footer">Contact</div>
        <div class="text-sm px-24 text-center">
          <div>info@lkpamanaheducentre.id</div>
          <div>+62 1234 4321 1234</div>
          <div class="mt-2">Ruko Permata Indah No. 6,</div>
          <div>Jl. Kepiting, Sobo, Tukangkayu, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68418</div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center md:justify-start">
        <div class="head-footer">Links</div>
        <div v-for="link in links" class="text-sm">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center md:justify-start">
        <div class="head-footer">Follow Us</div>
        <div>
          <div v-for="sosmed in sosmeds" class="text-sm">
            <NuxtLink :to="sosmed.link" target="_blank">{{ sosmed.label }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head-footer {
  font-size: x-large;
  font-weight: bolder;
}
</style>
