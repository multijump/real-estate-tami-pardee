<template>
  <div>
    <LookingSellMain
      :main="sell.main_sliders"
    />

    <LookingSellWorks
      :works="sell.content_data[0]"
    />

    <LookingSellProactive
      :proactive="sell.content_data[1]"
    />

    <LookingSellAgent
      :agent="sell.content_data[2]"
    />

    <!-- <LookingSellCover
      :cover="sell.content_data[3]"
    /> -->

    <LookingSellRent
      :rent="sell.content_data[4]"
    />

    <LookingSellProof
      :proof="sell.content_data[5]"
    />

    <AppContactForm
      :form="sell.form_data"
      :content="sell.content_data[6]"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('header/getHeader')
    await store.dispatch('footer/getFooter')
    await store.dispatch('looking-sell/getSell')
  },

  head () {
    const params = {
      title: this.sell.meta_tags['twitter:title'],
      image: this.sell.meta_tags['twitter:image'],
      card: this.sell.meta_tags['twitter:card'],
      site: this.sell.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      sell: 'looking-sell/sell',
    }),
  },

  mounted () {
    this.setIsDarkMode(false)
    console.log(this.sell)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
