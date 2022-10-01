<template>
  <section class="py-12 lg:py-16 bg-white">
    <Container>
      <h2 class="font-graph text-red text-4xl tracking-1 mb-1 leading-none">
        <NuxtLink to="/articles/">Santa Cruz Left</NuxtLink>
      </h2>
      <p class="my-4">Get the latest news and insights from DSA Santa Cruz.</p>
      <div class="text-red -mt-3">
        <NuxtLink to="/articles/" class="group">
          <AtomsIconLink>All Articles</AtomsIconLink>
        </NuxtLink>
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 leading-1">
        <li
          v-for="(article, i) in articles"
          :key="article.uid"
          class="overflow-hidden relative"
          :class="{
            'md:col-span-2 md:row-span-3 lg:pr-12 p-6 flex items-end text-white -mx-6 md:mr-0':
              i === 0,
            'pb-6': i !== 0 && i === articles.length - 1,
          }"
        >
          <NuxtLink :to="`/articles/${article.uid}/`" class="group">
            <AtomsImage
              v-if="i === 0"
              :image="article?.data?.featured_image"
              pattern
              cover
              class="transition duration-200 transform group-hover:scale-105"
            />
            <div class="relative z-10">
              <h3
                class="leading-[1.1] tracking-[0.5px]"
                :class="{
                  'text-5xl': i === 0 && article.data.title.length < 30,
                  'text-3xl':
                    i === 0 &&
                    article.data.title.length < 50 &&
                    article.data.title.length >= 30,
                  'text-2xl': i === 0 && article.data.title.length >= 50,
                  'font-graph underline  decoration-offset-2 decoration-white/0 group-hover:decoration-white/50 transition duration-200':
                    i === 0,
                  'text-base font-bold deocration-2 underline decoration-offset-2 decoration-red/0 group-hover:decoration-red/50 transition duration-200':
                    i !== 0,
                }"
              >
                {{ article.data.title }}
              </h3>
              <p
                class="font-medium whitespace-pre-wrap text-xxs tracking-[0.5px] uppercase mt-2"
                :class="{
                  'tracking-[0.5px]': i === 0,
                  'text-red': i !== 0,
                }"
              >
                {{
                  article.data.custom_byline ||
                  article.data.author.data.full_name
                }}{{ i === 0 ? " - " : "\n"
                }}{{
                  new Date(
                    Date.parse(article.date || article.first_publication_date),
                  )
                    .toLocaleDateString()
                    .replace(/\//g, ".")
                }}
              </p>
              <p v-if="i === 0" class="text-white mt-2">
                {{ article.data.meta_description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script>
export default {
  async setup() {
    const { client } = usePrismic();
    const { data: articles } = await useAsyncData("articlesTease", async () => {
      const res = await client.getAllByType("article", {
        orderings: {
          field: "document.first_publication_date",
          direction: "desc",
        },
        fetchLinks: "author.full_name",
        limit: 4,
        lang: "en-us",
      });
      return res;
    });

    return { articles };
  },
};
</script>
