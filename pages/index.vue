<template>
  <div class="flex flex-col flex-grow">
    <OrganismsHero
      :heading="document.data.hero[0].heading"
      :copy="document.data.hero[0].copy"
      :image="document.data.hero[0].image"
      :buttonlabel="document.data.hero[0].button_label"
      :buttonlink="document.data.hero[0].button_link"
      :linklabel="document.data.hero[0].secondary_link_label"
      :linklink="document.data.hero[0].secondary_link"
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
    const { data: document } = await useAsyncData("home", () => client.getSingle("home"));
    console.log(document);
    return { document };
  },
};
</script>
