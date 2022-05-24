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
    <OrganismsHeader />
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
      { rel: "icon", type: "image/png", href: "/favicon.png" },
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
