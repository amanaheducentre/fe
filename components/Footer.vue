<script setup>
import { ref } from "vue";

const currentYear = new Date().getFullYear();
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
  <div class="bg-gray-900 text-white w-full h-full">
    <div class="grid grid-cols-4">
      <div class="hero-title flex my-10 ml-10 py-5 text-3xl">Sekolah Montessori #1 <br/> di Banyuwangi</div>
      <div class="my-10">
        <div class="head-footer">Contact</div>
        <div class="desc-footer">
          <div>info@lkpamanaheducentre.id</div>
          <div>+62 1234 4321 1234</div>
          <div class="mt-2">Ruko Permata Indah No. 6,</div>
          <div>Jl. Kepiting, Sobo, Tukangkayu, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68418</div>
        </div>
      </div>
      <div class="my-10">
        <div class="head-footer">Links</div>
        <div v-for="link in links" class="desc-footer">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </div>
      </div>
      <div class="my-10">
        <div class="head-footer">Follow Us</div>
        <div class="desc-footer">
          <div v-for="sosmed in sosmeds">
            <NuxtLink :to="sosmed.link" target="_blank">{{ sosmed.label }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">&copy; 2025 Amanah Edu Centre</div>
  </div>
</template>

<style scoped>
.head-footer {
  font-size: x-large;
  font-weight: bolder;
}

.desc-footer {
  font-weight: bold;
}
</style>
