<section class="hero">
  <div class="hero__background">
    <div class="hero__background-img-wrapper">
      <img src="../images/hero_back.png" alt="hero__background" class="hero__background-img" />
    </div>
  </div>
  <div class="hero__wrapper">
    <div class="hero__mobile-wrapper">
      <div class="hero__description-wrapper">
        <div class="hero__description">
          <p class="hero__text">
            Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana. Ponas hörade sonde
            psykocentrism tar och nack. Rähak begeheten ultrasad fena, tiras.
          </p>
          <div class="hero__tag-wrapper">
            <div class="hero__tag">
              <div class="hero__tag-name">Web development</div>
            </div>
            <div class="hero__tag">
              <div class="hero__tag-name">JAMStack</div>
            </div>
            <div class="hero__tag">
              <div class="hero__tag-name">eCommerce</div>
            </div>
          </div>
        </div>
        <div class="hero__img-wrapper">
          <img src="../images/hero_image.png" alt="" class="hero__img" />
        </div>
      </div>
      <div class="hero__discuss-wrapper">
        <div class="hero__tagline-wrapper">
          <p class="hero__tagline">We will take</p>
          <p class="hero__tagline">
            <span class="hero__word">
              Y<span class="hero__letter"
                ><img src="../images/big_o.svg" alt="" class="hero__letter-img" /></span
              >
              ur &nbsp;
            </span>
            business
          </p>
          <p class="hero__tagline">To the next level</p>
        </div>
        <div class="hero__discuss-inner">
          <p class="hero__discuss-text">Creative Design and <br />Development Agency.</p>
          <a href="#" class="btn"
            >Discuss the project <span class="btn__icon"
              ><img src="../icons/arrow-btn.svg" alt="" /></span
            ></a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .hero {
    height: 100%;
    position: relative;

    @include media-breakpoint-down(xl) {
      padding-bottom: 40px;
    }

    @include media-breakpoint-up(xl) {
      padding-bottom: 60px;
    }
    &__mobile-wrapper {
      @include media-breakpoint-up(lg) {
        display: contents;
      }

      @include media-breakpoint-down(lg) {
        display: flex;
        flex-direction: column;
      }
    }

    &__background {
      position: absolute;
      width: 100%;
      height: calc(100% + 106px);
      top: -106px;
      left: 0;
    }

    &__background-img-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      user-select: none;
    }

    &__background-img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      user-select: none;
      object-fit: cover;
      left: 0;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      border: 1px solid #fff;
      border-radius: 40px;

      backdrop-filter: blur(10px);

      @include media-breakpoint-down(md) {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      @include media-breakpoint-between(md, lg) {
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      @include media-breakpoint-down(lg) {
        margin-left: 20px;
        margin-right: 20px;
      }

      @include media-breakpoint-between(lg, xl) {
        padding-top: 40px;
        padding-bottom: 23px;
        padding-left: 60px;
        padding-right: 60px;
        margin-left: 40px;
        margin-right: 40px;
      }

      @include media-breakpoint-up(xl) {
        padding-top: 80px;
        padding-bottom: 63px;
        padding-left: 80px;
        padding-right: 80px;
        margin-left: 60px;
        margin-right: 60px;
      }
    }

    &__description-wrapper {
      @include media-breakpoint-down(lg) {
        display: contents;
      }

      @include media-breakpoint-up(lg) {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }

    &__description {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        order: 0;
      }

      @include media-breakpoint-up(lg) {
        margin-right: 20px;
      }
    }

    &__tag-wrapper {
      display: flex;
      flex-wrap: wrap;

      @include media-breakpoint-down(sm) {
        margin-top: 10px;
      }

      @include media-breakpoint-between(sm, lg) {
        margin-top: 20px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 40px;
      }
    }

    &__tag {
      text-transform: uppercase;
      padding: 8px 20px;
      border: 1px solid black;
      margin-bottom: 20px;
      border-radius: 40px;
      width: max-content;

      @include media-breakpoint-down(md) {
        margin-bottom: 10px;
      }

      @include media-breakpoint-up(md) {
        margin-bottom: 20px;
      }
    }

    &__tag:not(&__tag:last-of-type) {
      margin-right: 20px;
    }

    &__tag-name {
      font-weight: 600;

      @include media-breakpoint-down(sm) {
        font-size: 10px;
        line-height: 15px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 14px;
        line-height: 20px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 16px;
        line-height: 24px;
      }
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__img-wrapper {
      position: relative;
      border-radius: 40px;

      width: 100%;
      overflow: hidden;

      @include media-breakpoint-down(lg) {
        order: 2;
        height: 201px;
        margin-top: 40px;
        margin-bottom: 40px;
      }

      @include media-breakpoint-up(lg) {
        height: 328px;
      }

      @include media-breakpoint-between(xl, xxl) {
        max-width: 600px;
      }

      @include media-breakpoint-up(xxl) {
        max-width: 800px;
      }
    }

    &__text {
      @include media-breakpoint-down(sm) {
        font-size: 14px;

        line-height: 21px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 16px;
        line-height: 24px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 18px;
        line-height: 27px;
        width: 400px;
      }
    }

    &__tagline-wrapper {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        order: 1;
        margin-top: 25px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 55px;
      }
    }

    &__tagline {
      font-weight: 600;
      text-transform: uppercase;

      @include media-breakpoint-down(sm) {
        font-size: 30px;
      }

      @include media-breakpoint-between(sm, md) {
        font-size: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 105px;
      }
    }

    &__tagline:nth-of-type(even) {
      color: #006185;
      display: flex;
      flex-wrap: wrap;
    }

    &__tagline:nth-child(odd) {
      filter: blur(5px);
    }

    &__word {
      display: flex;
      align-items: center;
      width: max-content;
    }

    &__letter {
      position: relative;

      @include media-breakpoint-down(sm) {
        width: 70px;
        height: 38px;
      }

      @include media-breakpoint-between(sm, md) {
        width: 120px;
        height: 50px;
      }

      @include media-breakpoint-between(md, lg) {
        width: 150px;
        height: 75px;
      }

      @include media-breakpoint-between(lg, xl) {
        width: 200px;
        height: 101px;
      }

      @include media-breakpoint-up(xl) {
        width: 257px;
        height: 132px;
      }
    }

    &__letter-img {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &__discuss-wrapper {
      @include media-breakpoint-down(lg) {
        display: contents;
      }

      @include media-breakpoint-up(lg) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__discuss-inner {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        order: 3;
        align-items: start;
      }

      @include media-breakpoint-up(lg) {
        align-items: end;
      }
    }

    &__discuss-text {
      @include media-breakpoint-down(lg) {
        font-size: 18px;
        line-height: 27px;
        padding-bottom: 10px;
        text-align: start;
      }

      @include media-breakpoint-up(lg) {
        font-size: 24px;
        line-height: 36px;
        padding-bottom: 20px;
        text-align: end;
      }
    }
  }
</style>
