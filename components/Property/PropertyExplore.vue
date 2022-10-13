<template>
  <section class="PropertyExplore">
    <PropertyExploreSlider :list="explore.slider_images" />

    <PropertyExploreCard
      :card="explore.slider_overlay_text"
      class="d-block d-lg-flex"
    />
  </section>
</template>

<script>
export default {
  props: {
    explore: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PropertyExplore {
    position: relative;

    @media (min-width: $large-devices-width) {
      padding-bottom: 150px;
    }
  }
</style>
