<template>
  <footer class="mt-auto sm:py-6 py-12 bg-black text-white">
    <Container>
      <div class="flex flex-wrap md:flex-nowrap items-center justify-between">
        <!-- logo -->
        <div
          class="
            flex
            w-full
            md:w-auto md:mr-6
            lg:mr-12
            items-center
            mb-4
            md:mb-0
          "
        >
          <span class="block bg-red p-1">
            <IconsLogomark class="h-12 lg:w-16 w-12 lg:h-16" />
          </span>
          <span
            class="ml-2 lg:ml-3 font-medium max-w-[14rem] leading-tight text-sm"
          >
            Democratic Socialists of America, Santa Cruz
          </span>
        </div>
        <!-- navs -->
        <div
          class="
            flex
            w-full
            md:w-auto
            flex-shrink-0
            md:ml-auto md:text-right
            flex-grow flex-col
          "
        >
          <!-- primary nav -->
          <ul
            class="
              flex flex-wrap
              md:justify-end
              font-medium
              text-sm
              gap-x-4 gap-y-2
              mb-3
              md:mb-1
            "
          >
            <li v-for="item in primaryNav" :key="item">
              <NuxtLink :to="item.url">{{ item.label }}</NuxtLink>
            </li>
          </ul>
          <!-- secondary nav -->
          <ul
            class="
              flex flex-wrap
              font-medium
              md:justify-end
              gap-x-4 gap-y-3
              uppercase
              tracking-1
              text-xxs text-red
            "
          >
            <li v-for="item in secondaryNav" :key="item">
              <NuxtLink :to="item.url">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script>
export default {
  data: () => ({
    primaryNav: [
      { label: "Articles", url: "/articles/" },
      { label: "Working Groups", url: "/working-groups/" },
      { label: "About", url: "/about/" },
      { label: "Join DSA", url: "/join/" },
      { label: "Contact", url: "/contact" },
      { label: "Donate", url: "/donate/" },
    ],
    secondaryNav: [
      { label: "Facebook", url: "https://www.facebook.com/DSASantaCruz/" },
      { label: "Twitter", url: "https://twitter.com/dsasantacruz" },
      { label: "Instagram", url: "https://www.instagram.com/dsasantacruz/" },
      { label: "Discord", url: "https://discord.gg/q4BpfWDwQD" },
      { label: "Privacy", url: "/privacy/" },
    ],
  }),
};
</script>
