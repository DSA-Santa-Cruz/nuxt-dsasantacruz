<template>
  <div>
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
    const { data: document } = await useAsyncData("working-groups", () => client.getSingle("efforts"));
    return { document };
  },
};
</script>
