<script>
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'
  import imageUrl from '../js/imageUrlBuilder'

  export let data
  let swiperElSecond

  register()

  const swiperSecondParams = {
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },
  }

  onMount(async () => {
    if (data) {
      const initializeSwiper = () => {
        Object.assign(swiperElSecond, swiperSecondParams)
        swiperElSecond.initialize()
      }

      requestAnimationFrame(initializeSwiper)
    }
  })
</script>

{#if data}
  <section class="reviews">
    <div class="container">
      <div class="reviews__wrapper">
        <div class="reviews__title-wrapper">
          <h2 class="reviews__title">Our Clients</h2>
          <div class="reviews__btns">
            <button class="reviews__btn reviews__btn--prev">
              <img src="../icons/arrow-btn.svg" alt="" class="reviews__btn-icon" />
            </button>
            <button class="reviews__btn reviews__btn--next">
              <img src="../icons/arrow-btn.svg" alt="" class="reviews__btn-icon" />
            </button>
          </div>
        </div>
        <div class="reviews__swiper-container">
          <swiper-container
            slides-per-view="1"
            class="reviews__swiper-wrapper"
            navigation="true"
            space-between="100"
            init="false"
            bind:this={swiperElSecond}
          >
            {#each data.reviewItems as review}
              <swiper-slide class="reviews__item">
                <p class="reviews__text">
                  {review.reviewText}
                </p>
                <div class="reviews__user-wrapper">
                  <div class="reviews__user-img-wrapper">
                    <img src={imageUrl(review.reviewImg)} alt="" class="reviews__user-img" />
                  </div>
                  <div class="reviews__user-data">
                    <span class="reviews__name"> {review.reviewAuthor}</span>
                    <span class="reviews__jobtitle">{review.reviewJob}</span>
                  </div>
                </div>
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

  .reviews {
    @include media-breakpoint-up(lg) {
      padding-top: 223px;
      padding-bottom: 30px;
    }
    &__title {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
      }

      @include media-breakpoint-down(md) {
        margin-bottom: 20px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 105px;
        line-height: 157.5px;
      }
    }

    &__title-wrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 35px;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }

      @include media-breakpoint-up(md) {
        align-items: center;
      }
    }

    &__btn {
      background-color: transparent;
      border: navajowhite;
      user-select: none;
    }

    &__btns {
      @include media-breakpoint-down(lg) {
        margin-top: 5px;
      }
    }

    &__btn--next &__btn-icon {
      transform: rotate(-45deg);
      user-select: none;
    }

    &__btn--prev &__btn-icon {
      transform: rotate(135deg);
      user-select: none;
    }

    &__item {
      @include media-breakpoint-down(md) {
        padding: 16px 20px;
      }
      @include media-breakpoint-between(md, xl) {
        padding: 40px;
      }

      @include media-breakpoint-up(xl) {
        padding: 88px 142px;
      }
    }

    &__btn-icon {
      @include media-breakpoint-down(lg) {
        width: 65px;
        height: 50px;
      }

      @include media-breakpoint-up(lg) {
        width: 104px;
        height: 76px;
      }
      filter: brightness(0);
    }

    &__text {
      position: relative;

      &::before,
      &::after {
        position: absolute;
        content: '';

        background-image: url('../icons/quote-up.svg');
        @include media-breakpoint-down(md) {
          width: 20px;
          height: 20px;
          background-size: cover;
        }

        @include media-breakpoint-up(md) {
          width: 40px;
          height: 40px;
        }
      }

      &::before {
        @include media-breakpoint-down(md) {
          left: -20px;
          top: -20px;
        }
        @include media-breakpoint-up(md) {
          left: -40px;
          top: -40px;
        }
      }

      &::after {
        @include media-breakpoint-down(md) {
          right: -18px;
          bottom: -18px;
        }
        @include media-breakpoint-up(md) {
          right: -40px;
          bottom: -40px;
        }

        transform: rotate(180deg);
      }

      @include media-breakpoint-down(sm) {
        font-size: 28px;
        line-height: 42px;
        text-indent: 20px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 30px;
        line-height: 45px;
        text-indent: 60px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 48px;
        line-height: 70px;
        text-indent: 100px;
      }
    }

    &__user-wrapper {
      @include media-breakpoint-down(lg) {
        transform: translateX(-20px);
        margin-top: 40px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 85px;
      }
      display: flex;
    }

    &__user-img-wrapper {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      margin-right: 20px;

      @include media-breakpoint-down(md) {
        width: 60px;
        height: 60px;
      }

      @include media-breakpoint-up(md) {
        width: 120px;
        height: 120px;
      }
    }

    &__user-img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    &__user-data {
      display: flex;
      flex-direction: column;
    }

    &__name {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        font-size: 18px;
        margin-bottom: 2px;
      }

      @include media-breakpoint-up(md) {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }

    &__jobname {
      @include media-breakpoint-down(md) {
        font-size: 14px;
      }

      @include media-breakpoint-up(md) {
        font-size: 20px;
      }
    }

    &__jobtitle {
      @include media-breakpoint-up(md) {
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
</style>
