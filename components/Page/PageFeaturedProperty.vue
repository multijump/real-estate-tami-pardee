<template>
  <section class="PageFeaturedProperty">
    <div class="PageFeaturedProperty__bg" />

    <div class="PageFeaturedProperty__title">
      <AppSectionTitle
        :title="content.headline"
        class="text-center"
        style="z-index: 1000"
      />
    </div>

    <div class="PageFeaturedProperty__wrapper">
      <img class="PageFeaturedProperty__image" src="~/assets/images/slide.png" alt="">

      <AppNewListing
        v-if="content.mls_data"
        :badge="content.mls_data"
        class="d-block d-lg-flex PageFeaturedProperty--featured"
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

  .PageFeaturedProperty {
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
