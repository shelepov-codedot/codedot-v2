<script>
  import { onMount } from 'svelte'

  let showBenefits

  const checkVisibility = () => {
    const elem = document.querySelector('.benefits__wrapper')
    if (elem) {
      const rect = elem.getBoundingClientRect()
      const windowHeight = window.innerWidth
      showBenefits = rect.top * 2 < windowHeight
    }
  }

  onMount(() => {
    window.addEventListener('scroll', checkVisibility)
  })

  export let data
</script>

{#if data}
  <section class="benefits">
    <div class="container">
      <div class="benefits__wrapper">
        <div class="benefits__img-wrapper">
          <svg
            width="1333"
            height="384"
            viewBox="0 0 1333 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="benefits__img"
          >
            {#if showBenefits}
              <path
                id="animated-path"
                d="M1 156C43.8333 132.5 187 58.9 261 92.5C353.5 134.5 246.5 179 213.5 232C180.5 285 165.654 379.826 204.5 352C275 301.5 324 389.5 364 382.5C404 375.5 479.5 377 513 252C524.626 208.62 551.461 125.804 578.5 92.5002C619.5 42.0002 686.5 13.5002 737.5 13.5002C842 13.5002 769 131 817.5 155.5C866 180 1098 -39.9998 1182 8.50021C1266 57.0002 1272.7 251.589 1240 195.5C1096 -51.4998 1377.5 254.5 1325.5 381.5"
                stroke="#212121"
              />
            {/if}
          </svg>
        </div>
        <h2 class="benefits__title">{data.title}</h2>
        <div class="benefits__items">
          {#each data.benefitsItems as benefitItem}
            <div class="benefits__item">
              <p class="benefits__name">{benefitItem.itemName}</p>
              <p class="benefits__text">
                {benefitItem.itemText}
              </p>
            </div>
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

  #animated-path {
    stroke-dasharray: 10000;
    stroke-dashoffset: 10000;
    animation: draw 4s ease-in-out forwards;
  }

  .benefits {
    @include media-breakpoint-down(lg) {
      padding-top: 90px;
      padding-bottom: 68px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 220px;
      padding-bottom: 106px;
    }
    &__title {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        font-size: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-down(lg) {
        margin-bottom: 20px;
        order: 0;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 50px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 105px;
      }
    }

    &__wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__img-wrapper {
      align-self: center;

      @include media-breakpoint-down(lg) {
        width: 100%;
        padding-top: 10px;
        margin-bottom: 30px;
        order: 3;
      }

      @include media-breakpoint-up(lg) {
        position: absolute;
      }

      @include media-breakpoint-between(lg, xl) {
        width: 80%;
        transform: translate(44px, -50px);
      }

      @include media-breakpoint-between(xl, xxl) {
        width: 80%;
        transform: translate(15px, -45px);
      }

      @include media-breakpoint-up(xxl) {
        transform: translate(60px, -55px);
      }
    }

    &__img {
      width: 100%;
    }

    &__items {
      display: flex;
      justify-content: space-between;

      @include media-breakpoint-down(lg) {
        display: contents;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        margin-bottom: 30px;
      }

      @include media-breakpoint-up(lg) {
        width: 380px;
      }

      &:nth-child(even) {
        @include media-breakpoint-between(lg, xl) {
          padding-top: 140px;
        }

        @include media-breakpoint-between(xl, xxl) {
          padding-top: 180px;
        }
        @include media-breakpoint-up(xxl) {
          padding-top: 230px;
        }
      }

      &:nth-child(1) {
        @include media-breakpoint-down(lg) {
          order: 1;
        }
      }

      &:nth-child(2) {
        @include media-breakpoint-down(lg) {
          order: 2;
        }
      }

      &:nth-child(3) {
        @include media-breakpoint-down(lg) {
          order: 4;
        }
      }

      &:nth-child(4) {
        @include media-breakpoint-down(lg) {
          order: 5;
        }
      }
    }

    &__name {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        padding-bottom: 17px;
      }

      @include media-breakpoint-up(lg) {
        padding-bottom: 20px;
      }

      @include media-breakpoint-down(xxl) {
        font-size: 24px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 36px;
      }
    }

    &__text {
      @include media-breakpoint-down(xl) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 18px;
        line-height: 27px;
      }
    }
  }
</style>
