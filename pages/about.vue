<template>
  <div>
    <OrganismsHero
      :heading="document.data.hero[0].heading"
      :copy="document.data.hero[0].copy"
      :buttonlabel="document.data.hero[0].button_label"
      :linklabel="document.data.hero[0].secondary_link_label"
      :image="document.data.hero[0].image"
    />
  </div>
</template>

<script>
export default {
  async setup() {
    const { client } = usePrismic();
    const { data: document } = await useAsyncData("about", () => client.getSingle("about"));
    return { document };
  },
};
</script>
