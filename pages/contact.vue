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
    const getData = () => client.getByUID("page", "contact");
    const { data: document } = await useAsyncData("contact", getData);
    return { document };
  },
};
</script>
