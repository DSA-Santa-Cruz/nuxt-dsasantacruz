<template>
  <div class="bg-white flex-grow w-full py-12">
    <component
      :is="`Slices${camelfy(component.slice_type)}`"
      v-for="(component, i) in content"
      :key="component.slice_type + i"
      :primary="component.primary"
      :items="component.items.length > 0 ? component.items : null"
      :class="{
        'my-10 sm:my-16 py-px': component.slice_type !== 'hero',
        '-mt-12': component.slice_type === 'hero' && i === 0,
      }"
    />
  </div>
</template>

<script>
import camelcase from "lodash.camelcase";
import capitalize from "lodash.capitalize";

export default {
  props: {
    content: { type: Array, default: null },
  },
  methods: {
    camelfy(string) {
      return capitalize(camelcase(String(string)));
    },
  },
  mounted() {
    const { camelfy } = this;
    this.content.map(d => camelfy(d.slice_type));
  },
};
</script>
