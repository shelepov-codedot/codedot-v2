<script>
  import { createClient } from '@sanity/client'

  let data

  export async function _getProps() {
    const client = createClient({
      projectId: 'c6ki8epl',
      dataset: 'production',
      useCdn: true,
    })

    const query = `*[_type=="Technologies"]`
    const section = await client.fetch(query)

    return {
      body: {
        section,
      },
    }
  }

  _getProps().then((res) => (data = res.body.section[0]))
</script>

{#if data}
  <section class="technologies">
    <div class="container">
      <div class="technologies__wrapper">
        <h2 class="technologies__title">{data.title}</h2>
        <div class="technologies__items">
          {#each data.technologiesList as item}
            <div class="technologies__item">
              <p class="technologies__name">{item.name}</p>

              <div class="technologies__stack">
                {#each item.subtechnologiesList as subtech}
                  <span class="technologies__stack-item">{subtech}</span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .technologies {
    background-color: #e9f6fb;
    border-radius: 40px;

    &__wrapper {
      @include media-breakpoint-down(md) {
        padding-top: 90px;
        padding-bottom: 100px;
      }

      @include media-breakpoint-between(md, xl) {
        padding-top: 120px;
        padding-bottom: 170px;
      }

      @include media-breakpoint-up(xl) {
        padding-top: 219px;
        padding-bottom: 267px;
      }
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
        margin-bottom: 31px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 54px;
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
        padding-top: 25px;
        padding-bottom: 33px;
      }
    }

    &__name {
      font-weight: 600;

      @include media-breakpoint-down(sm) {
        margin-bottom: 10px;
      }

      @include media-breakpoint-down(md) {
        font-size: 28px;
        line-height: 42px;
      }

      @include media-breakpoint-up(md) {
        font-size: 40px;
        line-height: 60px;
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
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-between(sm, lg) {
        margin-right: 30px;
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-up(lg) {
        margin-left: 40px;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
</style>
