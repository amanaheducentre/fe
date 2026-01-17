<script setup lang="ts">
const { loggedIn } = useUserSession();
const { isMobile } = useDevice();
</script>

<template>
  <!-- Mobile Navigation -->
  <div v-if="isMobile" class="grid grid-cols-3 w-full h-16 bg-white">
    <div class="flex items-center px-3">
      <UDrawer>
        <UButton variant="outline" class="ring-0 text-black">
          <Icon name="qlementine-icons:menu-burger-16" width="24" />
        </UButton>

        <template #content>
          <SideBar />
        </template>
      </UDrawer>
    </div>
    <div class="flex justify-center items-center">
      <NuxtLink to="/">
        <NuxtImg src="/img/logo.png" class="w-7" />
      </NuxtLink>
    </div>
  </div>

  <!-- Desktop Navigation -->
  <div v-else class="grid grid-cols-3 w-full h-24 bg-white">
    <div class="flex items-center">
      <NuxtLink to="/">
        <NuxtImg src="/img/logo.png" width="32" class="ml-6" />
      </NuxtLink>
    </div>
    <div />
    <div class="flex justify-end items-center">
      <div class="flex h-full justify-center items-center gap-3 mx-4">
        <NuxtLink to="#"> PROGRAM </NuxtLink>
        <NuxtLink to="#"> GALLERY </NuxtLink>
        <NuxtLink to="#"> BEASISWA </NuxtLink>
        <NuxtLink to="#">
          <Icon name="uil:shopping-cart" size="20px" />
        </NuxtLink>
      </div>
      <div>
        <div v-if="!loggedIn" class="flex gap-2 mr-6">
          <NuxtLink to="/login">
            <UButton color="neutral" class="bg-gray-500">Log In</UButton>
          </NuxtLink>
          <NuxtLink to="#">
            <UButton color="neutral" class="bg-raka-orange">Sign Up</UButton>
          </NuxtLink>
        </div>
        <div v-else class="flex gap-2 mr-6">
          <NuxtLink to="/dashboard">
            <UButton color="neutral" class="bg-raka-orange">Dashboard</UButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
