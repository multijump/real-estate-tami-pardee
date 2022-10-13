<template>
  <div
    class="SearchHomeListingsTileCard"
    :class="{
      'SearchHomeListingsTileCard--active' : isActiveOnMap
    }"
    @click="selectedMap($event, item.geo)"
  >
    <div class="SearchHomeListingsTileCard__img">
      <img
        v-if="item.photos[0]"
        :src="item.photos[0]"
        alt="image"
      >
    </div>

    <div class="SearchHomeListingsTileCard__info">
      <h2
        v-if="item.property.lotDescription"
        class="SearchHomeListingsTileCard__description"
      >
        {{ item.property.lotDescription }}
      </h2>

      <h1
        v-if="item.address.full"
        class="SearchHomeListingsTileCard__title"
      >
        {{ item.address.full }}
      </h1>

      <p
        v-if="item.address.city && item.address.state && item.address.postalCode"
        class="SearchHomeListingsTileCard__address"
      >
        {{ item.address.city }}, {{ item.address.state }}, {{ item.address.postalCode }}
      </p>

      <div class="SearchHomeListingsTileCard__details">
        <div
          v-for="(detail, i) in infoList"
          :key="i"
          class="SearchHomeListingsTileCard__detail"
        >
          <p
            class="SearchHomeListingsTileCard__detail-name"
            v-html="detail.name"
          />

          <p
            class="SearchHomeListingsTileCard__detail-value"
            v-html="detail.value"
          />
        </div>
      </div>

      <div class="SearchHomeListingsTileCard__action">
        <AppLinkButton
          text="View Listing"
          color="pink"
          type="small"
          target="_new"
          :navigate-to="getLinkUrl()"
        />

        <AppLink
          :text="'Explore more in ' + item.address.city"
          color="grey"
          class="SearchHomeListingsTileCard__explore"
          :navigate-to="getExploreUrl()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import queryString from 'query-string'

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },

    index: {
      type: Number,
      default: null,
    },

    selectedIndex: {
      type: Number,
      default: null,
    },
  },

  computed: {
    infoList () {
      const list = [
        {
          name: 'Bed',
          value: this.item.property.bedrooms ? this.item.property.bedrooms : '',
        },
        {
          name: 'Bath',
          value: this.item.property.bathrooms ? Math.round(Number(this.item.property.bathrooms)) : '',
        },
        {
          name: 'sq ft.',
          value: this.item.property.area ? `${this.item.property.area.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}` : '',
        },
        {
          name: 'Price',
          value: this.item.listPrice ? `$ ${this.item.listPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}` : '',
        }
      ]

      return list
    },

    isActiveOnMap () {
      if (this.index === 0 && this.selectedIndex === 0) {
        return true
      }

      if (this.index && this.selectedIndex && this.index === this.selectedIndex) {
        return true
      }

      return false
    }
  },

  methods: {
    ...mapActions({
      getSearchHome: 'search-home/getSearchHome',
    }),

    selectedMap (event, value) {
      this.$emit('findMap', value, this.index)
    },

    redirect () {
      const city = this.item.address.city.replace(/\s/g, '-')
      const fullTitle = this.item.address.full.replace(/\s/g, '-').replace(/[&\\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/--/g, '-')
      this.$router.push({
        path: `/listing/${this.item.address.state}/${city}/${fullTitle}/${this.item.mlsId}`,
      })
    },

    getLinkUrl () {
      const city = this.item.address.city.replace(/\s/g, '-')
      const fullTitle = this.item.address.full.replace(/\s/g, '-').replace(/[&\\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/--/g, '-')

      return `/listing/${this.item.address.state}/${city}/${fullTitle}/${this.item.mlsId}`
    },

    getExploreUrl () {
      return `/search-home?sort=listdate&page=1&cities=${this.item.address.city}`
    },

    async exploreMore () {
      const pagination = {}

      pagination.cities = this.item.address.city
      pagination.page = '1'

      this.$router.push({
        path: this.$route.path,
        query: pagination,
      })

      const queryParams = queryString.stringify(pagination)

      try {
        await this.getSearchHome(queryParams)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .SearchHomeListingsTileCard {
    position: relative;
    background: #F2F2F2;

    &--active {
      &::before {
      content: "";
      border:  4px solid #024E79;
      top: -2px;
      left: -2px;
      bottom: -2px;
      right: -2px;
      position: absolute;
      z-index: -1;
      }

      box-shadow: 0px -1px 20px rgba(0, 0, 0, 0.25);
    }

    &__img {
      min-height: 180px;
      object-fit: cover;
      width: 100%;

      img {
        width: 100%;
        max-height: 220px;
        height: 100%;
        object-fit: cover;
      }

    }

    &__info {
      padding: 24px;
    }

    &__title {
      padding-bottom: 4px;
      font-weight: 300;
      font-size: 32px;
      line-height: 150%;
      text-transform: lowercase;
      color: #1F2021;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &__description {
      padding-bottom: 4px;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      color: #747B7E;
    }

    &__address {
      padding-bottom: 14px;
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: #1F2021;
      text-transform: lowercase;
    }

    &__details {
      padding-bottom: 14px;
      display: flex;
      justify-content: space-between;
    }

    &__detail {
      display: flex;
      align-items: center;
      flex-direction: column;
      line-height: 175%;
      color: #1F2021;
      padding-bottom: 0;

      &-name {
        font-size: 12px;
        text-transform: uppercase;
      }

      &-value {
        font-size: 16px;
      }
    }

    &__explore {
      margin: 14px 0 0 0;
      font-size: 14px;
      font-weight: normal;
      border: none;
      outline: none;
      background: transparent;
      line-height: 140%;
      text-decoration-line: underline;
      z-index: 2;
      display: flex;
      width: fit-content;
      color: $grey;
      transition: color .3s ease;

      &:hover {
        color: $color-primary;
      }
    }
  }
</style>
