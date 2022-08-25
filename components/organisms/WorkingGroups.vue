<template>
  <section class="py-12 bg-white">
    <Container>
      <div class="flex items-center mb-12 max-w-md relative">
        <!-- <label for="search">Search</label> -->
        <input
          id="search"
          name="search"
          placeholder="Search"
          class="
            border-b-4
            pl-6
            w-full
            border-black
            focus:outline-none focus:border-red
            py-1
          "
          @input="executeQuery"
          @change="executeQuery"
          v-model="query"
        />
        <IconsSearch
          class="h-4 w-4 absolute opacity-25 top-2 flex-shrink-0"
          :class="{ 'opacity-0': query.length }"
        />
        <IconsClose
          class="
            h-4
            w-4
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
      <ul class="flex flex-col gap-y-8">
        <li
          v-for="group in results"
          :key="group.uid"
          class="border-red border-l-4 pl-4"
        >
          <h3 class="font-bold text-lg text-red my-3">{{ group.name }}</h3>
          <AtomsRichText
            class="my-3 text-sm prose leading-tight"
            :content="group.description"
          />
          <p
            v-if="group.contact_email?.length"
            class="text-sm my-3 font-medium"
          >
            <NuxtLink>{{ group.contact_email }}</NuxtLink>
          </p>
        </li>
      </ul>
      <p v-if="query.length && !results.length">
        Sorry, your query returned no results.
      </p>
    </Container>
  </section>
</template>

<script>
import MiniSearch from "minisearch";

export default {
  props: {
    groups: {
      type: Array,
      default: null,
    },
  },
  data: () => ({
    results: [],
    query: "",
    search: null,
  }),
  mounted() {
    this.search = new MiniSearch({
      fields: ["name", "description", "contact_email"],
      storeFields: ["name", "description", "contact_email"],
      searchOptions: {
        boost: { name: 2 },
        prefix: true,
        fuzzy: 0.2,
      },
    });
    this.search.addAll(this.groups.map((group, i) => ({ ...group, id: i })));
  },
  computed: {
    results() {
      if (this.query?.length) {
        if (this.search) {
          return this.search.search(this.query);
        }
      } else {
        return this.groups;
      }
    },
  },
};
</script>
