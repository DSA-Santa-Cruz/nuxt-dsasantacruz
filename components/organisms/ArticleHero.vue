<template>
  <section
    class="
      w-full
      flex flex-col
      justify-center
      bg-red
      pt-24
      pb-20
      text-white
      overflow-hidden
      relative
      min-h-1/2-screen
      items-center
    "
  >
    <div
      v-if="image"
      class="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-red h-24"
    />
    <div v-if="image" class="absolute inset-0 z-0">
      <AtomsImage :image="image" cover pattern />
    </div>
    <div class="relative z-20">
      <Container>
        <h1 class="text-4xl lg:text-5xl font-graph max-w-2xl whitespace-pre-wrap leading-tighter">
          {{ heading }}
        </h1>
        <p
          class="
            font-medium
            whitespace-pre-wrap
            text-xs
            tracking-[0.5px]
            uppercase
            my-3
          "
        >
          {{
            new Date(Date.parse(date)).toLocaleDateString().replace(/\//g, ".")
          }}
          •
          {{ author }}
        </p>
        <p class="text-base max-w-2xl">{{ copy }}</p>
      </Container>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: null },
    copy: { type: String, default: null },
    date: { type: String, default: null },
    author: { type: String, default: null },
    image: { type: Object, default: null },
  },
};
</script>
