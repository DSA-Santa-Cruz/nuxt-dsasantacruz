<template>
  <form>
    <ul class="flex flex-wrap -mx-2">
      <li class="w-full mb-2 px-2"><AtomsInput label="Email" /></li>
      <li class="w-full mb-2 sm:w-3/5 px-2"><AtomsInput label="First Name" /></li>
      <li class="w-full mb-2 sm:w-2/5 px-2"><AtomsInput label="ZIP" /></li>
    </ul>
    <div class="mt-2 flex items-center">
      <div class="italic text-xs leading-tight w-auto pr-6">
        By submitting this form, you are agreeing to our
        <nuxt-link to="/privacy/" class="underline decoration-1">privacy policy</nuxt-link>.
      </div>
      <div class="flex-shrink-0 flex justify-end w-auto">
        <AtomsButton>Sign Up</AtomsButton>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    short: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
