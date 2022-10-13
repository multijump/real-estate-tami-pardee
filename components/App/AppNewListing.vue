<template>
  <div class="AppNewListing">
    <div class="AppNewListing__block">
      <div class="badge">
        <font-awesome-icon
          class="AppNewListing__star"
          :icon="['fas', 'star']"
        />

        <p class="badge-name">
          New Listing!
        </p>
      </div>

      <h2
        v-if="badge.address.city"
        class="AppNewListing__name"
      >
        {{ badge.address.city }}
      </h2>

      <h3
        v-if="badge.address.full"
        class="AppNewListing__address"
      >
        {{ badge.address.full }}
      </h3>

      <div
        v-if="infoList"
        class="AppNewListing__info"
      >
        <div
          v-for="(item, index) in infoList"
          :key="index"
          class="AppNewListing__info-item"
        >
          <h4>{{ item.name }}</h4>

          <p>{{ item.value }}</p>
        </div>
      </div>

      <div class="AppNewListing__navigation">
        <AppLinkButton
          type="small"
          color="pink"
          text="Listing Details"
          :navigate-to="viewListingDetail()"
          aria-label="Listing Details"
        />

        <AppLink
          v-if="badge.address.city"
          class="ml-25 mt-3 mt-md-0"
          color="blue"
          :text="`Explore more in ${badge.address.city}`"
          :navigate-to="`/search-home?cities=${badge.address.city}&sort=listdate&page=1`"
          :aria-label="`Explore more in ${badge.address.city}`"
        />

        <a class="AppNewListing__skip-map" :href="`#${skipMap}`" aria-label="Skip map explorer">
          Skip map explorer
        </a>
      </div>
    </div>

    <div
      v-if="badge.geo"
      class="AppNewListing__map d-none d-lg-block"
    >
      <GmapMap
        :center="{lat: Number(badge.geo.lat), lng: Number(badge.geo.lng)}"
        :zoom="18"
        map-type-id="roadmap"
        style="width: 100%; height: 100%"
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
      >
        <!-- <GmapMarker
          :position="badge.geo"
          :clickable="true"
        /> -->
      </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    badge: {
      type: Object,
      default: () => {},
    },

    skipMap: {
      type: String,
      default: '',
    }
  },

  computed: {
    infoList () {
      const list = [
        {
          name: 'Beds',
          value: this.badge.property.bathsFull,
        },
        {
          name: 'Baths',
          value: Math.round(Number(this.badge.property.bathrooms)),
        },
        {
          name: 'SQ. FT',
          value: this.badge.property.area.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
          // value: this.badge.property.lotSizeArea.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        },
        {
          name: 'Price',
          value: `$${this.badge.listPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}`
        }
      ]

      return list
    },
  },

  methods: {
    viewListingDetail () {
      // eslint-disable-next-line
      const full = this.badge.address.full.replace(/\s/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/--/g, '-')
      const city = this.badge.address.city.replace(/\s/g, '-')
      return `/listing/${this.badge.address.state}/${city}/${full}/${this.badge.mlsId}`
    },
  },
}
</script>

<style lang="scss">
  @import "~/assets/styles/common/variables.scss";

  .AppNewListing {
    &__block {
      padding: 26px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      .badge {
        background: $burnt-orange;
        margin-bottom: 6px;
      }
    }

    &__star {
      fill: white;
      height: 8px;
      margin-right: 2px;
    }

    &__name {
      color: $black;
      font-weight: 300;
      font-size: 32px;
      line-height: 150%;
      margin-bottom: 4px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 100%;
    }

    &__address {
      color: $black;
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 100%;
    }

    &__map {
      width: 280px;
      height: 280px;
    }

    &__info {
      display: flex;
      padding: 20px 0;

      &-item {
        text-transform: uppercase;
        text-align: center;

        &:not(:last-of-type) {
          margin-right: 24px;
        }

        h4 {
          margin-bottom: 2px;
          font-weight: 600;
          font-size: 12px;
          line-height: 175%;
          text-align: center;
          color: $black;
        }

        p {
          margin-bottom: 0;
          font-weight: normal;
          font-size: 16px;
          line-height: 140%;
          text-align: center;
          color: $black;
        }
      }
    }

    &__navigation {
      display: flex;
      flex-direction: column;
    }

    &__skip-map {
      width: 1px;
      height: 1px;
      position: absolute;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      word-wrap: normal;

      &:focus,
      &:active {
        visibility: visible;
        position: static;
        overflow: visible;
        // max-width: 1170px;
        clip: auto;
        width: auto;
        height: auto;
        display: block;

        @include focus-black;
      }
    }

    @media (min-width: $medium-devices-width) {
      &__navigation {
        flex-direction: row;
        align-items: center;
      }

      &__block {
        max-width: 435px;
      }
    }
  }

  .gmnoprint a, .gmnoprint span {
        display:none;
    }

    .gmnoprint div {
        background:none !important;
    }

    a[title = 'Open this area in Google Maps (opens a new window)'] div img{
        display:none;
    }
</style>
