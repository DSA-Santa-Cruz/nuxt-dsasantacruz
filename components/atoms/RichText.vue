<template>
  <LazyAtomsRichTextSync v-if="content" :content="content" />
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
