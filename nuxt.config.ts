// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://dummyjson.com"
    },
  },
  devtools: { enabled: false },
  modules: ['nuxt-swiper', "@pinia/nuxt", "@nuxtjs/tailwindcss"],
  css: ["@/assets/scss/main.scss"],
})