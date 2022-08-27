<template>
  <div>
    <AtomsMeta :content="document" />
    <LazyOrganismsContent class="text-black" :content="document.data.body" />
    <LazyOrganismsFooter />
  </div>
</template>

<script>
const getPage = async (client, uid) => {
  const res = await client.getByUID("page", uid);
  return res;
};

export default {
  async setup() {
    const { params } = useRoute();
    const { id: uid } = params;

    const { client } = usePrismic();
    const { data } = await useAsyncData(uid, async () => getPage(client, uid));
    return { uid, document: data };
  },
  // script
};
</script>
