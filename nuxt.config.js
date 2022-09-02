import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      STRIPE_KEY: process.env.STRIPE_KEY,
    },
  },
  components: {
    global: true,
    dirs: ["~/components/"],
  },
  target: "static",
  pageTransition: "page",
  layoutTransition: "page",
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
  ],
  prismic: {
    linkResolver: "@/app/prismic/linkResolver",
    endpoint: process.env.PRISMIC_REPO,
  },
});
