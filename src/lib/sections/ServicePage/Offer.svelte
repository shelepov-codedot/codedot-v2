<script>
  import { createClient } from '@sanity/client'

  let data

  export async function _getProps() {
    const client = createClient({
      projectId: 'c6ki8epl',
      dataset: 'production',
      useCdn: true,
    })

    const query = `*[_type=="Offer"]`
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
  <section class="offer">
    <div class="container">
      <div class="offer__wrapper">
        <h2 class="offer__title">{data.offerTitle}</h2>
        <div class="offer__items">
          {#each data.offerItems as offerItem}
            <div class="offer__item">
              <p class="offer__name">{offerItem.offerName}</p>
              <p class="offer__text">
                {offerItem.offerText}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .offer {
    @include media-breakpoint-down(xl) {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    @include media-breakpoint-up(xl) {
      padding-bottom: 216px;
      padding-top: 216px;
    }
    &__title {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
        margin-bottom: 25px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 50px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 60px;
      }

      @include media-breakpoint-between(xl, xxl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 105px;
      }

      @include media-breakpoint-up(lg) {
        width: 940px;
      }
    }

    &__items {
      display: grid;

      @include media-breakpoint-down(md) {
        gap: 40px;
      }

      @include media-breakpoint-between(md, xl) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      @include media-breakpoint-up(xl) {
        gap: 40px;
        grid-template-columns: repeat(4, 1fr);
      }
    }

    &__item {
      border-radius: 40px;
      background-color: #fafafa;

      @include media-breakpoint-down(md) {
        padding: 20px;
        height: 300px;
      }

      @include media-breakpoint-up(md) {
        padding: 40px;
      }
    }

    &__name {
      font-weight: 700;
      @include media-breakpoint-down(lg) {
        margin-bottom: 20px;
        font-size: 24px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 40px;
      }

      @include media-breakpoint-between(lg, xxl) {
        font-size: 28px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 40px;
      }
    }

    &__text {
      color: #838383;

      @include media-breakpoint-down(lg) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-between(lg, xxl) {
        font-size: 16px;
        line-height: 24px;
      }

      @include media-breakpoint-up(xxl) {
        font-size: 18px;
        line-height: 27px;
      }
    }
  }
</style>
