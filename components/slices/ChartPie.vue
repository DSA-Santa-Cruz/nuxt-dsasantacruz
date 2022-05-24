<template>
  <div class="flex items-center justify-center">
    <container variant="copy">
      <div class="px-24 -my-6">
        <div class="mb-6 text-center">
          <div class="text-black text-sm tracking-1 uppercase font-bold">
            {{ primary.heading }}
          </div>
          <prismic-rich-text
            v-if="primary.subheading !== null"
            class="leading-tight text-center text-sm rich-text mt-1 md:px-6"
            :richtext="primary.subheading"
          />
        </div>
        <chart-pie :data="data" />
        <prismic-rich-text
          v-if="primary.caption !== null"
          class="leading-tight text-xxs italic uppercase tracking-1 text-gray-dark text-center rich-text mt-6 md:px-6"
          :richtext="primary.caption"
        />
      </div>
    </container>
  </div>
</template>

<script>

export default {
  props: {
    primary: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
  },
  computed: {
    data() {
      return this.items;
    },
  },
};
</script>
