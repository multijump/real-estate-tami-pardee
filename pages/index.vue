<template>
  <div>
    <HomePromo
      :home="home.main_sliders"
      @activeIndex="activeIndex"
    />

    <HomeNewListing
      :badge="home.main_sliders[activeSlideIndex].mls_data"
      class="d-block d-md-none"
    />

    <HomeSearch :badge="home.main_sliders[activeSlideIndex].mls_data" />

    <section
      v-for="(data, index) in home.content_blocks"
      :key="index"
    >
      <HomeMeet
        v-if="data.acf_fc_layout === 'text_block_with_media_grid'"
        :meet="data"
      />

      <HomeLearn
        v-if="data.acf_fc_layout === 'tabbed_content'"
        :learn="data"
      />

      <HomeCommunities
        v-if="data.acf_fc_layout === 'communities_vertical_slider'"
        :communities="data"
      />

      <HomeNews
        v-if="data.acf_fc_layout === 'latest_news'"
        :news="data"
      />

      <HomeImageTabbed
        v-if="data.acf_fc_layout === 'tabbed_content_with_background'"
        :tabs="data"
      />

      <HomeContact
        v-if="data.acf_fc_layout === 'locations'"
        :contacts="data"
      />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('footer/getFooter')
    await store.dispatch('header/getHeader')
    await store.dispatch('home/getHome')
  },

  data () {
    return {
      activeSlideIndex: 0,
    }
  },

  head () {
    const params = {
      title: this.home.meta_tags['twitter:title'],
      image: this.home.meta_tags['twitter:image'],
      card: this.home.meta_tags['twitter:card'],
      site: this.home.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      home: 'home/home',
    }),
  },

  mounted () {
    this.setIsDarkMode(false)
    console.log(this.home)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),

    activeIndex (value) {
      this.activeSlideIndex = value
    }
  }
}
</script>
