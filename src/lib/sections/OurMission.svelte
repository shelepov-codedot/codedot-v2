<script></script>

<section class="ourmission">
  <div class="container">
    <div class="ourmission__wrapper">
      <p class="ourmission__text">
        <strong>Our mission</strong> is to turn ideas into impressive digital products that change
        the world.
        <strong>Our vision</strong>
        is that our products will be used by millions of people around the world.
        <strong>Our Values:</strong>
        сontinuous growth, reliability, open-minded
      </p>
    </div>
  </div>
  <div class="ourmission__img-wrapper">
    <img src="../images/ourmission.png" alt="" class="ourmission__img" />
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .ourmission {
    &__wrapper {
      display: flex;
      justify-content: center;

      @include media-breakpoint-down(sm) {
        padding: 100px 0;
      }

      @include media-breakpoint-between(sm, lg) {
        padding: 152px 0;
      }

      @include media-breakpoint-up(lg) {
        padding: 252px 0;
      }
    }
    &__text {
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: 24px;
        line-height: 36px;
        width: 100%;
      }

      @include media-breakpoint-up(md) {
        font-size: 40px;
        line-height: 60px;
        width: 70%;
      }
    }

    &__img-wrapper {
      width: 100%;
      position: relative;
      overflow: hidden;
      border-radius: 1000px;

      @include media-breakpoint-down(lg) {
        height: 700px;
      }

      @include media-breakpoint-up(lg) {
        height: 1080px;
      }
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      object-fit: cover;
      left: 0;
    }
  }
</style>
