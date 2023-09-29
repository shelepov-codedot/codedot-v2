<script>
  import * as Sections from '$lib/sections'
  import { onMount } from 'svelte'

  import { _getProps } from './+page.js'

  let pageData

  async function loadPageData() {
    pageData = await _getProps()
    console.log(pageData)
  }

  onMount(() => {
    loadPageData()
  })
</script>

<svelte:head>
  <title>Codedot v.2</title>
</svelte:head>

{#if pageData}
  <svelte:component this={Sections.Modal} />

  {#each pageData.content as section}
    {#if section.sectionTitle in Sections}
      <svelte:component this={Sections[section.sectionTitle]} />
    {/if}
  {/each}
{/if}

<style>
  @import '../lib/styles/styles.scss';
</style>
