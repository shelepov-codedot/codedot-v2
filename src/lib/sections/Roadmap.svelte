<script>
  import { createClient } from '@sanity/client'

  let data

  export async function _getProps() {
    const client = createClient({
      projectId: 'c6ki8epl',
      dataset: 'production',
      useCdn: true,
    })

    const query = `*[_type=="Roadmap"]`
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

{#if data}
  <section class="roadmap">
    <div class="container">
      <div class="roadmap__wrapper">
        <div class="roadmap__background">
          <div class="roadmap__background-img-wrapper">
            <img src="../images/roadmap-1.svg" alt="roadmap-1" class="roadmap__background-img" />
          </div>
          <div class="roadmap__background-img-wrapper">
            <img src="../images/roadmap-2.svg" alt="roadmap-2" class="roadmap__background-img" />
          </div>
          <div class="roadmap__background-img-wrapper">
            <img src="../images/roadmap-3.svg" alt="roadmap-3" class="roadmap__background-img" />
          </div>
          <div class="roadmap__background-img-wrapper">
            <img src="../images/roadmap-4.svg" alt="roadmap-4" class="roadmap__background-img" />
          </div>
          <div class="roadmap__background-img-wrapper">
            <img src="../images/roadmap-5.svg" alt="roadmap-5" class="roadmap__background-img" />
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

  .roadmap {
    position: relative;
    overflow: hidden;

    @include media-breakpoint-down(md) {
      padding: 90px 0;
    }

    @include media-breakpoint-between(md, xl) {
      padding: 170px 0;
    }

    @include media-breakpoint-up(xl) {
      padding: 250px 0;
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

      &:not(&:last-of-type) {
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
        margin: 37px 0;
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
