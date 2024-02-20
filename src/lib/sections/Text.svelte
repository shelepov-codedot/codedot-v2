<script>
  import { onMount } from 'svelte'
  let svgPath, svgPathLength

  onMount(() => {
    const section = document.querySelector('.text')

    if (section) {
      let scrollPositionText = 0

      const svgPathId = 'animated-path-text'
      window.addEventListener('scroll', () => {
        scrollPositionText = window.scrollY - 6800
        if (section.getBoundingClientRect().top <= window.scrollY && scrollPositionText <= 1250) {
          if (!svgPath) {
            svgPath = document.getElementById(svgPathId)
          }

          if (svgPath) {
            svgPathLength = svgPath?.getTotalLength()
            svgPath.style.strokeDasharray = svgPathLength
            svgPath.style.strokeDashoffset = svgPathLength
          }

          if (scrollPositionText >= 0) {
            const dashoffset =
              svgPathLength -
              (scrollPositionText * svgPathLength) / section.getBoundingClientRect().height -
              600
            svgPath.style.strokeDashoffset = dashoffset > 0 ? dashoffset : 0
          } else {
            if (svgPath) {
              svgPath.style.strokeDashoffset = 8800
            }
          }
        }
      })
    }
  })

  export let data
</script>

{#if data}
  <section class="text">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1020"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="text__svg"
    >
      <path
        class="animated-path-text"
        id="animated-path-text"
        d="M-57.5 172.5C48.6667 90.1667 361.3 -66.2998 530.5 32.5002C742 156 736.5 255 898.5 172.5C1060.5 90 1096.5 -69.4996 1261 134C1425.5 337.5 1354 469 1565.5 299C1777 129 2420 109.693 1986 299C1508 507.5 1387 -85.4996 1675.5 219.5C1911.58 469.08 1593 441.5 1326.5 428C1060 414.5 892.5 788 415 604C45.0184 461.431 676 1029.5 596.5 793.5C422.881 278.104 244.911 571.682 124 738.5C30.5 867.5 115.543 1050.71 371 969C791.5 834.5 783 1062.5 1063 947C1343 831.5 1202.55 721.841 1480.5 947C1609.5 1051.5 1856.5 1051 1953 892"
        stroke="#212121"
      />
    </svg>
    <div class="text__wrapper">
      <div class="container container--text">
        <div class="text__inner">
          {#each data.textItems as item}
            <p class="text__item">
              {item}
            </p>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  .animated-path-text {
    stroke-dashoffset: 8800;
    stroke-dasharray: 8800;
  }

  .container--text {
    height: 100%;
  }

  .text {
    @include media-breakpoint-down(lg) {
      padding-top: 40px;
    }
    @include media-breakpoint-up(lg) {
      padding-top: 40px;
      padding-bottom: 30px;
    }

    position: relative;

    &__wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
    }

    &__inner {
      display: flex;
      flex-direction: column;
      height: 100%;

      @include media-breakpoint-down(md) {
        justify-content: space-between;
      }

      @include media-breakpoint-up(md) {
        justify-content: space-evenly;
        padding-top: 155px;
        padding-bottom: 135px;
      }
    }

    &__svg {
      @include media-breakpoint-down(sm) {
        padding: 251px 0 366px 0;
      }

      @include media-breakpoint-between(sm, md) {
        padding: 170px 0 215px 0;
      }
    }

    &__item {
      &:not(&:last-of-type) {
        @include media-breakpoint-up(md) {
          text-align: start;
          align-self: flex-start;
        }
      }

      @include media-breakpoint-up(md) {
        width: 56%;
        align-self: flex-end;
        text-align: end;
      }

      @include media-breakpoint-down(xl) {
        font-size: 24px;
        line-height: 36px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 30px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 40px;
        line-height: 60px;
      }
    }
  }
</style>
