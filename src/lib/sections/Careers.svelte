<script></script>

<section class="careers">
  <div class="careers__inner">
    <div class="container">
      <div class="careers__wrapper">
        <h1 class="careers__title">Careers</h1>
        <p class="careers__text">
          Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana. Ponas hörade sonde
          psykocentrism tar och nack. Rähak begeheten ultrasad fena, tiras.
        </p>
      </div>
    </div>
  </div>
  <div class="careers__img-wrapper">
    <img src="../images/careers.svg" alt="" class="careers__img" />
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .careers {
    position: relative;

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

    &__img-wrapper {
      width: 100%;
      position: relative;

      @include media-breakpoint-down(sm) {
        padding: 81px 0 130px 0;
      }

      @include media-breakpoint-between(sm, md) {
        padding: 20px 0 100px 0;
      }

      @include media-breakpoint-between(md, xl) {
        height: 600px;
      }

      @include media-breakpoint-up(md) {
        padding-top: 50px;
      }
    }
    &__img {
      width: 100%;
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      position: relative;
      width: 100%;
      height: 100%;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__inner {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &__text {
      @include media-breakpoint-up(md) {
        align-self: flex-end;
        width: 380px;
      }

      @include media-breakpoint-down(md) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-between(md, xl) {
        font-size: 16px;
        line-height: 24px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 18px;
        line-height: 27px;
      }

      @include media-breakpoint-up(xxl) {
        padding-bottom: 45px;
      }
    }
  }
</style>
