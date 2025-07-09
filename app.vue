<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp>
      <div class="w-full h-full flex justify-center sticky">
        <div class="w-[80%]">
          <Navbar />
        </div>
      </div>
      <NuxtPage />
      <div class="w-full h-full flex justify-center sticky">
        <div class="w-[80%]">
          <Footer> </Footer>
        </div>
      </div>
    </UApp>
  </div>
</template>
