<script>
  import Header from '../lib/sections/Header.svelte'
  import Footer from '../lib/sections/Footer.svelte'
  import Hero from '../lib/sections/Hero.svelte'
  import Dignity from '../lib/sections/Dignity.svelte'
  import Counters from '../lib/sections/Counters.svelte'
  import Cases from '../lib/sections/Cases.svelte'
  import Text from '../lib/sections/Text.svelte'
  import Services from '../lib/sections/Services.svelte'
  import Technologies from '../lib/sections/Technologies.svelte'
  import Review from '../lib/sections/Review.svelte'
  import Code from '../lib/sections/Code.svelte'
  import AboutHero from '../lib/sections/AboutHero.svelte'
  import Roadmap from '../lib/sections/Roadmap.svelte'
  import OurMission from '../lib/sections/OurMission.svelte'
  export let data

  console.log(data)
</script>

<Header />
<main>
  <!-- <Hero /> -->
  <!-- <Dignity /> -->
  <!-- <Counters /> -->
  <!-- <Cases /> -->
  <!-- <Text /> -->
  <!-- <Services /> -->
  <!-- <Technologies /> -->

  <AboutHero />
  <Roadmap />
  <OurMission />
  <Review />
  <Code />
</main>

<Footer />

<style global lang="scss">
  @import '../lib/styles/styles.scss';
</style>
