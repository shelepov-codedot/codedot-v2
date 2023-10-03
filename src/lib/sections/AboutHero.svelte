<script>
  import imageUrl from '../js/imageUrlBuilder'
  export let data
</script>

{#if data}
  <section class="about-hero">
    <div class="container">
      <div class="about-hero__wrapper">
        <div class="about-hero__title-wrapper">
          <div class="about-hero__title-inner">
            <h1 class="about-hero__title">{data.topName}</h1>
            <div class="about-hero__title-img-wrapper">
              <img src={imageUrl(data.topImage)} alt="" class="about-hero__title-img" />
            </div>
          </div>
          <div class="about-hero__title-inner">
            <p class="about-hero__text">
              {data.textBottom}
            </p>
            <h1 class="about-hero__title">{data.bottomName}</h1>
          </div>
        </div>
        <div class="about-hero__img-wrapper">
          <img src={imageUrl(data.bottomImage)} alt="" class="about-hero__img" />
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .about-hero {
    @include media-breakpoint-down(lg) {
      padding-top: 109px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 196px;
      padding-bottom: 100px;
    }
    &__title-wrapper {
      display: flex;
      flex-direction: column;
    }

    &__title {
      @include media-breakpoint-down(md) {
        font-size: 40px;
        &:nth-child(1) {
          margin-bottom: 10px;
        }
      }

      @include media-breakpoint-down(md) {
        &:nth-child(2) {
          text-align: end;
        }
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
        line-height: 150px;
        font-size: 210px;
      }

      font-weight: 600;
    }

    &__title-inner {
      display: flex;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }

      @include media-breakpoint-up(md) {
        justify-content: space-between;
        align-items: center;
      }

      @include media-breakpoint-down(lg) {
        margin-bottom: 15px;
      }

      @include media-breakpoint-between(lg, xl) {
        margin-bottom: 40px;
      }

      @include media-breakpoint-between(xl, xxl) {
        margin-bottom: 60px;
      }

      @include media-breakpoint-up(xxl) {
        margin-bottom: 80px;
      }
    }

    &__title-img-wrapper {
      position: relative;
      border-radius: 100px;
      overflow: hidden;

      @include media-breakpoint-down(sm) {
        height: 80px;
      }

      @include media-breakpoint-between(sm, md) {
        height: 100px;
      }

      @include media-breakpoint-down(md) {
        width: 100%;
      }

      @include media-breakpoint-between(md, lg) {
        width: 320px;
        height: 100px;
      }

      @include media-breakpoint-up(lg) {
        width: 520px;
        height: 150px;
      }
    }

    &__title-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    &__img-wrapper {
      position: relative;
      width: 100%;
      border-radius: 1000px;
      overflow: hidden;

      @include media-breakpoint-down(sm) {
        height: 150px;
      }

      @include media-breakpoint-between(sm, lg) {
        height: 200px;
      }

      @include media-breakpoint-up(lg) {
        height: 322px;
      }
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    &__text {
      @include media-breakpoint-down(sm) {
        width: 100%;
        font-size: 14px;
        line-height: 21px;
      }
      @include media-breakpoint-between(sm, lg) {
        font-size: 16px;
        width: 300px;
      }

      @include media-breakpoint-down(md) {
        margin-bottom: 10px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 18px;
        width: 380px;
      }
    }
  }
</style>
