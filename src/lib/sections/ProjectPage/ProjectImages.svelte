<script>
  import imageUrl from '../../js/imageUrlBuilder'
  export let data
</script>

{#if data}
  <!-- Вариация 1, секция 1 -->
  {#if data.variation == 'titleLeft'}
    <section class="project-images">
      <div class="container">
        <div class="project-images__wrapper">
          <p class="project-images__text">
            {data.projectText}
          </p>
          <div class="project-images__items">
            {#each data.projectImagesItems as image}
              <div class="project-images__item">
                <div class="project-images__img-wrapper">
                  <img src={imageUrl(image)} alt="" class="project-images__img" />
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
  {/if}

  <!-- Вариация 1, секция 2-->
  {#if data.variation == 'titleRight'}
    <section class="project-images project-images--less">
      <div class="container">
        <div class="project-images__wrapper">
          <p class="project-images__text">
            {data.projectText}
          </p>
          <div class="project-images__items">
            {#each data.projectImagesItems as image, index}
              {#if index <= 2}
                <div class="project-images__item">
                  <div class="project-images__img-wrapper">
                    <img src={imageUrl(image)} alt="" class="project-images__img" />
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </section>
  {/if}

  <!-- Вариация 2, секция 1. Актуально для мобильного разрешения -->
  {#if data.variation == 'titleLeftSmallImg'}
    <section class="project-images project-images--small">
      <div class="container">
        <div class="project-images__wrapper">
          <p class="project-images__text">
            {data.projectText}
          </p>
          <div class="project-images__items">
            <div class="project-images__item">
              <div class="project-images__img-wrapper">
                <img src="../images/cases1.png" alt="" class="project-images__img" />
              </div>
            </div>
            <div class="project-images__item">
              <div class="project-images__img-wrapper">
                <img src="../images/cases2.png" alt="" class="project-images__img" />
              </div>
            </div>
            <div class="project-images__item">
              <div class="project-images__img-wrapper">
                <img src="../images/cases3.png" alt="" class="project-images__img" />
              </div>
            </div>
            <div class="project-images__item">
              <div class="project-images__img-wrapper">
                <img src="../images/cases4.png" alt="" class="project-images__img" />
              </div>
            </div>
            <div class="project-images__item">
              <div class="project-images__img-wrapper">
                <img src="../images/cases5.png" alt="" class="project-images__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  {/if}

  <!-- Вариация 2, секция 2. Актуально для мобильного разрешения-->
  {#if data.variation == 'titleRightSmallImg'}
    <section class="project-images project-images--less project-images--smaller">
      <div class="container">
        <div class="project-images__wrapper">
          <p class="project-images__text">
            {data.projectText}
          </p>
          <div class="project-images__items">
            {#each data.projectImagesItems as image, index}
              {#if index <= 2}
                <div class="project-images__item">
                  <div class="project-images__img-wrapper">
                    <img src={imageUrl(image)} alt="" class="project-images__img" />
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </section>
  {/if}

  <!-- Вариация 3, секция 1. Вместо заголовока обычный текст  -->
  {#if data.variation == 'textLeft'}
    <section class="project-images project-images--text">
      <div class="container">
        <div class="project-images__wrapper">
          <p class="project-images__text">
            {data.projectText}
          </p>
          <div class="project-images__items">
            <div class="project-images__item">
              <div class="project-images__img-wrapper">
                <img src="../images/cases1.png" alt="" class="project-images__img" />
              </div>
            </div>
            <div class="project-images__item">
              <div class="project-images__img-wrapper">
                <img src="../images/cases2.png" alt="" class="project-images__img" />
              </div>
            </div>
            <div class="project-images__item">
              <div class="project-images__img-wrapper">
                <img src="../images/cases3.png" alt="" class="project-images__img" />
              </div>
            </div>
            <div class="project-images__item">
              <div class="project-images__img-wrapper">
                <img src="../images/cases4.png" alt="" class="project-images__img" />
              </div>
            </div>
            <div class="project-images__item">
              <div class="project-images__img-wrapper">
                <img src="../images/cases5.png" alt="" class="project-images__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  {/if}

  <!-- Вариация 4, секция 1. Вместо заголовока обычный текст  -->
  {#if data.variation == 'textRight'}
    <section class="project-images project-images--less project-images--text">
      <div class="container">
        <div class="project-images__wrapper">
          <p class="project-images__text">
            {data.projectText}
          </p>
          <div class="project-images__items">
            {#each data.projectImagesItems as image, index}
              {#if index <= 2}
                <div class="project-images__item">
                  <div class="project-images__img-wrapper">
                    <img src={imageUrl(image)} alt="" class="project-images__img" />
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </section>
  {/if}
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .project-images {
    @include media-breakpoint-down(lg) {
      padding-top: 90px;
      padding-bottom: 200px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 104px;
      padding-bottom: 248px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
    }

    &:not(&:is(&--text)) {
      .project-images__text {
        font-weight: 600;

        @include media-breakpoint-up(xl) {
          width: 940px;
        }
      }
    }
    &__text {
      @include media-breakpoint-down(md) {
        margin-bottom: 31px;
        font-size: 40px;
        line-height: 48px;
      }

      @include media-breakpoint-between(md, lg) {
        margin-bottom: 80px;
        font-size: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        margin-bottom: 100px;
        font-size: 80px;
      }

      @include media-breakpoint-up(xl) {
        margin-bottom: 150px;
        font-size: 105px;
        line-height: 127px;
      }

      @include media-breakpoint-up(xxl) {
        margin-bottom: 224px;
      }
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @include media-breakpoint-down(md) {
        gap: 20px;
      }

      @include media-breakpoint-up(md) {
        gap: 40px;
      }
    }

    &:not(&--less) {
      .project-images__item {
        display: flex;
        @include media-breakpoint-down(md) {
          width: 100%;
        }

        &:nth-of-type(1) {
          align-self: flex-end;

          @include media-breakpoint-down(md) {
            height: 280px;
          }

          @include media-breakpoint-between(md, lg) {
            height: 320px;
            width: 25%;
          }

          @include media-breakpoint-between(lg, xl) {
            height: 320px;
            width: 27.9%;
          }

          @include media-breakpoint-between(xl, xxl) {
            height: 320px;
            width: 26.5%;
          }

          @include media-breakpoint-up(xxl) {
            height: 320px;
            width: 31%;
          }
        }

        &:nth-of-type(2) {
          @include media-breakpoint-down(md) {
            height: 320px;
          }

          @include media-breakpoint-between(md, lg) {
            width: 69%;
            height: 410px;
          }

          @include media-breakpoint-between(lg, xl) {
            width: 67.8%;
            height: 510px;
          }

          @include media-breakpoint-between(xl, xxl) {
            width: 68.5%;
            height: 610px;
          }

          @include media-breakpoint-up(xxl) {
            height: 810px;
            width: 66%;
          }
        }

        &:nth-of-type(3),
        &:nth-of-type(4) {
          @include media-breakpoint-down(md) {
            height: 280px;
          }

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

        &:nth-of-type(5) {
          width: 100%;

          @include media-breakpoint-down(md) {
            height: 320px;
          }

          @include media-breakpoint-between(md, lg) {
            height: 400px;
          }

          @include media-breakpoint-between(lg, xl) {
            height: 500px;
          }

          @include media-breakpoint-between(xl, xxl) {
            height: 600px;
          }

          @include media-breakpoint-up(xxl) {
            height: 800px;
          }
        }
      }
    }

    &:is(&--less) {
      .project-images__text {
        @include media-breakpoint-up(md) {
          align-self: flex-end;
        }
      }
      .project-images__item {
        display: flex;
        width: 100%;

        @include media-breakpoint-down(md) {
          height: 280px;
        }

        @include media-breakpoint-between(md, lg) {
          height: 450px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 600px;
        }

        @include media-breakpoint-between(xl, xxl) {
          height: 700px;
        }

        @include media-breakpoint-up(xxl) {
          height: 800px;
        }

        &:nth-child(2),
        &:nth-child(3) {
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
      }
    }

    &:is(&--small) {
      .project-images__item {
        display: flex;

        @include media-breakpoint-down(md) {
          width: 100%;

          &:nth-child(odd) {
            height: 280px;
          }

          &:nth-child(even) {
            height: 320px;
          }
        }

        @include media-breakpoint-down(sm) {
          &:nth-child(3),
          &:nth-child(4) {
            width: 44%;
            height: 130px;
          }
        }

        @include media-breakpoint-between(sm, md) {
          &:nth-child(3),
          &:nth-child(4) {
            width: 46%;
            height: 130px;
          }
        }

        &:nth-of-type(1) {
          align-self: flex-end;

          @include media-breakpoint-between(md, lg) {
            height: 320px;
            width: 25%;
          }

          @include media-breakpoint-between(lg, xl) {
            height: 320px;
            width: 27.9%;
          }

          @include media-breakpoint-between(xl, xxl) {
            height: 320px;
            width: 26.5%;
          }

          @include media-breakpoint-up(xxl) {
            height: 320px;
            width: 28%;
          }
        }

        &:nth-of-type(2) {
          @include media-breakpoint-between(md, lg) {
            width: 69%;
            height: 410px;
          }

          @include media-breakpoint-between(lg, xl) {
            width: 67.8%;
            height: 510px;
          }

          @include media-breakpoint-between(xl, xxl) {
            width: 68.5%;
            height: 610px;
          }

          @include media-breakpoint-up(xxl) {
            height: 810px;
            width: 69%;
          }
        }

        &:nth-of-type(3),
        &:nth-of-type(4) {
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

        &:nth-of-type(5) {
          width: 100%;
          @include media-breakpoint-between(md, lg) {
            height: 400px;
          }

          @include media-breakpoint-between(lg, xl) {
            height: 500px;
          }

          @include media-breakpoint-between(xl, xxl) {
            height: 600px;
          }

          @include media-breakpoint-up(xxl) {
            height: 800px;
          }
        }
      }
    }

    &:is(&--text) {
      .project-images__text {
        @include media-breakpoint-down(md) {
          font-size: 24px;
          line-height: 36px;
        }

        @include media-breakpoint-between(md, xl) {
          font-size: 32px;
          line-height: 48px;
        }

        @include media-breakpoint-up(xl) {
          font-size: 40px;
          line-height: 60px;
          width: 800px;
        }
      }
    }

    &:is(&--less.project-images--smaller) {
      .project-images__text {
        @include media-breakpoint-up(md) {
          align-self: flex-end;
        }
      }
      .project-images__item {
        display: flex;
        width: 100%;

        @include media-breakpoint-down(md) {
          height: 280px;
        }

        @include media-breakpoint-between(md, lg) {
          height: 450px;
        }

        @include media-breakpoint-between(lg, xl) {
          height: 600px;
        }

        @include media-breakpoint-between(xl, xxl) {
          height: 700px;
        }

        @include media-breakpoint-up(xxl) {
          height: 800px;
        }

        &:nth-child(2),
        &:nth-child(3) {
          @include media-breakpoint-down(sm) {
            width: 44%;
            height: 130px;
          }

          @include media-breakpoint-between(sm, md) {
            width: 46%;
            height: 130px;
          }
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
      }
    }

    &__img-wrapper {
      position: relative;
      border-radius: 40px;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
