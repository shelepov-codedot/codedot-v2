<script>
</script>

<section class="code">
  <span class="code__text"> Code with love ♥</span>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .code {
    padding: 150px 0;
    overflow: hidden;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    &__text {
      display: flex;
      align-items: center;
      position: relative;
      font-weight: 800;
      gap: 30px;

      @include media-breakpoint-down(sm) {
        font-size: 80px;
      }

      @include media-breakpoint-between(sm, md) {
        transform: translateX(-20px);
        font-size: 13vw;
        white-space: nowrap;
      }

      @include media-breakpoint-up(md) {
        transform: translateX(-50px);
        font-size: 13vw;
        white-space: nowrap;
      }
    }

    &__icon {
      padding-top: 40px;
    }
  }
</style>
