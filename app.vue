<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp>
      <div
        class="w-full h-full flex justify-center sticky bg-[url('/img/bg_navbar.png')] bg-no-repeat bg-cover bg-bottom drop-shadow-md top-0"
      >
        <div class="w-[95%] h-24 flex justify-center items-center">
          <Navbar />
        </div>
      </div>
      <NuxtPage />
      <div class="w-full h-full flex justify-center">
        <div class="w-[80%]">
          <Footer> </Footer>
        </div>
      </div>
    </UApp>
  </div>
</template>

<style scoped>
html {
  font-family: "League Spartan";
}
</style>
