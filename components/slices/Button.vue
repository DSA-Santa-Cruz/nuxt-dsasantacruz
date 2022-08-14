<template>
  <div class="flex items-center justify-center">
    <AtomsButton :link="primary.link" variant="lg">{{ primary.text }}</AtomsButton>
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
