<template>
  <div id="gradient" class="w-full h-full">
    <slot></slot>
  </div>
</template>

<style scoped>
#gradient {
  background: linear-gradient(-45deg, #e23000, #f68a08, #06b2c4, #bb066c);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
