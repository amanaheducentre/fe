// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxthub/core",
  ],
  css: ["~/app/assets/css/main.css"],
  colorMode: {
    preference: "light",
    fallback: "light",
  },
});
