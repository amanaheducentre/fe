<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
    <div>
        <div class="relative z-9999 flex w-full h-max">
            <NavBar />
        </div>
        <slot />
        <div class="relative z-9999 flex justify-center">
            <Footer />
        </div>
        <SpeedInsights />
    </div>
</template>
