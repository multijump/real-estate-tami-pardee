<template>
  <div>
    <AboutUsMain
      v-if="aboutUs && aboutUs.main_sliders"
      :main="aboutUs.main_sliders"
    />

    <AboutUsWhoWeAre
      v-if="aboutUs && aboutUs.content_data[0]"
      :who-we-are="aboutUs.content_data[0]"
    />

    <AboutUsMeetTeam
      v-if="aboutUs && aboutUs.content_data[1]"
      :meet="aboutUs.content_data[1]"
    />

    <AboutUsPartners
      v-if="aboutUs && aboutUs.content_data[3]"
      :partners="aboutUs.content_data[3]"
    />

    <AboutUsPartners
      v-if="aboutUs && aboutUs.content_data[4]"
      :partners="aboutUs.content_data[4]"
    />

    <AboutUsOurWork
      v-if="aboutUs && aboutUs.content_data[5]"
      :work="aboutUs.content_data[5]"
    />

    <AboutUsServices
      v-if="aboutUs && aboutUs.content_data[7]"
      :services="aboutUs.content_data[7]"
    />

    <AboutUsRelocating
      v-if="aboutUs && aboutUs.content_data[9]"
      :relocating="aboutUs.content_data[9]"
    />

    <AboutUsCulture
      v-if="aboutUs && aboutUs.content_data[11]"
      :culture="aboutUs.content_data[11]"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('footer/getFooter')
    await store.dispatch('header/getHeader')
    await store.dispatch('about-us/getAboutUs')
  },

  head () {
    const params = {
      title: this.aboutUs.meta_tags['twitter:title'],
      image: this.aboutUs.meta_tags['twitter:image'],
      card: this.aboutUs.meta_tags['twitter:card'],
      site: this.aboutUs.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      aboutUs: 'about-us/aboutUs',
    }),
  },

  mounted () {
    this.setIsDarkMode(false)
    console.log(this.aboutUs)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  }
}
</script>
