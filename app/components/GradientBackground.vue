<template>
  <div id="gradient" class="w-full h-full">
    <slot></slot>
  </div>
</template>

<style scoped>
#gradient {
  height: 100vh;

  filter: saturate(1.05) brightness(1.02);
  background: linear-gradient(
    -35deg,
    #f68a08 0%,
    #e23000 15%,
    #bb066c 30%,
    #06b2c4 45%,
    #bb066c 60%,
    #e23000 75%,
    #f68a08 100%
  );

  background-size: 800% 800%;
  animation: gradientFestival 16s ease-in-out infinite;
}

@keyframes gradientFestival {
  0% {
    background-position: 10% 20%;
  }
  20% {
    background-position: 80% 10%;
  }
  40% {
    background-position: 100% 80%;
  }
  60% {
    background-position: 30% 100%;
  }
  80% {
    background-position: 60% 50%;
  }
  100% {
    background-position: 10% 20%;
  }
}
</style>
