<script></script>

<section class="dignity">
  <div class="container">
    <div class="dignity__background">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1414 1898"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="animated-path"
          d="M370 232.813C1060 421.964 1047.49 89.2251 1007.49 320.277C967.494 551.329 1026 1873.49 508.501 1069C-9.00046 264.508 60 648 596.5 772.5C1134.74 897.404 1721.55 -869.626 1226 566C735.5 1987 860.743 2167.5 624 1590.5C261.499 706.995 -223.803 670.975 116.198 1125.9L508.501 1611.94"
          stroke="#212121"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="dignity__text-wrapper">
      <div class="dignity__item">
        <h2 class="dignity__name">Quality.</h2>
        <p class="dignity__text">
          We are a go-to tech company providing a full-cycle of mobile and web application
          development, solutions to UX/UI design problems, business solutions for e-commerce and
          project management.
        </p>
      </div>
      <div class="dignity__item">
        <h2 class="dignity__name">Creativity.</h2>
        <p class="dignity__text">
          We always focus on technical orientation to give you superior quality. Our team consists
          of developers who are able to work with a variety of technologies, such as: Shopify, JS,
          Gatsby.js, React and so on.
        </p>
      </div>
      <div class="dignity__item">
        <h2 class="dignity__name">Productivity.</h2>
        <p class="dignity__text">
          Codedot Team is here to transform and expand your business through e-commerce and
          marketplaces.
        </p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .dignity {
    margin-top: 80px;
    position: relative;

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
    }

    &__name {
      font-size: 105px;
      font-weight: 600;
      width: max-content;
    }

    &__text {
      font-size: 18px;
    }

    &__item {
      display: flex;
      flex-direction: column;

      &:nth-child(1) .dignity__text {
        width: 379px;
      }

      &:nth-child(2) {
        align-self: flex-end;
      }

      &:nth-child(2) .dignity__text {
        width: 509px;
      }

      &:nth-child(3) .dignity__text {
        width: 632px;
      }
    }
  }
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  #animated-path {
    stroke-dasharray: 10000;
    stroke-dashoffset: 10000;
    animation: draw 2s ease-in-out forwards;
  }
</style>
