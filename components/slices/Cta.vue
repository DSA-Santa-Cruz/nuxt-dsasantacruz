<template>
  <div>
    <container>
      <div class="bg-black text-white p-6 md:p-12 text-center">
        <h2 class="text-4xl">{{ primary.heading[0].text }}</h2>
        <div
          v-if="primary.copy.length > 0"
          class="mt-4 max-w-md text-lg mx-auto"
        >
          <AtomsRichText
            v-if="primary.copy !== null"
            class="leading-normal rich-text"
            :richtext="primary.copy"
          />
        </div>
        <div class="flex items-center justify-center mt-8">
          <AtomsButton :link="primary.button_link">{{ primary.button_text }}</AtomsButton>
        </div>
      </div>
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
};
</script>
