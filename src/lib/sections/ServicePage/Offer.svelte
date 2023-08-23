<script></script>

<section class="offer">
  <div class="container">
    <div class="offer__wrapper">
      <h2 class="offer__title">Ready to offer you our services</h2>
      <div class="offer__items">
        <div class="offer__item">
          <p class="offer__name">MVP Development</p>
          <p class="offer__text">
            By creating stable and flexible code, we work faster, trying to make your full-fledged
            product high-quality when developing MVP. We will work on your product from idea to
            support.
          </p>
        </div>
        <div class="offer__item">
          <p class="offer__name">MVP Improvement</p>
          <p class="offer__text">
            We collect all the necessary information and use it immediately after the first launch
            of your MVP solution, then we use an improvement strategy. This is necessary in order to
            make all the changes qualitatively and make the product as adaptive to the market as
            possible.
          </p>
        </div>
        <div class="offer__item">
          <p class="offer__name">Market Analysis</p>
          <p class="offer__text">
            We use qualitative and quantitative methods to assess market needs, conduct competitor
            research and SWOT analysis, and provide you with reports and strategic ideas.
          </p>
        </div>
        <div class="offer__item">
          <p class="offer__name">MVP Consulting</p>
          <p class="offer__text">
            One of the fundamentals of MVP functionality is to choose the most profitable technology
            stack for MVP software development. We will advise you on your project and provide all
            the information.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .offer {
    &__title {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 105px;
      }

      margin-bottom: 50px;

      @include media-breakpoint-up(lg) {
        width: 940px;
      }
    }

    &__items {
      display: grid;

      @include media-breakpoint-down(md) {
        gap: 40px;
      }

      @include media-breakpoint-between(md, xl) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      @include media-breakpoint-up(xl) {
        gap: 40px;
        grid-template-columns: repeat(4, 1fr);
      }
    }

    &__item {
      border-radius: 40px;
      background-color: #fafafa;

      @include media-breakpoint-down(md) {
        padding: 20px;
      }

      @include media-breakpoint-up(md) {
        padding: 40px;
      }
    }

    &__name {
      font-weight: 700;
      margin-bottom: 40px;

      @include media-breakpoint-down(lg) {
        font-size: 24px;
      }

      @include media-breakpoint-between(lg, xxl) {
        font-size: 28px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 40px;
      }
    }

    &__text {
      color: #838383;

      @include media-breakpoint-down(lg) {
        font-size: 14px;
      }

      @include media-breakpoint-between(lg, xxl) {
        font-size: 16px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 18px;
      }
    }
  }
</style>
