<template>
  <div class="pt-12 pb-16">
    <Container>
      <div class="max-w-2xl">
        <div class="text-xl sm:text-2xl mb-2 tracking-2 uppercase text-red">
          03
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
        <div class="mt-6 flex items-center flex-wrap -mx-3">
          <div class="px-3">
            <NuxtLink :to="buttonlink">
              <AtomsButton>{{ buttonlabel }}</AtomsButton>
            </NuxtLink>
          </div>
          <div v-if="linklink && linklabel" class="my-2 px-3">
            <NuxtLink :to="linklink">
              <AtomsIconLink
                class="text-red hover:text-black transition duration-100"
              >
                {{ linklabel }}
              </AtomsIconLink>
            </NuxtLink>
          </div>
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
    buttonlink: {
      type: Object,
      default: null,
    },
    buttonlabel: {
      type: String,
      default: null,
    },
    linklink: {
      type: Object,
      default: null,
    },
    linklabel: {
      type: String,
      default: null,
    },
  },
};
</script>
