<template>
  <swiper-slide v-if="item.community_favourite_image">
    <div class="CommunityFavoritesHorizontalSliderItem">
      <div class="CommunityFavoritesHorizontalSliderItem__bg" />
      <img
        v-if="item.community_favourite_image"
        :src="item.community_favourite_image"
        class="CommunityFavoritesHorizontalSliderItem__image"
        :alt="`${item.community_favourite_name} Photo`"
      >

      <div class="CommunityFavoritesHorizontalSliderItem__content">
        <h3 class="CommunityFavoritesHorizontalSliderItem__title">
          {{ item.community_favourite_name }}
        </h3>

        <p
          class="CommunityFavoritesHorizontalSliderItem__info"
          v-html="item.community_favourite_description"
        />
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    redirect () {
      window.open(`${this.item.items_on_banner.explore_button_link}`, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityFavoritesHorizontalSliderItem {
    position: relative;
    width: 100%;
    min-height: 450px;
    height: 100%;

     &__bg {
      background: $lighter-blush;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 75%;
    }

    &__image {
      width: 100%;
      position: relative;
    }

    &__content {
      position: absolute;
      bottom: 10px;
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
