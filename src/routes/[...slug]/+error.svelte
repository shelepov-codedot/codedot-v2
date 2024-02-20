<script>
  import { page } from '$app/stores'
  import * as Sections from '$lib/sections'
</script>

<svelte:component this={Sections.Header} />
<main>
  <div class="container">
    <h1>{$page.error.message}</h1>
    <p>Error 404</p>
  </div>
</main>

<style lang="scss">
  @import '../../lib/styles/styles.scss';
</style>
