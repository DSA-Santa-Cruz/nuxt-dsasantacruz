<template>
  <div class="flex flex-col flex-grow">
    <AtomsMeta :content="document" />
    <OrganismsHero
      :heading="document.data.hero[0].heading"
      :copy="document.data.hero[0].copy"
      :image="document.data.hero[0].image"
      :buttonlabel="document.data.hero[0].button_label"
      :buttonlink="document.data.hero[0].button_link"
      :linklabel="document.data.hero[0].secondary_link_label"
      :linklink="document.data.hero[0].secondary_link"
      big
    />
    <OrganismsArticlesTeaser />
    <LazyOrganismsUpcomingEvents />
    <LazyOrganismsSignUpJoinCta />
    <LazyOrganismsFooter />
  </div>
</template>

<script>
export default {
  async setup() {
    const { client } = usePrismic();
    const getHome = () => client.getSingle("home");
    const { data: document } = await useAsyncData("home", getHome);
    return { document };
  },
};
</script>
