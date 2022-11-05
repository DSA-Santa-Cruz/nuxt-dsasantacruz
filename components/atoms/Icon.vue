<template>
  <component v-if="icon" :is="icon" class="transition duration-100" />
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "solid",
  },
});
const icon = props.name
  ? defineAsyncComponent(() =>
      import(`../../svg/${props.variant}/${props.name}.svg`),
    )
  : null;
</script>
