<template>
  <div class="CommunityFavoritesVerticalSliderItem">
    <img
      v-if="item.community_favourite_image"
      :src="item.community_favourite_image"
      class="img--bg"
      :alt="`${item.community_favourite_name} Photo`"
    >

    <div class="CommunityFavoritesVerticalSliderItem__content">
      <h3 class="CommunityFavoritesVerticalSliderItem__title">
        {{ item.community_favourite_name }}
      </h3>

      <p
        class="CommunityFavoritesVerticalSliderItem__info"
        v-html="item.community_favourite_description"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityFavoritesVerticalSliderItem {
    position: relative;
    width: 100%;
    max-height: 620px;
    height: 100%;
    background: $grey;

    &__content {
      position: absolute;
      bottom: -100px;
      left: 50%;
      transform: translateX(-50%);
      background: #FFFDFC;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
      width: 80%;
      z-index: 3;
      padding: 30px 24px;
    }

    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 120%;
    }

    &__info {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 120%;
      color: #000000;
    }
  }
</style>
