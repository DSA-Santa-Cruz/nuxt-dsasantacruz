<template>
  <NuxtLink
    v-if="content"
    :to="`/articles/${content.uid}/`"
    class="
      flex flex-col
      group
      p-6
      lg:p-8
      relative
      overflow-hidden
      text-white
      transition
      duration-200
      lg:min-h-1/3-screen
    "
  >
    <AtomsImage
      :image="content.data?.featured_image"
      pattern
      cover
      class="transition duration-200 transform group-hover:scale-105"
    />
    <div class="relative z-10">
      <h3
        class="
          leading-[1.1]
          tracking-1
          text-3xl
          lg:text-[3.5rem]
          font-graph
          text
          transition
          duration-200
          group-hover:text-black
        "
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
          mt-2
        "
      >
        {{ content.data.custom_byline || content.data.author.data.full_name }}
        {{
          new Date(Date.parse(content.date || content.first_publication_date))
            .toLocaleDateString()
            .replace(/\//g, ".")
        }}
      </p>
      <p class="text-sm mt-2">
        {{ content.data.meta_description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: null,
    },
  },
};
</script>
