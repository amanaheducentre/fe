<script setup lang="ts">
import { type PropType } from "vue";
import type { CourseData } from "~~/shared/types/course.schema";

const props = defineProps({
  data: {
    type: Object as PropType<CourseData>,
  },
});

console.log(props);
const starCount = computed(() => {
  const r = Number(props.data?.ratingAvg) || 0;
  return Math.max(0, Math.min(5, Math.floor(r)));
});
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-white w-64 sm:w-auto sm:min-w-0"
  >
    <!-- Image -->
    <div class="w-full aspect-16/10 overflow-hidden">
      <NuxtLink :to="'/course/' + props.data?.id">
        <NuxtImg
          :src="props.data?.thumbnailUrl!"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </NuxtLink>
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-2 p-3 sm:p-4">
      <div class="space-y-1">
        <NuxtLink :to="'/course/' + props.data?.id">
          <p class="text-base sm:text-lg font-bold leading-snug line-clamp-2">
            {{ props.data?.title }}
          </p>
        </NuxtLink>
        <p class="text-xs sm:text-sm text-gray-600 line-clamp-2">
          {{ props.data?.subtitle }}
        </p>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-2">
        <p class="font-bold text-sm">
          {{ Number(props.data?.ratingAvg).toFixed(1) }}
        </p>
        <div class="flex items-center gap-0.5">
          <Icon v-for="i in starCount" :key="i" name="uil:star" class="text-raka-orange" />
        </div>
        <p class="text-xs text-gray-500">({{ props.data?.ratingCount }})</p>
      </div>

      <!-- Price -->
      <p class="text-lg sm:text-xl font-bold">Rp. {{ props.data?.priceCurrent?.toLocaleString("id-ID") }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1">
        <UBadge v-for="tag in props.data?.tags" :key="tag as string" class="px-2 font-bold" size="sm">
          {{ tag }}
        </UBadge>
      </div>
    </div>
  </article>
</template>
