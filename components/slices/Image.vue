<template>
  <div v-if="primary.image.url">
    <container :variant="primary.size">
      <div :class="{ 'px-20': primary.size === 'small' }">
        <AtomsImage :image="primary.image" />
      </div>
      <AtomsRichText
        v-if="primary.caption !== null"
        class="italic text-xs mt-2 leading-tight rich-text max-w-sm"
        :content="primary.caption"
      />
    </container>
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
  /* to merge the default values, use the below code instead */
  /*
  props: {
    ...defaultProps,
    NEWPROPERTY: {
      type: TYPE
      default: DEFAULT
    }
  }
  */
};
</script>
