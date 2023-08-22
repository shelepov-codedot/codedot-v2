<script>
</script>

<section class="jobs">
  <div class="container">
    <div class="jobs__wrapper">
      <h2 class="jobs__title">Current job openings</h2>
      <div class="jobs__search-wrapper">
        <input type="text" class="jobs__search" placeholder="Find your role..." />
        <button class="jobs__search-btn"><img src="../icons/Search.svg" alt="" /></button>
      </div>
      <div class="jobs__items">
        <div class="jobs__item">
          <div class="jobs__name-wrapper">
            <span class="jobs__exp">2+ Years Experiens</span>
            <p class="jobs__name">Front-end developer</p>
          </div>
          <div class="jobs__requirements">
            <span class="jobs__requirements-text">English B1+; Office work</span>
            <a href="#" class="jobs__btn">
              <img src="../icons/arrow-btn.svg" alt="" class="jobs__icon" />
            </a>
          </div>
        </div>
        <div class="jobs__item">
          <div class="jobs__name-wrapper">
            <span class="jobs__exp">2+ Years Experiens</span>
            <p class="jobs__name">Back-end developer</p>
          </div>
          <div class="jobs__requirements">
            <span class="jobs__requirements-text">English B1+; Office work</span>
            <a href="#" class="jobs__btn">
              <img src="../icons/arrow-btn.svg" alt="" class="jobs__icon" />
            </a>
          </div>
        </div>
        <div class="jobs__item">
          <div class="jobs__name-wrapper">
            <span class="jobs__exp">2+ Years Experiens</span>
            <p class="jobs__name">Senior Fullstack Developer</p>
          </div>
          <div class="jobs__requirements">
            <span class="jobs__requirements-text">English B1+; Office work</span>
            <a href="#" class="jobs__btn">
              <img src="../icons/arrow-btn.svg" alt="" class="jobs__icon" />
            </a>
          </div>
        </div>
        <div class="jobs__item">
          <div class="jobs__name-wrapper">
            <span class="jobs__exp">2+ Years Experiens</span>
            <p class="jobs__name">Senior Node.js Developer</p>
          </div>
          <div class="jobs__requirements">
            <span class="jobs__requirements-text">English B1+; Office work</span>
            <a href="#" class="jobs__btn">
              <img src="../icons/arrow-btn.svg" alt="" class="jobs__icon" />
            </a>
          </div>
        </div>
        <div class="jobs__item">
          <div class="jobs__name-wrapper">
            <span class="jobs__exp">2+ Years Experiens</span>
            <p class="jobs__name">Junior Node.js Developer</p>
          </div>
          <div class="jobs__requirements">
            <span class="jobs__requirements-text">English B1+; Office work</span>
            <a href="#" class="jobs__btn">
              <img src="../icons/arrow-btn.svg" alt="" class="jobs__icon" />
            </a>
          </div>
        </div>
        <div class="jobs__item">
          <div class="jobs__cannot-wrapper">
            <p class="jobs__cannot">CANNOT FIND A SUITABLE VACANCY? DROP US A LINE</p>
            <a href="#" class="jobs__cannot-link">welcome@code.dot</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .jobs {
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
    }

    &__search-wrapper {
      margin-top: 80px;
      margin-bottom: 40px;
      position: relative;
      display: flex;
      align-items: center;
      width: 582px;
    }

    &__cannot-wrapper {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__cannot-link {
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 40px;
      background-color: black;
      color: white;
      padding: 6px 50px 6px 20px;
      font-family: Wix Madefor Display;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;

      &::after {
        position: absolute;
        background-image: url('../icons/arrow-btn.svg');
        content: '';
        width: 21px;
        height: 21px;
        transform: rotate(-45deg);
        right: 20px;
      }
    }

    &__cannot {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 40px;
    }

    &__search {
      width: 100%;
      padding: 15px 57px 15px 25px;
      border-radius: 40px;
      border: 1px solid #838383;
    }

    &__exp {
      padding: 6px 20px 6px 20px;
      color: white;
      background-color: black;
      border-radius: 40px;
      font-size: 14px;
    }

    &__search-btn {
      position: absolute;
      right: 15px;
      background-color: transparent;
      border: none;
    }

    &__icon {
      filter: brightness(0);
      width: 48px;
      height: 48px;
      transform: rotate(-45deg);
    }

    &__requirements {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__items {
      display: grid;
      gap: 40px;

      @include media-breakpoint-up(lg) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fafafa;
      border-radius: 40px;
      height: 320px;
      padding: 40px;
    }

    &__name {
      font-weight: 700;
      padding-top: 20px;

      @include media-breakpoint-between(lg, xl) {
        font-size: 32px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 40px;
      }
    }

    &__requirements-text {
      font-size: 18px;
      color: #838383;
    }
  }
</style>
