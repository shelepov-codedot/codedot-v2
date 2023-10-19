<script>
  import { onMount } from 'svelte'

  onMount(() => {
    let scrollPosition = 0
    let svgPath, svgPathLength
    const section = document.querySelector('.dignity__text-wrapper')
    const svgPathId = 'animated-path'

    window.addEventListener('scroll', () => {
      scrollPosition = window.scrollY
      if (section.getBoundingClientRect().top + 100 <= window.scrollY) {
        if (!svgPath) {
          svgPath = document.getElementById(svgPathId)
          svgPathLength = svgPath.getTotalLength()
          svgPath.style.strokeDasharray = svgPathLength
          svgPath.style.strokeDashoffset = svgPathLength
        }

        if (scrollPosition >= 0) {
          const dashoffset =
            svgPathLength -
            (scrollPosition * svgPathLength) / section.getBoundingClientRect().height
          svgPath.style.strokeDashoffset = dashoffset > 0 ? dashoffset : 0
        }
      }
    })
  })

  export let data
</script>

{#if data}
  <section class="dignity">
    <div class="container">
      <div class="dignity__background">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1644 1898"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="anima"
            id="animated-path"
            d="M370 232.813C1060 421.964 1047.49 89.2251 1007.49 320.277C967.494 551.329 1026 1873.49 508.501 1069C-9.00046 264.508 60 648 596.5 772.5C1134.74 897.404 1721.55 -869.626 1226 566C735.5 1987 860.743 2167.5 624 1590.5C261.499 706.995 -223.803 670.975 116.198 1125.9L508.501 1611.94"
            stroke="#212121"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="dignity__text-wrapper">
        {#each data.dignityItems as item, idx}
          <div class="dignity__item">
            <p class="dignity__name">{item.Name}</p>
            <p class="dignity__text">
              {item.Text}
            </p>
          </div>
          {#if idx < 2}
            <div class="dignity__item-img-wrapper">
              <img src="../images/dignity{idx + 1}.svg" alt="" class="dignity__item-img" />
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .dignity {
    overflow: hidden;
    .anima {
      stroke-dashoffset: 8800;
      stroke-dasharray: 8800;
    }

    .container {
      position: sticky;

      @include media-breakpoint-down(xxl) {
        top: 0px;
      }

      @include media-breakpoint-up(xxl) {
        top: -50px;
      }
    }

    @include media-breakpoint-up(lg) {
      // height: 9500px;
    }

    @include media-breakpoint-down(lg) {
      margin-top: 75px;
      margin-bottom: 165px;
    }
    @include media-breakpoint-up(lg) {
      margin-top: 80px;
      margin-bottom: 385px;
    }
    position: relative;

    &__background {
      @include media-breakpoint-down(lg) {
        display: none;
      }
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;

      @include media-breakpoint-up(lg) {
        position: absolute;
        justify-content: space-around;
        top: 0;
      }
    }

    &__name {
      font-weight: 600;
      width: max-content;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        line-height: 60px;
        margin-bottom: 5px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
        line-height: 90px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
        line-height: 120px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 105px;
        line-height: 170px;
      }
    }

    &__text {
      @include media-breakpoint-down(md) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(md) {
        font-size: 18px;
        line-height: 27px;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;

      &:nth-child(1) {
        @include media-breakpoint-between(lg, xl) {
          transform: translateY(-32px);
        }
        @include media-breakpoint-between(xl, xxl) {
          transform: translateY(-53px);
        }

        @include media-breakpoint-up(xxl) {
          transform: translateY(-80px);
        }
      }

      &:nth-child(1) .dignity__text {
        @include media-breakpoint-up(lg) {
          width: 436px;
        }
      }

      &:nth-child(3) {
        align-self: flex-end;
        @include media-breakpoint-up(xl) {
          transform: translateX(-52px) translateY(-10px);
        }
      }

      &:nth-child(3) .dignity__text {
        @include media-breakpoint-up(lg) {
          width: 509px;
        }
      }

      &:nth-child(5) {
        @include media-breakpoint-between(lg, xl) {
          transform: translateY(20px) translateX(5px);
        }
        @include media-breakpoint-between(xl, xxl) {
          transform: translateY(35px);
        }
        @include media-breakpoint-up(xxl) {
          transform: translateY(50px) translateX(10px);
        }
      }

      &:nth-child(3) .dignity__text {
        @include media-breakpoint-up(lg) {
          width: 440px;
        }
      }

      @include media-breakpoint-down(lg) {
        &:not(&:last-of-type) {
          transform: translate(-4px, 5px);
          margin-bottom: 35px;
        }

        &:last-of-type {
          transform: translateX(-4px);
          margin-bottom: 35px;
        }
      }
    }

    &__item-img-wrapper {
      @include media-breakpoint-down(lg) {
        position: relative;
        width: 100%;
        height: 305px;
        margin-bottom: 15px;
      }
      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    &__item-img {
      @include media-breakpoint-down(lg) {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
</style>
