<script>
  export let data
</script>

{#if data}
  <section class="our-services">
    <div class="container">
      <div class="our-services__wrapper">
        <h1 class="our-services__title">{data.Title}</h1>
        <div class="our-services__items">
          {#each data.servicesItems as servicesItem}
            <div class="our-services__item">
              <div class="our-service__item-text-wrapper">
                <span class="our-services__name">{servicesItem.serviceName}</span>
                <p class="our-services__text">
                  {servicesItem.serviceText}
                </p>
              </div>

              <a href={servicesItem.serviceLink} class="our-services__btn">
                See more
                <img src="../icons/arrow-btn.svg" alt="" class="our-services__icon" />
              </a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .our-services {
    @include media-breakpoint-down(lg) {
      padding-top: 108px;
      padding-bottom: 108px;
    }
    @include media-breakpoint-up(lg) {
      padding-top: 76px;
      padding-bottom: 279px;
    }

    &__title {
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
        line-height: 150px;
        font-size: 210px;
      }

      font-weight: 600;
    }

    &__items {
      display: grid;
      gap: 40px;

      @include media-breakpoint-between(md, lg) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include media-breakpoint-between(lg, xl) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include media-breakpoint-down(lg) {
        margin-top: 29px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 85px;
      }

      @include media-breakpoint-between(xl, xxl) {
        grid-template-columns: repeat(4, 275px);
        justify-content: space-between;
      }

      @include media-breakpoint-up(xxl) {
        grid-template-columns: repeat(4, 380px);
      }
    }

    &__item {
      display: flex;

      flex-direction: column;
      justify-content: space-between;
      background-color: #fafafa;
      border-radius: 40px;

      @include media-breakpoint-down(md) {
        height: 300px;
      }

      @include media-breakpoint-between(md, lg) {
        height: 320px;
      }

      @include media-breakpoint-between(lg, xl) {
        height: 360px;
      }

      @include media-breakpoint-down(xl) {
        padding: 20px;
      }

      @include media-breakpoint-between(xl, xxl) {
        padding: 30px;
        height: 400px;
      }

      @include media-breakpoint-up(xxl) {
        padding: 40px;
        height: 440px;
      }
    }

    &__name {
      font-weight: 700;

      @include media-breakpoint-down(xl) {
        font-size: 24px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 31px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 40px;
      }
    }

    &__text {
      font-size: 18px;
      text-align: left;
      color: #838383;

      @include media-breakpoint-down(lg) {
        margin-top: 20px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 40px;
      }
    }

    &__btn {
      display: flex;
      padding: 8px 30px;
      align-items: center;
      border: 1px solid black;
      width: max-content;
      border-radius: 40px;
    }

    &__icon {
      filter: brightness(0);
      padding-left: 8px;
    }
  }
</style>
