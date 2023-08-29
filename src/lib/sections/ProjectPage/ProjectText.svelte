<script></script>

<section class="project-text">
  <div class="container">
    <div class="project-text__wrapper">
      <p class="project-text__text">
        Tavalingar makroktig. Polyvovis gigabyst att tehet ifall kamäll vana. Ponas hörade sonde
        psykocentrism tar och nack. Rähak begeheten ultrasad fena, tiras. Polyvovis gigabyst att
        tehet ifall kamäll vana. Ponas hörade sonde psykocentrism tar och nack.
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .project-text {
    &__wrapper {
      padding-top: 250px;
      padding-bottom: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__text {
      text-align: center;

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
      }
    }
  }
</style>
