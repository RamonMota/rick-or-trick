// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  components: [
    {
      path: "~/components/atoms",
      prefix: "A",
    },
    {
      path: "~/components/molecules",
      prefix: "M",
    },
    {
      path: "~/components/organisms",
      prefix: "O",
    },
    "~/components",
  ],
  app: {
    head: {
      title: "Rick or Trick",
    },
  },
  devtools: { enabled: false },
  css: ["~/style/global.scss"],
});
