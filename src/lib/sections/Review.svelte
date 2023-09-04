<script>
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'

  register()

  onMount(() => {
    const swiperElSecond = document.querySelector('.reviews__swiper-wrapper')

    // swiper parameters
    const swiperParams = {
      slidesPerView: 1,
      navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev',
      },
      on: {
        init() {},
      },
    }

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperElSecond, swiperParams)

    // and now initialize it
    swiperElSecond.initialize()
  })
</script>

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
        >
          <swiper-slide class="reviews__item">
            <p class="reviews__text">
              Very talented team, fantastic React skills, completed all allocated tasks on time.
              Would highly recommend & looking forward together in the future.
            </p>
            <div class="reviews__user-wrapper">
              <div class="reviews__user-img-wrapper">
                <img src="../images/user.png" alt="" class="reviews__user-img" />
              </div>
              <div class="reviews__user-data">
                <span class="reviews__name">Dean M.</span>
                <span class="reviews__jobtitle">Product Manager</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="reviews__item">
            <p class="reviews__text">
              Very talented team, fantastic React skills, completed all allocated tasks on time.
              Would highly recommend & looking forward together in the future.
            </p>
            <div class="reviews__user-wrapper">
              <div class="reviews__user-img-wrapper">
                <img src="../images/user.png" alt="" class="reviews__user-img" />
              </div>
              <div class="reviews__user-data">
                <span class="reviews__name">Dean M.</span>
                <span class="reviews__jobtitle">Product Manager</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="reviews__item">
            <p class="reviews__text">
              Very talented team, fantastic React skills, completed all allocated tasks on time.
              Would highly recommend & looking forward together in the future.
            </p>
            <div class="reviews__user-wrapper">
              <div class="reviews__user-img-wrapper">
                <img src="../images/user.png" alt="" class="reviews__user-img" />
              </div>
              <div class="reviews__user-data">
                <span class="reviews__name">Dean M.</span>
                <span class="reviews__jobtitle">Product Manager</span>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .reviews {
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
        padding: 20px;
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
        width: 40px;
        height: 40px;
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
          left: 0px;
          top: -35px;
        }
      }

      &::after {
        @include media-breakpoint-down(md) {
          right: -20px;
          bottom: -20px;
        }
        @include media-breakpoint-up(md) {
          right: 0px;
          bottom: -80px;
        }

        transform: rotate(180deg);
      }

      @include media-breakpoint-down(sm) {
        font-size: 28px;
        text-indent: 50px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 30px;
        text-indent: 50px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 48px;
        line-height: 70px;
        text-indent: 100px;
      }
    }

    &__user-wrapper {
      display: flex;
      margin-top: 80px;
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
        margin-bottom: 5px;
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
  }
</style>
