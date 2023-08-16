<script>
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'

  register()

  onMount(() => {
    const swiperElSecond = document.querySelector('.reviews__swiper-wrapper')

    // swiper parameters
    const swiperParams = {
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
          init="false"
        >
          <swiper-slide />
        </swiper-container>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';
</style>
