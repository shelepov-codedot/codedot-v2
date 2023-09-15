<script>
  import { createClient } from '@sanity/client'

  let data

  export async function _getProps() {
    const client = createClient({
      projectId: 'c6ki8epl',
      dataset: 'production',
      useCdn: true,
    })

    const query = `*[_type=="Code"]`
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
  <section class="code">
    <p class="code__text">{data.codeText}</p>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .code {
    @include media-breakpoint-up(lg) {
      padding-top: 150px;
      padding-bottom: 40px;
    }

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
