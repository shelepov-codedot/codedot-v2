<script>
  import { createClient } from '@sanity/client'

  let data

  export async function _getProps() {
    const client = createClient({
      projectId: 'c6ki8epl',
      dataset: 'production',
      useCdn: true,
    })

    const query = `*[_type=="Counters"]`
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
  <section class="counters">
    <div class="container">
      <div class="counters__wrapper">
        <div class="counters__items">
          {#each data.countersItems as counter}
            <div class="counters__item">
              <span class="counters__number">{counter.number}</span>
              <div class="counters__text">{counter.text}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';
  .counters {
    background-color: #e9f6fb;
    border-radius: 40px;

    @include media-breakpoint-up(lg) {
      margin-top: 250px;
      margin-bottom: 250px;
    }

    &__wrapper {
      @include media-breakpoint-down(lg) {
        padding-top: 77px;
        padding-bottom: 100px;
      }

      @include media-breakpoint-up(lg) {
        padding-top: 80px;
        padding-bottom: 104px;
      }
    }

    &__items {
      display: flex;
      justify-content: space-around;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include media-breakpoint-up(xxl) {
        &:nth-child(2) {
          padding-left: 245px;
          padding-right: 245px;
        }
      }

      @include media-breakpoint-down(md) {
        &:not(&:last-of-type) {
          margin-bottom: 77px;
        }
      }
    }

    &__number {
      font-weight: 800;

      @include media-breakpoint-down(md) {
        font-size: 80px;
        line-height: 100px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
        line-height: 85px;
      }

      @include media-breakpoint-up(lg) {
        font-size: 105px;
        line-height: 150px;
      }
    }

    &__text {
      @include media-breakpoint-down(md) {
        font-size: 24px;
        line-height: 36px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 24px;
        line-height: 40px;
      }

      @include media-breakpoint-up(lg) {
        transform: translateY(-10px);
        font-size: 32px;
        line-height: 48px;
      }
    }
  }
</style>
