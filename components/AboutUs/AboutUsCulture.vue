<template>
  <section class="AboutUsCulture">
    <h2 class="AboutUsCulture__title">
      {{ culture.section_headline }}
    </h2>

    <div class="AboutUsCulture__wrapper">
      <div
        v-for="(item, index) in culture.video_entries"
        :key="index"
        class="AboutUsCulture__item"
      >
        <img
          class="AboutUsCulture__image"
          :src="item.thumbnail.url"
          alt="image"
        >

        <PlayImage
          v-if="item.video_url"
          class="AboutUsCulture__play"
          @click.prevent="openVideoModal(item.video_url)"
        />

        <h3 class="AboutUsCulture__name">
          {{ item.headline }}
        </h3>

        <p class="AboutUsCulture__subname">
          {{ item.subheadline }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import PlayImage from '~/assets/images/play.svg?inline'

import AppVideoModal from '~/components/App/AppVideoModal.vue'
export default {
  components: {
    PlayImage,
  },

  props: {
    culture: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    openVideoModal (url) {
      if (url) {
        const videoUrl = url.replace('https://www.youtube.com/embed/', '')

        const options = {
          id: videoUrl,
        }

        this.$modal.show(AppVideoModal, options)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AboutUsCulture {
    position: relative;
    padding: 40px 0;
    text-align: center;

    &__title {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #226492;
      margin-bottom: 1.5rem;
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &__item {
      max-width: 100%;
      position: relative;

      &:not(:last-of-type) {
        padding-bottom: 30px;
      }
    }

    &__image {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
    }

    &__play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: .75;
      transition: opacity .3s ease;

      &:hover {
        opacity: 1;
      }
    }

    &__name {
      font-size: 20px;
      padding-top: 8px;
      color: #212121;
      font-weight: 300;
      line-height: 1.3;
      font-style: normal;
    }

    &__subname {
      color: gray;
      font-family: 'Work Sans', sans-serif;
      font-weight: 300;
      line-height: 1.5;
      font-size: 18px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 38px;
      }

      &__item {
        max-width: 33%;

        &:not(:last-of-type) {
          padding-bottom: 0;
        }
      }
    }
  }
</style>
