<script>
  export let data
  $: sections = data.sectionsCollection.items


  console.log('sections',$sections)
</script>


<!-- {#each sections.sort((a, b) => a.position - b.position) as section}
  <svelte:component this={Sections[section?.component]} data={section} />
{/each} -->
