<template>
  <section class="CommunityFavorites">
    <div class="CommunityFavorites__bg" />

    <div class="CommunityFavorites__title">
      <AppSectionTitle
        color="pink"
        :title="favorites.section_heading"
      />
    </div>

    <CommunityFavoritesVerticalSlider v-if="$device.isDesktop && Array.isArray(favorites.community_favourites_slider)" :list="favorites.community_favourites_slider" />
    <CommunityFavoritesHorizontalSlider v-else-if="Array.isArray(favorites.community_favourites_slider)" :list="favorites.community_favourites_slider" />
  </section>
</template>

<script>
export default {
  props: {
    favorites: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityFavorites {
    position: relative;
    padding: 80px 0 0;

    &__bg {
      display: none;
    }

    &__title {
      position: relative;
      padding-bottom: 0;
      text-align: center;
      z-index: 2;
    }

    @media (min-width: $medium-devices-width) {
      padding-top: 100px;

      &__title {
        padding-bottom: 10px;
      }
    }

    @media (min-width: $large-devices-width) {
      &__bg {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 65%;
        height: 100%;
        background: $lighter-blush;
      }
    }
  }
</style>
