<template>
  <section class="PageTextBlockWithImage">
    <div class="PageTextBlockWithImage__block">
      <div class="PageTextBlockWithImage__content">
        <AppSectionTitle
          :title="content.headline"
          :lead="content.body"
          color="blue"
        />

        <AppLinkButton
          class="mt-50"
          :text="content.link.title"
          color="orange"
          :navigate-to="content.link.url"
        />

        <div class="PageTextBlockWithImage__image">
          <img :src="content.image.url" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    redirect () {
      window.open(`${this.place.link.url}`, '_blank')
    },
  },
}
</script>
<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageTextBlockWithImage {
    position: relative;
    padding-bottom: 190px;

    &__block {
      padding: 60px 30px 165px;
      background: $rose-white;
    }

    &__image {
      position: absolute;
      bottom: -180px;
      right: 50%;
      transform: translate(50%, -50%);

      img {
          max-width: 320px;
          max-height: 320px;
          height: 100%;
          object-fit: cover;
      }
    }

    @media (min-width: $medium-devices-width) {
      &__image {
        position: absolute;
        bottom: -280px;
        right: 50%;

        img {
            max-width: 400px;
            width: 100%;
            max-height: 400px;
            height: 100%;
            object-fit: cover;
        }
      }
    }

    @media (min-width: $large-devices-width) {
      width: 90%;
      padding: 0 65px;

      &__block {
        padding: 60px 450px 165px 30px;
      }

      &__image {
        top: 10%;
        bottom: 10%;
        right: -25px;
        transform: unset;
        max-height: 500px;

        img {
          max-width: 500px;
          width: 100%;
          max-height: 500px;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
</style>
