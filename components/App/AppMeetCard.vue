<template>
  <div class="AppMeetCard">
    <div class="AppMeetCard__overlay" />

    <img
      v-if="item.image"
      class="img--bg"
      style="object-position: top"
      alt="meet"
      :src="item.image"
    >

    <img
      v-else
      class="img--bg"
      alt="meet"
      :src="cropUrl"
    >

    <div
      class="AppMeetCard__video"
    >
      <PlayImage
        v-if="item.video"
        class="AppMeetCard__play"
        @click.prevent="openMeetModal"
      />
    </div>

    <div class="AppMeetCard__text">
      <h4
        v-if="item.link.title"
        class="AppMeetCard__title"
      >
        {{ item.link.title }}
      </h4>

      <AppLink
        v-if="!item.video"
        color="white"
        text="Read more"
        :with-arrow="true"
        :navigate-to="item.link.url"
      />
      <AppLink
        v-if="item.video"
        color="white"
        text="Play Video"
        :with-arrow="true"
        navigate-to="#"
        @click.native="openMeetModal"
      />
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
      const url = this.item.video.replace('https://youtu.be/', '')

      return `https://img.youtube.com/vi/${url}/maxresdefault.jpg`
    },
  },

  methods: {
    openMeetModal (e) {
      e.preventDefault()
      const url = this.item.video.replace('https://www.youtube.com/watch?v=', '')

      const options = {
        id: url,
      }

      this.$modal.show(AppVideoModal, options)
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppMeetCard {
    position: relative;
    height: 100%;
    min-height: 210px;
    width: 100%;
    background: $grey;

    &__overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 140px;
      width: 100%;
      z-index: 1;
      background: linear-gradient(180deg, rgba(31, 32, 33, 0) 0%, rgba(31, 32, 33, 0.8) 100%);
    }

    &__video {
      z-index: 2;
      position: absolute;
      padding: 28px;
      top: 0;
      left: 0;
      width: 100%;
    }

    &__play {
      transition: .3s ease;
      cursor: pointer;

      &:hover {
        opacity: .7;
      }
    }

    &__text {
      z-index: 2;
      position: absolute;
      padding: 28px;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    &__title {
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      color: $white;
      padding-bottom: 7px;
    }
  }

</style>
