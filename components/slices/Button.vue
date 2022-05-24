<template>
  <div class="flex items-center justify-center">
    <btn :link="primary.link" variant="lg">{{ primary.text }}</btn>
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
