<script></script>

<section class="project-images">
  <div class="container">
    <div class="project-images__wrapper">
      <p class="project-images__text">
        Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana.
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
        <div class="project-images__item">
          <div class="project-images__img-wrapper">
            <img src="../images/cases6.png" alt="" class="project-images__img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="project-images project-images--less">
  <div class="container">
    <div class="project-images__wrapper">
      <p class="project-images__text">
        Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana.
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
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .project-images {
    &__wrapper {
      display: flex;
      flex-direction: column;
    }

    &__text {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        margin-bottom: 40px;
        font-size: 40px;
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
        width: 940px;
      }

      @include media-breakpoint-up(xxl) {
        margin-bottom: 250px;
      }
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @include media-breakpoint-down(md) {
        gap: 30px;
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
          &:nth-child(odd) {
            height: 280px;
          }

          &:nth-child(even) {
            height: 320px;
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
