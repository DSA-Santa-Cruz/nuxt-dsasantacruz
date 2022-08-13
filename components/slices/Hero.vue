<template>
  <OrganismsHero
    :heading="primary.heading"
    :copy="primary.supporting_copy"
    :buttonlabel="primary.button_text"
    :buttonlink="primary.button_link"
    :image="primary.background_image"
  />
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
