<template>
  <label :for="label" class="flex flex-col">
    <span class="font-medium uppercase text-xxs tracking-1 mb-1">{{ label }}</span>
    <input :name="label" :type="type" class="w-full bg-white px-3 py-2 tracking-tighter text-black text-sm" />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
  },
};
</script>
