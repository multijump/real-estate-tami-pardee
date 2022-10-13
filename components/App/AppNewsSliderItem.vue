<template>
  <div class="AppNewsSliderItem">
    <div class="AppNewsSliderItem__overlay" />

    <img
      v-if="item.post_image"
      :src="item.post_image"
      class="img--bg"
      alt="image"
    >

    <img
      v-else
      :src="cropUrl"
      class="img--bg"
      alt="image"
    >

    <div class="AppNewsSliderItem__content">
      <div class="AppNewsSliderItem__image">
        <PlayImage
          v-if="item.post_video"
          class="AppNewsSliderItem__play"
          @click.prevent="openNewsModal"
        />

        <img
          v-if="item.post_thumbnail"
          :src="item.post_thumbnail"
          alt="logo"
        >
      </div>

      <div class="AppNewsSliderItem__text">
        <h3 class="AppNewsSliderItem__title">
          {{ item.post_title }}
        </h3>

        <AppLink
          type="small"
          color="white"
          text="Read More"
          :with-arrow="true"
          :navigate-to="'/blog/' + item.post_name + '/' + item.ID"
        />
      </div>
    </div>

    <div class="AppNewsSliderItem__date">
      <p>{{ $moment().format('ll') }}</p>
    </div>
  </div>
</template>

<script>
import PlayImage from '~/assets/images/play.svg?inline'

import AppVideoModal from '~/components/App/AppVideoModal.vue'
export default {
  components: {
    PlayImage,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    cropUrl () {
      if (this.item.post_video) {
        const url = this.item.post_video.replace('https://youtu.be/', '')

        return `https://img.youtube.com/vi/${url}/maxresdefault.jpg`
      }

      return null
    },
  },

  methods: {
    openNewsModal () {
      if (this.item.post_video) {
        const url = this.item.post_video.replace('https://youtu.be/', '')

        const options = {
          id: url,
        }

        this.$modal.show(AppVideoModal, options)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppNewsSliderItem {
    position: relative;
    max-width: 320px;
    width: 100%;
    max-height: 320px;
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
      flex-direction: column;
      z-index: 3;
      width: 100%;
      height: inherit;
    }

    &__image {
      padding: 20px;

      img {
        max-width: 120px;
        max-height: 120px;
      }
    }

    &__text {
      padding: 20px;
    }

    &__title {
      padding-bottom: 6px;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      display: flex;
      align-items: flex-end;
      color: $white;
    }

    &__play {
      cursor: pointer;
      &:hover {
        opacity: .7;
      }
    }

    &__date {
      position: absolute;
      bottom: -25px;
      left: 20px;
      z-index: 10;
      font-weight: 600;
      font-size: 14px;
      line-height: 140%;
    }
  }
</style>
