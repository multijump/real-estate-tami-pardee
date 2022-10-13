
<template>
  <div>
    <ListingBackToSearch />

    <ListingGallery
      v-if="properties"
      :photos="properties.propertymlsid_data.photos"
      :tour="properties.propertymlsid_data.virtualTourUrl"
      :map="properties.propertymlsid_data.geo"
      class="d-block d-md-none"
    />

    <ListingOpenTime />

    <ListingInfo
      v-if="properties"
      :info="properties.propertymlsid_data"
    />

    <ListingGallery
      v-if="properties"
      :photos="properties.propertymlsid_data.photos"
      :tour="properties.propertymlsid_data.virtualTourUrl"
      :map="properties.propertymlsid_data.geo"
      class="d-none d-md-block"
    />

    <ListingShowing
      v-if="properties"
      :showing="properties.propertymlsid_data"
    />

    <!-- <ListingExplore /> -->

    <ListingListings
      :mlsid="properties.propertymlsid_data.mlsId"
      :properties="homes"
    />
  </div>
</template>

<script>
import queryString from 'query-string'

import { mapActions, mapGetters } from 'vuex'
// import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store, route }) {
    await store.dispatch('footer/getFooter')
    await store.dispatch('header/getHeader')
    await store.dispatch('properties-listing/getProperties', route.params.id)
  },

  // head () {
  //   const params = {
  //     title: this.landing.meta_tags['twitter:title'],
  //     image: this.landing.meta_tags['twitter:image'],
  //     card: this.landing.meta_tags['twitter:card'],
  //     site: this.landing.meta_tags['twitter:site'],
  //   }
  //   const headData = MetaTagsHelpers.generateHeadData(params)
  //   return headData
  // },

  computed: {
    ...mapGetters({
      header: 'header/header',
      properties: 'properties-listing/properties',
      homes: 'search-home/searchHome',
    }),
  },

  async mounted () {
    console.log(this.properties)
    this.setIsDarkMode(true)

    if (this.properties && this.properties.propertymlsid_data) {
      const searchHome = {}
      searchHome.cities = this.properties.propertymlsid_data.address.city
      searchHome.beds = this.properties.propertymlsid_data.property.bedrooms
      searchHome.baths = this.properties.propertymlsid_data.property.bathsFull
      searchHome.limit = 4

      const queryParams = queryString.stringify(searchHome, { arrayFormat: 'bracket' })
      await this.getSearchHome(queryParams)
    }
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
      getSearchHome: 'search-home/getSearchHome',
    }),
  },
}
</script>
