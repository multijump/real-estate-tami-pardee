<template>
  <div
    class="SearchHomeListingsTileCard"
    :class="{
      'SearchHomeListingsTileCard--active' : isActiveOnMap
    }"
    @click="selectedMap($event, item.property_detail_info.property_map)"
  >
    <div class="SearchHomeListingsTileCard__img">
      <img
        v-if="item.banner_image[0]"
        :src="item.banner_image[0]"
        alt="image"
      >
    </div>

    <div class="SearchHomeListingsTileCard__info">
      <h2
        v-if="item.property_descriptive_title"
        class="SearchHomeListingsTileCard__description"
      >
        {{ item.property_descriptive_title }}
      </h2>

      <h1
        v-if="item.property_address"
        class="SearchHomeListingsTileCard__title"
      >
        {{ item.property_address }}
      </h1>

      <p
        v-if="item.property_title"
        class="SearchHomeListingsTileCard__address"
      >
        {{ item.property_title }}
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
        <AppButton
          text="View Listing"
          color="pink"
          type="small"
          @click.native="redirect()"
        />

        <button
          class="SearchHomeListingsTileCard__explore"
          @click="exploreMore()"
        >
          {{ item.property_detail_info.Exploremorelink }}
        </button>
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
          value: this.item.property_detail_info.Beds ? this.item.property_detail_info.Beds : '',
        },
        {
          name: 'Bath',
          value: this.item.property_detail_info.bath ? Math.round(Number(this.item.property_detail_info.bath)) : '',
        },
        {
          name: 'sq ft.',
          value: this.item.property_detail_info.Area ? `${this.item.property_detail_info.Area.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}` : '',
        },
        {
          name: 'Price',
          value: this.item.property_detail_info.Price ? `$ ${this.item.property_detail_info.Price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}` : '',
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
      getSearchHomeByAuthor: 'search-home/getSearchHomeByAuthor',
    }),

    selectedMap (event, value) {
      this.$emit('findMap', value, this.index)
    },

    redirect () {
      const address = this.item.property_title.split(', ')

      this.$router.push({
        path: `/property/${address[2].replace(/[0-9]/g, '').replace(/\s/g, '')}/${address[1].replaceAll(' ', '-')}/${address[0].replaceAll(' ', '-')}/${this.item.id}`,
      })
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
        await this.getSearchHomeByAuthor(queryParams)
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
    min-height: 511px;

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
      text-transform: capitalize;
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
      padding: 14px 0 0 0;
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
