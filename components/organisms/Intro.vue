<template>
  <div class="bg-white py-12">
    <Container>
      <div class="max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold red mb-6">{{ content.heading }}</h2>
        <AtomsRichText
          :content="content.aside"
          class="my-6 max-w-xl text-red text-xl"
        />
        <AtomsRichText :content="content.copy" class="w-full sm:w-2/3 prose" />
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
};
</script>
