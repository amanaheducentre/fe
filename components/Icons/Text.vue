<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
    <!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE -->
    <path
      :fill="color"
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: String,
  color: String,
});
</script>
