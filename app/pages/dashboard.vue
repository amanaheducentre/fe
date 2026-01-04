<script setup lang="ts">
const bannerItems = ref([
    "https://picsum.photos/1200/800?random=1",
    "https://picsum.photos/1200/800?random=2",
    "https://picsum.photos/1200/800?random=3",
]);

const coursesItems = ref([
    {
        id: 1,
        tag: "Kelas Programming",
        courses: [
            {
                title: "Belajar Vue.js",
                description: "Belajar Vue.js dari dasar hingga lanjutan",
                image: "https://picsum.photos/800/600?random=1",
                price: 100000,
                rating: 4.5,
                reviews: 100,
                tags: ["Bestseller", "Vue.js"],
            },
            {
                title: "Belajar React.js",
                description: "Belajar React.js dari dasar hingga lanjutan",
                image: "https://picsum.photos/800/600?random=2",
                price: 120000,
                rating: 4.8,
                reviews: 150,
                tags: ["Bestseller", "React.js"],
            },
            {
                title: "Belajar TypeScript",
                description: "Belajar TypeScript dari dasar hingga lanjutan",
                image: "https://picsum.photos/800/600?random=3",
                price: 150000,
                rating: 4.9,
                reviews: 200,
                tags: ["Bestseller", "TypeScript"],
            },
            {
                title: "Belajar PHP",
                description: "Belajar PHP dari dasar hingga lanjutan",
                image: "https://picsum.photos/800/600?random=4",
                price: 180000,
                rating: 4.7,
                reviews: 250,
                tags: ["Bestseller", "PHP"],
            },
        ],
    },
    {
        id: 2,
        tag: "Kelas Bahasa",
        courses: [
            {
                title: "Belajar Bahasa Inggris",
                description:
                    "Belajar Bahasa Inggris dari dasar hingga lanjutan",
                image: "https://picsum.photos/800/600?random=5",
                price: 100000,
                rating: 4.6,
                reviews: 120,
                tags: ["Bestseller", "Bahasa Inggris"],
            },
            {
                title: "Belajar Bahasa Jepang",
                description: "Belajar Bahasa Jepang dari dasar hingga lanjutan",
                image: "https://picsum.photos/800/600?random=6",
                price: 120000,
                rating: 4.8,
                reviews: 150,
                tags: ["Bestseller", "Bahasa Jepang"],
            },
        ],
    },
    {
        id: 3,
        tag: "Kelas Matematika",
        courses: [
            {
                title: "Belajar Matematika Dasar",
                description:
                    "Belajar Matematika Dasar dari dasar hingga lanjutan",
                image: "https://picsum.photos/800/600?random=7",
                price: 80000,
                rating: 4.5,
                reviews: 100,
                tags: ["Bestseller", "Matematika"],
            },
            {
                title: "Belajar Matematika Lanjutan",
                description:
                    "Belajar Matematika Lanjutan dari dasar hingga lanjutan",
                image: "https://picsum.photos/800/600?random=8",
                price: 150000,
                rating: 4.9,
                reviews: 200,
                tags: ["Bestseller", "Matematika"],
            },
        ],
    },
    {
        id: 4,
        tag: "Kelas Seni",
        courses: [
            {
                title: "Belajar Seni Lukis",
                description: "Belajar Seni Lukis dari dasar hingga lanjutan",
                image: "https://picsum.photos/800/600?random=9",
                price: 120000,
                rating: 4.8,
                reviews: 150,
                tags: ["Bestseller", "Seni"],
            },
            {
                title: "Belajar Seni Musik",
                description: "Belajar Seni Musik dari dasar hingga lanjutan",
                image: "https://picsum.photos/800/600?random=10",
                price: 100000,
                rating: 4.7,
                reviews: 120,
                tags: ["Bestseller", "Seni"],
            },
        ],
    },
]);
</script>

<template>
    <div class="w-full">
        <!-- Header -->
        <div class="w-full">
            <UContainer class="py-4 sm:py-6">
                <div class="flex items-center gap-3 sm:gap-4">
                    <UAvatar
                        src="https://github.com/benjamincanac.png"
                        size="xl"
                        class="sm:w-16! sm:h-16!"
                    />
                    <div class="leading-tight">
                        <p class="text-sm sm:text-base text-gray-500">Halo,</p>
                        <p class="text-lg sm:text-xl font-semibold">Paulus</p>
                    </div>
                </div>
            </UContainer>
        </div>

        <!-- Banner Carousel -->
        <div class="w-full">
            <UCarousel
                v-slot="{ item }"
                loop
                :autoplay="{ delay: 5000 }"
                wheel-gestures
                :items="bannerItems"
                :ui="{
                    prev: 'start-3 sm:start-8',
                    next: 'end-3 sm:end-8',
                }"
            >
                <!-- tinggi responsif + gambar rapi -->
                <div class="w-full overflow-hidden rounded-none">
                    <NuxtImg
                        :src="item"
                        class="w-full aspect-21/9 md:aspect-21/6 object-cover"
                        loading="lazy"
                    />
                </div>
            </UCarousel>
        </div>

        <!-- Content -->
        <UContainer class="py-5 sm:py-8 text-arcon space-y-4 sm:space-y-6">
            <p class="text-xl sm:text-3xl leading-tight font-bold">
                Mau Belajar Apa Hari Ini?
            </p>

            <!-- Courses Categories -->
            <div v-for="item in coursesItems" :key="item.id" class="space-y-3">
                <p class="text-lg sm:text-2xl font-bold">{{ item.tag }}</p>

                <!-- Mobile: horizontal scroll. Desktop: grid -->
                <div class="-mx-4 px-4 sm:mx-0 sm:px-">
                    <div
                        class="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:overflow-visible sm:pb-0 sm:snap-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        <CardCourseSquare
                            v-for="course in item.courses"
                            :key="course.title"
                            v-bind="course"
                            class="shrink-0 w-56 snap-start sm:w-auto"
                        />
                    </div>
                </div>
            </div>
        </UContainer>
    </div>
</template>
