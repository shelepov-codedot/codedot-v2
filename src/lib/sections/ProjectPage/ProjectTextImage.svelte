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
    const query = `*[_type=="ProjectTextImage"]`
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

  _getProps()
    .then((res) => (data = res.body.section[0]))
    .then((res) => console.log(res))
</script>

{#if data}
  <section class="project-text-image">
    <div class="container">
      <div class="project-text-image__wrapper">
        <div class="project-text-image__text-wrapper">
          <p class="project-text-image__name">{data.projectTitle}</p>
          <p class="project-text-image__text">
            {data.projectText}
          </p>
        </div>
        <div class="project-text-image__img-wrapper">
          <img src={urlFor(data.projectImage)} alt="" class="project-text-image__img" />
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .project-text-image {
    @include media-breakpoint-down(lg) {
      padding-top: 89px;
      padding-bottom: 89px;
    }
    @include media-breakpoint-up(lg) {
      padding-top: 219px;
      padding-bottom: 250px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
    }

    &__text-wrapper {
      display: flex;
      justify-content: space-between;

      @include media-breakpoint-down(lg) {
        flex-direction: column;
      }

      @include media-breakpoint-up(lg) {
        align-items: center;
      }
    }

    &__name {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        font-size: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 60px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 80px;
      }

      @include media-breakpoint-up(lg) {
        width: 940px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 105px;
      }
    }

    &__text {
      @include media-breakpoint-down(md) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 16px;
        line-height: 24px;
      }

      @include media-breakpoint-down(lg) {
        margin-top: 28px;
      }
      @include media-breakpoint-up(lg) {
        width: 520px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 18px;
        line-height: 27px;
      }
    }

    &__img-wrapper {
      border-radius: 40px;
      overflow: hidden;
      position: relative;
      width: 100%;

      @include media-breakpoint-down(md) {
        height: 320px;
      }

      @include media-breakpoint-down(lg) {
        margin-top: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        height: 400px;
      }

      @include media-breakpoint-between(lg, xl) {
        height: 600px;
      }

      @include media-breakpoint-between(xl, xxl) {
        height: 700px;
      }

      @include media-breakpoint-up(lg) {
        margin-top: 68px;
      }

      @include media-breakpoint-up(xxl) {
        height: 900px;
      }
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
