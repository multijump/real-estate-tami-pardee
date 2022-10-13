<template>
  <div>
    <LifeProgramMainSlider
      :list="life.main_sliders"
    />

    <LifeProgramQuote :quote="life.content_data[0]" />

    <LifeProgramPartnerships :partnerships="life.content_data[1]" />

    <LifeProgramSupport :support="life.content_data[2]" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('header/getHeader')
    await store.dispatch('footer/getFooter')
    await store.dispatch('life-program/getLife')
  },

  head () {
    const params = {
      title: this.life.meta_tags['twitter:title'],
      image: this.life.meta_tags['twitter:image'],
      card: this.life.meta_tags['twitter:card'],
      site: this.life.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      life: 'life-program/life',
    }),
  },

  mounted () {
    this.setIsDarkMode(false)
    console.log(this.life)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
