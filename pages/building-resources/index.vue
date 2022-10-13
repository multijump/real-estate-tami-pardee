<template>
  <div>
    <BuildingResourcesMain
      :image="resources.main_sliders.image"
      :title="resources.main_sliders.title"
      :subtitle="resources.main_sliders.subtitle"
    />

    <BuildingResourcesIntro :intro="resources.page_content_intro" />

    <BuildingResourcesArchitects :architects="resources.content_data" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('header/getHeader')
    await store.dispatch('footer/getFooter')
    await store.dispatch('building-resources/getResources')
  },

  head () {
    const params = {
      title: this.resources.meta_tags['twitter:title'],
      image: this.resources.meta_tags['twitter:image'],
      card: this.resources.meta_tags['twitter:card'],
      site: this.resources.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      resources: 'building-resources/resources',
    }),
  },

  mounted () {
    this.setIsDarkMode(false)
    console.log(this.resources)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
