<template>
  <div>
    <AtomsMeta :document="document" />
    <OrganismsContent class="text-black" :content="document.data.body" />
  </div>
</template>

<script>
export default {
  async setup() {
    const { client } = usePrismic();
    const { data: document } = await useAsyncData("contact", () =>
      client.getByUID("page", "contact"),
    );
    return { document };
  },
};
</script>
