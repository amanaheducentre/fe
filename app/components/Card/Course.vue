<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  sold: {
    type: Number,
    default: 0,
  },
  tags: {
    type: Array as () => string[],
    default: () => [""],
  },
  star: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <article
    class="shrink-0 w-[18rem] sm:w-[20rem] lg:w-[24rem] rounded-3xl ring-1 ring-black/10 bg-white overflow-hidden"
  >
    <!-- Image -->
    <div class="p-3 sm:p-4">
      <div class="rounded-2xl overflow-hidden aspect-16/10 bg-gray-100">
        <NuxtImg
          :src="props.image"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="px-3 sm:px-4 pb-4 sm:pb-5">
      <NuxtLink to="/course/pria-solo">
        <p class="font-bold text-base sm:text-lg leading-snug line-clamp-2">
          {{ props.title }}
        </p>
      </NuxtLink>

      <p class="text-xs sm:text-sm text-gray-500 mt-1">
        {{ props.sold }} peserta
      </p>

      <!-- Badges -->
      <div class="flex flex-wrap items-center gap-2 mt-3">
        <UBadge
          v-for="tag in props.tags"
          :key="tag"
          size="md"
          class="px-3 bg-raka-orange font-bold text-white"
        >
          {{ tag }}
        </UBadge>

        <UBadge size="md" variant="outline" color="neutral" class="gap-1">
          <Icon name="uil:star" class="text-raka-orange" />
          <span class="font-bold">{{ props.star }}</span>
        </UBadge>

        <UBadge size="md" variant="outline" color="neutral">
          {{ props.rating }} ratings
        </UBadge>
      </div>

      <!-- Price -->
      <p class="font-bold text-md mt-4">
        Rp. {{ props.price?.toLocaleString("id-ID") }}
      </p>
    </div>
  </article>
</template>
