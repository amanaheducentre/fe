<script setup lang="ts">
const { loggedIn } = useUserSession();

const route = useRoute();

const sideItems = ref([
  {
    title: "PENGGUNA",
    child: [
      {
        title: loggedIn.value ? "Logout" : "Login",
        icon: "ic:outline-account-circle",
        to: loggedIn.value ? "/landing/logout" : "/login",
      },
      {
        title: "Profil",
        icon: "ic:outline-account-circle",
        to: "",
        mustLoggedIn: true,
      },
    ],
  },
  {
    title: "MENU UTAMA",
    child: [
      {
        title: "Beranda",
        icon: "ic:baseline-monitor",
        to: "/dashboard",
      },
      {
        title: "Katalog Kelas",
        icon: "ic:outline-auto-awesome-mosaic",
        to: "",
      },
      {
        title: "Kelas Saya",
        icon: "ic:outline-school",
        to: "",
      },
      {
        title: "Pertanyaan",
        icon: "ic:outline-speaker-notes",
        to: "",
      },
    ],
  },
]);
</script>

<template>
  <div class="h-full w-full flex flex-col items-center py-6 sm:py-8 md:py-12 bg-white shadow-lg">
    <!-- Logo -->
    <NuxtLink to="/" class="shrink-0">
      <NuxtImg src="img/logo.png" class="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
    </NuxtLink>

    <!-- Menu Items -->
    <nav
      class="flex flex-col w-full flex-1 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-8 lg:px-12 space-y-6 sm:space-y-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
    >
      <div v-for="menu in sideItems" :key="menu.title" class="w-full space-y-2">
        <h3 class="font-display font-black tracking-wider text-xs sm:text-sm text-gray-600">
          {{ menu.title }}
        </h3>
        <div class="w-full space-y-1">
          <div v-for="item in menu.child" :key="item.title">
            <NuxtLink v-if="item.mustLoggedIn ? (loggedIn ? true : false) : true" :to="item.to" class="block">
              <UButton
                :icon="item.icon"
                size="md"
                color="primary"
                variant="solid"
                :active="route.path.startsWith(item.to)"
                class="bg-transparent text-gray-700 hover:bg-gray-200 active:bg-raka-orange w-full px-4 transition-colors"
              >
                {{ item.title }}
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
