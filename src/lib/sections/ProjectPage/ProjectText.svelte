<script>
  import { createClient } from '@sanity/client'

  let data

  export async function _getProps() {
    const client = createClient({
      projectId: 'c6ki8epl',
      dataset: 'production',
      useCdn: true,
    })

    const query = `*[_type=="ProjectText"]`
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
  <section class="project-text">
    <div class="container">
      <div class="project-text__wrapper">
        <p class="project-text__text">
          {data.projectText}
        </p>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .project-text {
    &__wrapper {
      @include media-breakpoint-down(md) {
        padding: 100px 0;
      }
      @include media-breakpoint-between(md, lg) {
        padding: 100px;
      }
      @include media-breakpoint-between(lg, xl) {
        padding: 250px 100px;
      }

      @include media-breakpoint-between(xl, xxl) {
        padding: 250px 150px;
      }
      @include media-breakpoint-up(xxl) {
        padding: 250px 255px;
      }
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
