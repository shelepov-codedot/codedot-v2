<script>
  import { onMount } from 'svelte'
  let svgPath, svgPathLength, showDignity

  onMount(() => {
    let scrollPositionDignity = 0
    const section = document.querySelector('.dignity')
    const svgPathId = 'animated-path'

    const checkVisibility = () => {
      if (window.innerWidth <= 992) {
        const elem = document.querySelectorAll('.dignity__item')
        if (elem) {
          elem.forEach((el) => {
            const rect = el.getBoundingClientRect()
            showDignity = rect.top - 400 < window.scrollY
          })
        }
      }
    }

    window.addEventListener('scroll', () => {
      scrollPositionDignity = window.scrollY - 1093
      if (section.getBoundingClientRect().top <= window.scrollY && window.scrollY <= 2600) {
        if (!svgPath) {
          svgPath = document.getElementById(svgPathId)
          svgPathLength = svgPath.getTotalLength()
          svgPath.style.strokeDasharray = svgPathLength
          svgPath.style.strokeDashoffset = svgPathLength
        }

        if (scrollPositionDignity >= 0) {
          const dashoffset =
            svgPathLength -
            (scrollPositionDignity * svgPathLength) / (section.getBoundingClientRect().height - 600)
          svgPath.style.strokeDashoffset = dashoffset > 0 ? dashoffset : 0
        } else {
          svgPath.style.strokeDashoffset = 8800
        }
      }

      checkVisibility()
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
          shape-rendering="geometricPrecision"
        >
          <path
            class="anima"
            id="animated-path"
            d="M370 232.813C1060 421.964 1047.49 89.2251 1007.49 320.277C967.494 551.329 1026 1873.49 508.501 1069C-9.00046 264.508 60 648 596.5 772.5C1134.74 897.404 1721.55 -869.626 1226 566C735.5 1987 860.743 2167.5 624 1590.5C261.499 706.995 -223.803 670.975 116.198 1125.9L508.501 1611.94"
            stroke="#212121"
            vector-effect="non-scaling-stroke"
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
          {#if idx == 0}
            <div class="dignity__item-img-wrapper">
              <svg
                viewBox="0 0 282 298"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="dignity__item-img"
              >
                {#if showDignity}
                  <path
                    d="M48.8427 52.839C202.43 95.095 199.646 20.7618 190.742 72.3783C181.839 123.995 194.862 419.363 79.6715 239.641C-35.519 59.9196 -20.1602 145.591 99.2592 173.404C219.066 201.307 349.683 -193.443 239.379 127.272"
                    stroke="#212121"
                    stroke-linecap="round"
                    class="animated-path"
                  />
                {/if}
              </svg>
            </div>
          {/if}
          {#if idx == 1}
            <div class="dignity__item-img-wrapper">
              <svg
                viewBox="0 0 282 306"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="dignity__item-img"
              >
                {#if showDignity}
                  <path
                    d="M281 1C168.895 325.462 197.52 366.676 143.411 234.928C60.5607 33.194 -50.3565 24.9692 27.3516 128.843L117.014 239.824"
                    stroke="#212121"
                    stroke-linecap="round"
                    class="animated-path"
                  />
                {/if}
              </svg>
            </div>
          {/if}
        {/each}
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

  @include media-breakpoint-down(lg) {
    .animated-path {
      stroke-dasharray: 8000;
      stroke-dashoffset: 8000;
      animation: draw 4s ease-in-out forwards;
    }
  }

  .dignity {
    overflow: hidden;
    .anima {
      stroke-dashoffset: 8800;
      stroke-dasharray: 8800;
      stroke-width: 1px;
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
