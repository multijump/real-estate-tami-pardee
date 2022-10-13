<template>
  <div>
    <LookingBuyMain :main="buy.main_sliders" />

    <LookingBuyHelp :help="buy.content_data[0]" />

    <LookingBuyAfford :afford="buy.content_data[1]" />

    <LookingBuyAgent :agent="buy.content_data[2]" />

    <LookingBuyRental :rental="buy.content_data[3]" />

    <LookingBuyProof :proof="buy.content_data[4]" />

    <AppContactForm
      :form="buy.form_data"
      :content="buy.content_data[6]"
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
    await store.dispatch('looking-buy/getBuy')
  },

  head () {
    const params = {
      title: this.buy.meta_tags['twitter:title'],
      image: this.buy.meta_tags['twitter:image'],
      card: this.buy.meta_tags['twitter:card'],
      site: this.buy.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      buy: 'looking-buy/buy',
    }),
  },

  mounted () {
    this.setIsDarkMode(false)
    console.log(this.buy)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
