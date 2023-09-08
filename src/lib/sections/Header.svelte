<script>
  import { onMount } from 'svelte'

  let active, curWidth
  let body

  const openMenu = () => {
    active = !active
    body = document.querySelector('body')

    active ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto')
  }

  onMount(() => {
    curWidth = window.innerWidth

    window.addEventListener('resize', () => {
      curWidth = window.innerWidth

      if (curWidth >= 1280 && active) {
        active = !active
      }
    })
  })
</script>

<!-- svelte-ignore security-anchor-rel-noreferrer -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
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

    <div class="header__mobile-btn-wrapper" on:click={openMenu}>
      <div class="header__mobile-btn" />
    </div>
  </div>
  {#if curWidth < 1280}
    <div class={active ? 'header__content header__content--active' : 'header__content'}>
      <span class="header__cross" on:click={openMenu}>
        <span class="header__cross-btn" />
      </span>
      <a target="_blank" href="https://shopify.com/" class="header__shopify">
        <div class="header__shopify-logo">
          <img src="../icons/shopify.svg" alt="shopify img" />
        </div>
        <div class="header__shopify-text">Shopify dev</div>
      </a>
      <div class="header__nav">
        <a href="/" class="header__nav-item">Cases</a>
        <div class="header__nav-item dropdown">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
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
    <div
      class={active ? 'header__background header__background--active' : 'header__background'}
      on:click={openMenu}
    />
  {/if}
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .header {
    position: sticky;
    top: 0;
    margin: 0 auto;
    z-index: 12;
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

    &__background {
      position: fixed;
      background-color: #21212157;
      height: 100%;
      width: 100%;
      transition: 0.3s ease-in-out;
      top: 0;
      opacity: 0;
      left: 0;
      visibility: hidden;
      pointer-events: none;

      &--active {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
      }
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

    &__cross {
      position: absolute;
      top: 36px;
      right: 20px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    &__cross-btn {
      position: relative;
      width: 20px;
      height: 2px;
      background-color: black;
      transform: rotate(45deg);

      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: inherit;
        transform: rotate(90deg);
      }
    }

    &__content {
      display: flex;
      border-radius: 20px 0px 0px 20px;

      @include media-breakpoint-down(xl) {
        width: 230px;
        background-color: rgb(218 244 254);
        top: 0px;
        right: -100%;
        z-index: 10;
        position: fixed;
        flex-direction: column;
        align-items: flex-start;
        transition: 0.5s ease-in-out;
        overflow: auto;
        height: 100%;
        padding-top: 80px;
        padding-left: 30px;
        padding-right: 20px;
        padding-bottom: 40px;

        &--active {
          right: 0px;
        }
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

      z-index: 2;

      @include media-breakpoint-down(xl) {
        width: 100%;
        padding: 5px 0;
      }

      @include media-breakpoint-up(xl) {
        padding: 20px 0;
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
      @include media-breakpoint-down(xl) {
        display: none;
      }
      @include media-breakpoint-up(xl) {
        opacity: 1;
        visibility: visible;
        padding-top: 107%;
        transform: translateY(-50%);
        position: absolute;
        top: 0;
        left: 0;
        width: auto;
        z-index: 5;
        transition: 0.5s;
      }
    }

    &__nav-dropdown-content-wrapper {
      @include media-breakpoint-down(xl) {
        background-color: white;
      }
      @include media-breakpoint-up(xl) {
        border-radius: 40px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(25px);
        padding: 20px;
      }
    }

    &__nav-dropdown-content-list {
      @include media-breakpoint-down(xl) {
        display: flex;
        flex-direction: column;
      }
      @include media-breakpoint-up(xl) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 40px;
      }

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
      @include media-breakpoint-down(xl) {
        display: none;
      }

      @include media-breakpoint-up(xl) {
        transform: rotate(270deg);
        margin-top: 5px;
        margin-left: 8px;
        position: relative;
        width: 7px;
        height: 6px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        color: #212121;
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

      @include media-breakpoint-down(xl) {
        margin-top: 50px;
      }

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

    &__mobile-btn-wrapper {
      @include media-breakpoint-down(xl) {
        display: flex;
        cursor: pointer;
        width: 20px;
        height: 20px;
        align-items: center;
        justify-content: center;
      }
      @include media-breakpoint-up(xl) {
        display: none;
      }
    }
  }
</style>
