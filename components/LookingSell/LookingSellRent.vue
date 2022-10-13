<template>
  <section class="LookingSellRent">
    <div class="LookingSellRent__bg" />

    <img
      v-if="rent"
      class="LookingSellRent__image"
      :src="rent.background_image.url"
      alt="img"
    >

    <div class="LookingSellRent__block">
      <p class="LookingSellRent__title">
        {{ rent.content }}
      </p>

      <AppLinkButton
        color="pink"
        :text="rent.cta_link.title.toUpperCase()"
        :navigate-to="rent.cta_link.url"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    rent: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LookingSellRent {
    position: relative;

    &__bg {
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(180deg, rgba(31, 32, 33, 0.8) 0%, rgba(31, 32, 33, 0) 100%);
      max-height: 150px;
      width: 100%;
      height: 100%;
      z-index: 2;
    }

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
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 1.0rem;
      letter-spacing: 0px;
    }

    @media (min-width: $medium-devices-width) {
      &__title {
        font-size: 36px;
        margin-bottom: 1.5rem;
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
