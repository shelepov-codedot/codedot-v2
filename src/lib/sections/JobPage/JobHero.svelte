<script>
  export let data
</script>

<svelte:head>
  {#if data}
    <title>{data.jobHeroTitle}</title>
  {/if}
</svelte:head>

{#if data}
  <section class="job-hero">
    <div class="container">
      <div class="job-hero__wrapper">
        <div class="job-hero__title-wrapper">
          <span class="job-hero__exp">{data.jobExperience}</span>
          <h1 class="job-hero__title">{data.jobHeroTitle}</h1>
        </div>
        <div class="job-hero__text-main">
          <div class="job-hero__info-wrapper">
            <span class="job-hero__salary">{data.jobSalary}</span>
            <div class="job-hero__conditions">{data.jobConditions}</div>
            <a href="#" class="btn job-hero__btn">
              {data.jobBtn}
              <span class="btn__icon">
                <img src="../icons/arrow-btn.svg" alt="" />
              </span>
            </a>
          </div>
          <div class="job-hero__text-wrapper">
            <p class="job-hero__text-title">{data.jobTextObject.jobTextName}</p>
            <p class="job-hero__text">
              {data.jobTextObject.jobText}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .job-hero {
    @include media-breakpoint-down(lg) {
      padding-top: 124px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 87px;
      padding-bottom: 169px;
    }

    &__exp {
      padding: 8px 20px;
      color: white;
      background-color: black;
      border-radius: 40px;

      @include media-breakpoint-down(md) {
        font-size: 12px;
      }

      @include media-breakpoint-up(md) {
        font-size: 14px;
      }
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

      @include media-breakpoint-down(md) {
        margin-top: 14px;
      }

      @include media-breakpoint-up(md) {
        margin-top: 5px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 105px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 130px;
      }

      font-weight: 600;
    }

    &__salary {
      @include media-breakpoint-down(lg) {
        font-size: 14px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 32px;
      }
    }

    &__btn {
      @include media-breakpoint-down(md) {
        padding: 12px 50px;
        width: unset;
      }

      @include media-breakpoint-up(md) {
        padding: 18px 72px;
      }
    }

    &__conditions {
      @include media-breakpoint-down(lg) {
        margin-top: 10px;
        font-size: 14px;
        margin-bottom: 38px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 20px;
        font-size: 32px;
        margin-bottom: 75px;
      }
    }

    &__text-main {
      display: flex;
      justify-content: space-between;

      @include media-breakpoint-down(lg) {
        flex-direction: column;
        margin-top: 5px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 45px;
      }
    }

    &__info-wrapper {
      align-self: flex-start;
    }

    &__text-wrapper {
      align-self: flex-end;

      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        padding-top: 40px;
      }

      @include media-breakpoint-up(lg) {
        width: 520px;
        padding-top: 80px;
      }
    }

    &__text-title {
      @include media-breakpoint-down(md) {
        font-size: 24px;
        line-height: 29px;
      }

      @include media-breakpoint-up(md) {
        font-size: 36px;
        //test
      }

      font-weight: 600;
    }

    &__text {
      margin-top: 20px;
      @include media-breakpoint-down(md) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(md) {
        font-size: 18px;
        line-height: 27px;
      }
    }
  }
</style>
