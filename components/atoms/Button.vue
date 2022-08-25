<template>
  <button
    class="
      py-3
      px-4
      bg-black
      border-2 border-black
      text-white
      leading-none
      font-medium
      uppercase
      tracking-1
      text-xs
      hover:bg-white hover:border-red hover:text-red
      transition
      hover:shadow-lg hover:scale-105
      duration-100
    "
  >
    <slot />
  </button>
</template>
