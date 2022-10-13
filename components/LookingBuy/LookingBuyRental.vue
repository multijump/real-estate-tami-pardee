<template>
  <section class="LookingBuyRental">
    <div class="LookingBuyRental__bg" />

    <img
      class="LookingBuyRental__image"
      :src="rental.background_image.url"
      alt="img"
    >

    <div class="LookingBuyRental__block">
      <p class="LookingBuyRental__subtitle">
        {{ rental.content }}
      </p>

      <AppLinkButton
        color="pink"
        :text="rental.cta_link.title.toUpperCase()"
        :navigate-to="rental.cta_link.url"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    rental: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LookingBuyRental {
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
