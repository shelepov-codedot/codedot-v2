<script>
  import { createClient } from '@sanity/client'

  let data

  export async function _getProps() {
    const client = createClient({
      projectId: 'c6ki8epl',
      dataset: 'production',
      useCdn: true,
    })

    const query = `*[_type=="Jobs"]`
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
  <section class="jobs">
    <div class="container">
      <div class="jobs__wrapper">
        <h2 class="jobs__title">{data.jobsTitle}</h2>
        <div class="jobs__search-wrapper">
          <input type="text" class="jobs__search" placeholder="Find your role..." />
          <button class="jobs__search-btn"><img src="../icons/Search.svg" alt="" /></button>
        </div>
        <div class="jobs__items">
          {#each data.jobsItems as jobItem}
            <div class="jobs__item">
              <div class="jobs__name-wrapper">
                <span class="jobs__exp">{jobItem.jobExp}</span>
                <p class="jobs__name">{jobItem.jobName}</p>
              </div>
              <div class="jobs__requirements">
                <span class="jobs__requirements-text">{jobItem.jobRequirements}</span>
                <a href={jobItem.jobLink} class="jobs__btn">
                  <img src="../icons/arrow-btn.svg" alt="" class="jobs__icon" />
                </a>
              </div>
            </div>
          {/each}
          <div class="jobs__item">
            <div class="jobs__cannot-wrapper">
              <p class="jobs__cannot">CANNOT FIND A SUITABLE VACANCY? DROP US A LINE</p>
              <a href="#" class="jobs__cannot-link">welcome@code.dot</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .jobs {
    @include media-breakpoint-down(xl) {
      padding-top: 90px;
      padding-bottom: 90px;
    }

    @include media-breakpoint-up(xl) {
      padding-top: 236px;
      padding-bottom: 236px;
    }
    &__title {
      font-weight: 600;

      @include media-breakpoint-down(lg) {
        font-size: 40px;
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
    }

    &__search-wrapper {
      position: relative;
      display: flex;
      align-items: center;

      @include media-breakpoint-down(md) {
        margin-top: 30px;
        margin-bottom: 40px;
      }

      @include media-breakpoint-up(md) {
        margin-top: 58px;
        margin-bottom: 40px;
      }

      @include media-breakpoint-up(md) {
        width: 582px;
      }
    }

    &__cannot-wrapper {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__cannot-link {
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 40px;
      background-color: black;
      color: white;
      font-family: Wix Madefor Display;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;

      @include media-breakpoint-down(sm) {
        padding: 6px 40px 6px 20px;
      }

      @include media-breakpoint-up(sm) {
        padding: 6px 50px 6px 20px;
      }

      &::after {
        position: absolute;
        background-image: url('../icons/arrow-btn.svg');
        content: '';
        width: 21px;
        height: 21px;
        transform: rotate(-45deg);
        right: 20px;
      }
    }

    &__cannot {
      font-weight: 700;
      text-align: center;
      margin-bottom: 40px;

      @include media-breakpoint-down(md) {
        font-size: 16px;
      }
      @include media-breakpoint-up(md) {
        font-size: 20px;
      }
    }

    &__search {
      width: 100%;
      padding: 15px 57px 15px 25px;
      border-radius: 40px;
      border: 1px solid #838383;
    }

    &__exp {
      padding: 8px 30px 8px 20px;
      color: white;
      background-color: black;
      border-radius: 40px;

      @include media-breakpoint-down(md) {
        font-size: 12px;
      }

      @include media-breakpoint-up(md) {
        font-size: 14px;
      }
    }

    &__search-btn {
      position: absolute;
      right: 15px;
      background-color: transparent;
      border: none;
    }

    &__icon {
      filter: brightness(0);
      width: 48px;
      height: 48px;
      transform: rotate(-45deg);
    }

    &__requirements {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__items {
      display: grid;
      gap: 40px;

      @include media-breakpoint-down(md) {
        grid-template-columns: 1fr;
      }

      @include media-breakpoint-between(md, lg) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include media-breakpoint-up(lg) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fafafa;
      border-radius: 40px;

      @include media-breakpoint-down(lg) {
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        padding-top: 27px;
        height: 300px;
      }

      @include media-breakpoint-up(lg) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 40px;
        padding-top: 47px;
        height: 320px;
      }
    }

    &__name {
      font-weight: 700;

      @include media-breakpoint-down(md) {
        padding-top: 26px;
      }

      @include media-breakpoint-down(lg) {
        font-size: 24px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 32px;
      }

      @include media-breakpoint-up(md) {
        padding-top: 27px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 40px;
      }
    }

    &__requirements-text {
      color: #838383;

      @include media-breakpoint-down(md) {
        font-size: 14px;
      }

      @include media-breakpoint-up(md) {
        font-size: 18px;
      }
    }
  }
</style>
