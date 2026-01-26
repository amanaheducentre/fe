// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
  },
  ui: {
    theme: {
      colors: ["primary", "secondary", "info", "success", "warning", "error"],
    },
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxthub/core",
    "@nuxtjs/device",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-auth-utils",
    "@artmizu/nuxt-prometheus",
    "@pinia/nuxt",
  ],
  piniaPluginPersistedstate: {
    storage: "localStorage",
  },
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
    fallback: "light",
  },
  image: {
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  debug: true,
});
