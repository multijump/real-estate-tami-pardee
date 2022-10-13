<template>
  <div class="SearchHomeListingsListCard">
    <div class="SearchHomeListingsListCard__image">
      <img
        v-if="item.photos[0]"
        :src="item.photos[0]"
        alt="image"
      >
    </div>

    <div class="SearchHomeListingsListCard__info">
      <div class="SearchHomeListingsListCard__top">
        <h2
          v-if="item.property.lotDescription"
          class="SearchHomeListingsListCard__description"
        >
          {{ item.property.lotDescription }}
        </h2>

        <h1
          v-if="item.address.full"
          class="SearchHomeListingsListCard__title"
        >
          {{ item.address.full }}
        </h1>
      </div>

      <div class="SearchHomeListingsListCard__lower">
        <div class="SearchHomeListingsListCard__content">
          <p
            v-if="item.address.city && item.address.state && item.address.postalCode"
            class="SearchHomeListingsListCard__address"
          >
            {{ item.address.city }}, {{ item.address.state }}, {{ item.address.postalCode }}
          </p>

          <div class="SearchHomeListingsListCard__details">
            <div
              v-for="(detail, index) in infoList"
              :key="index"
              class="SearchHomeListingsListCard__detail"
            >
              <p
                class="SearchHomeListingsListCard__detail-name"
                v-html="detail.name"
              />

              <p
                class="SearchHomeListingsListCard__detail-value"
                v-html="detail.value"
              />
            </div>
          </div>
        </div>

        <div class="SearchHomeListingsListCard__action">
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
            class="SearchHomeListingsListCard__explore"
            :navigate-to="getExploreUrl()"
          />
        </div>
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
  },

  methods: {
    ...mapActions({
      getSearchHome: 'search-home/getSearchHome',
    }),

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

  .SearchHomeListingsListCard {
    position: relative;
    display: flex;
    width: 100%;

    flex-direction: column;

    &__image {
      width: 100%;
      min-width: 200px;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info {
      width: 100%;
      padding-top: 14px;
    }

    &__title {
      padding-bottom: 4px;
      font-weight: 300;
      font-size: 32px;
      line-height: 150%;
      text-transform: lowercase;
      color: #1F2021;
    }

    &__description {
      padding-bottom: 4px;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      color: #747B7E;
    }

    &__lower {
      display: flex;
      flex-direction: column;
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
      display: flex;
      justify-content: space-between;
      padding-bottom: 14px;
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

    &__action {
      margin: 0 auto;
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

    @media (min-width: $medium-devices-width) {
      &__details {
        padding-bottom: 0;
      }
      &__detail {
        flex-direction: row;

        &:not(:last-of-type) {
          margin-right: 20px;
        }

        &-name {
          margin-right: 10px;
        }
      }
    }

    @media (min-width: $large-devices-width) {
      flex-direction: row;
      &__image {
        width: 20%;
      }

      &__info {
        width: 100%;
        padding: 0 24px;
      }

      &__lower {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      &__action {
        margin: 0;
        text-align: right;
      }
    }
  }
</style>
