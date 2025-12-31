<script setup lang="ts">
const props = defineProps({
    user: {
        type: Object,
        default: () => ({
            name: "John Doe",
            description: "Ordinary User",
            avatar: "https://i.pravatar.cc/150?u=john-doe",
        }),
    },
    text: String,
});
</script>

<template>
    <div
        class="w-full max-w-sm sm:max-w-md lg:max-w-lg ring-1 ring-black/10 bg-white rounded-3xl overflow-hidden flex flex-col"
    >
        <!-- Content -->
        <div class="p-4 sm:p-6 lg:p-8">
            <IconsQuote class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
            <p
                class="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-5"
            >
                {{ props.text }}
            </p>
        </div>

        <!-- Footer -->
        <div class="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 mt-auto">
            <div class="pt-4 border-t border-black/10">
                <UUser
                    :name="props.user.name"
                    :description="props.user.description"
                    :avatar="{
                        src: props.user.avatar,
                        icon: 'i-lucide-image',
                    }"
                />
            </div>
        </div>
    </div>
</template>
