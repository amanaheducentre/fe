<script setup lang="ts">
const { isMobile } = useDevice();
const isMenuOpen = ref(false);
const showCloseMenu = ref(false);

watch(isMenuOpen, async () => {
  showCloseMenu.value = false;
  if (isMenuOpen.value == true) {
    await sleep(400);
    showCloseMenu.value = true;
  }
});

const navbarMenu = ref([
  [
    {
      name: "Log In",
      to: "#",
      class: "text-raka-blue",
    },
    {
      name: "Sign Up",
      to: "#",
      class: "text-raka-blue",
    },
  ],
  [
    {
      name: "Main Menu",
      to: "#",
      class: "text-xl text-raka-orange",
    },
    {
      name: "Program",
      to: "#",
      class: "text-sm",
    },
    {
      name: "Gallery",
      to: "#",
      class: "text-sm",
    },
    {
      name: "Beasiswa",
      to: "#",
      class: "text-sm",
    },
  ],
]);
</script>

<template>
  <div v-if="isMobile" class="flex w-full h-16 bg-white">
    <div
      class="flex fixed min-w-[50%] min-h-screen bg-white transition-all z-9999"
      :class="isMenuOpen ? '' : '-translate-x-100'"
    >
      <div class="fixed flex w-full items-center">
        <div
          class="flex justify-center items-center w-12 h-12 transition-all translate-x-10 my-8 bg-white rounded-full mx-auto justify-self-center shadow"
          :class="showCloseMenu ? 'scale-100' : 'scale-0'"
          @click="isMenuOpen = false"
        >
          <Icon name="uil:multiply" size="24px"> </Icon>
        </div>
      </div>
      <div class="flex flex-col gap-4 z-9999 w-full my-6">
        <div v-for="data in navbarMenu" class="flex flex-col gap-3">
          <NuxtLink v-for="nav in data" :to="nav.to" class="pl-2" :class="nav.class">{{ nav.name }}</NuxtLink>
          <hr />
        </div>
      </div>
    </div>
    <div
      class="flex fixed transition-all"
      :class="isMenuOpen ? 'min-h-screen min-w-screen backdrop-blur-md' : ''"
    ></div>
    <div class="flex h-full items-center px-2">
      <UButton @click="isMenuOpen = !isMenuOpen" variant="outline" class="ring-0 text-black">
        <Icon name="uil:ellipsis-v" size="24px"></Icon>
      </UButton>
    </div>
  </div>
  <div v-else class="grid grid-cols-3 w-full h-24 bg-white">
    <div class="flex items-center">
      <NuxtLink to="/">
        <NuxtImg src="/img/logo.png" width="32" class="ml-6"></NuxtImg>
      </NuxtLink>
    </div>
    <div class=""></div>
    <div class="flex justify-end items-center">
      <div class="flex h-full justify-center items-center gap-3 mx-4">
        <NuxtLink to="#"> PROGRAM </NuxtLink>
        <NuxtLink to="#"> GALLERY </NuxtLink>
        <NuxtLink to="#"> BEASISWA </NuxtLink>
        <NuxtLink to="#">
          <Icon name="uil:shopping-cart" size="20px"></Icon>
        </NuxtLink>
      </div>
      <div class="flex gap-2 mr-6">
        <NuxtLink to="#">
          <UButton color="neutral" class="bg-gray-500">Log In</UButton>
        </NuxtLink>
        <NuxtLink to="#">
          <UButton color="neutral" class="bg-raka-orange">Sign Up</UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
