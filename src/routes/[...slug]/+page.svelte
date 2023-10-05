<script>
  import * as Sections from '$lib/sections'
  export let data
  console.log(data)
</script>

<svelte:head>
  <title>Codedot v.2</title>
</svelte:head>

{#if data}
  <svelte:component this={Sections.Modal} />

  {#each data.content as section}
    {#if section.sectionTitle in Sections}
      <svelte:component this={Sections[section.sectionTitle]} data={section} />
    {/if}
  {/each}
{/if}

<style>
  @import '../../lib/styles/styles.scss';
</style>
