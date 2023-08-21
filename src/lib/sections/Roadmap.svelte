<script>
</script>

<div class="roadmap">
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
        <div class="roadmap__item">
          <p class="roadmap__name">Since 2010,</p>
          <p class="roadmap__text">
            our specialists and CEO&founder have worked in a gamedev company. We were developing big
            and small games, but occasionally engaged in software development. Time passed and the
            number of digital projects increased.
          </p>
        </div>
        <div class="roadmap__mobile-img-wrapper">
          <img src="../images/roadmap-1.svg" alt="" class="roadmap__mobile-img" />
        </div>
        <div class="roadmap__item">
          <p class="roadmap__name">In 2018,</p>
          <p class="roadmap__text">
            we formed a department that was not engaged in games, but in web development and
            e-commerce. A year later, we made a joint decision to create a separate company, as we
            were passionate about the idea of creating not only games, but also excellent
            technological products.
          </p>
        </div>
        <div class="roadmap__mobile-img-wrapper">
          <img src="../images/roadmap-2.svg" alt="" class="roadmap__mobile-img" />
        </div>
        <div class="roadmap__item">
          <p class="roadmap__name">Originally,</p>
          <p class="roadmap__text">
            the idea was to create high-quality code. We had clients, we did our job well, and they
            were satisfied. Then we realized that it's not just about good code writing...
          </p>
        </div>
        <div class="roadmap__mobile-img-wrapper">
          <img src="../images/roadmap-3.svg" alt="" class="roadmap__mobile-img" />
        </div>
        <div class="roadmap__item">
          <p class="roadmap__name">But what then?</p>
          <p class="roadmap__text">
            Conscientious cooperation with customers. Support for communication within the team. The
            pleasure of work. Search for new and interesting solutions for various industries. This
            is how Codedot appeared.
          </p>
        </div>
        <div class="roadmap__mobile-img-wrapper">
          <img src="../images/roadmap-4.svg" alt="" class="roadmap__mobile-img" />
        </div>
        <div class="roadmap__item">
          <p class="roadmap__name">Our story</p>
          <p class="roadmap__text">
            began as an initiative of a couple of people, but now we have 20 software developers
            working with us, who specialize in a variety of different technologies, without ceasing
            to grow and improve.
          </p>
        </div>
        <div class="roadmap__mobile-img-wrapper">
          <img src="../images/roadmap-5.svg" alt="" class="roadmap__mobile-img" />
        </div>
        <div class="roadmap__item">
          <p class="roadmap__name">What is Codedot for us now?</p>
          <p class="roadmap__text">
            This is a unique approach to each client and a constant opportunity for growth.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .roadmap {
    padding: 250px 0;
    position: relative;
    overflow: hidden;

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

      @include media-breakpoint-between(lg, xl) {
        gap: 20px;
      }

      @include media-breakpoint-up(xl) {
        gap: 50px;
      }

      &:not(&:last-of-type) {
        @include media-breakpoint-between(lg, xl) {
          margin-bottom: 180px;
        }
        @include media-breakpoint-between(xl, xxl) {
          margin-bottom: 305px;
        }

        @include media-breakpoint-up(xxl) {
          margin-bottom: 500px;
        }
      }

      &:nth-child(1) {
        @include media-breakpoint-between(lg, xl) {
          width: 330px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 440px;
        }

        @include media-breakpoint-up(xxl) {
          width: 577px;
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

      &:nth-child(5) {
        @include media-breakpoint-between(lg, xl) {
          width: 283px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 377px;
        }

        @include media-breakpoint-up(xxl) {
          width: 495px;
        }
      }

      &:nth-child(7) {
        @include media-breakpoint-up(lg) {
          align-self: flex-end;
        }

        @include media-breakpoint-between(lg, xl) {
          width: 430px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 574px;
        }

        @include media-breakpoint-up(xxl) {
          width: 753px;
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
        }
      }

      &:nth-child(11) {
        @include media-breakpoint-up(lg) {
          align-self: flex-end;
        }

        @include media-breakpoint-between(lg, xl) {
          width: 485px;
        }

        @include media-breakpoint-between(xl, xxl) {
          width: 646px;
        }

        @include media-breakpoint-up(xxl) {
          width: 864px;
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
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
        line-height: 45px;
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
      font-size: 18px;
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
          transform: translateX(-140px) translateY(-230px);
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
          transform: translateX(192px) translateY(-332px);
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
          transform: translateX(-20px) translateY(-435px);
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
          height: 1074px;
          transform: translateX(45px) translateY(-535px);
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
        width: 100%;
        height: 100%;
        margin: 40px 0;
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
