<script setup lang="ts">
const { isMobile } = useDevice();

const windowStore = useWindowStore();
const stateStore = useStateStore();
</script>

<template>
  <!-- Mobile Navigation -->
  <div v-if="isMobile" class="grid grid-cols-3 w-full h-16 bg-white/80 backdrop-blur-md">
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
  <div
    v-else
    class="grid grid-cols-3 w-full bg-white/80 backdrop-blur-xl transition-all"
    :class="windowStore.yPosition > 0 ? 'h-12' : 'h-24'"
  >
    <div class="flex items-center">
      <NuxtLink to="/">
        <NuxtImg src="/img/logo.png" :width="windowStore.yPosition > 0 ? '16' : '32'" class="ml-6 transition-all" />
      </NuxtLink>
    </div>
    <div
      class="flex justify-center items-center text-body text-gray-500 transition-all"
      :class="windowStore.yPosition > 0 ? 'scale-100' : 'scale-0'"
    >
      <!-- {{ windowStore.hashLocation }} -->
    </div>
    <div class="flex justify-end items-center">
      <div
        class="flex h-full justify-center items-center gap-3 mx-4 transition-all"
        :class="windowStore.yPosition > 0 ? 'text-sm' : 'text-md'"
      >
        <NuxtLink to="#"> PROGRAM </NuxtLink>
        <NuxtLink to="#"> GALLERY </NuxtLink>
        <NuxtLink to="#"> BEASISWA </NuxtLink>
      </div>
      <div>
        <div class="flex gap-2 mr-6">
          <UButton color="neutral" :size="windowStore.yPosition > 0 ? 'xs' : 'md'" @click="stateStore.doLogin"
            >Login</UButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
