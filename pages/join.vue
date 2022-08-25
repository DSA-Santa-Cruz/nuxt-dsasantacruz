<template>
  <div>
    <OrganismsHero
      :heading="document.data.hero[0].heading"
      :copy="document.data.hero[0].copy"
      :buttonlabel="document.data.hero[0].button_label"
      :linklabel="document.data.hero[0].secondary_link_label"
      :image="document.data.hero[0].image"
      big
    />
    <LazyOrganismsJoinOne
      class="bg-white"
      v-if="document.data.step_one[0]"
      :heading="document.data.step_one[0].heading"
      :copy="document.data.step_one[0].copy"
    />
    <LazyOrganismsJoinTwo
      v-if="document.data.step_two[0]"
      :heading="document.data.step_two[0].heading"
      :copy="document.data.step_two[0].copy"
      :buttonlink="links.two.button"
      :buttonlabel="document.data.step_two[0].button_text"
    />
    <LazyOrganismsJoinThree
      class="bg-white"
      v-if="document.data.step_three[0]"
      :heading="document.data.step_three[0].heading"
      :copy="document.data.step_three[0].copy"
      :buttonlink="links.three.button"
      :buttonlabel="document.data.step_three[0].button_label"
      :linklink="links.three.iconLink"
      :linklabel="document.data.step_three[0].secondary_link_label"
    />
    <LazyOrganismsFooter />
  </div>
</template>

<script>
import linkResolver from "@/app/prismic/prismicLinkResolver";

export default {
  async setup() {
    const { client } = usePrismic();
    const { data } = await useAsyncData("join", () => client.getSingle("join"));
    console.log(data);
    return { document: data };
  },
  computed: {
    links() {
      return {
        one: {},
        two: {
          button: linkResolver(this.document.data.step_two[0].button_link),
        },
        three: {
          button: linkResolver(this.document.data.step_three[0].button_link),
          iconLink: linkResolver(
            this.document.data.step_three[0].secondary_link,
          ),
        },
      };
    },
  },
};
</script>
