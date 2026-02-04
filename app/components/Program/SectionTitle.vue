<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
  themeColor?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  useSecondaryGradient?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  themeColor: "primary",
  align: "center",
  size: "md",
  useSecondaryGradient: false,
});

// Size classes
const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "text-2xl md:text-3xl";
    case "lg":
      return "text-4xl md:text-5xl lg:text-6xl";
    case "md":
    default:
      return "text-3xl md:text-4xl";
  }
});

// Alignment classes
const alignClasses = computed(() => {
  switch (props.align) {
    case "left":
      return "text-left";
    case "right":
      return "text-right";
    case "center":
    default:
      return "text-center";
  }
});

// Gradient text classes - primary gradient
const gradientClasses = computed(() => {
  // Map theme colors to gradient classes (primary gradients)
  const gradientMap: Record<string, string> = {
    primary: "bg-linear-to-r from-orange-500 via-red-500 to-pink-500",
    daycare: "bg-linear-to-r from-green-500 via-emerald-500 to-teal-500",
    kb: "bg-linear-to-r from-blue-500 via-cyan-500 to-blue-600",
    tk: "bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500",
    serasi: "bg-linear-to-r from-pink-500 via-rose-500 to-fuchsia-500",
    hs: "bg-linear-to-r from-purple-500 via-violet-500 to-indigo-500",
  };

  return gradientMap[props.themeColor] || "bg-linear-to-r from-primary-500 via-primary-600 to-primary-700";
});

// Gradient text classes - secondary gradient
const secondaryGradientClasses = computed(() => {
  // Map theme colors to secondary gradient classes
  const gradientMap: Record<string, string> = {
    primary: "bg-linear-to-r from-raka-red via-raka-orange to-raka-pink",
    daycare: "bg-linear-to-r from-daycare-secondary via-amber-400 to-yellow-400",
    kb: "bg-linear-to-r from-kb-secondary via-orange-400 to-amber-400",
    tk: "bg-linear-to-r from-tk-secondary via-green-400 to-cyan-400",
    serasi: "bg-linear-to-r from-serasi-secondary via-yellow-400 to-amber-400",
    hs: "bg-linear-to-r from-hs-secondary via-lime-400 to-green-400",
  };

  return gradientMap[props.themeColor] || "bg-linear-to-r from-raka-orange via-raka-red to-raka-pink";
});

// Select gradient based on flag
const activeGradient = computed(() => {
  return props.useSecondaryGradient ? secondaryGradientClasses.value : gradientClasses.value;
});
</script>

<template>
  <div :class="['mb-12', alignClasses]">
    <!-- Title with Gradient -->
    <h2
      :class="[
        'font-bold text-hero bg-clip-text text-transparent py-2',
        subtitle ? 'mb-3' : 'mb-4',
        sizeClasses,
        activeGradient,
      ]"
    >
      {{ title }}
    </h2>

    <!-- Subtitle -->
    <p
      v-if="subtitle"
      :class="['text-gray-600 dark:text-gray-300 mb-6', align === 'center' ? 'max-w-2xl mx-auto' : '']"
    >
      {{ subtitle }}
    </p>

    <!-- Accent Line -->
    <div
      v-if="align === 'center' || subtitle"
      :class="['w-20 h-1 rounded-full', align === 'center' ? 'mx-auto' : '', `bg-${themeColor}-500`]"
    />
  </div>
</template>
