<script></script>

<section class="counters">
  <div class="container">
    <div class="counters__wrapper">
      <div class="counters__items">
        <div class="counters__item">
          <span class="counters__number">100+</span>
          <div class="counters__text">orders</div>
        </div>
        <div class="counters__item">
          <span class="counters__number">80+</span>
          <div class="counters__text">ready orders</div>
        </div>
        <div class="counters__item">
          <span class="counters__number">100+</span>
          <div class="counters__text">happy clients</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';
  .counters {
    background-color: #e9f6fb;
    border-radius: 40px;

    &__wrapper {
      @include media-breakpoint-down(lg) {
        padding-top: 77px;
        padding-bottom: 100px;
      }

      @include media-breakpoint-up(lg) {
        padding-top: 80px;
        padding-bottom: 104px;
      }
    }

    &__items {
      display: flex;
      justify-content: space-around;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include media-breakpoint-up(xxl) {
        &:nth-child(2) {
          padding-left: 245px;
          padding-right: 245px;
        }
      }

      @include media-breakpoint-down(md) {
        &:not(&:last-of-type) {
          margin-bottom: 77px;
        }
      }
    }

    &__number {
      font-weight: 800;

      @include media-breakpoint-down(md) {
        font-size: 80px;
        line-height: 100px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
        line-height: 85px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 105px;
        line-height: 150px;
      }
    }

    &__text {
      @include media-breakpoint-down(md) {
        font-size: 24px;
        line-height: 36px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 24px;
        line-height: 40px;
      }

      @include media-breakpoint-up(lg) {
        transform: translateY(-10px);
        font-size: 32px;
        line-height: 48px;
      }
    }
  }
</style>
