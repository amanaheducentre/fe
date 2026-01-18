<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: "Course Title" },
  description: { type: String, default: "Course Description" },
  image: { type: String, default: "" },
  price: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  tags: { type: Array, default: () => ["Bestseller"] },
});

const starCount = computed(() => {
  // tampilkan 0..5 bintang (dibulatkan ke bawah)
  const r = Number(props.rating) || 0;
  return Math.max(0, Math.min(5, Math.floor(r)));
});
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-white w-64 sm:w-auto sm:min-w-0"
  >
    <!-- Image -->
    <div class="w-full aspect-16/10 overflow-hidden">
      <NuxtLink to="/course/pria-solo">
        <NuxtImg
          :src="props.image"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </NuxtLink>
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-2 p-3 sm:p-4">
      <div class="space-y-1">
        <NuxtLink to="/course/pria-solo">
          <p class="text-base sm:text-lg font-bold leading-snug line-clamp-2">
            {{ props.title }}
          </p>
        </NuxtLink>
        <p class="text-xs sm:text-sm text-gray-600 line-clamp-2">
          {{ props.description }}
        </p>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-2">
        <p class="font-bold text-sm">
          {{ Number(props.rating).toFixed(1) }}
        </p>
        <div class="flex items-center gap-0.5">
          <Icon v-for="i in starCount" :key="i" name="uil:star" class="text-raka-orange" />
        </div>
        <p class="text-xs text-gray-500">({{ props.reviews }})</p>
      </div>

      <!-- Price -->
      <p class="text-lg sm:text-xl font-bold">Rp. {{ props.price?.toLocaleString("id-ID") }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1">
        <UBadge v-for="tag in props.tags" :key="tag as string" class="px-2 font-bold" size="sm">
          {{ tag }}
        </UBadge>
      </div>
    </div>
  </article>
</template>
