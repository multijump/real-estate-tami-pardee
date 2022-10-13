<template>
  <div class="LandingListing">
    <div class="LandingListing__bg" />

    <div class="LandingListing__title">
      <AppSectionTitle
        :title="listing.headline"
        class="text-center"
        style="z-index: 1000"
      />
    </div>

    <div class="LandingListing__wrapper">
      <img class="LandingListing__image" src="~/assets/images/slide.png" alt="Featured Property Background Image">

      <AppNewListing
        v-if="listing.mls_data"
        :badge="listing.mls_data"
        skip-map="faqs"
        class="d-block d-lg-flex LandingListing--featured"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listing: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LandingListing {
    position: relative;

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #FFF2F8;
    }

    &__wrapper {
      position: relative;
    }

    &__image {
      position: relative;
      z-index: 2;
      width: 100%;
      object-fit: cover;
    }

    &__title {
      position: relative;
      padding-bottom: 0;
      text-align: center;
      z-index: 2;
      padding: 50px 0 40px;
    }

    @media (min-width: $large-devices-width) {
      padding-bottom: 190px;

      &__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 70%;
        background: #FFF2F8;
      }

      &__wrapper {
        margin: 0 auto;
        width: 80%;
      }

      &__title {
        padding: 60px 0 24px;
      }
    }

    &--featured {
      position: relative;
      background: #FFFDFC;
      width: 100%;
      z-index: 3;
      display: flex;
      justify-content: space-between;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

      @media (min-width: $large-devices-width) {
        position: absolute;
        bottom: -130px;
        right: 6%;
        max-width: 715px;
      }
    }
  }
</style>
