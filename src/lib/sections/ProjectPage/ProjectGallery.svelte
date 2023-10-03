<script>
  import imageUrl from '../../js/imageUrlBuilder'
  export let data
</script>

{#if data}
  <section class="project-gallery">
    <div class="container">
      <div class="project-gallery__wrapper">
        <div class="project-gallery__items">
          {#each data.projectImages as image}
            <div class="project-gallery__item">
              <div class="project-gallery__img-wrapper">
                <img src={imageUrl(image)} alt="" class="project-gallery__img" />
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .project-gallery {
    &__wrapper {
      @include media-breakpoint-down(lg) {
        padding-top: 100px;
        padding-bottom: 100px;
      }

      @include media-breakpoint-up(lg) {
        padding-top: 250px;
        padding-bottom: 250px;
      }
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @include media-breakpoint-down(lg) {
        gap: 20px;
      }

      @include media-breakpoint-up(lg) {
        gap: 40px;
      }
    }

    &__img-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 40px;
      overflow: hidden;
    }

    &__item {
      display: flex;

      &:nth-child(1) {
        width: 100%;
        height: 1000px;

        @include media-breakpoint-between(md, lg) {
          height: 410px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 510px;
        }

        @include media-breakpoint-between(xl, xxl) {
          height: 610px;
        }

        @include media-breakpoint-up(xxl) {
          height: 1000px;
        }
      }

      &:nth-child(3n + 2),
      &:nth-child(3n + 3) {
        @include media-breakpoint-between(md, lg) {
          width: 47.2%;
          height: 400px;
        }

        @include media-breakpoint-between(lg, xl) {
          width: 47.8%;
          height: 500px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 48%;
          height: 600px;
        }

        @include media-breakpoint-up(xxl) {
          height: 800px;
          width: 48.5%;
        }
      }

      &:nth-child(3n + 4) {
        width: 100%;
        height: 810px;

        @include media-breakpoint-between(md, lg) {
          height: 380px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 460px;
        }

        @include media-breakpoint-between(xl, xxl) {
          height: 580px;
        }

        @include media-breakpoint-up(xxl) {
          height: 810px;
        }
      }

      @include media-breakpoint-down(md) {
        &:nth-child(odd) {
          width: 100%;
          height: 280px;
        }

        &:nth-child(even) {
          width: 100%;
          height: 320px;
        }
      }
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
