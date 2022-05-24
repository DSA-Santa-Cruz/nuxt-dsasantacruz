<template>
  <section class="pt-12 md:py-12 bg-white">
    <Container>
      <div class="grid grid-cols-1 gap-12 lg:gap-24 md:grid-cols-2">
        <div
          class="p-8 -ml-8 -mx-8 md:mr-0 bg-red text-white order-2 md:order-1"
        >
          <h2 class="text-xl font-bold">Sign Up for Email Updates</h2>
          <p class="mt-2">
            Get regular updates on new articles, actions, and our upcoming
            events.
          </p>
          <div class="mt-2">
            <MoleculesEmailSignUp short />
          </div>
        </div>
        <div class="md:mt-6 lg:mt-8 order-1 md:order-2">
          <h2 class="text-xl font-bold">Fight Capitalism. Join DSA.</h2>
          <p class="mt-3">Your affordable dues help fund:</p>
          <ul class="list-disc pl-6 grid grid-cols-1 gap-3 mt-3">
            <li>Local Labor Movements</li>
            <li>Mutual Aid</li>
            <li>Organizing Efforts</li>
          </ul>
          <p class="mt-3">You can join DSA wherever you are.</p>
          <div class="mt-4">
            <nuxt-link to="/join/"><AtomsButton>Join Now</AtomsButton></nuxt-link>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  // script
};
</script>
