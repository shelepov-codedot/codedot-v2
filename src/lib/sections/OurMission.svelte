<script>
  import { createClient } from '@sanity/client'
  import imageUrlBuilder from '@sanity/image-url'

  let data, builder

  export async function _getProps() {
    const client = createClient({
      projectId: 'c6ki8epl',
      dataset: 'production',
      useCdn: true,
    })

    builder = imageUrlBuilder(client)
    const query = `*[_type=="OurMission"]`
    const section = await client.fetch(query)

    return {
      body: {
        section,
      },
    }
  }

  function urlFor(source) {
    return builder.image(source)
  }

  _getProps().then((res) => (data = res.body.section[0]))

  setTimeout(() => {
    console.log(data)
  }, 1000)
</script>

{#if data}
  <section class="ourmission">
    <div class="container">
      <div class="ourmission__wrapper">
        <p class="ourmission__text">
          {data.missionText}
        </p>
      </div>
    </div>
    <div class="ourmission__img-wrapper">
      <img src={urlFor(data.missionImage)} alt="" class="ourmission__img" />
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .ourmission {
    &__wrapper {
      display: flex;
      justify-content: center;

      @include media-breakpoint-down(sm) {
        padding: 100px 0;
      }

      @include media-breakpoint-between(sm, lg) {
        padding: 152px 0;
      }

      @include media-breakpoint-up(lg) {
        padding: 252px 0;
      }
    }
    &__text {
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: 24px;
        line-height: 36px;
        width: 100%;
      }

      @include media-breakpoint-up(md) {
        font-size: 40px;
        line-height: 60px;
        width: 70%;
      }
    }

    &__img-wrapper {
      width: 100%;
      position: relative;
      overflow: hidden;
      border-radius: 1000px;

      @include media-breakpoint-down(lg) {
        height: 700px;
      }

      @include media-breakpoint-up(lg) {
        height: 1080px;
      }
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      object-fit: cover;
      left: 0;
    }
  }
</style>
