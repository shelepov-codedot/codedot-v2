<!-- svelte-ignore security-anchor-rel-noreferrer -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
  import imageUrl from '../js/imageUrlBuilder'
  import { onMount, afterUpdate } from 'svelte'
  let active, curWidth, body, dropdown

  const openMenu = () => {
    active = !active
    body = document.querySelector('body')

    active ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto')
  }

  const showDropdown = (element) => {
    element.style.visibility = 'visible'
    element.style.top = '70px'

    element.addEventListener('mouseleave', () => {
      element.style.top = '-500px'
      element.style.visibility = 'hidden'
    })
  }

  afterUpdate(() => {
    body = document.querySelector('body')
    body.style.overflow = 'auto'

    const links = document.querySelectorAll('a[href]')
    console.log(links)
    links.forEach((a) => {
      a.addEventListener('click', (event) => {
        event.target.preventDefault
      })
    })
  })

  onMount(() => {
    curWidth = window.innerWidth

    if (curWidth >= 1280 && active) {
      active = !active
    }
    window.addEventListener('resize', () => {
      curWidth = window.innerWidth

      if (curWidth >= 1280 && active) {
        active = !active
      }
    })
  })

  export let data, openModal, activeModal
</script>

{#if data}
  <header class="header">
    {#each data.navItems as navItem}
      {#if navItem.navSubItems}
        <div class="header__nav-dropdown-content" bind:this={dropdown}>
          <div class="header__nav-dropdown-content-wrapper">
            <div class="header__nav-dropdown-content-list">
              {#each navItem.navSubItems as navSubItem}
                <a href={navSubItem.navSubItemLink} class="header__nav-item">
                  {navSubItem.navSubItemName}
                </a>
              {/each}
            </div>
            <div class="header__nav-dropdown-link">
              <a href="/services" class="header__nav-link">
                All {navItem.navItemName.toLowerCase()}
              </a>
              <span class="arrow" />
            </div>
          </div>
          <div class="header__nav-dropdown-content-blur" />
        </div>
      {/if}
    {/each}
    <div class="header__wrapper">
      <a href="/">
        <div class="header__logo">
          <img src={imageUrl(data.logoHeader)} alt="logo img" />
        </div>
      </a>
      {#if curWidth >= 1280}
        <div class="header__content">
          <a target="_blank" href={data.shopifyItem.shopifyLink} class="header__shopify">
            <div class="header__shopify-logo">
              <img src={imageUrl(data.shopifyItem.shopifyIcon)} alt="shopify img" />
            </div>
            <div class="header__shopify-text">{data.shopifyItem.shopifyText}</div>
          </a>
          <div class="header__nav">
            {#each data.navItems as navItem}
              {#if !navItem.navSubItems}
                <a href={navItem.navItemLink} class="header__nav-item">{navItem.navItemName}</a>
              {/if}
              {#if navItem.navSubItems}
                <a
                  href="/services"
                  class="header__nav-item dropdown"
                  on:mouseenter={showDropdown(dropdown)}
                >
                  <p>{navItem.navItemName}</p>
                  <div class="header__nav-item-icon" />
                </a>
              {/if}
            {/each}
          </div>
          <div class="header__btn" on:click={openModal(activeModal)}>
            {data.button.buttonText} <span class="header__btn-icon" />
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
        <a target="_blank" href={data.shopifyItem.shopifyLink} class="header__shopify">
          <div class="header__shopify-logo">
            <img src={imageUrl(data.shopifyItem.shopifyIcon)} alt="shopify img" />
          </div>
          <div class="header__shopify-text">{data.shopifyItem.shopifyText}</div>
        </a>
        <div class="header__nav">
          {#each data.navItems as navItem}
            {#if !navItem.navSubItems}
              <a href={navItem.navItemLink} class="header__nav-item">{navItem.navItemName}</a>
            {/if}
            {#if navItem.navSubItems}
              <a href="/services" class="header__nav-item dropdown">
                <p>{navItem.navItemName}</p>
                <div class="header__nav-item-icon" />
              </a>
            {/if}
          {/each}
        </div>
        <div class="header__btn" on:click={openModal(activeModal)}>
          {data.button.buttonText} <span class="header__btn-icon" />
        </div>
      </div>
      <div
        class={active ? 'header__background header__background--active' : 'header__background'}
        on:click={openMenu}
      />
    {/if}
  </header>
{/if}

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

    @include media-breakpoint-down(xl) {
      overflow: hidden;
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
      right: 37px;
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
      border-radius: 20px 0px 0px 20px;
      display: flex;

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
        display: flex;
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
              transform: translate(-43%, 5%);
            }
          }
        }

        &:not(&:hover) {
          .header__nav-dropdown-content {
            @include media-breakpoint-up(xl) {
              visibility: hidden;
              opacity: 0;
              pointer-events: none;
              transform: translate(-43%, -50%);
            }
          }
        }

        @include media-breakpoint-down(xl) {
          justify-content: space-between;
        }
      }
    }

    &__nav-link {
      color: black;
      text-decoration: underline;
    }

    &__nav-dropdown-content {
      @include media-breakpoint-down(xl) {
        display: none;
      }
      @include media-breakpoint-up(xl) {
        opacity: 1;
        visibility: hidden;
        pointer-events: all;
        padding-top: 45px;
        position: absolute;
        top: -500px;
        right: 0;
        width: auto;
        z-index: 15;
        transition: 0.5s;
      }
    }

    &__nav-dropdown-content-wrapper {
      @include media-breakpoint-down(xl) {
        background-color: white;
      }

      @include media-breakpoint-up(xl) {
        border-radius: 40px;
        border: 1px solid #ffffff80;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
          linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
        padding: 20px;
        backdrop-filter: blur(10px);
      }
    }

    &__nav-dropdown-content-list {
      position: relative;
      z-index: 20;
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
      position: relative;
      z-index: 20;

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
