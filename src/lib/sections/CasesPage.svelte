<script>
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'

  register()

  onMount(() => {
    const swiperElTags = document.querySelector('.casespage__filtertag-wrapper')

    const swiperParams = {
      slidesPerView: 'auto',

      breakpoints: {
        0: {
          spaceBetween: 10,
        },
        768: {
          spaceBetween: 20,
        },
        992: {
          spaceBetween: 30,
        },
        1280: {
          spaceBetween: 40,
        },
      },
      on: {
        init() {},
      },
    }

    Object.assign(swiperElTags, swiperParams)

    swiperElTags.initialize()
  })
</script>

<section class="casespage">
  <div class="container">
    <div class="casespage__wrapper">
      <h2 class="casespage__title">OUR CASES</h2>
      <div class="reviews__swiper-container">
        <swiper-container class="casespage__filtertag-wrapper" init="false">
          <swiper-slide class="casespage__filtertag casespage__filtertag--active">
            All cases (27)
          </swiper-slide>
          <swiper-slide class="casespage__filtertag">MOBILE APPS (3)</swiper-slide>
          <swiper-slide class="casespage__filtertag">ECOMMERCE (10)</swiper-slide>
          <swiper-slide class="casespage__filtertag">Web dev (10)</swiper-slide>
          <swiper-slide class="casespage__filtertag">Game dev (4)</swiper-slide>
        </swiper-container>
      </div>

      <div class="casespage__items-wrapper">
        <div class="casespage__items casespage__items--left">
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases1.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">TTSWTRS</p>
                <p class="casespage__tag">Ecommerce Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases3.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">BRU beer</p>
                <p class="casespage__tag">Ecommerce Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases5.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">Dunn’s</p>
                <p class="casespage__tag">Web Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases1.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">TTSWTRS</p>
                <p class="casespage__tag">Ecommerce Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases3.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">BRU beer</p>
                <p class="casespage__tag">Ecommerce Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases5.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">Dunn’s</p>
                <p class="casespage__tag">Web Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
        </div>
        <div class="casespage__items casespage__items--right">
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases2.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">Spenco</p>
                <p class="casespage__tag">Web Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases4.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">Atomic</p>
                <p class="casespage__tag">Web Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases6.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">YB</p>
                <p class="casespage__tag">Mobile Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases2.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">Spenco</p>
                <p class="casespage__tag">Web Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases4.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">Atomic</p>
                <p class="casespage__tag">Web Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
          <div class="casespage__item">
            <div class="casespage__img-wrapper">
              <img src="../images/cases6.png" alt="casespage" class="casespage__img" />
            </div>
            <div class="casespage__text-wrapper">
              <div class="casespage__text-inner">
                <p class="casespage__name">YB</p>
                <p class="casespage__tag">Mobile Development</p>
              </div>
              <a href="#"
                ><img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" /></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .casespage {
    margin-bottom: 40px;
    &__wrapper {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-weight: 600;
      text-transform: uppercase;
      @include media-breakpoint-down(md) {
        font-size: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 105px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 210px;
      }
    }

    &__filtertag-wrapper {
      display: flex;
      overflow-x: auto;

      @include media-breakpoint-down(lg) {
        overflow-y: hidden;
        margin-top: 11px;
        margin-bottom: 40px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 28px;
        margin-bottom: 80px;
      }
    }

    &__filtertag {
      text-transform: uppercase;
      border-radius: 40px;
      border: 1px solid black;
      text-wrap: nowrap;
      user-select: none;
      text-align: center;
      width: max-content;

      &--active {
        background-color: black;
        color: #ffffff;
      }

      @include media-breakpoint-down(md) {
        font-size: 12px;
        padding: 7px 18px;
      }

      @include media-breakpoint-between(md, xl) {
        font-size: 16px;
        padding: 14px 36px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 16px;
        padding: 12px 32px;
      }

      @include media-breakpoint-up(xl) {
        padding: 19px 72px;
      }
    }

    &__items-wrapper {
      display: flex;

      @include media-breakpoint-down(lg) {
        flex-direction: column;
      }
    }

    &__items {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        width: 100%;
        flex-direction: column;
      }

      @include media-breakpoint-up(lg) {
        width: 50%;
      }
    }

    &__items--left {
      @include media-breakpoint-down(lg) {
        display: contents;
      }
      @include media-breakpoint-up(lg) {
        margin-right: 40px;
      }

      .casespage__item:not(.casespage__item:last-of-type) {
        margin-bottom: 40px;
      }

      .casespage__item:nth-child(4n + 1) {
        @include media-breakpoint-up(lg) {
          height: 800px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 600px;
        }
      }

      .casespage__item:nth-of-type(even) {
        @include media-breakpoint-up(lg) {
          height: 930px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 730px;
        }
      }

      .casespage__item:nth-child(3n + 3) {
        @include media-breakpoint-up(lg) {
          height: 570px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 370px;
        }
      }
    }

    &__items--right {
      @include media-breakpoint-down(lg) {
        display: contents;
      }

      .casespage__item:not(.casespage__item:last-of-type) {
        margin-bottom: 40px;
      }

      .casespage__item:nth-of-type(4n + 1) {
        @include media-breakpoint-up(lg) {
          height: 570px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 370px;
        }
      }

      .casespage__item:nth-of-type(even) {
        @include media-breakpoint-up(lg) {
          height: 1030px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 830px;
        }
      }

      .casespage__item:nth-of-type(3n + 3) {
        @include media-breakpoint-up(lg) {
          height: 700px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 500px;
        }
      }
    }

    &__item {
      border-radius: 40px;
      overflow: hidden;
      width: 100%;
      position: relative;

      @include media-breakpoint-down(sm) {
        height: 360px;
      }

      @include media-breakpoint-between(sm, lg) {
        height: 450px;
      }

      @include media-breakpoint-down(lg) {
        margin-bottom: 40px;
      }
    }

    &__item-arrow {
      transform: rotate(-45deg);

      @include media-breakpoint-down(xl) {
        width: 53px;
        height: 53px;
      }

      @include media-breakpoint-up(xl) {
        width: 76px;
        height: 76px;
      }
    }

    &__img-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__text-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      border-radius: 40px;
      border: 1px solid #ffffff33;
      backdrop-filter: blur(15px);
      z-index: 10;

      @include media-breakpoint-down(md) {
        padding-top: 9px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
      }

      @include media-breakpoint-up(md) {
        padding-top: 26px;
        padding-right: 40px;
        padding-left: 40px;
        padding-bottom: 40px;
      }

      @include media-breakpoint-down(lg) {
        left: 0;
        bottom: 0;
        width: calc(100%);
      }

      @include media-breakpoint-up(lg) {
        left: 40px;
        bottom: 40px;
        width: calc(100% - 80px);
      }
    }

    &__name {
      color: #ffffff;
      font-weight: 600;

      @include media-breakpoint-down(sm) {
        font-size: 24px;
        line-height: 36px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 32px;
        line-height: 48px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 40px;
        line-height: 60px;
        padding-bottom: 5px;
      }
    }

    &__tag {
      color: #ffffff;

      width: max-content;
      text-align: center;
      border: 1px solid white;
      border-radius: 40px;

      @include media-breakpoint-down(sm) {
        font-size: 12px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 14px;
      }

      @include media-breakpoint-down(md) {
        padding: 5px 12px;
      }

      @include media-breakpoint-up(md) {
        padding: 2px 12px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 16px;
      }
    }
  }
</style>
