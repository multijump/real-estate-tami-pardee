<template>
  <section class="CommunityNeighborhoods">
    <div class="CommunityNeighborhoods__title">
      <AppSectionTitle
        :title="neighborhoods.section_heading"
        class="text-center"
      />
    </div>

    <CommunityNeighborhoodsSlider v-if="Array.isArray(neighborhoods.slider_images)" :list="neighborhoods.slider_images" />

    <CommunityNeighborhoodsCard
      :card="neighborhoods.slider_overlay_text"
      class="d-block d-lg-flex"
    />
  </section>
</template>

<script>
export default {
  props: {
    neighborhoods: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityNeighborhoods {
    position: relative;

    &__title {
      padding-bottom: 40px;
    }

    @media (min-width: $large-devices-width) {
      padding-bottom: 150px;
    }
  }
</style>
