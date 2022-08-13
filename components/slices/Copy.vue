<template>
  <div>
    <Container>
      <AtomsRichText
        class="
          leading-loose
          max-w-2xl
          prose
          prose-a:decoration-red/30
          prose-a:font-medium
          prose-a:decoration-4
          hover:prose-a:text-red
          transition
          duration-200
          mx-auto
        "
        :class="{ dropcap: primary.dropcap }"
        :content="primary.copy"
      />
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

<style>
.dropcap p:first-of-type:first-letter {
  display: block;
  float: left;
  font-size: 6rem;
  line-height: 0.75;
  padding-right: .75rem;
  padding-bottom: 0rem;
  margin-top: -.25rem;
  color: #ec1f27;
  font-family: "graph", "sans-serif";
}
</style>
