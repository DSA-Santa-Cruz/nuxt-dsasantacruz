<template>
  <NuxtLink
    v-if="content"
    :to="`/articles/${content.uid}/`"
    class="flex flex-col group relative overflow-hidden"
  >
    <div class="relative z-10">
      <h3
        class="
          leading-[1.1]
          text-red
          tracking-[0.5px]
          font-graph
          group-hover:text-black
          transition
          duration-200
        "
        :class="{
          'text-xl lg:text-2xl': !large,
          'text-2xl': large,
        }"
      >
        {{ content.data.title }}
      </h3>
      <p
        class="
          font-medium
          whitespace-pre-wrap
          text-xs
          tracking-[0.5px]
          uppercase
          mt-1
        "
      >
        {{
          new Date(Date.parse(content.date || content.first_publication_date))
            .toLocaleDateString()
            .replace(/\//g, ".")
        }}
        •
        {{ content.data.custom_byline || content.data.author.data.full_name }}
      </p>
      <p v-if="showdesc" class="text-xs mt-1">
        {{ content.data.meta_description }}
      </p>
      <div v-if="showlink">
        <AtomsIconLink class="text-red group-hover:text-black">
          Read More
        </AtomsIconLink>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false,
    },
    showlink: {
      type: Boolean,
      default: false,
    },
    showdesc: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Object,
      default: null,
    },
  },
};
</script>
