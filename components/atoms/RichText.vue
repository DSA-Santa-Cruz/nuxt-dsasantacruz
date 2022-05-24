<template>
  <PrismicRichText v-if="content" :field="content" />
</template>

<script>

import { PrismicRichText } from "@prismicio/vue";

export default {
  components: {
    PrismicRichText,
  },
  props: {
    content: {
      type: Array,
      default: null,
    },
  },
};
</script>
