<template>
  <div>
    {{ html }}
  </div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      default: "",
    },
  },
};
</script>
