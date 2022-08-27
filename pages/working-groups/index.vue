<template>
  <div>
    <AtomsMeta :content="document" />
    <OrganismsHero
      :heading="document.data.hero[0].heading"
      :copy="document.data.hero[0].copy"
      :buttonlabel="document.data.hero[0].button_label"
      :buttonlink="document.data.hero[0].button_link"
      :linklabel="document.data.hero[0].secondary_link_label"
      :linklink="document.data.hero[0].secondary_link"
    />
    <LazyOrganismsWorkingGroups :groups="document.data.efforts" />
    <OrganismsSignUpJoinCta />
    <LazyOrganismsFooter />
  </div>
</template>

<script>
export default {
  async setup() {
    const { client } = usePrismic();
    const getData = () => client.getSingle("efforts");
    const { data: document } = await useAsyncData("groups", getData);
    return { document };
  },
};
</script>
