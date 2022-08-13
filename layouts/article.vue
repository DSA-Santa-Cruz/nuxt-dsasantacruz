<template>
  <div
    class="font-sans text-white min-h-screen min-w-screen flex flex-col w-full"
  >
    <header class="absolute top-0 left-0 right-0 z-40">
      <Container>
        <div
          class="
            flex
            justify-between
            font-graph
            py-4
            uppercase
            font-bold
            tracking-2
            items-center
          "
        >
          <nuxt-link to="/articles/" class="text-white hover:text-black">
            <IconsSantaCruzLeft class="fill-current h-4" />
          </nuxt-link>
          <div
            class="
              uppercase
              font-bold
              tex-sm
              tracking-1
              flex
              gap-x-1
              items-center
            "
          >
            <nuxt-link to="/articles/" class="text-white hover:text-black"
              >More Articles</nuxt-link
            >
            <span class="bg-white w-[2px] h-2 mt-[2px] mx-1" />
            <nuxt-link
              to="/"
              class="flex items-center hover:text-black transition duration-200"
              ><span>Main Site</span> <IconsCircleArrow class="ml-1 w-3 h-3" />
            </nuxt-link>
          </div>
        </div>
      </Container>
    </header>
    <main class="flex-grow flex flex-col">
      <NuxtPage />
    </main>
    <LazyOrganismsFooter />
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: "preconnect",
        href: "https://use.typekit.net",
        crossorigin: true,
      },
      {
        href: "https://use.typekit.net/apc6stb.css",
        rel: "preload",
        as: "style",
      },
      {
        href: "https://use.typekit.net/apc6stb.css",
        rel: "stylesheet",
      },
    ],
  },
};
</script>
