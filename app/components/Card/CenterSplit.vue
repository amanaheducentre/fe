<script setup>
defineProps({
    backgroundColor: {
        type: String,
        default: "bg-white",
    },
});

const { isMobile } = useDevice();
</script>

<template>
    <UCard
        class="my-5 w-[95%] md:w-[70%] rounded-4xl ring-0"
        :class="backgroundColor"
    >
        <div
            class="w-full h-max grid gap-8 p-8"
            :class="
                isMobile
                    ? $slots.right
                        ? 'grid-rows-2'
                        : 'grid-rows-1'
                    : 'grid-cols-2'
            "
        >
            <slot v-if="$slots.left" name="left"></slot>
            <slot v-if="$slots.right" name="right"></slot>
        </div>
    </UCard>
</template>
