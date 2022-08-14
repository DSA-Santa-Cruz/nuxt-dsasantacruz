<template>
  <section
    class="
      w-full
      flex flex-col
      justify-center
      bg-red
      pb-16
      pt-40
      text-white
      overflow-hidden
      relative
    "
    :class="{ 'min-h-1/2-screen': big, 'min-h-[35vh]': !big }"
  >
    <div
      v-if="image"
      class="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-red h-64"
    />
    <div v-if="image" class="absolute inset-0 z-0">
      <AtomsImage :image="image" cover pattern />
    </div>
    <div class="relative z-20">
      <Container>
        <div :class="{ 'max-w-2xl mx-auto': !big }">
          <AtomsRichText
            class="max-w-xl whitespace-pre-wrap leading-tighter mb-6"
            :class="{ 'text-4xl': big, 'text-3xl': !big }"
            :content="heading"
          />
          <AtomsRichText class="text-lg max-w-xl" :content="copy">
            {{ copy }}
          </AtomsRichText>
          <div class="mt-8 flex space-x-6">
            <nuxt-link v-if="buttonLinkUrl" :to="buttonLinkUrl">
              <AtomsButton>{{ buttonlabel }}</AtomsButton>
            </nuxt-link>
            <nuxt-link v-if="linkLinkUrl" :to="linkLinkUrl">
              <AtomsIconLink>{{ linklabel }}</AtomsIconLink>
            </nuxt-link>
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>

<script>
import linkResolver from "@/app/prismic/prismicLinkResolver";

export default {
  props: {
    heading: { type: Array, default: null },
    copy: { type: Array, default: null },
    image: { type: Object, default: null },
    buttonlink: {
      type: Object,
      default: null,
    },
    buttonlabel: {
      type: String,
      default: null,
    },
    linklink: {
      type: Object,
      default: null,
    },
    linklabel: {
      type: String,
      default: null,
    },
    big: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonLinkUrl() {
      const { buttonlink } = this;
      if (buttonlink) {
        return linkResolver(buttonlink);
      }
      return null;
    },
    linkLinkUrl() {
      const { linklink } = this;
      if (linklink) {
        return linkResolver(linklink);
      }
      return null;
    },
  },
};
</script>
