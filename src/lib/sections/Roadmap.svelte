<script>
  import { onMount, onDestroy } from 'svelte'
  export let data

  let svgList = null

  function scrollHandler() {
    if (!svgList || typeof window === 'undefined') return

    svgList.forEach((el) => {
      const path = el.querySelector('path')
      const svgElLength = path.getTotalLength()
      const svgBackRect = el.getBoundingClientRect()
      const startY = svgBackRect.top + window.scrollY - 400
      const endY = startY + svgBackRect.height
      const scrollY = window.scrollY

      if (scrollY >= startY && scrollY <= endY) {
        const svgBackHeight = el.clientHeight
        const scrollPercentage = (scrollY - startY) / svgBackHeight
        const drawLength = svgElLength * (1 - scrollPercentage)

        if (svgElLength >= 0) {
          path.style.strokeDasharray = svgElLength
          path.style.strokeDashoffset = drawLength
        }
      }

      if (scrollY <= startY) {
        path.style.strokeDasharray = 8800
        path.style.strokeDashoffset = 8800
      }
    })
  }

  function addScrollListener() {
    if (typeof window === 'undefined') return

    svgList = document.querySelectorAll('.roadmap__background-img')
    window.addEventListener('scroll', scrollHandler)
  }

  function removeScrollListener() {
    if (typeof window === 'undefined') return

    svgList = null
    window.removeEventListener('scroll', scrollHandler)
  }

  onMount(addScrollListener)
  onDestroy(removeScrollListener)
</script>

{#if data}
  <section class="roadmap">
    <div class="container">
      <div class="roadmap__wrapper">
        <div class="roadmap__background">
          <div class="roadmap__background-img-wrapper">
            <svg
              viewBox="0 0 1448 1145"
              class="roadmap__background-img svg-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="anima-roadmap anima-0"
                d="M429.658 150C440.658 -233.5 1799.22 471.709 1339.66 119.5C836.658 -266 1584.66 400 1373.66 505C1162.66 610 716.158 840.5 732.158 608C744.374 430.48 -75.5001 398 67.1582 608C203.966 809.388 -111.342 856 46.6577 952.5C204.658 1049 239.158 1233.5 494.158 1093C749.158 952.5 661.658 777.5 889.658 865C1208.66 987.424 1420.66 471 1447.16 901"
                stroke="#212121"
              />
            </svg>
          </div>
          <div class="roadmap__background-img-wrapper">
            <svg
              viewBox="0 0 1072 735"
              class="roadmap__background-img svg-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="anima-roadmap anima-1"
                d="M1071 1C977 12.8333 848.142 42.3 855.742 165.5C865.242 319.5 1063.74 479.5 788.242 438C512.742 396.5 386.56 297.463 204.743 396.5C28.4998 492.5 -92.0001 673.5 93.9999 734.5"
                stroke="#212121"
              />
            </svg>
          </div>
          <div class="roadmap__background-img-wrapper">
            <svg
              class="roadmap__background-img svg-2"
              viewBox="0 0 1056 854"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="anima-roadmap anima-2"
                d="M1 172.643C243.5 148.643 366.5 -105.826 572 52.6743C777.5 211.174 1232.5 26.6743 956.5 246.674C680.5 466.674 456.5 130.674 331.5 380.674C206.5 630.674 -48 654 353 717.5C754 781 990 726 1055 853"
                stroke="#212121"
              />
            </svg>
          </div>
          <div class="roadmap__background-img-wrapper">
            <svg
              class="roadmap__background-img svg-3"
              viewBox="0 0 1450 919"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="anima-roadmap anima-3"
                d="M825 127C501 50.0001 395.5 -74.4999 224.5 60.5001C53.4999 195.5 -113.5 135.5 105.5 339.5C324.5 543.5 631.5 506 872 535.5C1112.5 565 1377.5 363.5 1370.5 575C1363.5 786.5 1651 958 1166.5 910.5C682 863 779.5 670 499 626.5C218.5 583 -37.5 605 160.5 805"
                stroke="#212121"
              />
            </svg>
          </div>
          <div class="roadmap__background-img-wrapper">
            <svg
              class="roadmap__background-img svg-4"
              viewBox="0 0 1487 1097"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="anima-roadmap anima-4"
                d="M320.002 0.5C421.502 7.5 893.5 319 1120.5 220C1336.38 125.849 1766.03 219.152 1222 465C998.5 566 758.001 364.5 389.501 364.5C21.0013 364.5 23.4999 424.5 4.49989 615C-30.6045 966.966 191.501 1242.5 389.501 1009C587.501 775.5 537 720.311 434 698.906C331 677.5 247.184 708.354 233.001 842C226.157 906.5 189 1103 522 1081.5C855 1060 1068.5 943 1068.5 836.5"
                stroke="#212121"
              />
            </svg>
          </div>
        </div>
        <div class="roadmap__items">
          {#each data.roadmapItems as roadmap, index}
            <div class="roadmap__item">
              <p class="roadmap__name">{roadmap.roadmapName}</p>
              <p class="roadmap__text">
                {roadmap.roadmapText}
              </p>
            </div>
            <div class="roadmap__mobile-img-wrapper">
              <img src="../images/roadmap-{index + 1}.svg" alt="" class="roadmap__mobile-img" />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .anima-roadmap {
    stroke-dashoffset: 8800;
    stroke-dasharray: 8800;
  }

  .roadmap {
    position: relative;
    overflow: hidden;

    @include media-breakpoint-down(md) {
      padding-top: 119px;
      padding-bottom: 201px;
    }

    @include media-breakpoint-between(md, xl) {
      padding-top: 170px;
      padding-bottom: 125px;
    }

    @include media-breakpoint-up(xl) {
      padding-top: 250px;
      padding-bottom: 225px;
    }

    &__wrapper {
      position: relative;
    }

    &__background {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateY(-150px);

      @include media-breakpoint-down(lg) {
        display: none;
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
    }

    &__item {
      display: flex;
      flex-direction: column;

      &:nth-child(1) .roadmap__text {
        @include media-breakpoint-between(lg, xl) {
          width: 330px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 440px;
        }

        @include media-breakpoint-up(xxl) {
          width: 440px;
        }
      }

      &:nth-child(3) {
        @include media-breakpoint-up(lg) {
          align-self: flex-end;
        }
        @include media-breakpoint-between(lg, xl) {
          width: 360px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 324px;
        }

        @include media-breakpoint-up(xxl) {
          width: 440px;
        }
      }

      &:nth-child(5) .roadmap__text {
        @include media-breakpoint-between(lg, xl) {
          width: 283px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 377px;
        }

        @include media-breakpoint-up(xxl) {
          width: 465px;
        }
      }

      &:nth-child(7) {
        @include media-breakpoint-up(lg) {
          align-self: flex-end;
        }
      }

      &:nth-child(7) .roadmap__text {
        @include media-breakpoint-between(lg, xl) {
          width: 430px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 574px;
        }

        @include media-breakpoint-up(xxl) {
          width: 460px;
        }
      }

      &:nth-child(9) {
        @include media-breakpoint-between(lg, xl) {
          width: 370px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 364px;
        }

        @include media-breakpoint-up(xxl) {
          width: 477px;
          margin-bottom: 450px;
        }
      }

      &:nth-child(11) {
        @include media-breakpoint-up(lg) {
          margin-bottom: 0 !important;
          align-self: flex-end;
        }

        @include media-breakpoint-up(xxl) {
          transform: translateY(-30px);
        }
      }

      &:nth-child(11) .roadmap__name {
        @include media-breakpoint-between(lg, xl) {
          width: 485px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 646px;
        }

        @include media-breakpoint-up(xxl) {
          width: 864px;
          line-height: 132px;
          margin-bottom: 10px;
        }
      }

      &:nth-child(11) .roadmap__text {
        @include media-breakpoint-between(lg, xl) {
          width: 485px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 646px;
        }

        @include media-breakpoint-up(xxl) {
          width: 440px;
        }
      }

      &:not(:last-child) {
        @include media-breakpoint-between(lg, xl) {
          margin-bottom: 145px;
        }
        @include media-breakpoint-between(xl, xxl) {
          margin-bottom: 305px;
        }

        @include media-breakpoint-up(xxl) {
          margin-bottom: 500px;
        }
      }
    }

    &__name {
      font-weight: 600;
      position: relative;
      z-index: 2;
      background-color: white;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        margin-bottom: 10px;
      }

      @include media-breakpoint-up(lg) {
        width: max-content;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
        line-height: 45px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 32px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
        line-height: 56px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 105px;
        line-height: 83px;
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
      }
    }

    &__background-img-wrapper {
      position: relative;
      width: 100%;

      &:nth-of-type(1) {
        @include media-breakpoint-between(lg, xl) {
          height: 550px;
          transform: translate(-43px, 100px);
        }

        @include media-breakpoint-between(xl, xxl) {
          height: 750px;
          transform: translate(-40px, 72px);
        }

        @include media-breakpoint-up(xxl) {
          height: 1150px;
          transform: translate(-8px, 0);
        }
      }

      &:nth-of-type(2) {
        @include media-breakpoint-between(lg, xl) {
          height: 395px;
          transform: translate(-130px, 5px);
        }

        @include media-breakpoint-between(xl, xxl) {
          height: 590px;
          transform: translate(-85px, -45px);
        }

        @include media-breakpoint-up(xxl) {
          height: 734px;
          transform: translateX(-140px) translateY(-202px);
        }
      }
      &:nth-of-type(3) {
        @include media-breakpoint-between(lg, xl) {
          height: 429px;
          transform: translate(70px, -45px);
        }

        @include media-breakpoint-between(xl, xxl) {
          height: 610px;
          transform: translate(130px, -118px);
        }

        @include media-breakpoint-up(xxl) {
          height: 852px;
          transform: translateX(192px) translateY(-310px);
        }
      }

      &:nth-of-type(4) {
        @include media-breakpoint-between(lg, xl) {
          height: 470px;
          transform: translate(-3px, -73px);
        }

        @include media-breakpoint-between(xl, xxl) {
          height: 616px;
          transform: translate(-19px, -195px);
        }

        @include media-breakpoint-up(xxl) {
          height: 918px;
          transform: translateX(-20px) translateY(-393px);
        }
      }

      &:nth-of-type(5) {
        @include media-breakpoint-between(lg, xl) {
          height: 533px;
          transform: translate(7px, -116px);
        }

        @include media-breakpoint-between(xl, xxl) {
          height: 737px;
          transform: translate(30px, -215px);
        }

        @include media-breakpoint-up(xxl) {
          height: 1093px;
          transform: translateX(45px) translateY(-452px);
        }
      }
    }

    &__background-img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    &__mobile-img-wrapper {
      @include media-breakpoint-down(lg) {
        &:last-of-type {
          margin: 0;
        }
        width: 100%;
        height: 100%;
        margin-top: 37px;
        margin-bottom: 30px;
      }

      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    &__mobile-img {
      @include media-breakpoint-down(lg) {
        width: 100%;
        height: auto;
      }

      @include media-breakpoint-up(lg) {
        display: none;
      }
    }
  }
</style>
