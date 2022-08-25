<template>
  <div
    class="flex items-center flex-wrap"
    :class="{ 'gap-x-2': small, 'gap-x-3': !small }"
  >
    <NuxtLink
      :to="`https://www.facebook.com/dialog/feed?app_id=${appid}&link=${encodeURIComponent(
        url,
      )}`"
      class="text-white hover:text-black"
    >
      <IconsFacebook
        class="fill-current"
        :class="{ 'w-6 h-6': small, 'w-8 h-8': !small }"
      />
      <span class="hidden">facebook</span>
    </NuxtLink>
    <NuxtLink
      :to="`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`"
      rel="noopener noreferrer"
      class="text-white hover:text-black"
    >
      <IconsTwitter
        class="fill-current"
        :class="{ 'w-6 h-6': small, 'w-8 h-8': !small }"
      />
      <span class="hidden">twitter</span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    overrideUrl: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      appid: process?.env?.FB_APP_ID,
      url: process?.env?.SITE_URL + this.$route.path,
    };
  },
};
</script>
