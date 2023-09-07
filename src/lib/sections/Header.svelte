<script>
  import { onMount } from 'svelte'

  let active, menu, curWidth

  const openMenu = () => {
    active = true
  }

  onMount(() => {
    curWidth = window.innerWidth

    window.addEventListener('resize', () => {
      curWidth = window.innerWidth
    })
  })
</script>

<section class="header">
  <div class="header__wrapper">
    <div class="header__logo">
      <img src="../icons/logo.svg" alt="logo img" />
    </div>
    {#if curWidth >= 1280}
      <div class="header__content">
        <a target="_blank" href="https://shopify.com/" class="header__shopify">
          <div class="header__shopify-logo">
            <img src="../icons/shopify.svg" alt="shopify img" />
          </div>
          <div class="header__shopify-text">Shopify dev</div>
        </a>
        <div class="header__nav">
          <a href="/" class="header__nav-item">Cases</a>
          <div class="header__nav-item dropdown">
            <p>Services</p>
            <div class="header__nav-item-icon" />
            <div class="header__nav-dropdown-content">
              <div class="header__nav-dropdown-content-wrapper">
                <div class="header__nav-dropdown-content-list">
                  <a href="/" class="header__nav-item">Web Development</a>
                  <a href="/" class="header__nav-item">E-Commerce</a>
                  <a href="/" class="header__nav-item">UI/UX design</a>
                  <a href="/" class="header__nav-item">Mobile Development</a>
                  <a href="/" class="header__nav-item"> Shopify/Shopify plus development </a>
                  <a href="/" class="header__nav-item">Jamstack</a>
                  <a href="/" class="header__nav-item">Cross-Platform development</a>
                  <a href="/" class="header__nav-item">Game development</a>
                  <a href="/" class="header__nav-item">Computer VisionDevelopment</a>
                  <a href="/" class="header__nav-item">Custom Software development</a>
                  <a href="/" class="header__nav-item">Project management</a>
                  <a href="/" class="header__nav-item">Startup and MVP Services</a>
                </div>
                <div class="header__nav-dropdown-link">
                  <p>All services</p>
                  <span class="arrow" />
                </div>
              </div>
            </div>
          </div>
          <a href="/" class="header__nav-item">About us</a>
          <a href="/" class="header__nav-item">Careers</a>
        </div>
        <div class="header__btn">
          Get in touch <span class="header__btn-icon" />
        </div>
      </div>
    {/if}
    {#if curWidth < 1280}
      {#if active}
        <div class="header__content">
          <a target="_blank" href="https://shopify.com/" class="header__shopify">
            <div class="header__shopify-logo">
              <img src="../icons/shopify.svg" alt="shopify img" />
            </div>
            <div class="header__shopify-text">Shopify dev</div>
          </a>
          <div class="header__nav">
            <a href="/" class="header__nav-item">Cases</a>
            <div class="header__nav-item dropdown">
              <p>Services</p>
              <div class="header__nav-item-icon" />
              <div class="header__nav-dropdown-content">
                <div class="header__nav-dropdown-content-wrapper">
                  <div class="header__nav-dropdown-content-list">
                    <a href="/" class="header__nav-item">Web Development</a>
                    <a href="/" class="header__nav-item">E-Commerce</a>
                    <a href="/" class="header__nav-item">UI/UX design</a>
                    <a href="/" class="header__nav-item">Mobile Development</a>
                    <a href="/" class="header__nav-item"> Shopify/Shopify plus development </a>
                    <a href="/" class="header__nav-item">Jamstack</a>
                    <a href="/" class="header__nav-item">Cross-Platform development</a>
                    <a href="/" class="header__nav-item">Game development</a>
                    <a href="/" class="header__nav-item">Computer VisionDevelopment</a>
                    <a href="/" class="header__nav-item">Custom Software development</a>
                    <a href="/" class="header__nav-item">Project management</a>
                    <a href="/" class="header__nav-item">Startup and MVP Services</a>
                  </div>
                  <div class="header__nav-dropdown-link">
                    <p>All services</p>
                    <span class="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <a href="/" class="header__nav-item">About us</a>
            <a href="/" class="header__nav-item">Careers</a>
          </div>
          <div class="header__btn">
            Get in touch <span class="header__btn-icon" />
          </div>
        </div>
      {/if}
    {/if}
    <div class="header__mobile-btn" on:click={openMenu} />
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .header {
    position: relative;
    margin: 0 auto;
    z-index: 5;
    padding-top: 20px;

    @include media-breakpoint-down(md) {
      margin-left: 20px;
      margin-right: 20px;
      padding-bottom: 16px;
    }

    @include media-breakpoint-up(md) {
      padding-bottom: 20px;
    }

    @include media-breakpoint-between(md, lg) {
      margin-left: 40px;
      margin-right: 40px;
    }

    @include media-breakpoint-down(lg) {
      margin-left: 20px;
      margin-right: 20px;
    }

    @include media-breakpoint-between(lg, xl) {
      margin-left: 40px;
      margin-right: 40px;
    }

    @include media-breakpoint-up(xl) {
      margin-left: 60px;
      margin-right: 60px;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 40px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      background: rgba(179, 223, 239, 0.3);
      backdrop-filter: blur(25px);

      @include media-breakpoint-down(xl) {
        padding: 20px;
      }

      @include media-breakpoint-up(xl) {
        padding: 6px 80px;
      }
    }

    &__logo {
      @include media-breakpoint-down(xl) {
        width: 100px;
        height: 22px;
      }

      @include media-breakpoint-up(xl) {
        width: 173px;
        height: 38px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__content {
      display: flex;
      border-radius: 0 20px 20px 0;
      @include media-breakpoint-down(xl) {
        width: 280px;
        background-color: rgb(218 244 254);
        top: -21px;
        left: -41px;
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        height: 100vh;
        padding-top: 40px;
        padding-left: 50px;
        padding-right: 20px;
        padding-bottom: 40px;
      }

      @include media-breakpoint-up(xl) {
        align-items: center;
      }
    }

    &__shopify {
      display: flex;
      align-items: center;
      cursor: pointer;

      @include media-breakpoint-up(xl) {
        margin-right: 60px;
        padding: 20px;
      }
    }

    &__shopify-logo {
      width: 15px;
      height: 15px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__shopify-text {
      margin-left: 7px;
      color: #212121;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    }

    &__nav {
      display: flex;
      align-items: center;

      .header__nav-item:not(:last-child) {
        @include media-breakpoint-up(xl) {
          margin-right: 40px;
        }
      }

      @include media-breakpoint-down(xl) {
        width: 100%;
        padding-top: 40px;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }

    &__nav-item {
      position: relative;
      color: #212121;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      cursor: pointer;
      padding: 20px 0;
      z-index: 2;

      @include media-breakpoint-down(xl) {
        width: 100%;
      }

      &.dropdown {
        display: flex;
        align-items: center;
        z-index: 1;

        &:hover {
          .header__nav-dropdown-content {
            @include media-breakpoint-up(xl) {
              visibility: visible;
              opacity: 1;
              transform: translate(-37%, 0%);
            }
          }
        }

        &:not(&:hover) {
          .header__nav-dropdown-content {
            @include media-breakpoint-up(xl) {
              visibility: hidden;
              opacity: 0;
              pointer-events: none;
              transform: translate(-37%, -50%);
            }
          }
        }

        @include media-breakpoint-down(xl) {
          justify-content: space-between;
        }
      }
    }

    &__nav-dropdown-content {
      position: absolute;
      top: 0;
      left: 0;
      width: auto;
      padding-top: 107%;
      z-index: 5;
      transition: 0.5s;

      @include media-breakpoint-down(xl) {
        opacity: 1;
        visibility: visible;
        transform: translateY(-50%);
      }
    }

    &__nav-dropdown-content-wrapper {
      border-radius: 40px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(25px);
      padding: 20px;

      @include media-breakpoint-down(xl) {
        display: none;
      }
    }

    &__nav-dropdown-content-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 40px;

      .header__nav-item {
        @include media-breakpoint-up(xl) {
          width: 261px;
        }
      }
    }

    &__nav-dropdown-link {
      display: flex;
      align-items: center;
      width: fit-content;

      p {
        text-decoration: underline;
      }

      .arrow {
        margin-left: 13px;
      }
    }

    &__nav-item-icon {
      position: relative;
      width: 7px;
      height: 6px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      color: #212121;

      @include media-breakpoint-down(xl) {
        transform: rotate(180deg);
      }

      @include media-breakpoint-up(xl) {
        transform: rotate(270deg);
        margin-top: 5px;
        margin-left: 8px;
      }
      &::after {
        content: '';
        content: '';
        width: 100%;
        height: 1px;
        background: #212121;
        transform: rotate(45deg) translate(1px, 0px);
      }

      &::before {
        content: '';
        width: 100%;
        height: 1px;
        background: #212121;
        transform: rotate(135deg) translate(-1px, 0px);
      }
    }

    &__btn {
      border-radius: 40px;
      border: 1px solid #006185;
      padding: 8px 30px;
      color: #006185;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      display: flex;
      align-items: center;
      cursor: pointer;

      @include media-breakpoint-up(xl) {
        margin-left: 60px;
      }
    }

    &__btn-icon {
      position: relative;
      width: 7px;
      height: 6px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      transform: rotate(180deg);
      margin-left: 8px;

      &::after {
        content: '';
        content: '';
        width: 100%;
        height: 1px;
        background: #006185;
        transform: rotate(45deg) translate(1px, 0px);
      }

      &::before {
        content: '';
        width: 100%;
        height: 1px;
        background: #006185;
        transform: rotate(135deg) translate(-1px, 0px);
      }
    }

    &__mobile-btn {
      width: 18px;
      height: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #006185;
      box-shadow: 0px -5px 0 0px #006185, 0px 5px 0 0px #006185;

      @include media-breakpoint-up(xl) {
        display: none;
      }
    }
  }
</style>
