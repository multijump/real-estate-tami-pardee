<template>
  <section class="SearchHomeListingsTileMap">
    <div class="SearchHomeListingsTileMap__line" />

    <template v-if="isAuthor">
      <div
        v-if="searchHomeByAuthorLoading"
        class="SearchHomeListingsTileMap__loading"
      >
        <AppLoader />
      </div>

      <div
        class="SearchHomeListingsTileMap__wrapper"
      >
        <div
          v-if="mapData"
          class="SearchHomeListingsTileMap__map"
        >
          <GmapMap
            id="mMap"
            ref="myMap"
            :center="{lat: Number(mapData.lat), lng: Number(mapData.lng)}"
            :zoom="15"
            map-type-id="terrain"
            style="width: 100%; height: 100%"
          >
            <GmapMarker
              v-for="(marker, index) in listing.properties_data"
              :key="index"
              :position="marker.property_detail_info.property_map"
              :clickable="true"
              :icon="isActive(index)"
              :label="{
                text: `$${marker.property_detail_info.Price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}`,
                color: 'white'
              }"
              @click="selectMapItem(index)"
            />
          </GmapMap>
        </div>

        <div
          v-else
          class="SearchHomeListingsTileMap__map"
        >
          <img
            src="~/assets/images/search-map.png"
            alt=""
          >
        </div>

        <div
          id="listingItems"
          ref="list"
          class="SearchHomeListingsTileMap__content"
        >
          <SearchHomeListingsTileCardAuthor
            v-for="(item, index) in listing.properties_data"
            :key="index"
            :item="item"
            :index="index"
            :selected-index="selectedIndex"
            style="margin-bottom: 38px"
            @findMap="findMap"
          />
        </div>
      </div>

      <div class="pt-60">
        <paginate
          v-if="listing.pagination.total_pages > 0"
          v-model="activePage"
          :page-count="listing.pagination.total_pages"
          :page-range="3"
          :margin-pages="$device.isMobile ? 0 : 1"
          :click-handler="navigateToPageAuthor"
          :prev-text="'‹  Prev'"
          :next-text="'Next  ›'"
          :first-last-button="true"
          first-button-text="«  First"
          last-button-text="Last  »"
          :container-class="'pagination'"
          active-class="page-item--active"
          page-link-class="page-item"
          :no-li-surround="true"
          prev-link-class="page-item text-item"
          next-link-class="page-item text-item"
        />
      </div>
    </template>

    <template v-else>
      <div
        v-if="searchHomeLoading"
        class="SearchHomeListingsTileMap__loading"
      >
        <AppLoader />
      </div>

      <div
        class="SearchHomeListingsTileMap__wrapper"
      >
        <div
          v-if="mapData"
          class="SearchHomeListingsTileMap__map"
        >
          <GmapMap
            id="mMap"
            ref="myMap"
            :center="{lat: Number(mapData.lat), lng: Number(mapData.lng)}"
            :zoom="15"
            map-type-id="terrain"
            :options="{
              zoomControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: false,
              disableDefaultUi: false,
              clickableIcons: false,
              keyboardShortcuts: false,
              noClear: true,
            }"
            style="width: 100%; height: 100%"
          >
            <GmapMarker
              v-for="(marker, index) in listing.propertiessearch"
              :key="index"
              :position="marker.geo"
              :clickable="true"
              :icon="isActive(index)"
              :label="{
                text: `$${marker.listPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}`,
                color: 'white'
              }"
              @click="selectMapItem(index)"
            />
          </GmapMap>
        </div>

        <div
          v-else
          class="SearchHomeListingsTileMap__map"
        >
          <img
            src="~/assets/images/search-map.png"
            alt=""
          >
        </div>

        <div
          id="listingItems"
          ref="list"
          class="SearchHomeListingsTileMap__content"
        >
          <SearchHomeListingsTileCard
            v-for="(item, index) in listing.propertiessearch"
            :key="index"
            :item="item"
            :index="index"
            :selected-index="selectedIndex"
            style="margin-bottom: 38px"
            @findMap="findMap"
          />
        </div>
      </div>

      <div class="pt-60">
        <paginate
          v-if="listing.pagination.total_pages > 0"
          v-model="activePage"
          :page-count="listing.pagination.total_pages"
          :page-range="3"
          :margin-pages="$device.isMobile ? 0 : 1"
          :click-handler="navigateToPage"
          :prev-text="'‹  Prev'"
          :next-text="'Next  ›'"
          :first-last-button="true"
          first-button-text="«  First"
          last-button-text="Last  »"
          :container-class="'pagination'"
          active-class="page-item--active"
          page-link-class="page-item"
          :no-li-surround="true"
          prev-link-class="page-item text-item"
          next-link-class="page-item text-item"
        />
      </div>
    </template>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import * as VueGoogleMaps from 'vue2-google-maps'

import queryString from 'query-string'

const mapMarker = require('~/assets/images/label.png')
const mapMarkerActive = require('~/assets/images/label-active.png')

// import Paginate from 'vuejs-paginate/src/components/Paginate'

export default {
  // components: {
  //   Paginate,
  // },

  props: {
    listing: {
      type: Object,
      default: () => {},
    },

    isAuthor: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      currentPage: 1,

      mapData: null,

      selectedIndex: 0,

      markerOptions: {
        url: mapMarker,
        size: { width: 102, height: 80, f: 'px', b: 'px' },
        scaledSize: { width: 102, height: 80, f: 'px', b: 'px' },
      },
    }
  },

  computed: {
    ...mapGetters({
      searchHomeLoading: 'search-home/searchHomeLoading',
      searchHomeByAuthorLoading: 'search-home/searchHomeByAuthorLoading',
    }),

    google: VueGoogleMaps.gmapApi,

    activePage: {
      get () {
        return (this.$route.query.page === '1') ? 1 : this.currentPage
      },

      set (val) {
        this.currentPage = val
      }
    },
  },

  mounted () {
    if (this.$route.query.page) {
      this.currentPage = Number(this.$route.query.page)
    }

    this.navigateToPage(this.currentPage)

    if (!this.mapData && !this.isAuthor) {
      this.mapData = this.listing.propertiessearch[0].geo
    }

    if (!this.mapData && this.isAuthor) {
      this.mapData = this.listing.properties_data[0].property_detail_info.property_map
    }

    // this.checkCorners()
    // const that = this

    // function someFunc () {
    //   that.checkCorners()
    //   console.log('dw')
    // }

    // setTimeout(() => {
    //   this.$refs.myMap.$on('zoom_changed', someFunc)
    //   this.$refs.myMap.$on('center_changed', someFunc)
    //   console.log(this.$refs.myMap)
    // }, 2000)
  },

  methods: {
    ...mapActions({
      getSearchHome: 'search-home/getSearchHome',
      getSearchHomeByAuthor: 'search-home/getSearchHomeByAuthor',
    }),

    // checkCorners () {
    //   setTimeout(async () => {
    //     const NECorner = this.$refs.myMap.$mapObject.getBounds().getNorthEast()
    //     const SWCorner = this.$refs.myMap.$mapObject.getBounds().getSouthWest()
    //     const NWCorner = new this.google.maps.LatLng(NECorner.lat(), SWCorner.lng())
    //     const SECorner = new this.google.maps.LatLng(SWCorner.lat(), NECorner.lng())

    //     const points = {}

    //     points.points = [`${NECorner.lat()}, ${NECorner.lng()}`, `${SWCorner.lat()}, ${SWCorner.lng()}`, `${NWCorner.lat()}, ${NWCorner.lng()}`, `${SECorner.lat()}, ${SECorner.lng()}`]

    //     const queryParams = queryString.stringify(points)

    //     await this.getSearchHome(queryParams.replace(/%2C%20/g, ','))
    //   }, 2000)
    // },

    selectMapItem (index) {
      this.markerOptions.url = mapMarkerActive

      const list = this.$refs.list

      this.selectedIndex = index

      const element = list.getElementsByClassName('SearchHomeListingsTileCard')[index]

      this.$scrollTo(element, 1000, {
        container: '#listingItems',
        easing: 'ease-in',
        lazy: false,
        offset: -60,
        force: true,
        cancelable: true,
        x: false,
        y: true
      })
    },

    navigateToPage (pageNumber) {
      const pagination = { ...this.$route.query }

      pagination.page = pageNumber.toString()

      this.$router.push({
        path: this.$route.path,
        query: pagination,
      })

      const queryParams = queryString.stringify(pagination)

      try {
        this.getSearchHome(queryParams)
      } catch (err) {
        console.log(err)
      }
    },

    navigateToPageAuthor (pageNumber) {
      const pagination = { ...this.$route.query }

      pagination.page = pageNumber.toString()

      this.$router.push({
        path: this.$route.path,
        query: pagination,
      })

      const queryParams = queryString.stringify(pagination)

      try {
        this.getSearchHomeByAuthor(queryParams)
      } catch (err) {
        console.log(err)
      }
    },

    findMap (value, index) {
      this.mapData = value
      this.selectedIndex = index
    },

    isActive (index) {
      if (index === this.selectedIndex) {
        return mapMarkerActive
      } else {
        return mapMarker
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .SearchHomeListingsTileMap {
    position: relative;
    padding: 60px 0 80px 0;

    &__wrapper {
      display: flex;
      flex-direction: column;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__line {
      margin-bottom: 0;
      height: 1px;
      background: #C4C4C4;
      z-index: 11;
    }

    &__loading {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: 100;
      background: rgba($color: #F2F2F2, $alpha: 0.4);
    }

    &__map {
      width: 100%;
      height: 50vh;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__content {
      padding: 60px 25px 0 25px;
      z-index: 2;
      padding-bottom: 90px;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: $large-devices-width) {
      &__wrapper {
        display: flex;
        flex-direction: row;
        height: 700px;
      }

      &__map {
        width: 70%;
        height: 100%;
        position: sticky;
        top: 0;
        left: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__content {
        padding: 60px 80px 0 55px;
        width: 30%;
        min-width: 460px;
        max-width: 530px;
        position: relative;
        z-index: 2;
        padding-bottom: 90px;
        display: flex;
        flex-direction: column;
        overflow: scroll;
        overflow-x: hidden;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
</style>
