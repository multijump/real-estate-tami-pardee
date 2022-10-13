<template>
  <div class="PageVerticalSliderItem">
    <div class="PageVerticalSliderItem__overlay" />

    <img
      v-if="item.featured_image"
      :src="item.featured_image"
      class="img--bg"
      alt=""
    >

    <div class="PageVerticalSliderItem__content">
      <div class="PageVerticalSliderItem__text">
        <h3 class="PageVerticalSliderItem__title">
          {{ item.items_on_banner.banner_title }}
        </h3>

        <div class="PageVerticalSliderItem__tags">
          <div
            v-for="(tag, index) in item.items_on_banner.banner_tags"
            :key="index"
            class="PageVerticalSliderItem__tags-item"
          >
            <p>
              {{ tag.tags_on_banner }}
            </p>
          </div>
        </div>
      </div>

      <div class="PageVerticalSliderItem__action">
        <AppLinkButton
          color="pink"
          :text="`${item.items_on_banner.explore_button_text}`"
          :navigate-to="getUrl()"
        />
      </div>
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

  methods: {
    redirect () {
      window.open(`/communities/${this.item.post_title.replaceAll(' ', '-').toLowerCase()}/${this.item.ID}`, '_self')
    },

    getUrl () {
      return `/communities/${this.item.post_title.toLowerCase().replace(/\s/g, '-')}`
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageVerticalSliderItem {
    position: relative;
    width: 100%;
    max-height: 620px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    background: $grey;

    &__overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 1;
      height: 155px;
      background: linear-gradient(180deg, rgba(31, 32, 33, 0) 0%, rgba(31, 32, 33, 0.8) 100%);
    }

    &__content {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      z-index: 3;
      padding: 44px 95px 42px 114px;
      width: 100%;
    }

    &__title {
      font-weight: bold;
      font-size: 28px;
      line-height: 120%;
      color: #FFFDFC;
    }

    &__tags {
      display: flex;

      &-item {
        margin-right: 23px;

        p {
          font-weight: 600;
          font-size: 18px;
          line-height: 120%;
          text-decoration-line: underline;
          color: #FFFDFC;
        }

        &:not(:last-of-type) {
          margin-right: 23px;
        }
      }
    }
  }
</style>
