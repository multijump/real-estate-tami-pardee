<template>
  <section class="RelocationFind">
    <img
      class="RelocationFind__image"
      :src="find.background_image.url"
      alt="img"
    >

    <div class="RelocationFind__block">
      <h3 class="RelocationFind__title">
        {{ find.headline }}
      </h3>

      <p class="RelocationFind__subtitle">
        {{ find.content }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    find: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .RelocationFind {
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
