<template>
  <section class="PageCtaBgPhoto">
    <img
      class="PageCtaBgPhoto__image"
      :src="content.background_image.url"
      alt="img"
    >

    <div class="PageCtaBgPhoto__block">
      <h3 class="PageCtaBgPhoto__title">
        {{ content.headline }}
      </h3>

      <p class="PageCtaBgPhoto__subtitle">
        {{ content.content }}
      </p>

      <AppLinkButton
        v-if="content && content.cta_link"
        color="pink"
        :text="content.cta_link.title.toUpperCase()"
        :navigate-to="content.cta_link.url"
      />
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
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageCtaBgPhoto {
    position: relative;

    &__image {
      width: 100%;
      max-height: 700px;
      height: 100%;
      object-fit: cover;
    }

    &__block {
      position: absolute;
      padding: 30px 0;
      width: 100%;
      bottom: 0;
      left: 0;
      text-align: center;
      background-color: rgba(0, 59, 92, .35);
    }

    &__title {
      line-height: 1;
      color: #fff;
      text-shadow: 1px 1px 5px rgb(50 50 50 / 40%);
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 1.0rem;
      letter-spacing: 0px;
    }

    &__subtitle {
      font-size: 16px;
      color: #fff;
      margin: 12px 0;
      text-shadow: 1px 1px 5px rgb(50 50 50 / 40%);
      font-weight: 300;
      line-height: 1.5;
    }

    @media (min-width: $medium-devices-width) {
      &__title {
        font-size: 44px;
        margin-bottom: 1.5rem;
      }

      &__subtitle {
        font-size: 22px;
      }

      &__block {
        padding: 60px 0;
      }
    }

    @media (min-width: $large-devices-width) {
      &__block {
        bottom: 30%;
      }
    }
  }
</style>
