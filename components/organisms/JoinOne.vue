<template>
  <div class="py-12">
    <Container>
      <div class="max-w-2xl">
        <div class="text-xl sm:text-2xl mb-2 tracking-2 uppercase text-red">
          01
        </div>
        <div
          class="
            w-full
            rich-text
            text-2xl
            xl:text-3xl
            leading-none
            order-1
            mb-5
          "
        >
          {{ heading }}
        </div>
        <!-- description -->
        <div class="my-6">
          <AtomsRichText
            v-if="copy !== null"
            class="leading-normal rich-text"
            :content="copy"
          />
        </div>
        <div class="p-6 bg-red">
          <MoleculesEmailSignUp />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: null,
    },
    copy: {
      type: Array,
      default: null,
    },
  },
};
</script>
