<script>
  import imageUrl from '../js/imageUrlBuilder'

  export let openModal, data
</script>

{#if data}
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__content">
          <div class="footer__socials-nav">
            {#each data.socailItems as socialItem}
              <a href={socialItem.link} class="footer__socials-nav-item">
                <img src={imageUrl(socialItem.socialIcon)} alt="social image" />
              </a>
            {/each}
          </div>
          <div class="footer__text">{data.textFooter}</div>
          <button class="footer__btn" on:click={openModal}>Contact us</button>
          <div class="footer__copyright">
            <span>© 2023 Codedot Agency.</span>
            <span>All Rights Reserved — <a href="/" class="link">Privacy policy</a></span>
          </div>
        </div>
        <div class="footer__right-side">
          <div class="footer__right-side-backgorund">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={imageUrl(data.imageAside)} alt="image" />
          </div>
          <div class="footer__blur-box">
            <div class="footer__blur-box-text">
              {data.email}
            </div>
            <a href="#" class="arrow footer__blur-box-arrow" />
          </div>
        </div>
      </div>
    </div>
  </footer>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .footer {
    @include media-breakpoint-down(lg) {
      padding-top: 100px;
      padding-bottom: 40px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 112px;
      padding-bottom: 112px;
    }

    &__wrapper {
      display: grid;

      @include media-breakpoint-down(xl) {
        grid-template-columns: 1fr;
      }

      @include media-breakpoint-up(xl) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__btn {
      border-radius: 40px;
      background: #006185;
      border: none;
      outline: none;
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

      @include media-breakpoint-down(lg) {
        margin-bottom: 60px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 100px;
      }
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

      font-style: normal;
      font-weight: 400;

      @include media-breakpoint-down(xl) {
        margin-top: 60px;
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
      }

      @include media-breakpoint-down(lg) {
        font-size: 12px;
        line-height: 18px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(xl) {
        margin-top: 100px;
      }

      .link {
        text-decoration: underline;
      }
    }

    &__right-side {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border-radius: 40px;
      width: 100%;
      overflow: hidden;

      @include media-breakpoint-down(xl) {
        min-height: 300px;
      }

      @include media-breakpoint-up(xl) {
        min-height: 600px;
        transform: translateY(-12px);
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
        border-radius: 40px;
        width: calc(100% - 80px);
        padding: 42px 40px;
      }
    }

    &__blur-box-text {
      color: #006185;

      @include media-breakpoint-down(lg) {
        font-size: 16px;
        line-height: 24px;
        margin-right: 20px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 32px;
        line-height: 48px;
      }

      @include media-breakpoint-up(xxl) {
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

    .arrow {
      @include media-breakpoint-down(lg) {
        width: 30px;
        height: 30px;
      }

      @include media-breakpoint-between(lg, xl) {
        width: 45px;
        height: 45px;
      }

      @include media-breakpoint-up(xl) {
        width: 75px;
        height: 75px;
      }

      transform: rotate(-45deg);
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9002 12L4.5 12" stroke="%23006185" stroke-linecap="square"/><path d="M13.4502 5.97541L19.5002 11.9994L13.4502 18.0244" stroke="%23006185" stroke-linecap="square"/></svg>');
    }
  }
</style>
