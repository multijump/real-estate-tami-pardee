<template>
  <div>
    <RelocationMainSlider
      :list="relocation.main_sliders"
    />

    <RelocationReviews :reviews="relocation.content_data[0]" />

    <RelocationHelp
      :help="relocation.content_data[2]"
      :contact="relocation.content_data[3]"
    />

    <RelocationNeighborhoods :neighborhoods="relocation.content_data[4]" />

    <RelocationLocation
      :location="relocation.content_data[6]"
      :image="relocation.content_data[7]"
      :content="relocation.content_data[8]"
    />

    <RelocationLocation
      :location="relocation.content_data[10]"
      :image="relocation.content_data[11]"
      :content="relocation.content_data[12]"
      :is-common="false"
    />

    <RelocationLocation
      :location="relocation.content_data[14]"
      :image="relocation.content_data[15]"
      :content="relocation.content_data[16]"
    />

    <RelocationFind :find="relocation.content_data[17]" />

    <AppContactForm
      :form="relocation.form_data"
      :content="relocation.content_data[19]"
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
    await store.dispatch('relocation/getRelocation')
  },

  head () {
    const params = {
      title: this.relocation.meta_tags['twitter:title'],
      image: this.relocation.meta_tags['twitter:image'],
      card: this.relocation.meta_tags['twitter:card'],
      site: this.relocation.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      relocation: 'relocation/relocation',
    }),
  },
  mounted () {
    console.log(this.relocation)
  },

}
</script>
