<template>
  <div>
    <ClientOnly>
      <vimeo-player
        v-if="getSocialVideoService(url) === 'vimeo'"
        ref="player"
        :video-id="getSocialVideoId(url)"
        :options="options"
      />

      <youtube
        v-if="getSocialVideoService(url) === 'youtube'"
        :video-id="getSocialVideoId(url)"
        player-width="100%"
        :player-height="500"
        :player-vars="options"
      />

      <video
        v-if="getSocialVideoService(url) === 'local'"
        id="video"
        width="100%"
        height="100%"
        autoplay
        muted
      >
        <source
          :src="url"
          type="video/mp4"
        >
      </video>

      <div class="iframe--wrapper">
        <iframe
          v-if="getSocialVideoService(url) === 'iframe'"
          class="iframe--content"
          :src="getUrls(url)"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </ClientOnly>
  </div>
</template>

<script>
import getVideoId from 'get-video-id'

export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {},
    }
  },

  methods: {
    getSocialVideoId (url) {
      const { id } = getVideoId(url)

      return `${id}`
    },

    getSocialVideoService (url) {
      const { service } = getVideoId(url)

      let videoService = service?.replace(/\s/g, '')
      if (videoService === 'vimeo' || videoService === 'youtube') {
        videoService = service
      } else if ((/.mp4/g).test(url)) {
        videoService = 'local'
      } else {
        videoService = 'iframe'
      }

      return videoService
    },

    getUrls (url) {
      if ((/my.matterport.com/g).test(url)) {
        return `${url}&title=0&play=1&tiles=1&vr=0&qs=1&help=2&tourcta=2&hlr=2&rf-experience=`
      } else {
        return url
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .iframe--wrapper {
    width: 100%;
    height: 100%;
    min-height: 520px;
  }
  .iframe--content {
    width: 100%;
    height: 520px;
  }
</style>
