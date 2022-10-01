<template>
  <header
    class="text-white font-medium py-2 absolute top-0 left-0 right-0 z-[999]"
  >
    <Container>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink to="/">
            <IconsLogoLockup class="h-24 -my-2 w-auto" />
          </NuxtLink>
        </div>
        <ul class="hidden md:flex space-x-6 items-center text-sm lg:text-base">
          <li v-for="item in nav" :key="item">
            <NuxtLink
              :to="item.url"
              class="underline decoration-offset-2 decoration-white/0 hover:decoration-white/50"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/join/">
              <AtomsButton>Join</AtomsButton>
            </NuxtLink>
          </li>
        </ul>
        <div class="flex md:hidden font-medium items-center">
          <span class="hidden sm:flex">Menu</span>
          <IconsMenu class="h-6 w-6 ml-2" />
        </div>
      </div>
    </Container>
  </header>
</template>

<script>
export default {
  data: () => ({
    nav: [
      { label: "Articles", url: "/articles" },
      { label: "Working Groups", url: "/working-groups/" },
      { label: "About", url: "/about/" },
      // { label: "Contact", url: "/contact/" },
      { label: "Donate", url: "/donate/" },
    ],
  }),
};
</script>
