<template>
  <div>
    <LandingPromo :landing="landing.main_sliders" />

    <section
      v-for="(data, index) in landing.content_blocks"
      :key="index"
    >
      <LandingInfo
        v-if="index === 0 && data.acf_fc_layout === 'wysiwyg'"
        :info="data"
      />

      <LandingPlace
        v-if="data.acf_fc_layout === 'text_block_with_image'"
        :place="data"
      />

      <LandingStories
        v-if="data.acf_fc_layout === 'featured_story'"
        :stories="data"
      />

      <LandingArticles
        v-if="index === 3 && data.acf_fc_layout === 'wysiwyg'"
        :articles="data"
      />

      <LandingListing
        v-if="data.acf_fc_layout === 'featured_property'"
        :listing="data"
      />

      <LandingQuestions
        v-if="data.acf_fc_layout === 'frequently_asked_questions'"
        :questions="data"
      />

      <LandingCompanies
        v-if="data.acf_fc_layout === 'logos'"
        :companies="data"
      />

      <LandingAgents
        v-if="data.acf_fc_layout === 'agents_carousel'"
        :agents="data"
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
    await store.dispatch('landing/getLanding')
  },

  head () {
    const params = {
      title: this.landing.meta_tags['twitter:title'],
      image: this.landing.meta_tags['twitter:image'],
      card: this.landing.meta_tags['twitter:card'],
      site: this.landing.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      landing: 'landing/landing',
    }),
  },

  mounted () {
    this.setIsDarkMode(false)
    console.log(this.landing)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
