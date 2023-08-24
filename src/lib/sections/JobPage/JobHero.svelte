<script></script>

<section class="job-hero">
  <div class="container">
    <div class="job-hero__wrapper">
      <div class="job-hero__title-wrapper">
        <span class="job-hero__exp">5+ years experience</span>
        <h1 class="job-hero__title">Senior Fullstack Developer</h1>
      </div>
      <div class="job-hero__text-main">
        <div class="job-hero__info-wrapper">
          <span class="job-hero__salary">From <b>500</b> to <b>1200 $</b></span>
          <div class="job-hero__conditions">Full time; English B2+</div>
          <a href="#" class="btn">
            Apply for this job
            <span class="btn__icon">
              <img src="../icons/arrow-btn.svg" alt="" />
            </span>
          </a>
        </div>
        <div class="job-hero__text-wrapper">
          <p class="job-hero__text-title">Working with us</p>
          <p class="job-hero__text">
            The Codedot team employs only experienced specialists. Each of our employees strives for
            constant self-development and growth: they read professional literature, attend courses,
            watch lectures and participate in seminars. We always keep our hands on the pulse: we
            monitor the latest trends, monitor changes in search engine algorithms.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .job-hero {
    padding-top: 100px;

    &__exp {
      padding: 6px 20px 6px 20px;
      color: white;
      background-color: black;
      border-radius: 40px;

      @include media-breakpoint-down(md) {
        font-size: 12px;
      }

      @include media-breakpoint-up(md) {
        font-size: 14px;
      }
    }

    &__title {
      @include media-breakpoint-down(md) {
        font-size: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-down(md) {
        margin-top: 25px;
      }

      @include media-breakpoint-up(md) {
        margin-top: 45px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 105px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 130px;
      }

      font-weight: 600;
    }

    &__salary {
      @include media-breakpoint-down(lg) {
        font-size: 14px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 32px;
      }
    }

    &__conditions {
      @include media-breakpoint-down(lg) {
        margin-top: 10px;
        font-size: 14px;
        margin-bottom: 40px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 20px;
        font-size: 32px;
        margin-bottom: 80px;
      }
    }

    &__text-main {
      display: flex;
      justify-content: space-between;

      @include media-breakpoint-down(lg) {
        flex-direction: column;
        margin-top: 20px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 50px;
      }
    }

    &__info-wrapper {
      align-self: flex-start;
    }

    &__text-wrapper {
      align-self: flex-end;

      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        padding-top: 40px;
      }

      @include media-breakpoint-up(lg) {
        width: 520px;
        padding-top: 80px;
      }
    }

    &__text-title {
      font-size: 36px;
      font-weight: 600;
    }

    &__text {
      margin-top: 20px;
      font-size: 18px;
    }
  }
</style>
