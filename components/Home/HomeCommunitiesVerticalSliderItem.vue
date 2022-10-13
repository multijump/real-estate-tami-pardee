<template>
  <div class="HomeCommunitiesVerticalSliderItem">
    <div class="HomeCommunitiesVerticalSliderItem__overlay" />

    <img
      v-if="item.featured_image"
      :src="item.featured_image"
      class="img--bg"
      alt="Community featured image"
    >

    <div class="HomeCommunitiesVerticalSliderItem__content">
      <div class="HomeCommunitiesVerticalSliderItem__text">
        <h3 class="HomeCommunitiesVerticalSliderItem__title">
          {{ item.items_on_banner.banner_title }}
        </h3>

        <div class="HomeCommunitiesVerticalSliderItem__tags">
          <div
            v-for="(tag, index) in item.items_on_banner.banner_tags"
            :key="index"
            class="HomeCommunitiesVerticalSliderItem__tags-item"
          >
            <p>
              {{ tag.tags_on_banner }}
            </p>
          </div>
        </div>
      </div>

      <div class="HomeCommunitiesVerticalSliderItem__action">
        <AppLinkButton
          color="pink"
          :text="`${item.items_on_banner.explore_button_text}`"
          :navigate-to="getUrl()"
          @keydown.native="moveFocus"
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
    index: {
      type: Number,
      default: 0,
    },
    length: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    redirect () {
      window.open(`/communities/${this.item.post_title.replaceAll(' ', '-').toLowerCase()}/${this.item.ID}`, '_self')
    },

    getUrl () {
      return `/communities/${this.item.post_title.toLowerCase().replace(/\s/g, '-')}`
    },

    moveFocus (event) {
      if (event.key === 'Tab' && !event.shiftKey && this.index < this.length) {
        event.preventDefault()
        this.$nuxt.$emit('home:community:slider:move:next', this.index + 1)
      } else if (event.key === 'Tab' && event.shiftKey && this.index > 0) {
        event.preventDefault()
        this.$nuxt.$emit('home:community:slider:move:prev', this.index - 1)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .HomeCommunitiesVerticalSliderItem {
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
        }
      }
    }
  }
</style>
