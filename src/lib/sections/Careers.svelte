<script>
  export let data
</script>

{#if data}
  <section class="careers">
    <div class="careers__inner">
      <div class="container">
        <div class="careers__wrapper">
          <h1 class="careers__title">{data.careersTitle}</h1>
          <p class="careers__text">
            {data.careersText}
          </p>
        </div>
      </div>
    </div>
    <div class="careers__img-wrapper">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 838"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="animated-path"
          d="M-156.5 529.986C-89.4765 425.13 597.36 245.742 628.5 349.986C733.5 701.486 745.036 967.797 641.5 768.986C537.964 570.176 -82.614 706.309 242 566.5C566.614 426.691 797.402 59.914 1075 302.014C1352.6 544.113 893.524 817.406 1034 566.5C1214 245 1308.18 149.562 1538.5 230C2061 412.477 1463.06 690.443 1622.62 427.5C1782.17 164.557 1211 -147.5 1931 79.5"
          stroke="black"
        />
      </svg>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .careers {
    position: relative;

    @include media-breakpoint-down(lg) {
      margin-top: 9px;
    }

    &__title {
      font-weight: 600;
      text-transform: uppercase;
      @include media-breakpoint-down(md) {
        font-size: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 105px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 210px;
      }
    }

    &__img-wrapper {
      width: 100%;
      position: relative;

      @include media-breakpoint-down(sm) {
        padding: 81px 0 125px 0;
      }

      @include media-breakpoint-between(sm, md) {
        padding: 20px 0 100px 0;
      }

      @include media-breakpoint-between(md, xl) {
        height: 600px;
      }

      @include media-breakpoint-up(md) {
        padding-top: 80px;
      }
    }
    &__img {
      width: 100%;
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      position: relative;
      width: 100%;
      height: 100%;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__inner {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      @include media-breakpoint-up(md) {
        padding-top: 15px;
      }
    }

    &__text {
      @include media-breakpoint-up(md) {
        align-self: flex-end;
        width: 380px;
      }

      @include media-breakpoint-down(md) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-between(md, xl) {
        font-size: 16px;
        line-height: 24px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 18px;
        line-height: 27px;
      }

      @include media-breakpoint-up(xxl) {
        padding-bottom: 45px;
      }
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  #animated-path {
    stroke-dasharray: 15000;
    stroke-dashoffset: 15000;
    animation: draw 4s ease-in-out forwards;
  }
</style>
