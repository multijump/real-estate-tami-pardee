<template>
  <div>
    <MediaMain
      :main="media.main_sliders"
    />

    <MediaPress
      :press="media.press_data"
    />

    <MediaFeatured
      :featured="media.press_logos_section"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('header/getHeader')
    await store.dispatch('footer/getFooter')
    await store.dispatch('press-and-media/getMedia')
  },

  head () {
    const params = {
      title: this.media.meta_tags['twitter:title'],
      image: this.media.meta_tags['twitter:image'],
      card: this.media.meta_tags['twitter:card'],
      site: this.media.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      media: 'press-and-media/media',
    }),
  },

  mounted () {
    console.log(this.media)
  },
}
</script>
