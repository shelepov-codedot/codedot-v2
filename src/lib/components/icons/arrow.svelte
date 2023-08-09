<!-- <script>
  export let width = 15;
  export let height = 1;
  export let color = "#212121";
</script>

<span style='--color: {color}; --width: {width}px; --height: {height}px' class="arrow" />

<style lang="scss">

  .arrow {
    position: relative;
    width: var(--width);
    background: var(--color);
    height:  var(--height);
    display: flex;

    &::after,
    &::before {
      content: "";
      width: calc(var(--width) / 3);
      height: var(--height);
      background: inherit;
      position: absolute;
      top: 0;
      right: 0;
    }

    &::after {
      transform: rotate(45deg) translate(calc(-var(--height) + 5px * -1), calc(var(--width) / 20 * -1)px);
    }

    &::before {
      transform: rotate(135deg) translate(calc(-var(--height) + 5px), calc(var(--width) / 20 * -1)px);
    }
  }
</style> -->
