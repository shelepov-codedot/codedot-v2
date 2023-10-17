<script>
  import { onMount } from 'svelte'

  export let data

  let showExpect

  const checkVisibility = () => {
    const elem = document.querySelector('.expect__img-wrapper')
    if (elem) {
      const rect = elem.getBoundingClientRect()
      const windowHeight = window.innerWidth
      showExpect = rect.top < windowHeight
    }
  }

  onMount(() => {
    window.addEventListener('scroll', checkVisibility)
  })
</script>

{#if data}
  <section class="expect">
    <div class="expect__img-wrapper">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1887 1245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {#if showExpect}
          <path
            id="animated-path"
            d="M-236.798 69.025C-106.109 -42.5686 106.122 -2.35044 290.826 89.3227C334.434 110.967 364.609 129.592 396.605 155.289C422.997 176.486 450.776 200.665 468.04 230.426C476.885 245.674 483.354 268.121 464.263 278.269C443.82 289.136 419.263 292.885 396.59 295.497C369.43 298.625 341.788 299.974 314.475 298.41C296.072 297.357 271.45 296.739 259.302 279.687C241.887 255.243 241.28 214.234 244.719 185.858C246.613 170.231 252.013 155.179 262.101 142.951C278.225 123.407 299.017 132.351 315.902 147.314C335.317 164.52 340.984 186.567 330.142 210.681C318.98 235.508 288.276 274.884 257.029 257.87C232.135 244.314 234.971 212.824 252.343 195.182C270.158 177.091 293.018 168.742 317.735 164.845C344.669 160.598 377.864 160.068 400.495 178.063C427.406 199.462 413.584 227.281 393.734 247.478C370.825 270.786 305.779 321.468 282.383 275.339C264.017 239.127 286.841 182.839 328.712 177.091C356.431 173.286 385.573 174.947 412.964 180.24C429.571 183.448 457.055 188.059 466.052 204.976C483.677 238.112 442.08 274.375 417.909 288.432C393.254 302.771 364.501 323.531 331.953 311.376C313.681 304.552 305.41 294.995 293.397 279.629C263.617 241.536 263.292 201.192 281.477 156.39C305.981 96.0239 456 111 456 111C456 111 895.8 131.056 935 195.182C984 275.339 900.5 367 1155 370.5C1409.5 374 1555.5 130.252 1660.5 311.376C1765.5 492.5 1908 642.5 1712.5 674C1517 705.5 1595 711.152 1375 693.652C1155 676.152 767.5 625 921 684.5C1074.5 744 1109 728 1304.5 703.5C1500 679 1465 661.5 1639.5 703.5C1814 745.5 2043 681 1732.5 656.5C1422 632 1548 630.299 1269 656.5C990 682.701 1128.91 664.737 1039.5 674C954.894 682.766 855.5 640 801 736.5C763.161 803.5 936.903 876.431 723.5 858C613.5 848.5 645.489 855.5 400.495 803.5C155.5 751.5 74.1033 845 102.603 959.5C131.103 1074 167.194 1251 317.5 1193.5C467.805 1136 578 1096.2 457.139 1056C357.031 1022.71 163.453 982 168.139 1111C172.826 1240 243.368 1243.02 311.5 1234.5C411.499 1222 430.393 1187.18 565.999 1117.5C728.5 1034 720.5 1014.5 792 1086C863.5 1157.5 1002.5 1228 866.5 1228C739.358 1228 486.318 1185.41 584.5 1167C744.5 1137 741.5 1132.5 723.5 1096.2C683.851 1016.23 583.865 991 501.86 1152C419.855 1313 626.499 1135.5 816.499 1173C1006.5 1210.5 965.5 1244 1038.5 1244"
            stroke="black"
            stroke-linecap="round"
          />
        {/if}
      </svg>
    </div>
    <div class="container">
      <div class="expect__wrapper">
        <div class="expect__title-wrapper">
          <h2 class="expect__title">{data.expectTitle}</h2>
          <p class="expect__subtitle">
            {data.expectSubText}
          </p>
        </div>
        <div class="expect__items">
          {#each data.expectItems as expectItem, index}
            <div class="expect__item-img-wrapper">
              <img src="../images/expect-{index + 1}.svg" alt="" class="expect__item-img" />
            </div>
            <div class="expect__item">
              <p class="expect__text">
                {expectItem.expectText}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .expect {
    @include media-breakpoint-down(lg) {
      padding-top: 87px;
      padding-bottom: 0px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 215px;
      padding-bottom: 215px;
    }
    position: relative;

    &__img-wrapper {
      position: absolute;
      transform: translateY(299px);
      width: 98%;

      @include media-breakpoint-down(lg) {
        display: none;
      }
    }

    &__img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    &__title {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        margin-bottom: 11px;
      }

      @include media-breakpoint-between(lg, xl) {
        max-width: 320px;
        font-size: 60px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 105px;
      }

      @include media-breakpoint-up(lg) {
        width: 680px;
      }
    }

    &__subtitle {
      @include media-breakpoint-down(xl) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(lg) {
        width: 380px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 18px;
        line-height: 27px;
      }
    }

    &__title-wrapper {
      display: flex;

      justify-content: space-between;
      @include media-breakpoint-down(lg) {
        flex-direction: column;
      }

      @include media-breakpoint-up(lg) {
        align-items: center;
      }
    }

    &__items {
      @include media-breakpoint-up(lg) {
        margin-top: 380px;
      }
      display: flex;
      flex-direction: column;
    }

    &__item {
      @include media-breakpoint-up(lg) {
        width: 49%;
      }

      &:nth-child(4) {
        align-self: flex-end;
      }

      &:not(&:last-of-type) {
        @include media-breakpoint-between(lg, xl) {
          margin-bottom: 220px;
        }
        @include media-breakpoint-between(xl, xxl) {
          margin-bottom: 168px;
        }

        @include media-breakpoint-up(xxl) {
          margin-bottom: 188px;
        }
      }
    }

    &__item-img-wrapper {
      position: relative;
      width: 100%;
      height: 200px;
      margin-bottom: 5px;

      &:nth-child(5) {
        @include media-breakpoint-down(lg) {
          margin-bottom: 24px;
        }
      }

      @include media-breakpoint-between(md, lg) {
        margin: 20px 0;
      }
      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    &__item-img {
      position: absolute;
      width: 100%;

      height: 100%;
    }

    &__text {
      @include media-breakpoint-down(lg) {
        font-size: 20px;
        line-height: 30px;
      }
      @include media-breakpoint-between(lg, xxl) {
        font-size: 24px;
        line-height: 36px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 40px;
        line-height: 60px;
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
