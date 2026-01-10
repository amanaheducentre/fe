<script setup lang="ts">
const sideItems = ref([
    {
        title: "MENU UTAMA",
        child: [
            {
                title: "Beranda",
                icon: "ic:baseline-monitor",
                to: "",
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
    {
        title: "MENU KEDUA",
        child: [
            {
                title: "Kursus",
                icon: "",
                to: "",
            },
        ],
    },
    {
        title: "MENU KETIGA",
        child: [
            {
                title: "Profil",
                icon: "",
                to: "",
            },
        ],
    },
]);
</script>

<template>
    <div
        class="min-h-full min-w-xs max-w-md flex flex-col items-center py-12 bg-white drop-shadow-gray-900 drop-shadow-md"
    >
        <NuxtLink to="/">
            <NuxtImg src="img/logo.png" class="max-w-8" />
        </NuxtLink>
        <div class="flex flex-col min-w-full min-h-full my-10 px-12 space-y-8">
            <div v-for="menu in sideItems" :key="menu.title" class="w-full">
                <p class="font-display font-black tracking-wider">
                    {{ menu.title }}
                </p>
                <div class="w-full mt-2">
                    <UButton
                        v-for="item in menu.child"
                        :key="item.title"
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
</template>

<style scoped></style>
