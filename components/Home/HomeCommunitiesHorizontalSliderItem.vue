<template>
  <swiper-slide v-if="item.items_on_banner">
    <div class="HomeCommunitiesHorizontalSliderItem">
      <img
        v-if="item.featured_image"
        :src="item.featured_image"
        class="HomeCommunitiesHorizontalSliderItem__image"
        alt="Community featured image"
      >

      <div class="HomeCommunitiesHorizontalSliderItem__content">
        <div class="HomeCommunitiesHorizontalSliderItem__text">
          <h3 class="HomeCommunitiesHorizontalSliderItem__title">
            {{ item.items_on_banner.banner_title }}
          </h3>

          <div class="HomeCommunitiesHorizontalSliderItem__tags">
            <div
              v-for="(tag, index) in item.items_on_banner.banner_tags"
              :key="index"
              class="HomeCommunitiesHorizontalSliderItem__tags-item"
            >
              <p>
                {{ tag.tags_on_banner }}
              </p>
            </div>
          </div>
        </div>

        <div class="HomeCommunitiesHorizontalSliderItem__action">
          <AppLinkButton
            color="pink"
            :text="`${item.items_on_banner.explore_button_text}`"
            :navigate-to="item.items_on_banner.explore_button_link"
          />
        </div>
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

  .HomeCommunitiesHorizontalSliderItem {
    position: relative;
    width: 100%;
    min-height: 450px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: $lighter-blush;

    &__image {
      width: 100%;
      position: relative;
    }

    &__content {
      position: relative;
      display: flex;
      flex-direction: column;
      z-index: 3;
      padding: 20px 25px 35px 20px;
    }

    &__title {
      font-weight: bold;
      font-size: 28px;
      line-height: 120%;
      color: #1F2021;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 0 30px;

      &-item {
        margin-right: 23px;
        margin-bottom: 0;
        background: #F2F2F2;
        border-radius: 20px;

        p {
          padding: 2px 5px;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 140%;
          color: #4F4F4F;
        }

        &:not(:last-of-type) {
          margin-right: 23px;
          margin-bottom: 23px;
        }
      }
    }
  }
</style>
