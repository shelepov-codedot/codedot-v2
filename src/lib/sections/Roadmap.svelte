<script>
</script>

<div class="roadmap">
  <div class="container">
    <div class="roadmap__wrapper">
      <div class="roadmap__background">
        <img src="../images/roadmap-1.svg" alt="roadmap-1" class="roadmap__background-img" />
        <img src="../images/roadmap-2.svg" alt="roadmap-2" class="roadmap__background-img" />
        <img src="../images/roadmap-3.svg" alt="roadmap-3" class="roadmap__background-img" />
        <img src="../images/roadmap-4.svg" alt="roadmap-4" class="roadmap__background-img" />
        <img src="../images/roadmap-5.svg" alt="roadmap-5" class="roadmap__background-img" />
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
        <div class="roadmap__item">
          <p class="roadmap__name">In 2018,</p>
          <p class="roadmap__text">
            we formed a department that was not engaged in games, but in web development and
            e-commerce. A year later, we made a joint decision to create a separate company, as we
            were passionate about the idea of creating not only games, but also excellent
            technological products.
          </p>
        </div>
        <div class="roadmap__item">
          <p class="roadmap__name">Originally,</p>
          <p class="roadmap__text">
            the idea was to create high-quality code. We had clients, we did our job well, and they
            were satisfied. Then we realized that it's not just about good code writing...
          </p>
        </div>
        <div class="roadmap__item">
          <p class="roadmap__name">But what then?</p>
          <p class="roadmap__text">
            Conscientious cooperation with customers. Support for communication within the team. The
            pleasure of work. Search for new and interesting solutions for various industries. This
            is how Codedot appeared.
          </p>
        </div>
        <div class="roadmap__item">
          <p class="roadmap__name">Our story</p>
          <p class="roadmap__text">
            began as an initiative of a couple of people, but now we have 20 software developers
            working with us, who specialize in a variety of different technologies, without ceasing
            to grow and improve.
          </p>
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
    &__wrapper {
      position: relative;
    }

    &__background {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateY(-100px);
    }

    &__items {
      display: flex;
      flex-direction: column;
    }

    &__item {
      display: flex;
      flex-direction: column;
      gap: 50px;
      margin-bottom: 500px;

      &:nth-child(even) {
        align-self: flex-end;
      }

      &:nth-child(1) {
        width: 577px;
      }

      &:nth-child(2) {
        width: 440px;
      }

      &:nth-child(3) {
        width: 495px;
      }

      &:nth-child(4) {
        width: 753px;
      }

      &:nth-child(5) {
        width: 477px;
      }

      &:nth-child(6) {
        width: 864px;
      }
    }

    &__name {
      font-size: 105px;
      font-weight: 600;
      line-height: 83px;
      z-index: 2;
      background-color: white;
    }

    &__text {
      font-size: 18px;
    }

    &__background-img {
      &:nth-of-type(1) {
        transform: translateX(85px) translateY(-55px);
      }
      &:nth-of-type(2) {
        transform: translateX(135px) translateY(-280px);
      }
      &:nth-of-type(3) {
        transform: translateX(490px) translateY(-380px);
      }
      &:nth-of-type(4) {
        transform: translateX(100px) translateY(-480px);
      }
      &:nth-of-type(5) {
        transform: translateX(135px) translateY(-580px);
      }
    }
  }
</style>
