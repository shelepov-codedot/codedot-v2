<script>
  import Header from '../lib/sections/Header.svelte';
  import Footer from '../lib/sections/Footer.svelte';
  import Hero from '../lib/sections/Hero.svelte'
  import Dignity from '../lib/sections/Dignity.svelte';
  import Counters from '../lib/sections/Counters.svelte'
  import Cases from '../lib/sections/Cases.svelte'
  
  export let data;
</script>

<!-- <Header/> -->
<main>
  <!-- <Hero/>
  <Dignity/> -->
  <!-- <Counters/> -->
  <Cases/>
</main>
<!-- <Footer/> -->






<style global lang="scss">
  @import '../lib/styles/styles.scss';
</style>
