<script setup lang="ts">
const { isMobile } = useDevice();
</script>

<template>
    <div>
        <div v-if="isMobile">
            <div class="relative z-9999 flex w-full h-max">
                <NavBar />
            </div>
            <slot />
        </div>
        <div v-else class="grid grid-cols-6">
            <aside class="col-span-1">
                <div class="sticky top-0 h-[calc(100vh-0px)] overflow-y-auto">
                    <SideBar />
                </div>
            </aside>

            <main class="col-span-5">
                <slot />
            </main>
        </div>
        <div class="relative z-9999 flex justify-center">
            <Footer />
        </div>
    </div>
</template>
