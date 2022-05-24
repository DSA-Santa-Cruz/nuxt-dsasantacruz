<template>
  <div
    class="
      font-sans
      text-black
      bg-white
      min-h-screen min-w-screen
      flex flex-col
      w-full
    "
  >
    <Container>
      <div
        class="
          flex
          justify-between
          flex-wrap
          gap-y-4
          text-red
          font-graph
          py-4
          uppercase
          font-bold
          tracking-2
        "
      >
        <div class="flex">
          {{
            new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </div>
        <div class="uppercase font-bold tex-sm tracking-1 flex gap-x-1 items-center">
          <span>Santa Cruz, CA</span> <span class="bg-red w-[2px] h-2 mt-[2px] mx-1" /> <nuxt-link to="/" class="flex items-center hover:text-black transition duration-200"><span>Main Site</span> <IconsCircleArrow class="ml-1 w-3 h-3" /></nuxt-link>
        </div>
        <div class="w-full"><IconsSantaCruzLeft class="fill-red" /></div>
      </div>
    </Container>
    <main class="flex-grow flex flex-col">
      <NuxtPage />
    </main>
    <OrganismsFooter />
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
