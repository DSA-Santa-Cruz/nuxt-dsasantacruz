<template>
  <div class="bg-white">
    <AtomsMeta :document="document" />
    <OrganismsHero
      :heading="document.data.hero[0].heading"
      :copy="document.data.hero[0].copy"
      :buttonlabel="document.data.hero[0].button_label"
      :linklabel="document.data.hero[0].secondary_link_label"
      :image="document.data.hero[0].image"
    />
    <LazyOrganismsIntro class="text-black" :content="document.data.intro[0]" />
    <LazyOrganismsFooter />
  </div>
</template>

<script>
export default {
  async setup() {
    const { client } = usePrismic();
    const getAbout = () => client.getSingle("about");
    const { data } = await useAsyncData("about", getAbout);
    return { document: data };
  },
};
</script>
