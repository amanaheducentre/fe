<script setup lang="ts">
defineProps({
  logo: String,
  desc: String,
});
</script>

<template>
  <div class="w-full h-full flex flex-col items-center text-center hover:scale-105 transition-all">
    <div class="w-[70%] h-[70%] bg-gray-100 rounded-xl flex justify-center items-center shadow-md">
      <img :src="logo" alt="Logo" class="h-[70%] w-auto" />
    </div>
    <div>{{ desc }}</div>
  </div>
</template>
