<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <UCard>
    <div class="flex flex-col space-y-9">
      <div class="flex flex-col space-y-3 text-body">
        <h2 class="font-black text-2xl">{{ props.title }}</h2>
        <slot></slot>
      </div>
    </div>
  </UCard>
</template>
