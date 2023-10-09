<script>
  import { createClient } from '@sanity/client'
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'

  export let data

  let swiperEl

  register()

  const spaceBetween = 40

  const swiperParams = {
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    slidesPerView: 1,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1692: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: `.next${data._id}`,
      prevEl: `.prev${data._id}`,
    },
  }

  onMount(async () => {
    if (data) {
      const initializeSwiper = () => {
        Object.assign(swiperEl, swiperParams)
        swiperEl.initialize()
      }

      requestAnimationFrame(initializeSwiper)
    }
  })
</script>

{#if data}
  <section class="services">
    <div class="container">
      <div class="services__wrapper">
        <div class="services__title-wrapper">
          <h2 class="services__title">{data.title}</h2>
          <div class="services__btns">
            <button class="services__btn services__btn--prev prev{data._id}">
              <img src="../icons/arrow-btn.svg" alt="" class="services__btn-icon" />
            </button>
            <button class="services__btn services__btn--next next{data._id}">
              <img src="../icons/arrow-btn.svg" alt="" class="services__btn-icon" />
            </button>
          </div>
        </div>

        <div class="services__swiper-container">
          <swiper-container
            slides-per-view="3"
            space-between={spaceBetween}
            class="services__swiper-wrapper"
            navigation="true"
            init="false"
            bind:this={swiperEl}
          >
            {#each data.services as service}
              <swiper-slide class="services__item">
                <p class="services__name">{service.name}</p>
                <p class="services__text">{service.text}</p>
              </swiper-slide>
            {/each}
          </swiper-container>
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .services {
    @include media-breakpoint-down(lg) {
      padding: 90px 0;
    }

    @include media-breakpoint-up(lg) {
      padding: 250px 0;
    }

    position: relative;

    &__title-wrapper {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(md) {
        margin-bottom: 40px;
        align-items: flex-start;
      }

      @include media-breakpoint-between(md, xxl) {
        align-items: center;
        justify-content: center;
      }

      @include media-breakpoint-up(md) {
        margin-right: 80px;
      }

      @include media-breakpoint-up(xxl) {
        padding-top: 77px;
        margin-right: 80px;
        align-items: center;
      }
    }

    &__title {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        font-size: 40px;

        margin-bottom: 30px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 40px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 105px;
      }
    }
    &__wrapper {
      display: flex;
      position: relative;
      min-width: 0;
      overflow: unset;
      @include media-breakpoint-down(md) {
        flex-direction: column;
      }

      @include media-breakpoint-up(lg) {
        padding-left: 45px;
        width: calc(100% + (100vw - var(--container-width)) / 2 + var(--spacing-container));
      }
    }

    &__item {
      display: flex;
      min-width: 0;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fafafa;
      border-radius: 40px;

      @include media-breakpoint-down(md) {
        height: 320px;
        padding: 20px;
      }

      @include media-breakpoint-between(md, lg) {
        height: 380px;
        padding: 30px;
      }

      @include media-breakpoint-up(lg) {
        height: 440px;
        padding: 40px;
      }
    }

    &__name {
      font-weight: 700;

      @include media-breakpoint-down(md) {
        font-size: 28px;
      }

      @include media-breakpoint-between(md, xl) {
        font-size: 32px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 40px;
      }
    }

    &__text {
      font-weight: 400;

      @include media-breakpoint-down(md) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(md) {
        font-size: 18px;
        line-height: 27px;
      }
    }

    &__swiper-container {
      width: 100%;
      min-width: 0;
    }

    &__swiper-wrapper {
      min-width: 0;
      width: auto;
    }

    &__btn {
      background-color: transparent;
      border: none;
      outline: none;
      user-select: none;
    }

    &__btns {
      display: flex;

      @include media-breakpoint-down(lg) {
        padding-left: 15px;
      }

      @include media-breakpoint-up(lg) {
        padding-top: 30px;
      }
    }

    &__btn--next &__btn-icon {
      transform: rotate(-45deg);
    }

    &__btn--prev {
      @include media-breakpoint-down(lg) {
        margin-right: 25px;
      }
      @include media-breakpoint-up(lg) {
        margin-right: 10px;
      }
    }

    &__btn--prev &__btn-icon {
      transform: rotate(135deg);
    }

    &__btn-icon {
      filter: brightness(0);
      user-select: none;

      @include media-breakpoint-down(md) {
        width: 40px;
        height: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        width: 60px;
        height: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        width: 80px;
        height: 80px;
      }

      @include media-breakpoint-between(xl, xxl) {
        width: 80px;
        height: 80px;
      }

      @include media-breakpoint-up(xxl) {
        width: 92px;
        height: 80px;
      }
    }
  }
</style>
