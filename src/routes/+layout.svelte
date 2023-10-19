<script>
  import { fly } from 'svelte/transition'
  import { cubicIn, cubicOut } from 'svelte/easing'
  import { afterNavigate, beforeNavigate, disableScrollHandling } from '$app/navigation'

  export let data
  const duration = 500
  const delay = duration + 100
  const y = 1

  const transitionIn = { easing: cubicOut, y, duration, delay }
  const transitionOut = { easing: cubicIn, y: -y, duration }

  let isLoading = false

  beforeNavigate(({ to }) => (isLoading = !!to.route.id))
  afterNavigate(() => {
    disableScrollHandling()
    setTimeout(() => {
      scrollTo({ top: 0, behavior: 'instant' }), (isLoading = false)
    }, 500)
  })
</script>

{#key data.pathname}
  <div in:fly={transitionIn} out:fly={transitionOut}>
    <slot />
  </div>
{/key}
