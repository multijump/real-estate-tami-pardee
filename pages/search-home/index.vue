<template>
  <div>
    <SearchHomeFilterMobile
      class="d-block d-lg-none"
      :search="data"
      :is-map="isMap"
      @changeMap="isMapActive"
      @changeView="changeView"
      @checkIsAuthor="checkIsAuthor"
    />

    <SearchHomeFilterDesktop
      class="d-none d-lg-block"
      :search="data"
      :is-map="isMap"
      @changeMap="isMapActive"
      @changeView="changeView"
      @checkIsAuthor="checkIsAuthor"
    />

    <SearchHomeListingsTile
      v-if="!isMap && tableView"
      :listing="checkData"
      :is-author="isAuthor"
    />

    <SearchHomeListingsTileMap
      v-if="isMap"
      :listing="checkData"
      :is-author="isAuthor"
    />

    <SearchHomeListingsList
      v-if="!tableView"
      :listing="checkData"
      :is-author="isAuthor"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('footer/getFooter')
    await store.dispatch('header/getHeader')
    await store.dispatch('search-home/getSearchHome')
    await store.dispatch('search-home/getSearchHomeByAuthor')
  },

  data () {
    return {
      isMap: false,
      tableView: true,
      isAuthor: false,
      currentPage: 1,

      data: {
        title: 'Property search',
        properties: 'Showing all properties',
        properties_checkbox: 'Only show properties listed by Pardee',
        form: {
          location: {
            label: 'Location:',
            placeholder: 'Search by city, zip code, or address.',

          },
          lifestyle: {
            label: 'Search By Lifestyle:',
            list: [
              { value: '' },
              { value: 'Residential' },
              { value: 'Condominium' },
              { value: 'Rental' },
              { value: 'Commercial' },
              { value: 'Land' },
            ]
          },
          sort_by: {
            label: 'Sort by:',
            list: [
              { value: 'listdate', text: 'List Date - New to Old' },
              { value: '-listdate', text: 'List Date - Old to New' },
              { value: '-listprice', text: 'Price - High to Low' },
              { value: 'listprice', text: 'Price - Low to High' },
            ]
          },
          type: {
            label: 'Type:',
            list: [
              { text: 'Single Family Residential', value: 'residential' },
              { text: 'Rental', value: 'rental' },
              { text: 'Mobile Home', value: 'mobilehome' },
              { text: 'Condominium', value: 'condominium' },
              { text: 'Multi Family', value: 'multifamily' },
              { text: 'Commercial', value: 'commercial' },
              { text: 'Land', value: 'land' },
            ]
          },
          price: {
            label: 'Price:',
            from: [
              { value: 0, text: 'No Min' },
              { text: '$250k', value: 250000 },
              { text: '$500k', value: 500000 },
              { text: '$750k', value: 750000 },
              { text: '$1m', value: 1000000 },
              { text: '$1.25m', value: 1250000 },
              { text: '$1.5m', value: 1500000 },
              { text: '$1.75m', value: 1750000 },
              { text: '$2m', value: 2000000 },
              { text: '$2.25m', value: 2250000 },
              { text: '$2.5m', value: 2500000 },
              { text: '$2.75m', value: 2750000 },
              { text: '$3m', value: 3000000 },
              { text: '$3.25m', value: 3250000 },
              { text: '$3.5m', value: 3500000 },
              { text: '$3.75m', value: 3750000 },
              { text: '$4m', value: 4000000 },
              { text: '$4.25m', value: 4250000 },
              { text: '$4.5m', value: 4500000 },
              { text: '$4.75m', value: 4750000 },
              { text: '$5m', value: 5000000 },
              { text: '$6m', value: 6000000 },
              { text: '$7m', value: 7000000 },
              { text: '$8m', value: 8000000 },
              { text: '$9m', value: 9000000 },
              { text: '$10m', value: 10000000 },
            ],
            to: [
              { value: 0, text: 'No Max' },
              { text: '$250k', value: 250000 },
              { text: '$500k', value: 500000 },
              { text: '$750k', value: 750000 },
              { text: '$1m', value: 1000000 },
              { text: '$1.25m', value: 1250000 },
              { text: '$1.5m', value: 1500000 },
              { text: '$1.75m', value: 1750000 },
              { text: '$2m', value: 2000000 },
              { text: '$2.25m', value: 2250000 },
              { text: '$2.5m', value: 2500000 },
              { text: '$2.75m', value: 2750000 },
              { text: '$3m', value: 3000000 },
              { text: '$3.25m', value: 3250000 },
              { text: '$3.5m', value: 3500000 },
              { text: '$3.75m', value: 3750000 },
              { text: '$4m', value: 4000000 },
              { text: '$4.25m', value: 4250000 },
              { text: '$4.5m', value: 4500000 },
              { text: '$4.75m', value: 4750000 },
              { text: '$5m', value: 5000000 },
              { text: '$6m', value: 6000000 },
              { text: '$7m', value: 7000000 },
              { text: '$8m', value: 8000000 },
              { text: '$9m', value: 9000000 },
              { text: '$10m', value: 10000000 },
            ],
          },
          beds: {
            label: 'Beds:',
            list: [
              { value: 0, text: 'No Max' },
              { value: 1, text: '1+' },
              { value: 2, text: '2+' },
              { value: 3, text: '3+' },
              { value: 4, text: '4+' },
            ],
          },
          baths: {
            label: 'Baths:',
            list: [
              { value: 0, text: 'No Max' },
              { value: 1, text: '1+' },
              { value: 2, text: '2+' },
              { value: 3, text: '3+' },
              { value: 4, text: '4+' },
            ],
          },
        }
      }
    }
  },

  // head () {
  //   const params = {
  //     title: this.searchHome.meta_tags['twitter:title'],
  //     image: this.searchHome.meta_tags['twitter:image'],
  //     card: this.searchHome.meta_tags['twitter:card'],
  //     site: this.searchHome.meta_tags['twitter:site'],
  //   }

  //   const headData = MetaTagsHelpers.generateHeadData(params)

  //   return headData
  // },

  computed: {
    ...mapGetters({
      header: 'header/header',
      searchHome: 'search-home/searchHome',
      searchHomeByAuthor: 'search-home/searchHomeByAuthor',
    }),

    checkData () {
      return this.searchHome
    }
  },

  mounted () {
    console.log(this.searchHome)
    this.setIsDarkMode(true)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),

    isMapActive (value) {
      this.isMap = value
    },

    checkIsAuthor (value) {
      this.isAuthor = value
    },

    changeView (value) {
      this.tableView = value
    },
  },
}
</script>
