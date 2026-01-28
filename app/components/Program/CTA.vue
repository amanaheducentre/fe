<script setup lang="ts">
interface Props {
  whatsappNumber: string;
  whatsappMessage: string;
  ctaText?: string;
  position?: "bottom-right" | "bottom-left";
}

const props = withDefaults(defineProps<Props>(), {
  ctaText: "Daftar Sekarang",
  position: "bottom-right",
});

const isVisible = ref(true);
const isMobile = ref(false);

const whatsappLink = computed(() => {
  return `https://wa.me/${props.whatsappNumber}?text=${encodeURIComponent(props.whatsappMessage)}`;
});

const positionClasses = computed(() => {
  if (props.position === "bottom-left") {
    return "left-4 md:left-8";
  }
  return "right-4 md:right-8";
});

// Check if mobile
onMounted(() => {
  isMobile.value = window.innerWidth < 768;

  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 768;
  });
});

// Show/hide on scroll
let lastScrollY = 0;
const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Show after scrolling down 300px
  if (currentScrollY > 300) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div v-if="isVisible" id="contact" :class="['fixed bottom-4 md:bottom-8 z-40', positionClasses]">
        <!-- Desktop CTA -->
        <UButton
          v-if="!isMobile"
          :to="whatsappLink"
          external
          target="_blank"
          size="xl"
          color="success"
          class="shadow-2xl hover:shadow-green-500/50 transition-all duration-300 animate-pulse hover:animate-none"
        >
          <UIcon name="i-heroicons-chat-bubble-left-right" class="mr-2 text-xl" />
          {{ ctaText }}
        </UButton>

        <!-- Mobile Floating Button -->
        <UButton
          v-else
          :to="whatsappLink"
          external
          target="_blank"
          size="lg"
          color="success"
          class="w-14 h-14 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 p-0 flex items-center justify-center animate-pulse hover:animate-none"
          :padded="false"
        >
          <UIcon name="i-heroicons-chat-bubble-left-right" class="text-2xl" />
        </UButton>
      </div>
    </Transition>
  </Teleport>
</template>
