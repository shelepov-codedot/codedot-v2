<script></script>

<section class="hero">
  <div class="hero__background">
    <div class="hero__background-img-wrapper">
      <img src="../images/hero_back.png" alt="hero__background" class="hero__background-img" />
    </div>
  </div>
  <div class="hero__wrapper">
    <div class="container">
      <div class="hero__mobile-wrapper">
        <div class="hero__description-wrapper">
          <div class="hero__description">
            <p class="hero__text">
              Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana. Ponas hörade
              sonde psykocentrism tar och nack. Rähak begeheten ultrasad fena, tiras.
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
              Y
              <span class="hero__letter"><img src="../images/big_o.svg" alt="" /> </span>
              ur business
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
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .hero {
    
    height: 100%;
    
    &__mobile-wrapper {
      @include media-breakpoint-up(xl) {
        display: contents;
      }

      @include media-breakpoint-down(xl){
        display: flex;
        flex-direction: column;
      }
    }

    &__background {
      position: absolute;
      width: 100%;
      height: 1080px;
      top: 0;
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
      padding-top: 80px;
      padding-left: 80px;
      padding-right: 80px;
      padding-bottom: 63px;
      margin: 0 60px;
      backdrop-filter: blur(10px);
    }

    &__description-wrapper {
      @include media-breakpoint-down(xl) {
        display: contents;
      }

      @include media-breakpoint-up(xl) {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }

    &__description {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(xl){
        order:0;
      }
    }

    &__tag-wrapper {
      display: flex;
      margin-top: 40px;
    }

    &__tag {
      text-transform: uppercase;
      padding: 8px 20px;
      border: 1px solid black;
      border-radius: 40px;
    }

    &__tag:not(&__tag:last-of-type) {
      margin-right: 20px;
    }

    &__tag-name {
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &__img-wrapper {
      position: relative;
      border-radius: 40px;
      height: 328px;
      width: 100%;
      max-width: 800px;
      overflow: hidden;

      @include media-breakpoint-down(xl){
        order:2;
      }
    }

    &__text {
      width: 400px;
      font-size: 18px;
      line-height: 27px;
    }

    &__tagline-wrapper {
      margin-top: 55px;
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(xl){
        order: 1;
      }
    }

    &__tagline {
      display: flex;
      font-size: 105px;
      align-items: center;
      font-weight: 600;
      text-transform: uppercase;
    }

    &__tagline:nth-of-type(even) {
      color: #006185;
    }

    &__tagline:nth-child(odd) {
      filter: blur(5px);
    }

    &__letter {
      width: 257px;
    }

    &__discuss-wrapper {
      @include media-breakpoint-down(xl) {
        display: contents;
      }

      @include media-breakpoint-up(xl) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__discuss-inner {
      display: flex;
      flex-direction: column;
      align-items: end;

      @include media-breakpoint-down(xl){
        order: 3;
      }
    }

    &__discuss-text {
      font-size: 24px;
      line-height: 36px;
      text-align: end;
      padding-bottom: 20px;
    }
  }
</style>
