import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ["~/components/"],
  },
  target: "static",
  pageTransition: "page",
  buildModules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
  ],
  prismic: {
    endpoint: `https://${process.env.PRISMIC_REPO}.cdn.prismic.io/api/v2`,
    modern: true,
  },
});
