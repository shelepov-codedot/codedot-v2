<script></script>

<section class="project-hero">
  <div class="project-hero__background-wrapper">
    <img src="../images/proj.png" alt="" class="project-hero__background" />
  </div>
  <div class="project-hero__wrapper">
    <div class="project-hero__inner">
      <div class="container"><h1 class="project-hero__title">TTSWTRS</h1></div>
      <div class="project-hero__description">
        <div class="container">
          <div class="project-hero__items">
            <div class="project-hero__item">
              <p class="project-hero__name">Task</p>
              <p class="project-hero__text">
                Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana. Ponas hörade
                sonde psykocentrism tar och nack. Rähak begeheten ultrasad fena, tiras. Polyvovis
                gigabyst att tehet ifall kamäll vana. Ponas hörade sonde psykocentrism tar och nack.
              </p>
            </div>
            <div class="project-hero__item">
              <p class="project-hero__name">Solution</p>
              <p class="project-hero__text">
                Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana. Ponas hörade
                sonde psykocentrism tar och nack. Rähak begeheten ultrasad fena, tiras. Polyvovis
                gigabyst att tehet ifall kamäll vana. Ponas hörade sonde psykocentrism tar och nack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .project-hero {
    position: relative;
    &__title {
      text-transform: uppercase;
      @include media-breakpoint-down(md) {
        line-height: 26px;
        font-size: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        line-height: 40px;
        font-size: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        line-height: 55px;
        font-size: 80px;
      }

      @include media-breakpoint-between(xl, xxl) {
        line-height: 70px;
        font-size: 105px;
      }

      @include media-breakpoint-up(xxl) {
        line-height: 150px;
        font-size: 210px;
      }

      color: white;
      font-weight: 600;
    }

    &__background-wrapper {
      position: relative;
      width: 100%;

      @include media-breakpoint-down(sm) {
        height: 767px;
      }

      @include media-breakpoint-between(sm, lg) {
        height: 800px;
      }

      @include media-breakpoint-up(lg) {
        height: 100vh;
      }
    }

    &__background {
      position: absolute;
      width: 100%;
      object-fit: cover;
      height: 100%;
    }

    &__wrapper {
      position: absolute;
      width: 100%;
      bottom: 0;
    }

    &__description {
      background-color: white;

      @include media-breakpoint-down(md) {
        padding-top: 34px;
        padding-bottom: 60px;
        border-radius: 30px 30px 0px 0px;
      }

      @include media-breakpoint-up(md) {
        padding-top: 60px;
        padding-bottom: 75px;
        border-radius: 40px 40px 0px 0px;
      }
    }

    &__items {
      display: flex;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__item {
      @include media-breakpoint-up(md) {
        width: 520px;
      }

      &:first-of-type {
        @include media-breakpoint-down(md) {
          margin-bottom: 14px;
        }

        @include media-breakpoint-between(md, lg) {
          margin-right: 100px;
        }

        @include media-breakpoint-up(lg) {
          margin-right: 180px;
        }
      }
    }

    &__name {
      @include media-breakpoint-down(md) {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 5px;
      }

      @include media-breakpoint-up(md) {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 20px;
      }
    }

    &__text {
      @include media-breakpoint-down(sm) {
        font-size: 14px;
        line-height: 21px;
      }
      @include media-breakpoint-between(sm, lg) {
        font-size: 16px;
        line-height: 27px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 18px;
        line-height: 27px;
      }
    }
  }
</style>
