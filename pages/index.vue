<template>
  <div class="flex flex-col items-center justify-start flex-grow font-sans">
    <OrganismsHero />
    <OrganismsProse :content="content" />
  </div>
</template>

<script>
export default {
  data: () => ({
    content: `
    <h2>Some Words</h2>
    <p>Cosmic fugue Apollonius of Perga light years something incredible is waiting to be known of brilliant syntheses radio telescope. The ash of stellar alchemy colonies permanence of the stars the ash of stellar alchemy Drake Equation not a sunrise but a galaxyrise. </p>
    <p>Corpus callosum extraordinary claims require extraordinary evidence the sky calls to us hundreds of thousands at the edge of forever emerged into consciousness. Inconspicuous motes of rock and gas from which we spring rich in heavy atoms network of wormholes brain is the seed of intelligence intelligent beings and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
    `,
  }),
};
</script>
