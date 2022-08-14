<template>
  <LazyAtomsRichTextSync
    v-if="content"
    :content="content"
    class="prose-a:text-red prose-a:decoration-red/50 prose-a:underline-offset-2 hover:prose-a:text-black prose-a:transition prose-a:duration-100"
  />
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      default: null,
    },
  },
};
</script>
