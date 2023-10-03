<script>
  import imageUrl from '../js/imageUrlBuilder'
  export let data
</script>

{#if data}
  <section class="cases">
    <div class="container">
      <div class="cases__wrapper">
        <h2 class="cases__title">{data.title}</h2>
        <div class="cases__items-wrapper">
          <div class="cases__items cases__items--left">
            {#each data.casesList as caseItem, index}
              {#if index % 2 == 0}
                <div class="cases__item">
                  <div class="cases__img-wrapper">
                    <img src={imageUrl(caseItem.image)} alt="cases" class="cases__img" />
                  </div>
                  <div class="cases__text-wrapper">
                    <div class="cases__text-inner">
                      <p class="cases__name">{caseItem.name}</p>
                      <p class="cases__tag">{caseItem.category}</p>
                    </div>
                    <a href="#"
                      ><img src="../icons/arrow-btn.svg" alt="" class="cases__item-arrow" /></a
                    >
                  </div>
                </div>
              {/if}
            {/each}
          </div>
          <div class="cases__items cases__items--right">
            {#each data.casesList as caseItem, index}
              {#if index % 2 != 0}
                <div class="cases__item">
                  <div class="cases__img-wrapper">
                    <img src={imageUrl(caseItem.image)} alt="cases" class="cases__img" />
                  </div>
                  <div class="cases__text-wrapper">
                    <div class="cases__text-inner">
                      <p class="cases__name">{caseItem.name}</p>
                      <p class="cases__tag">{caseItem.category}</p>
                    </div>
                    <a href="#"
                      ><img src="../icons/arrow-btn.svg" alt="" class="cases__item-arrow" /></a
                    >
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
        <a href="#" class="btn btn--fullwidth btn--cases">
          View all cases
          <span class="btn__icon">
            <img
              src="../icons/arrow-btn.svg"
              alt=""
              class="btn__icon-arrow btn__icon-arrow--rotate"
            />
          </span>
        </a>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .cases {
    @include media-breakpoint-down(lg) {
      margin-top: 89px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 225px;
      margin-bottom: 225px;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-weight: 600;
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: 40px;
      }

      @include media-breakpoint-down(lg) {
        margin-bottom: 31px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 57px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 105px;
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
      margin-bottom: 40px;

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

      .cases__item:nth-of-type(1) {
        @include media-breakpoint-up(lg) {
          margin-bottom: 40px;
          height: 800px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 600px;
          margin-bottom: 40px;
        }
      }

      .cases__item:nth-of-type(2) {
        @include media-breakpoint-up(lg) {
          height: 930px;
          margin-bottom: 40px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 730px;
          margin-bottom: 40px;
        }
      }

      .cases__item:nth-of-type(3) {
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
      .cases__item:nth-of-type(1) {
        @include media-breakpoint-up(lg) {
          height: 570px;
          margin-bottom: 40px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 370px;
          margin-bottom: 40px;
        }
      }

      .cases__item:nth-of-type(2) {
        @include media-breakpoint-up(lg) {
          height: 1030px;
          margin-bottom: 40px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 830px;
          margin-bottom: 40px;
        }
      }

      .cases__item:nth-of-type(3) {
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
      border: 1px solid #ffffff33;
      backdrop-filter: blur(15px);
      z-index: 10;

      @include media-breakpoint-down(md) {
        padding: 20px;
        border-radius: 30px;
      }

      @include media-breakpoint-up(md) {
        padding: 40px;
        border-radius: 40px;
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
        transform: translateY(-5px);
      }

      @include media-breakpoint-up(sm) {
        padding-bottom: 10px;
      }

      @include media-breakpoint-between(sm, lg) {
        font-size: 32px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 40px;
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
        padding: 4px 10px;
      }

      @include media-breakpoint-up(md) {
        padding: 8px 12px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 16px;
      }
    }
  }
</style>
