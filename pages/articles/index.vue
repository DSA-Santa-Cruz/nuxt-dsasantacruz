<script setup>
const { client } = usePrismic();
const getData = async () => {
  const res = await client.getAllByType("article", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    fetchLinks: "author.full_name",
    limit: 999,
    lang: "en-us",
  });
  return res;
};
const getIndex = () => client.getSingle("article_index");
const { data: articles } = await useAsyncData("articles", getData);
const { data: document } = await useAsyncData("articlesIndex", getIndex);
</script>

<template>
  <div>
    <AtomsMeta :content="document" />
    <Container class="pt-3 pb-6">
      <div class="flex flex-wrap">
        <MoleculesArticleCardFeatured
          :content="featured"
          class="w-full md:w-3/5 lg:w-2/3"
        />
        <ul
          class="w-full md:w-2/5 lg:w-1/3 md:pl-6 lg:pl-8 pt-6 border-t-2 border-red"
        >
          <li v-for="article in sidebar" :key="article.id" class="mb-6">
            <MoleculesArticleCard :content="article" />
          </li>
        </ul>
      </div>
      <div class="md:hidden -mb-4">
        <AtomsIconLink
          direction="down"
          class="text-red hover:text-black font-bold"
          @click="$refs.remainder.scrollIntoView({ behavior: 'smooth' })"
        >
          Read More
        </AtomsIconLink>
      </div>
    </Container>
    <div class="bg-red py-12 mt-6">
      <Container>
        <div class="flex flex-wrap w-full items-start">
          <OrganismsArticlesList
            class="w-full md:w-3/5 lg:w-2/3 order-2 md:order-1"
            :articles="articles"
          />
          <div
            class="order-1 md:order-2 md:pl-6 lg:pl-8 text-white md:sticky top-0 w-full md:w-2/5 lg:w-1/3"
          >
            <div class="mb-8 mt-3 pt-0 border-t-2 border-white">
              <h3 class="font-graph uppercase text-xl tracking-1">Follow Us</h3>
              <div class="flex gap-x-3 mt-3">
                <NuxtLink to="https://www.facebook.com/DSASantaCruz/">
                  <IconsFacebook class="w-8 h-8 fill-white hover:fill-black" />
                </NuxtLink>
                <NuxtLink to="https://twitter.com/dsasantacruz">
                  <IconsTwitter class="w-8 h-8 fill-white hover:fill-black" />
                </NuxtLink>
                <NuxtLink to="https://www.instagram.com/dsasantacruz/">
                  <IconsInstagram class="w-8 h-8 fill-white hover:fill-black" />
                </NuxtLink>
              </div>
            </div>
            <!-- <div class="mb-8 pt-1 border-t-2 border-white">
              <h3 class="font-graph uppercase text-xl tracking-1">
                Share With Your NetWork
              </h3>
              <MoleculesShare class="mt-3 text-white" />
            </div> -->
            <div class="mb-8 pt-1 border-t-2 border-white">
              <h3 class="font-graph uppercase text-xl tracking-1">
                Sign Up for Updates
              </h3>
              <MoleculesEmailSignUp class="mt-3" small />
            </div>
            <div class="mb-8 pt-1 border-t-2 border-white">
              <h3 class="font-graph uppercase text-xl tracking-1">
                Fight Capitalism.
              </h3>
              <NuxtLink to="/join/" class="block mt-3">
                <AtomsButton>Join DSA</AtomsButton>
              </NuxtLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <OrganismsSignUpJoinCta />
  </div>
</template>

<script>
definePageMeta({
  layout: "scl",
});
export default {
  data: () => ({
    visible: 5,
    articles: [],
  }),
  computed: {
    featured() {
      if (this.articles) return this.articles[0];
      return null;
    },
    sidebar() {
      if (this.articles) return this.articles.slice(1, 4);
      return null;
    },
    rest() {
      if (this.articles) return this.articles.slice(0, this.visible);
      return null;
    },
  },
};
</script>
