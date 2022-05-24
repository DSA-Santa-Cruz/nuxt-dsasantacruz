<template>
  <header
    class="text-white font-medium py-2 absolute top-0 left-0 right-0 z-[999]"
  >
    <Container>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <nuxt-link to="/">
            <IconsLogomark class="h-20 w-20" />
          </nuxt-link>
          <span class="text-lg ml-1"> DSA Santa Cruz </span>
        </div>
        <ul class="hidden md:flex space-x-6 items-center text-sm lg:text-base">
          <li v-for="item in nav" :key="item">
            <nuxt-link :to="item.url">{{ item.label }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/join/">
              <AtomsButton>Join</AtomsButton>
            </nuxt-link>
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
      { label: "Contact", url: "/contact/" },
    ],
  }),
};
</script>
