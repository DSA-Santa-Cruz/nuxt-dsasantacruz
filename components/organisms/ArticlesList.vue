<template>
  <div>
    <div
      class="
        bg-black
        p-3
        -mt-[4.5rem]
        mb-6
        md:w-[150%]
        flex
        gap-3
        lg:gap-6
        items-center
      "
    >
      <!-- search -->
      <div class="flex items-center gap-2 max-w-sm relative">
        <IconsSearch
          class="h-4 w-4 relative fill-white flex-shrink-0"
          :class="{ 'fill-red': query.length }"
        />
        <input
          id="search"
          name="search"
          placeholder="Search"
          class="focus:border-red py-1 pl-2 pr-6"
          @input="executeQuery"
          @change="executeQuery"
          v-model="query"
        />
        <IconsClose
          class="
            h-4
            w-4
            right-1
            absolute
            fill-black
            hover:fill-red
            flex-shrink-0
            z-10
            transition
            duration-100
            top-2
            cursor-pointer
          "
          @click="query = ''"
          :class="{ 'opacity-0': !query.length }"
        />
      </div>
      <span class="text-red">|</span>
      <!-- sort order -->
      <div>
        <select
          v-model="sortOrder"
          class="w-full max-w-sm text-red py-1 px-2 focus:outline-none"
        >
          <option value="recent">Most Recent</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
    <ul ref="remainder" class="flex flex-col gap-y-6">
      <li
        v-for="article in results"
        :key="article.uid"
        class="w-full bg-white p-6 lg:p-8"
      >
        <MoleculesArticleCard large showdesc :content="article" showlink />
      </li>
    </ul>
    <div
      v-if="visible < articles.length - 4 && !query.length"
      class="w-full flex gap-x-3 mt-6"
    >
      <AtomsButton @click="visible += 5">Show More</AtomsButton>
      <AtomsIconLink @click="visible = 9999">Show All</AtomsIconLink>
    </div>
    <p v-if="query.length && !results.length">
      Sorry, your query returned no results.
    </p>
  </div>
</template>

<script>
import MiniSearch from "minisearch";

export default {
  props: {
    articles: {
      type: Array,
      default: null,
    },
  },
  data: () => ({
    content: [],
    visible: 5,
    query: "",
    search: null,
    sortOrder: "recent",
  }),
  mounted() {
    this.content = this.articles.map((a, idx) => ({
      ...a,
      ...a.data,
      id: idx,
    }));
    this.search = new MiniSearch({
      fields: ["title", "meta_description"],
      searchOptions: {
        boost: { name: 2 },
        prefix: true,
        fuzzy: 0.2,
      },
    });
    this.search.addAll(this.content);
  },
  computed: {
    results() {
      const { sortOrder } = this;
      const getResults = () => {
        if (this.query && this.search) {
          const query = this.search.search(this.query).map(a => a.id);
          return query.map(id => this.content.find(a => a.id === id));
        }
        return this.articles;
      };
      return getResults()
        .sort((a, b) => {
          switch (sortOrder) {
            case "oldest":
              return (a.data.date || a.first_publication_date).localeCompare(
                b.data.date || b.first_publication_date,
              );
            default:
              return (b.data.date || b.first_publication_date).localeCompare(
                a.data.date || a.first_publication_date,
              );
          }
        })
        .slice(4, 4 + this.visible);
    },
  },
};
</script>