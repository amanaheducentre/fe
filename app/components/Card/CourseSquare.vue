<script setup lang="ts">
import { type PropType } from "vue";

const props = defineProps({
  id: String,
  thumbnailUrl: String,
  title: String,
  subtitle: String,
  ratingAvg: Number,
  ratingCount: Number,
  price: Number,
  tags: Array as PropType<string[]>,
});

const courseStore = useCourseStore();
const starCount = computed(() => {
  const r = Number(props.ratingAvg) || 0;
  return Math.max(0, Math.min(5, Math.floor(r)));
});
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 w-full"
    @click="courseStore.selectCourse(props.id!)"
  >
    <!-- Image -->
    <div class="w-full aspect-16/10 overflow-hidden bg-gray-100">
      <NuxtLink :to="'/course/' + props.id">
        <NuxtImg
          :src="props.thumbnailUrl!"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </NuxtLink>
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-2 p-3 sm:p-4">
      <div class="space-y-1">
        <NuxtLink :to="'/course/' + props.id">
          <h3
            class="text-sm sm:text-base md:text-lg font-bold leading-snug line-clamp-2 hover:text-raka-orange transition-colors"
          >
            {{ props.title }}
          </h3>
        </NuxtLink>
        <p class="text-xs sm:text-sm text-gray-600 line-clamp-2">
          {{ props.subtitle }}
        </p>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <span class="font-bold text-sm">
          {{ Number(props.ratingAvg).toFixed(1) }}
        </span>
        <div class="flex items-center gap-0.5">
          <Icon v-for="i in starCount" :key="i" name="uil:star" class="text-raka-orange w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <span class="text-xs text-gray-500">({{ props.ratingCount }})</span>
      </div>

      <!-- Price -->
      <p class="text-base sm:text-lg md:text-xl font-bold text-raka-orange">
        Rp. {{ props.price?.toLocaleString("id-ID") }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1.5">
        <UBadge v-for="tag in props.tags" :key="tag as string" class="px-2 py-0.5 font-bold text-xs" size="sm">
          {{ tag }}
        </UBadge>
      </div>
    </div>
  </article>
</template>
