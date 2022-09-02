<template>
  <div class="pt-24 overflow-auto">
    <div class="bg-white py-12">
      <Container>
        <OrganismsDonate />
      </Container>
    </div>
    <OrganismsFooter />
  </div>
</template>

<script>
export default {
  setup() {
    // eslint-disable-next-line no-undef
    useHead({
      title: "Donate | DSA Santa Cruz",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        {
          name: "description",
          content: "Help us do socialism in Santa Cruz.",
        },
        // {
        //   property: "og:image",
        //   content: "https://firemap.us/firemap_meta.jpg",
        // },
      ],
    });
  },
};
</script>
