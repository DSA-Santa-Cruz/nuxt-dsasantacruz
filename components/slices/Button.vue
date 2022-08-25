<template>
  <div class="flex items-center justify-center">
    <nuxt-link v-if="buttonLinkUrl" :to="buttonLinkUrl">
      <AtomsButton variant="lg">
        {{ primary.text }}
      </AtomsButton>
    </nuxt-link>
  </div>
</template>

<script>
import linkResolver from "@/app/prismic/prismicLinkResolver";

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
    buttonLinkUrl() {
      const { link: buttonlink } = this.primary;
      if (buttonlink) {
        return linkResolver(buttonlink);
      }
      return null;
    },
  },
};
</script>
