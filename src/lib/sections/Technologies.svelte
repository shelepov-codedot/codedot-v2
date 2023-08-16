<script></script>

<section class="technologies">
  <div class="container">
    <div class="technologies__wrapper">
      <h2 class="technologies__title">Technologies</h2>
      <div class="technologies__items">
        <div class="technologies__item">
          <p class="technologies__name">Front-end</p>
          <div class="technologies__stack">
            <span class="technologies__stack-item">React</span>
            <span class="technologies__stack-item">Gatsby</span>
            <span class="technologies__stack-item">NextJS</span>
            <span class="technologies__stack-item">Vue</span>
            <span class="technologies__stack-item">NuxtJS</span>
            <span class="technologies__stack-item">TypeScript</span>
            <span class="technologies__stack-item">JavaScript</span>
            <span class="technologies__stack-item">Svelte</span>
            <span class="technologies__stack-item">HTML</span>
            <span class="technologies__stack-item">CSS</span>
            <span class="technologies__stack-item">Emotion</span>
            <span class="technologies__stack-item">Linaria</span>
            <span class="technologies__stack-item">MaterialUI</span>
            <span class="technologies__stack-item">Bootstrap</span>
            <span class="technologies__stack-item">ChakraUI</span>
            <span class="technologies__stack-item">Pixi.js</span>
            <span class="technologies__stack-item">Haxe</span>
          </div>
        </div>
        <div class="technologies__item">
          <p class="technologies__name">Back-end</p>
          <div class="technologies__stack">
            <span class="technologies__stack-item">PHP</span>
            <span class="technologies__stack-item">Symfony</span>
            <span class="technologies__stack-item">Yii2</span>
            <span class="technologies__stack-item">Laravel</span>
            <span class="technologies__stack-item">Node.js</span>
            <span class="technologies__stack-item">Express</span>
            <span class="technologies__stack-item">NestJS</span>
            <span class="technologies__stack-item">Python</span>
            <span class="technologies__stack-item">Django</span>
            <span class="technologies__stack-item">C++</span>
            <span class="technologies__stack-item">Liquid</span>
          </div>
        </div>
        <div class="technologies__item">
          <p class="technologies__name">Mobile</p>
          <div class="technologies__stack">
            <span class="technologies__stack-item">React Native</span>
            <span class="technologies__stack-item">Pixi.js</span>
            <span class="technologies__stack-item">Haxe</span>
            <span class="technologies__stack-item">Electron.js</span>
          </div>
        </div>
        <div class="technologies__item">
          <p class="technologies__name">Game Engine</p>
          <div class="technologies__stack">
            <span class="technologies__stack-item">Unreal engine</span>
            <span class="technologies__stack-item">Unity</span>
          </div>
        </div>
        <div class="technologies__item">
          <p class="technologies__name">Headless CMS</p>
          <div class="technologies__stack">
            <span class="technologies__stack-item">Contentful</span>
            <span class="technologies__stack-item">Strapi</span>
            <span class="technologies__stack-item">Sanity</span>
            <span class="technologies__stack-item">Netlify</span>
            <span class="technologies__stack-item">Dato</span>
            <span class="technologies__stack-item">WordPress (Atlas)</span>
            <span class="technologies__stack-item">Shopify</span>
          </div>
        </div>
        <div class="technologies__item">
          <p class="technologies__name">e-Commerce Platform</p>
          <div class="technologies__stack">
            <span class="technologies__stack-item">Shopify</span>
            <span class="technologies__stack-item">Shopify plus</span>
            <span class="technologies__stack-item">Hydrogen</span>
            <span class="technologies__stack-item">Medusa.js</span>
            <span class="technologies__stack-item">Commercetools</span>
          </div>
        </div>
        <div class="technologies__item">
          <p class="technologies__name">Other</p>
          <div class="technologies__stack">
            <span class="technologies__stack-item">Rest API</span>
            <span class="technologies__stack-item">GraphQL</span>
            <span class="technologies__stack-item">GROQ</span>
            <span class="technologies__stack-item">Docker</span>
            <span class="technologies__stack-item">Kubernetes</span>
            <span class="technologies__stack-item">Apollo</span>
            <span class="technologies__stack-item">Webpack</span>
            <span class="technologies__stack-item">Gulp</span>
            <span class="technologies__stack-item">Docker</span>
            <span class="technologies__stack-item">Storybook</span>
            <span class="technologies__stack-item">Babel</span>
            <span class="technologies__stack-item">yarn</span>
            <span class="technologies__stack-item">npm</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .technologies {
    background-color: #e9f6fb;
    border-radius: 40px;

    &__wrapper {
      padding-top: 250px;
      padding-bottom: 250px;
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
        margin-bottom: 60px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 80px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 105px;
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
    }

    &__item {
      display: grid;
      align-items: center;

      border-bottom: 1px solid black;

      @include media-breakpoint-down(lg) {
        padding-top: 20px;
        padding-bottom: 20px;
      }

      @include media-breakpoint-up(lg) {
        grid-template-columns: 35% 65%;
        padding-top: 30px;
        padding-bottom: 30px;
      }
    }

    &__name {
      font-weight: 600;

      @include media-breakpoint-down(sm) {
        margin-bottom: 10px;
      }

      @include media-breakpoint-down(md) {
        font-size: 28px;
      }

      @include media-breakpoint-up(md) {
        font-size: 40px;
      }

      @include media-breakpoint-between(sm, lg) {
        margin-bottom: 20px;
      }
    }

    &__stack {
      display: flex;
      flex-wrap: wrap;

      row-gap: 20px;

      @include media-breakpoint-up(lg) {
        justify-content: flex-end;
      }
    }

    &__stack-item {
      @include media-breakpoint-down(sm) {
        margin-right: 20px;
      }

      @include media-breakpoint-between(sm, lg) {
        margin-right: 30px;
      }

      @include media-breakpoint-up(lg) {
        margin-left: 40px;
      }
    }
  }
</style>
