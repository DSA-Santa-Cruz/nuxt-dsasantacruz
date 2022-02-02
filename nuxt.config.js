import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: ["nuxt-use-motion"],
  build: {
    extend(config) {
      // Include the compiler version of Vue so that <component-name> works
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias.vue$ = "vue/dist/vue.esm.js";
    },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
