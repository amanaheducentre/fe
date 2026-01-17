<script setup lang="ts">
const route = useRoute();
const name = route.params.name;

definePageMeta({
  layout: "base",
  middleware: "auth",
});

switch (name) {
  case "logout":
    const { clear } = useUserSession();
    const cookieToken = useCookie("user-token");
    (async () => {
      await clear();
      cookieToken.value = null;
      await navigateTo("/", {
        external: true,
      });
    })();
    break;
}
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">Processing...</div>
</template>
