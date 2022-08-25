<template>
  <div class="pt-12 pb-16 bg-red text-white">
    <Container>
      <div class="max-w-2xl">
        <div class="text-xl sm:text-2xl mb-2 tracking-2 uppercase text-black">
          02
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
        <div class="mt-6">
          <NuxtLink :to="buttonlink">
            <AtomsButton>
              <span>{{ buttonlabel }}</span>
              <span class="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 -rotate-45 fill-current -mt-px"
                  viewBox="0 0 512 512"
                >
                  <title>Arrow Forward Circle</title>
                  <path
                    d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-224 80.09L303.58 272H154v-32h149.58L240 175.91l22.71-22.54L364.54 256 262.7 358.63z"
                  />
                </svg>
              </span>
            </AtomsButton>
          </NuxtLink>
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
    buttonlabel: {
      type: String,
      default: null,
    },
    buttonlink: {
      type: Object,
      default: null,
    },
  },
};
</script>
