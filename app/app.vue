<script setup lang="ts">
import { useHead } from "#app";
import { initializeKinesis } from "@amineyarman/kinesis";

useSeoMeta({
    title: "LKP AManah Edu Centre",
    description: "Lembaga Kursus No.1 di Banyuwangi",
});

useHead({
    htmlAttrs: {
        class: "scroll-smooth",
    },
});

onMounted(() => {
    initializeKinesis();
});
</script>

<template>
    <div class="scroll-smooth">
        <NuxtRouteAnnouncer />
        <UApp>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </UApp>
    </div>
</template>
