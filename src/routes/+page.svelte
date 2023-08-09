<script>
  import Header from '../lib/sections/Header.svelte';
  import Footer from '../lib/sections/Footer.svelte';
  export let data;
</script>

<Header/>
<main>
  <div class="container">
    <svg width="1414" height="1898" viewBox="0 0 1414 1898" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="animated-path" d="M370 232.813C1060 421.964 1047.49 89.2251 1007.49 320.277C967.494 551.329 1026 1873.49 508.501 1069C-9.00046 264.508 60 648 596.5 772.5C1134.74 897.404 1721.55 -869.626 1226 566C735.5 1987 860.743 2167.5 624 1590.5C261.499 706.995 -223.803 670.975 116.198 1125.9L508.501 1611.94" stroke="#212121" stroke-linecap="round"/>
    </svg>

    
    <style>
      @keyframes draw {
        to {
          stroke-dashoffset: 0;
        }
      }
    
      #animated-path {
        stroke-dasharray: 10000;
        stroke-dashoffset: 10000;
        animation: draw 10s ease-in-out forwards;
      }
    </style>
  </div>
</main>
<Footer/>

<style lang="scss">
  :global {
    @import '../styles/styles.scss';
  }
</style>
