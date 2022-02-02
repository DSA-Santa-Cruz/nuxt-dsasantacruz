<template>
  <div
    class="
      font-sans
      text-stone-800
      bg-stone-100
      min-h-screen min-w-screen
      w-full
      flex flex-col
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
import './css/index.css';

export default {
  head: {
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,400;0,600;1,400;1,600&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
};
</script>
