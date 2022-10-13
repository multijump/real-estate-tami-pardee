<template>
  <section class="ListingGallery">
    <div class="container">
      <div class="row">
        <div
          class="col-12"
          :class="{
            'col-md-3': tabs.length === 2,
            'col-md-4': tabs.length === 3,
            'col-md-5': tabs.length === 4,
            'col-md-6': tabs.length === 5,
          }"
        >
          <AppTabsList
            :list="tabs"
            :active-item="activeItem"
            color="pink"
            :min-width="checTabsWidth"
            @changeTab="changeTab"
          />
        </div>
      </div>

      <div class="ListingGallery__block">
        <div
          v-for="(item, itemIndex) in tabs"
          v-show="activeItem === itemIndex + 1"
          :key="itemIndex"
          class="ListingGallery__item"
          :class="{
            'ListingGallery__images': tabs[itemIndex].tab_label === 'Photos',
            'ListingGallery__video': tabs[itemIndex].tab_label === 'Video',
            'ListingGallery__tour': tabs[itemIndex].tab_label === '3D Tour',
            'ListingGallery__maps': tabs[itemIndex].tab_label === 'Maps',
            'ListingGallery__floormap': tabs[itemIndex].tab_label === 'Flood',
          }"
        >
          <template v-if="photos.length && tabs[itemIndex].tab_label === 'Photos'">
            <!-- <ClientOnly>
              <LightGallery
                :images="photos"
                :index="index"
                :disable-scroll="true"
                @close="index = null"
              />
            </ClientOnly> -->
            <img
              v-for="(image, idx) in item.tab_items"
              :key="idx"
              class="ListingGallery__image"
              :class="[
                `ListingGallery__image-${idx + 1}`
              ]"
              :src="image"
              alt=""
              @click="openModal(idx, item.tab_items)"
            >

            <div class="ListingGallery__button">
              <AppButton
                :text="`+${$device.isMobile ? photos.length - 4 : photos.length - 1} More`"
                type="small"
                color="pink"
                @click.native="openModal(0, item.tab_items)"
              />
            </div>
          </template>

          <template v-if="video && tabs[itemIndex].tab_label === 'Video'">
            <video :src="item.tab_items" />
          </template>

          <template v-if="tour && tabs[itemIndex].tab_label === '3D Tour'">
            <AppVideoPlayer
              :url="tour"
            />
          </template>

          <template v-if="map && tabs[itemIndex].tab_label === 'Maps'">
            <GmapMap
              :center="{lat: Number(map.lat), lng: Number(map.lng)}"
              :zoom="18"
              map-type-id="roadmap"
              style="width: 100%; height: 100%"
            >
              <GmapMarker
                :key="index"
                :position="map"
                :clickable="true"
                @click.native="center=map.geo"
              />
            </GmapMap>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import getVideoId from 'get-video-id'

import ListingGalleryModal from '~/components/Listing/ListingGalleryModal.vue'

export default {
  props: {
    photos: {
      type: Array,
      default: () => [],
    },

    video: {
      type: String,
      default: () => {},
    },

    map: {
      type: Object,
      default: () => {},
    },

    tour: {
      type: String,
      default: '',
    }
  },

  data () {
    return {
      activeItem: 1,
      index: null,

      tabs: [],
    }
  },

  computed: {
    checTabsWidth () {
      if (this.tabs.length === 2) {
        return 18
      }

      if (this.tabs.length === 3) {
        return 22
      }

      if (this.tabs.length === 4) {
        return 26
      }

      if (this.tabs.length === 5) {
        return 30
      }

      return 30
    }
  },

  mounted () {
    this.tabsArray()
  },

  methods: {
    changeTab (tab) {
      this.activeItem = tab
    },

    openModal (idx, images) {
      const options = {
        index: idx,
        list: images,
      }

      this.$modal.show(ListingGalleryModal, options, { width: '90%' }, { maxHeight: '90%' })
    },

    tabsArray () {
      if (this.photos.length) {
        this.tabs.push({
          tab_label: 'Photos',
          tab_items: this.photos,
        })
      }

      if (this.video) {
        this.tabs.push({
          tab_label: 'Video',
          tab_items: this.video,
        })
      }

      if (this.tour && this.tour !== '' && this.tour !== 'null') {
        this.tabs.push({
          tab_label: this.getTourType(this.tour),
          tab_items: this.tour,
        })
      }

      if (this.map) {
        this.tabs.push({
          tab_label: 'Maps',
          tab_items: this.map,
        })
      }

      if (this.flood) {
        this.tabs.push({
          tab_label: 'Maps',
          tab_items: 'this.flood',
        })
      }
    },

    getTourType (url) {
      const { service } = getVideoId(url)

      if (service === 'vimeo' || service === 'youtube') {
        return 'Video'
      } else {
        return '3D Tour'
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .ListingGallery {
    position: relative;
    padding: 10px 0 60px 0;
    background: $background-gray;

    &__images {
      position: relative;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      padding-top: 40px;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:nth-of-type(n+4) {
        display: none;
      }
    }

    &__maps {
      padding-top: 30px;
      width: 100%;
      height: 50vh;
    }

    &__button {
      position: absolute;
      bottom: 30px;
      right: 50%;
      transform: translateX(50%);
    }

    &__image-1 {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    &__image-2 {
      display: none;
    }

    &__image-3 {
      display: none;
    }

    &__tour {
      padding-top: 30px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 30px 0 100px 0;

      &__images {
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 250px 250px;
        gap: 0px 0px;
      }

      &__maps {
        padding-top: 30px;
        width: 100%;
        height: 50vh;
      }

      &__button {
        right: 15%;
      }

      &__image-1 {
        grid-column: 1 / 9;
        grid-row: 1 / 3;
      }

      &__image-2 {
        display: block;
        grid-column: 9 / 13;
        grid-row: 1 / 2;
      }

      &__image-3 {
        display: block;
        grid-column: 9 / 13;
        grid-row: 2 / 3;
      }
    }
  }

  .video-player-box {
    padding-top: 30px;
  }
</style>
