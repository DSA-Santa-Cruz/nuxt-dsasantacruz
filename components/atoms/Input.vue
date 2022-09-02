<template>
  <label :for="label" class="flex flex-col">
    <span class="font-medium uppercase text-xxs tracking-1 mb-1">
      {{ label }}
    </span>
    <input
      :name="label"
      :type="type"
      class="w-full bg-white px-3 py-2 tracking-tighter text-black text-sm"
      @input="updateValue"
    />
  </label>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const updateValue = event => {
  emit("update:modelValue", event.target.value);
};
</script>

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
