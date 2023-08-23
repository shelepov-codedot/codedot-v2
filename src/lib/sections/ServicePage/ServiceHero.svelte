<script></script>

<section class="service-hero">
  <div class="container">
    <div class="service-hero__wrapper">
      <div class="service-hero__title-wrapper">
        <h1 class="service-hero__title">MVP<br /> DEVELOPMENT</h1>
        <div class="service-hero__subtext-wrapper">
          <p class="service-hero__subtext">from idea to development and support</p>
          <a href="#" class="btn"
            >Discuss the project <span class="btn__icon"
              ><img src="../icons/arrow-btn.svg" alt="" /></span
            ></a
          >
        </div>
      </div>
      <div class="service-hero__inner">
        <div class="service-hero__img-wrapper">
          <img src="../images/service-hero.png" alt="" class="service-hero__img" />
        </div>
        <div class="service-hero__text-wrapper">
          <p class="service-hero__text">
            An MVP is an important step in the software development process that allows you to
            preview and test the product to make necessary adjustments before actually releasing the
            final version with all features. In the future, your MVP product will be transformed
            into a full-fledged product, as our skills help us work quickly and create stable code.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .service-hero {
    &__title {
      @include media-breakpoint-down(md) {
        font-size: 40px;
        &:nth-child(1) {
          margin-bottom: 20px;
        }
      }

      @include media-breakpoint-down(md) {
        &:nth-child(2) {
          text-align: end;
        }
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

      font-weight: 600;
    }

    &__subtext-wrapper {
      margin-top: 55px;
      display: flex;
      justify-content: space-between;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__subtext {
      text-transform: uppercase;
      font-size: 16px;
      width: 240px;

      @include media-breakpoint-down(md) {
        font-size: 14px;
        margin-bottom: 40px;
      }
    }

    &__img-wrapper {
      border-radius: 1000px;
      overflow: hidden;
      width: 100%;
      position: relative;

      @include media-breakpoint-down(sm) {
        height: 500px;
      }

      @include media-breakpoint-between(sm, lg) {
        height: 722px;
      }

      @include media-breakpoint-up(lg) {
        height: 944px;
      }
    }

    &__img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__inner {
      display: flex;

      flex-direction: column;

      @include media-breakpoint-down(md) {
        padding-top: 40px;
      }

      @include media-breakpoint-up(md) {
        padding-top: 80px;
      }
    }

    &__text-wrapper {
      display: flex;
      align-self: flex-end;

      @include media-breakpoint-down(md) {
        padding-top: 40px;
      }

      @include media-breakpoint-up(md) {
        width: 50%;
        padding-top: 100px;
      }
    }

    &__text {
      font-size: 40px;
      font-weight: 400;

      @include media-breakpoint-down(lg) {
        font-family: Wix Madefor Display;
        font-size: 24px;
        font-weight: 400;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
</style>
