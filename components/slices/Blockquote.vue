<template>
  <div>
    <Container variant="copy">
      <blockquote
        class="
          border-l-[.2rem]
          sm:border-l-[.33rem]
          pl-3
          sm:pl-6
          leading-tight
          border-black
          font-graph
        "
      >
        <AtomsRichText
          v-if="primary.quote !== null"
          :content="primary.quote"
          class="text-red text-2xl sm:text-3xl tracking-1"
        />
        <cite
          v-if="primary.citation !== null"
          class="block font-bold text-black pb-2 mt-2 not-italic tracking-1"
        >
          <AtomsRichText class="leading-tight" :content="primary.citation" />
        </cite>
      </blockquote>
    </Container>
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
};
</script>
