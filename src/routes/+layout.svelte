<script>
  import { fly } from 'svelte/transition'
  import { cubicIn, cubicOut } from 'svelte/easing'
  import { beforeNavigate, afterNavigate } from '$app/navigation'

  export let data
  const duration = 300
  const delay = duration + 100
  const y = 1

  const transitionIn = { easing: cubicOut, y, duration, delay }
  const transitionOut = { easing: cubicIn, y: -y, duration }

  let isLoading = false

  beforeNavigate(({ to }) => (isLoading = !!to.route.id))
  afterNavigate(() => (isLoading = false))
</script>

{#key data.pathname}
  <div in:fly={transitionIn} out:fly={transitionOut}>
    <slot />
  </div>
{/key}
