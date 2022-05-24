<template>
  <section class="py-12">
    <Container>
      <ul class="flex flex-col gap-y-8">
        <li
          v-for="group in groups"
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
            <nuxt-link>{{ group.contact_email }}</nuxt-link>
          </p>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    groups: {
      type: Array,
      default: null,
    },
  },
};
</script>
