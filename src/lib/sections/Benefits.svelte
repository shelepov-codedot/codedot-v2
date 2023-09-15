<script>
  import { createClient } from '@sanity/client'

  let data

  export async function _getProps() {
    const client = createClient({
      projectId: 'c6ki8epl',
      dataset: 'production',
      useCdn: true,
    })

    const query = `*[_type=="Benefits"]`
    const section = await client.fetch(query)

    return {
      body: {
        section,
      },
    }
  }

  _getProps().then((res) => (data = res.body.section[0]))

  setTimeout(() => {
    console.log(data)
  }, 1000)
</script>

<section class="benefits">
  <div class="container">
    <div class="benefits__wrapper">
      <div class="benefits__img-wrapper">
        <img src="../images/Benefits.svg" alt="" class="benefits__img" />
      </div>
      <h2 class="benefits__title">Benefits</h2>
      <div class="benefits__items">
        <div class="benefits__item">
          <p class="benefits__name">Friendly team</p>
          <p class="benefits__text">
            Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana. Ponas hörade sonde
            psykocentrism tar och nack.
          </p>
        </div>
        <div class="benefits__item">
          <p class="benefits__name">Work on international projects</p>
          <p class="benefits__text">
            Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana. Ponas hörade sonde
            psykocentrism tar och nack.
          </p>
        </div>
        <div class="benefits__item">
          <p class="benefits__name">Personal growth</p>
          <p class="benefits__text">
            Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana. Ponas hörade sonde
            psykocentrism tar och nack.
          </p>
        </div>
        <div class="benefits__item">
          <p class="benefits__name">Permanent support</p>
          <p class="benefits__text">
            Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana. Ponas hörade sonde
            psykocentrism tar och nack.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .benefits {
    @include media-breakpoint-down(lg) {
      padding-top: 90px;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 220px;
    }
    &__title {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        font-size: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-down(lg) {
        margin-bottom: 20px;
        order: 0;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 50px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 105px;
      }
    }

    &__wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__img-wrapper {
      align-self: center;

      @include media-breakpoint-down(lg) {
        width: 100%;
        padding-top: 10px;
        margin-bottom: 30px;
        order: 3;
      }

      @include media-breakpoint-up(lg) {
        position: absolute;
      }

      @include media-breakpoint-between(lg, xl) {
        width: 80%;
        transform: translate(44px, -50px);
      }

      @include media-breakpoint-between(xl, xxl) {
        width: 80%;
        transform: translate(15px, -45px);
      }

      @include media-breakpoint-up(xxl) {
        transform: translate(60px, -55px);
      }
    }

    &__img {
      width: 100%;
    }

    &__items {
      display: flex;
      justify-content: space-between;

      @include media-breakpoint-down(lg) {
        display: contents;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-down(lg) {
        margin-bottom: 30px;
      }

      @include media-breakpoint-up(lg) {
        width: 380px;
      }

      &:nth-child(even) {
        @include media-breakpoint-between(lg, xl) {
          padding-top: 140px;
        }

        @include media-breakpoint-between(xl, xxl) {
          padding-top: 180px;
        }
        @include media-breakpoint-up(xxl) {
          padding-top: 230px;
        }
      }

      &:nth-child(1) {
        @include media-breakpoint-down(lg) {
          order: 1;
        }
      }

      &:nth-child(2) {
        @include media-breakpoint-down(lg) {
          order: 2;
        }
      }

      &:nth-child(3) {
        @include media-breakpoint-down(lg) {
          order: 4;
        }
      }

      &:nth-child(4) {
        @include media-breakpoint-down(lg) {
          order: 5;
        }
      }
    }

    &__name {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        padding-bottom: 17px;
      }

      @include media-breakpoint-up(lg) {
        padding-bottom: 20px;
      }

      @include media-breakpoint-down(xxl) {
        font-size: 24px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 36px;
      }
    }

    &__text {
      @include media-breakpoint-down(xl) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 18px;
        line-height: 27px;
      }
    }
  }
</style>
