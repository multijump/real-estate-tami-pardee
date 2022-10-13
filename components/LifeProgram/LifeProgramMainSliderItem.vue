<template>
  <swiper-slide>
    <div class="CommunityPromoSliderItem">
      <div class="CommunityPromoSliderItem__bg--top" />
      <div class="CommunityPromoSliderItem__bg--bottom" />

      <template v-if="type === 'video_slider'">
        <AppVideoPlayer
          :url="item.url"
        />
      </template>

      <img
        v-if="type === 'image_slider' && item.url"
        class="img--bg"
        :src="item.url"
        alt=""
      >

      <div class="CommunityPromoSliderItem__content container">
        <AppSectionTitle
          v-if="item.title"
          :display="pretitle"
          :title="title"
          color="white"
        />

        <AppLinkButton
          color="pink"
          type="small"
          :text="link.title.toUpperCase()"
          :navigate-to="link.url"
          :target="link.target"
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
    type: {
      type: String,
      default: 'image_slider'
    },
    pretitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    link: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityPromoSliderItem {
    height: 100%;
    display: flex;
    align-items: flex-end;
    background: $grey;

    &__bg--top {
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(180deg, rgba(31, 32, 33, 0.8) 0%, rgba(31, 32, 33, 0) 100%);
      max-height: 150px;
      width: 100%;
      height: 100%;
      z-index: 2;
    }

    &__bg--bottom {
      position: absolute;
      left: 0%;
      bottom: 0;
      width: 100%;
      max-height: 434px;
      height: 100%;
      background: linear-gradient(180deg, rgba(31, 32, 33, 0) 0%, rgba(31, 32, 33, 0.8) 100%);
      z-index: 2;
    }

    &__content {
      position: relative;
      z-index: 3;
      padding: 25px 25px 50px;
      width: 100%;
    }
  }
</style>
