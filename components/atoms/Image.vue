<template>
  <figure
    class="w-full z-0"
    :class="{ 'h-full absolute inset-0': cover, relative: !cover }"
    :style="
      cover
        ? false
        : `padding-bottom:${(
            (dimensions.height / dimensions.width) *
            100
          ).toFixed(2)}%;`
    "
  >
    <div v-if="pattern" class="bg-red absolute inset-0 z-10 mix-blend-color" />
    <picture class="z-0 w-full h-full absolute inset-0">
      <source
        v-for="source in srcset"
        :media="
          source.size <= 2000
            ? `(max-width: ${source.size}px)`
            : `(min-width: 2001px)`
        "
        :srcset="source.url"
        :key="source.url"
      />
      <img
        class="h-full w-full absolute inset-0"
        :class="{
          'object-contain': cover,
          'object-cover': cover,
        }"
      />
    </picture>
    <figcaption v-if="caption?.length">caption</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: null,
    },
    cover: {
      type: Boolean,
      default: false,
    },
    pattern: {
      type: Boolean,
      default: false,
    },
    caption: {
      type: String,
      default: null,
    },
  },
  computed: {
    dimensions() {
      return this.image.dimensions;
    },
    srcset() {
      if (this.image && this.image.url) {
        let defaultParams = {
          auto: "format,compress",
          q: 50,
          dpr:
          typeof window !== "undefined" && window.devicePixelRatio > 1
            ? 1.5
            : 1,
        };
        if (this.pattern) {
          defaultParams = {
            ...defaultParams,
            auto: "format,compress,enhance",
            con: "25",
            high: "-50",
            duotone: "EC1F27,F0565B",
            colorquant: 2,
          };
        }
        const { url: _url } = this.image;
        const sizes = [350, 700, 1050, 1400, 2000, 4000];
        const url = _url.split("?")[0];
        const set = sizes.map((s) => {
          const params = {
            ...defaultParams,
            w: s,
            h: s,
          };
          const eParams = Object.entries(params)
            .map(([k, v]) => `${k}=${v}`)
            .join("&");
          const nUrl = `${url}?${eParams}`;
          return { url: nUrl, size: s };
        });
        return set;
      }
      return null;
    },
  },
};
</script>
