<template>
  <div class="flex bg-red flex-col flex-grow">
    <OrganismsArticleHero
      :image="article.data.featured_image || article.data.meta_image"
      :date="article.date || article.first_publication_date"
      :author="article.data.custom_byline || article.data.author.data.full_name"
      :heading="article.data.title"
      :copy="article.data.meta_description"
    />
    <OrganismsContent class="text-black" :content="article.data.body" />
    <Container>
      <div class="flex items-start py-4 font-graph tracking-1 justify-between leading-tight">
        <NuxtLink to="/articles/">
          <div>Back to:</div>
          <div class="text-xl">Santa Cruz Left</div>
        </NuxtLink>
        <div class="flex flex-col font-bold uppercase items-center">
          <h3 class="mb-1">Share</h3>
          <MoleculesShare small />
        </div>
        <NuxtLink to="/" class="text-right">
          <div>Up Next:</div>
          <div class="text-xl">Somefing</div>
        </NuxtLink
        >
      </div>
    </Container>
  </div>
</template>

<script>
definePageMeta({
  layout: "article",
});
export default {
  async setup() {
    const { client } = usePrismic();
    const { id: uid } = useRoute().params;
    const { data: article } = await useAsyncData(
      `articles-${uid}`,
      async () => {
        const res = await client.getByUID("article", uid, {
          fetchLinks: "author.full_name",
        });
        return res;
      },
    );

    return { article };
  },
  // script
};
</script>
