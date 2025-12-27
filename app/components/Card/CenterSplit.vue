<script setup>
defineProps({
  backgroundColor: String,
});
</script>

<template>
  <UCard class="my-5 w-[70%] rounded-4xl ring-0" :class="backgroundColor">
    <div class="w-full h-full grid grid-cols-2 gap-8 p-8">
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
  </UCard>
</template>
