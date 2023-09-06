<script></script>

<section class="expect">
  <div class="expect__img-wrapper">
    <img src="../images/expect.svg" alt="" class="expect__img" />
  </div>
  <div class="container">
    <div class="expect__wrapper">
      <div class="expect__title-wrapper">
        <h2 class="expect__title">What you can expect</h2>
        <p class="expect__subtitle">
          Rely on our team and on mutual partnerships. One of our values is reliability. Experts in
          development will work on your project and will provide you with the best result.
        </p>
      </div>
      <div class="expect__items">
        <div class="expect__item-img-wrapper">
          <img src="../images/expect-1.svg" alt="" class="expect__item-img" />
        </div>
        <div class="expect__item">
          <p class="expect__text">
            Development, testing, release, and support of your product. Modernization of
            architecture. Cloud Native and Microservices application development.
          </p>
        </div>
        <div class="expect__item-img-wrapper">
          <img src="../images/expect-2.svg" alt="" class="expect__item-img" />
        </div>
        <div class="expect__item">
          <p class="expect__text">
            We constantly monitor trends in development and update our skills. Thus, professionals
            with all the skills and qualities confirmed by real experience will work on your
            project.
          </p>
        </div>
        <div class="expect__item-img-wrapper">
          <img src="../images/expect-3.svg" alt="" class="expect__item-img" />
        </div>
        <div class="expect__item">
          <p class="expect__text">
            A strategic approach based on indicators allows you to see your actual results in
            numbers.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .expect {
    @include media-breakpoint-down(lg) {
      padding-top: 87px;
      padding-bottom: 87px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 215px;
      padding-bottom: 215px;
    }
    position: relative;

    &__img-wrapper {
      position: absolute;
      transform: translateY(299px);
      width: 98%;

      @include media-breakpoint-down(lg) {
        display: none;
      }
    }

    &__img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    &__title {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        margin-bottom: 11px;
      }

      @include media-breakpoint-between(lg, xl) {
        max-width: 320px;
        font-size: 60px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 105px;
      }

      @include media-breakpoint-up(lg) {
        width: 680px;
      }
    }

    &__subtitle {
      @include media-breakpoint-down(xl) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(lg) {
        width: 380px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 18px;
        line-height: 27px;
      }
    }

    &__title-wrapper {
      display: flex;

      justify-content: space-between;
      @include media-breakpoint-down(lg) {
        flex-direction: column;
      }

      @include media-breakpoint-up(lg) {
        align-items: center;
      }
    }

    &__items {
      @include media-breakpoint-up(lg) {
        margin-top: 380px;
      }
      display: flex;
      flex-direction: column;
    }

    &__item {
      @include media-breakpoint-up(lg) {
        width: 49%;
      }

      &:nth-child(4) {
        align-self: flex-end;
      }

      &:not(&:last-of-type) {
        @include media-breakpoint-between(lg, xl) {
          margin-bottom: 220px;
        }
        @include media-breakpoint-between(xl, xxl) {
          margin-bottom: 168px;
        }

        @include media-breakpoint-up(xxl) {
          margin-bottom: 188px;
        }
      }
    }

    &__item-img-wrapper {
      position: relative;
      width: 100%;
      height: 200px;
      margin-bottom: 5px;

      &:nth-child(5) {
        @include media-breakpoint-down(lg) {
          margin-bottom: 24px;
        }
      }

      @include media-breakpoint-between(md, lg) {
        margin: 20px 0;
      }
      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    &__item-img {
      position: absolute;
      width: 100%;

      height: 100%;
    }

    &__text {
      @include media-breakpoint-down(lg) {
        font-size: 20px;
        line-height: 30px;
      }
      @include media-breakpoint-between(lg, xxl) {
        font-size: 24px;
        line-height: 36px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 40px;
        line-height: 60px;
      }
    }
  }
</style>
