<template>
  <button
    class="leading-none font-medium uppercase text-xs inline-flex items-center"
  >
    <slot />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="
        h-2
        w-2
        ml-1
        stroke-white
        transition
        duration-200
        transform
        hover:translate-x-1
        group-hover:translate-x-1
      "
      :class="{'rotate-90':direction==='down'}"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="square"
        stroke-miterlimit="10"
        stroke-width="70"
        d="M268 112l144 144-144 144M392 256H100"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: "up",
    },
  },
};
</script>
