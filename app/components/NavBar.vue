<script setup lang="ts">
const { loggedIn } = useUserSession();
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
            id: 1001,
            name: loggedIn ? "Log Out" : "Log In",
            to: loggedIn ? "/logout" : "/login",
            class: "text-raka-blue",
        },
    ],
    [
        {
            id: 2001,
            name: "Main Menu",
            to: "#",
            class: "text-xl text-raka-orange",
        },
        {
            id: 2002,
            name: "Program",
            to: "#",
            class: "text-sm",
        },
        {
            id: 2003,
            name: "Gallery",
            to: "#",
            class: "text-sm",
        },
        {
            id: 2004,
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
                    <Icon name="uil:multiply" size="24px" />
                </div>
            </div>
            <div class="flex flex-col gap-4 z-9999 w-full my-6">
                <div
                    v-for="data in navbarMenu"
                    :key="data[0]?.id || data.length"
                    class="flex flex-col gap-3"
                >
                    <NuxtLink
                        v-for="nav in data"
                        :key="nav.id"
                        :to="nav.to"
                        class="pl-2"
                        :class="nav.class"
                        >{{ nav.name }}</NuxtLink
                    >
                    <hr />
                </div>
            </div>
        </div>
        <div
            class="flex fixed transition-all"
            :class="
                isMenuOpen ? 'min-h-screen min-w-screen backdrop-blur-md' : ''
            "
        />
        <div class="grid grid-cols-3 w-full h-full">
            <div class="flex h-full items-center px-2">
                <UButton
                    variant="outline"
                    class="ring-0 text-black"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <Icon name="qlementine-icons:menu-burger-16" size="24px" />
                </UButton>
            </div>
            <div class="flex w-full h-full justify-center items-center">
                <NuxtLink to="/">
                    <NuxtImg src="/img/logo.png" width="24" />
                </NuxtLink>
            </div>
            <div />
        </div>
    </div>
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
                        <UButton color="neutral" class="bg-gray-500"
                            >Log In</UButton
                        >
                    </NuxtLink>
                    <NuxtLink to="#">
                        <UButton color="neutral" class="bg-raka-orange"
                            >Sign Up</UButton
                        >
                    </NuxtLink>
                </div>
                <div v-else class="flex gap-2 mr-6">
                    <NuxtLink to="/logout">
                        <UButton color="neutral" class="bg-raka-red"
                            >Log Out</UButton
                        >
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
