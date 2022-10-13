<template>
  <section class="PropertyGallery">
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

      <div class="PropertyGallery__block">
        <div
          v-for="(item, itemIndex) in tabs"
          v-show="activeItem === itemIndex + 1"
          :key="itemIndex"
          class="PropertyGallery__item"
          :class="{
            'PropertyGallery__images': tabs[itemIndex].tab_label === 'Photos',
            'PropertyGallery__video': tabs[itemIndex].tab_label === 'Video',
            'PropertyGallery__tour': tabs[itemIndex].tab_label === '3D Tour',
            'PropertyGallery__maps': tabs[itemIndex].tab_label === 'Maps',
            'PropertyGallery__floormap': tabs[itemIndex].tab_label === 'Flood',
          }"
        >
          <template v-if="tabs[itemIndex].tab_label === 'Photos'">
            <ClientOnly>
              <LightGallery
                :images="item.tab_items"
                :index="index"
                :disable-scroll="true"
                @close="index = null"
              />
            </ClientOnly>
            <img
              v-for="(image, idx) in item.tab_items"
              :key="idx"
              class="PropertyGallery__image"
              :class="[
                `PropertyGallery__image-${idx + 1}`
              ]"
              :src="image.images.url"
              alt=""
              @click.prevent="index = idx"
            >

            <div class="PropertyGallery__button">
              <AppButton
                :text="`+${$device.isMobile ? item.tab_items.length - 4 : item.tab_items.length - 1} More`"
                type="small"
                color="pink"
                @click.native="index = 0"
              />
            </div>
          </template>

          <template v-if="tabs[itemIndex].tab_label === 'Video'">
            <AppVideoPlayer
              :url="item.tab_items"
            />
          </template>

          <template v-if="tabs[itemIndex].tab_label === '3D Tour'">
            <AppVideoPlayer
              :url="item.tab_items"
            />
          </template>

          <template v-if="tabs[itemIndex].tab_label === 'Maps'">
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
export default {
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
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

    tabsArray () {
      if (this.gallery[0].tab_title === 'Images' && this.gallery[0].tab_data.images) {
        this.tabs.push({
          tab_label: 'Photos',
          tab_items: this.gallery[0].tab_data.images,
        })
      }

      if (this.gallery[1].tab_title === 'Video' && this.gallery[1].tab_data.video) {
        this.tabs.push({
          tab_label: 'Video',
          tab_items: this.gallery[1].tab_data.video,
        })
      }

      if (this.gallery[2].tab_title === '3D tour' && this.gallery[2].tab_data['3d_tour']) {
        this.tabs.push({
          tab_label: '3D Tour',
          tab_items: this.gallery[2].tab_data['3d_tour'],
        })
      }

      if (this.gallery[3].tab_title === 'Maps' && this.gallery[3].tab_data.maps) {
        this.tabs.push({
          tab_label: 'Maps',
          tab_items: this.gallery[2].tab_data.maps,
        })
      }

      if (this.gallery[4].tab_title === 'Floorplan' && this.gallery[4].tab_data.floorplan) {
        this.tabs.push({
          tab_label: 'Floorplan',
          tab_items: this.gallery[4].tab_data.floorplan,
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PropertyGallery {
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
