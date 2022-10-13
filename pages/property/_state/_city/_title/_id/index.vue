<template>
  <div>
    <PropertyBackToSearch
      class="d-block d-md-none"
    />

    <PropertyGallery
      v-if="propertiesAuthor.property_banner_tab_section"
      :gallery="propertiesAuthor.property_banner_tab_section"
      class="d-block d-md-none"
    />

    <PropertyOpenTime
      v-if="propertiesAuthor.property_open_houses"
      :time="propertiesAuthor.property_open_houses"
    />

    <PropertyInfo
      v-if="propertiesAuthor.property_top_section"
      :info="propertiesAuthor.property_top_section"
    />

    <PropertyGallery
      v-if="propertiesAuthor.property_banner_tab_section"
      :gallery="propertiesAuthor.property_banner_tab_section"
      class="d-none d-md-block"
    />

    <PropertyShowing
      v-if="propertiesAuthor.property_leftside_data && propertiesAuthor.property_rightside_data"
      :showing="propertiesAuthor.property_leftside_data"
      :listed-by="propertiesAuthor.property_rightside_data"
    />

    <PropertyExplore
      v-if="propertiesAuthor.communitydata"
      :explore="propertiesAuthor.communitydata[0].community"
    />

    <PropertyListings
      v-if="propertiesAuthor.similar_listings"
      :listings="propertiesAuthor.similar_listings"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store, route }) {
    await store.dispatch('footer/getFooter')
    await store.dispatch('header/getHeader')
    await store.dispatch('properties-listing/getPropertiesAuthor', route.params.id)
  },

  // head () {
  //   const params = {
  //     title: this.propertiesAuthor.meta_tags['twitter:title'],
  //     image: this.propertiesAuthor.meta_tags['twitter:image'],
  //     card: this.propertiesAuthor.meta_tags['twitter:card'],
  //     site: this.propertiesAuthor.meta_tags['twitter:site'],
  //   }

  //   const headData = MetaTagsHelpers.generateHeadData(params)

  //   return headData
  // },

  computed: {
    ...mapGetters({
      header: 'header/header',
      propertiesAuthor: 'properties-listing/propertiesAuthor',
    }),
  },

  mounted () {
    console.log(this.propertiesAuthor)
    this.setIsDarkMode(true)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },

}
</script>
