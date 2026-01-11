<script setup lang="ts">
const { loggedIn } = useUserSession();

const sideItems = ref([
    {
        title: "PENGGUNA",
        child: [
            {
                title: loggedIn.value ? "Logout" : "Login",
                icon: "ic:outline-account-circle",
                to: loggedIn.value ? "/logout" : "/login",
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
    <div
        class="min-h-full min-w-full md:min-w-xs md:max-w-md flex flex-col items-center py-12 bg-transparent md:bg-white md:drop-shadow-gray-900 md:drop-shadow-md"
    >
        <NuxtLink to="/">
            <NuxtImg src="img/logo.png" class="max-w-8" />
        </NuxtLink>
        <div
            class="flex flex-col min-w-full min-h-full my-10 px-12 space-y-8 overflow-y-scroll"
        >
            <div v-for="menu in sideItems" :key="menu.title" class="w-full">
                <p class="font-display font-black tracking-wider">
                    {{ menu.title }}
                </p>
                <div class="w-full mt-2">
                    <div v-for="item in menu.child" :key="item.title">
                        <UButton
                            v-if="
                                item.mustLoggedIn
                                    ? loggedIn
                                        ? true
                                        : false
                                    : true
                            "
                            :icon="item.icon"
                            size="md"
                            color="neutral"
                            variant="solid"
                            class="bg-transparent text-gray-700 px-4 w-full text-md"
                            >{{ item.title }}</UButton
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
