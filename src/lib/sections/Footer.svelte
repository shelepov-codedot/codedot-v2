<script>
  import Arrow from "../components/icons/arrow.svelte";


  console.log("footer");
</script>

<section class="footer">
  <div class="container">
    <div class="footer__wrapper">
      <div class="footer__content">
        <div class="footer__socials-nav">
          <a href='/' class="footer__socials-nav-item">
            <img src="../icons/Facebook.png" alt="social image" />
          </a>
          <a href='/' class="footer__socials-nav-item">
            <img src="../icons/Twitter.png" alt="social image" />
          </a>
          <a href='/' class="footer__socials-nav-item">
            <img src="../icons/Instagram.png" alt="social image" />
          </a>
          <a href='/' class="footer__socials-nav-item">
            <img src="../icons/LinkedIn.png" alt="social image" />
          </a>
        </div>
        <div class="footer__text">Want to work with us?</div>
        <div class="footer__btn">Contact us</div>
        <div class="footer__copyright">
          <span>© 2023 Codedot Agency.</span>
          <span>All Rights Reserved — <a href='/' class="link">Privacy policy</a></span>
        </div>
      </div>
      <div class="footer__right-side">
        <div class="footer__right-side-backgorund">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img src="../images/footer.png" alt="image" />
        </div>
        <div class="footer__blur-box">
          <div class="footer__blur-box-text">
            <span class="bold">welcome</span>@code.dot
          </div>

          <!-- <Arrow width={100} height={3}/> -->
          <div class="arrow footer__blur-box-arrow" />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../styles/base/mixins.scss";

  .footer {
    padding: 100px 0;

    &__wrapper {
      display: grid;

      @include media-breakpoint-down(xl) {
        grid-template-columns: 1fr;
      }

      @include media-breakpoint-up(xl) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;

      @include media-breakpoint-up(xl) {
        margin-right: 40px;
      }
    }

    &__btn {
      border-radius: 40px;
      background: #006185;

      text-align: center;
      width: fit-content;
      color: #fff;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;

      @include media-breakpoint-down(lg) {
        padding: 12px 70px;
      }

      @include media-breakpoint-up(lg) {
        padding: 18px 70px;
      }
    }

    &__socials-nav {
      display: flex;
      align-items: center;
      margin-bottom: 100px;
    }

    &__socials-nav-item {
      width: 30px;
      height: 30px;

      &:not(:last-child) {
        @include media-breakpoint-down(lg) {
          margin-right: 40px;
        }

        @include media-breakpoint-up(lg) {
          margin-right: 60px;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__text {
      color: #212121;
      text-align: center;
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        line-height: 48px;
        max-width: 330px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 65px;
        line-height: 78px;
        max-width: 430px;
      }

      @include media-breakpoint-down(xl) {
        margin-bottom: 20px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 90px;
        line-height: 108px;
        margin-bottom: 40px;
        max-width: 600px;
      }
    }

    &__copyright {
      color: #838383;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;

      @include media-breakpoint-down(xl) {
        margin-top: 60px;
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
      }

      @include media-breakpoint-up(xl) {
        margin-top: 100px;
      }

      .link {
        text-decoration: underline;
      }
    }

    &__right-side {
      position: relative;
      border-radius: 40px;
      width: 100%;
      overflow: hidden;

      @include media-breakpoint-down(xl) {
        min-height: 300px;
      }

      @include media-breakpoint-up(xl) {
        min-height: 600px;
      }
    }

    &__right-side-backgorund {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__blur-box {
      position: absolute;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(25px);
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include media-breakpoint-down(xl) {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 30px;
        padding: 20px;
      }
      @include media-breakpoint-up(xl) {
        bottom: 40px;
        border-radius: 40px;
        left: 40px;
        width: calc(100% - 80px);
        padding: 42px 40px;
      }
    }

    &__blur-box-text {
      color: #006185;

      @include media-breakpoint-down(xl) {
        font-size: 16px;
        line-height: 24px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 48px;
        line-height: 72px;
      }

      &:not(.bold) {
        font-weight: 400;
      }

      .bold {
        font-weight: 600;
      }
    }

    &__blur-box-arrow {
    }
  }
</style>
