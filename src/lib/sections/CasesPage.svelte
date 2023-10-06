<script>
  import { onMount, beforeUpdate } from 'svelte'
  import { register } from 'swiper/element/bundle'
  import imageUrl from '../js/imageUrlBuilder'
  export let data

  let categoryList = []
  const categoryCounts = []

  data.secondData.map((el) => {
    categoryList.push(el.category)
  })

  data.secondData.forEach((el) => {
    const categoryItem = el.category
    console.log(categoryItem)
  })

  console.log(categoryCounts)

  let setCategory = new Set(categoryList)

  register()

  onMount(async () => {
    const swiperElTags = document.querySelector('.casespage__filtertag-wrapper')

    const swiperParams = {
      slidesPerView: 'auto',

      breakpoints: {
        0: {
          spaceBetween: 10,
        },
        768: {
          spaceBetween: 20,
        },
        992: {
          spaceBetween: 30,
        },
        1280: {
          spaceBetween: 40,
        },
      },
      on: {
        init() {},
      },
    }

    if (data) {
      const initializeSwiper = () => {
        Object.assign(swiperElTags, swiperParams)
        swiperElTags.initialize()
      }

      requestAnimationFrame(initializeSwiper)
    }
  })

  $: activeTags = []
  $: arrayTest = []

  beforeUpdate(() => {
    if (data && activeTags?.length > 0) {
      arrayTest = data.secondData.filter((el) => activeTags.includes(el.category))
    } else {
      arrayTest = data.secondData
    }
  })

  $: clearActive = () => (activeTags = [])

  $: handleTogleActive = (tag) => {
    activeTags = activeTags.includes(tag)
      ? activeTags.filter((el) => el !== tag)
      : [...activeTags, tag]
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if data}
  <section class="casespage">
    <div class="container">
      <div class="casespage__wrapper">
        <h2 class="casespage__title">{data.title}</h2>
        <div class="reviews__swiper-container">
          <swiper-container class="casespage__filtertag-wrapper" init="false">
            <swiper-slide
              on:click={clearActive}
              type="button"
              class={`casespage__filtertag ${
                activeTags.length === 0 ? 'casespage__filtertag--active' : ''
              }`}
            >
              All cases ({data.secondData.length + 1})
            </swiper-slide>

            {#each [...setCategory] as category}
              <swiper-slide
                type="button"
                on:click={() => handleTogleActive(category)}
                class={`casespage__filtertag ${
                  activeTags.includes(category) ? 'casespage__filtertag--active' : ''
                }`}
              >
                {category}
              </swiper-slide>
            {/each}
          </swiper-container>
        </div>
        <div class="casespage__items-wrapper">
          <div class="casespage__items casespage__items--left">
            {#each arrayTest as item, idx}
              {#if idx % 2 == 0}
                <div class="casespage__item">
                  <div class="casespage__img-wrapper">
                    <img src={imageUrl(item.image)} alt="casespage" class="casespage__img" />
                  </div>
                  <div class="casespage__text-wrapper">
                    <div class="casespage__text-inner">
                      <p class="casespage__name">{item.name}</p>
                      <p class="casespage__tag">{item.category}</p>
                    </div>
                    <a href={item.slug?.current}>
                      <img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" />
                    </a>
                  </div>
                </div>
              {/if}
            {/each}
          </div>
          <div class="casespage__items casespage__items--right">
            {#each arrayTest as item, idx}
              {#if idx % 2 != 0}
                <div class="casespage__item">
                  <div class="casespage__img-wrapper">
                    <img src={imageUrl(item.image)} alt="casespage" class="casespage__img" />
                  </div>
                  <div class="casespage__text-wrapper">
                    <div class="casespage__text-inner">
                      <p class="casespage__name">{item.name}</p>
                      <p class="casespage__tag">{item.category}</p>
                    </div>
                    <a href={item.slug?.current}>
                      <img src="../icons/arrow-btn.svg" alt="" class="casespage__item-arrow" />
                    </a>
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .casespage {
    margin-bottom: 40px;
    &__wrapper {
      display: flex;
      flex-direction: column;
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

    &__filtertag-wrapper {
      display: flex;
      overflow-x: auto;

      @include media-breakpoint-down(lg) {
        overflow-y: hidden;
        margin-top: 11px;
        margin-bottom: 40px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 28px;
        margin-bottom: 80px;
      }
    }

    &__filtertag {
      text-transform: uppercase;
      border-radius: 40px;
      border: 1px solid black;
      text-wrap: nowrap;
      user-select: none;
      text-align: center;
      width: max-content;

      &--active {
        background-color: black;
        color: #ffffff;
      }

      @include media-breakpoint-down(md) {
        font-size: 12px;
        padding: 7px 18px;
      }

      @include media-breakpoint-between(md, xl) {
        font-size: 16px;
        padding: 14px 36px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 16px;
        padding: 12px 32px;
      }

      @include media-breakpoint-up(xl) {
        padding: 19px 72px;
      }
    }

    &__items-wrapper {
      display: flex;

      @include media-breakpoint-down(lg) {
        flex-direction: column;
      }
    }

    &__items {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        width: 100%;
        flex-direction: column;
      }

      @include media-breakpoint-up(lg) {
        width: 50%;
      }
    }

    &__items--left {
      @include media-breakpoint-down(lg) {
        display: contents;
      }
      @include media-breakpoint-up(lg) {
        margin-right: 40px;
      }

      .casespage__item:not(.casespage__item:last-of-type) {
        margin-bottom: 40px;
      }

      .casespage__item:nth-child(4n + 1) {
        @include media-breakpoint-up(lg) {
          height: 800px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 600px;
        }
      }

      .casespage__item:nth-of-type(even) {
        @include media-breakpoint-up(lg) {
          height: 930px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 730px;
        }
      }

      .casespage__item:nth-child(3n + 3) {
        @include media-breakpoint-up(lg) {
          height: 570px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 370px;
        }
      }
    }

    &__items--right {
      @include media-breakpoint-down(lg) {
        display: contents;
      }

      .casespage__item:not(.casespage__item:last-of-type) {
        margin-bottom: 40px;
      }

      .casespage__item:nth-of-type(4n + 1) {
        @include media-breakpoint-up(lg) {
          height: 635px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 370px;
        }
      }

      .casespage__item:nth-of-type(even) {
        @include media-breakpoint-up(lg) {
          height: 1030px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 830px;
        }
      }

      .casespage__item:nth-of-type(3n + 3) {
        @include media-breakpoint-up(lg) {
          height: 700px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 500px;
        }
      }
    }

    &__item {
      border-radius: 40px;
      overflow: hidden;
      width: 100%;
      position: relative;

      @include media-breakpoint-down(sm) {
        height: 360px;
      }

      @include media-breakpoint-between(sm, lg) {
        height: 450px;
      }

      @include media-breakpoint-down(lg) {
        margin-bottom: 40px;
      }
    }

    &__item-arrow {
      transform: rotate(-45deg);

      @include media-breakpoint-down(xl) {
        width: 53px;
        height: 53px;
      }

      @include media-breakpoint-up(xl) {
        width: 76px;
        height: 76px;
      }
    }

    &__img-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__text-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      border-radius: 40px;
      border: 1px solid #ffffff33;
      backdrop-filter: blur(15px);
      z-index: 10;

      @include media-breakpoint-down(md) {
        padding-top: 9px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
      }

      @include media-breakpoint-up(md) {
        padding-top: 26px;
        padding-right: 40px;
        padding-left: 40px;
        padding-bottom: 40px;
      }

      @include media-breakpoint-down(lg) {
        left: 0;
        bottom: 0;
        width: calc(100%);
      }

      @include media-breakpoint-up(lg) {
        left: 40px;
        bottom: 40px;
        width: calc(100% - 80px);
      }
    }

    &__name {
      color: #ffffff;
      font-weight: 600;

      @include media-breakpoint-down(sm) {
        font-size: 24px;
        line-height: 36px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 32px;
        line-height: 48px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 40px;
        line-height: 60px;
        padding-bottom: 5px;
      }
    }

    &__tag {
      color: #ffffff;

      width: max-content;
      text-align: center;
      border: 1px solid white;
      border-radius: 40px;

      @include media-breakpoint-down(sm) {
        font-size: 12px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 14px;
      }

      @include media-breakpoint-down(md) {
        padding: 5px 12px;
      }

      @include media-breakpoint-up(md) {
        padding: 2px 12px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 16px;
      }
    }
  }
</style>
