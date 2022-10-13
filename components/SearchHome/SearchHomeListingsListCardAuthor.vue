<template>
  <div class="SearchHomeListingsListCardAuthor">
    <div class="SearchHomeListingsListCardAuthor__image">
      <img
        v-if="item.banner_image[0]"
        :src="item.banner_image[0]"
        alt="image"
      >
    </div>

    <div class="SearchHomeListingsListCardAuthor__info">
      <div class="SearchHomeListingsListCardAuthor__top">
        <h2
          v-if="item.property_descriptive_title"
          class="SearchHomeListingsListCardAuthor__description"
        >
          {{ item.property_descriptive_title }}
        </h2>

        <h1
          v-if="item.property_address"
          class="SearchHomeListingsListCardAuthor__title"
        >
          {{ item.property_address }}
        </h1>
      </div>

      <div class="SearchHomeListingsListCardAuthor__lower">
        <div class="SearchHomeListingsListCardAuthor__content">
          <p
            v-if="item.property_title"
            class="SearchHomeListingsListCardAuthor__address"
          >
            {{ item.property_title }}
          </p>

          <div class="SearchHomeListingsListCardAuthor__details">
            <div
              v-for="(detail, index) in infoList"
              :key="index"
              class="SearchHomeListingsListCardAuthor__detail"
            >
              <p
                class="SearchHomeListingsListCardAuthor__detail-name"
                v-html="detail.name"
              />

              <p
                class="SearchHomeListingsListCardAuthor__detail-value"
                v-html="detail.value"
              />
            </div>
          </div>
        </div>

        <div class="SearchHomeListingsListCardAuthor__action">
          <AppLinkButton
            text="View Listing"
            color="pink"
            type="small"
            target="_new"
            :navigate-to="getLinkUrl()"
          />

          <button
            class="SearchHomeListingsListCardAuthor__explore"
            @click="exploreMore()"
          >
            {{ item.property_detail_info.Exploremorelink }}
          </button>
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
          value: this.item.property_detail_info.Beds ? this.item.property_detail_info.Beds : '',
        },
        {
          name: 'Bath',
          value: this.item.property_detail_info.bath ? Math.round(Number(this.item.property_detail_info.bath)) : '',
        },
        {
          name: 'sq ft.',
          value: this.item.property_detail_info.area ? `${this.item.property_detail_info.area.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}` : '',
        },
        {
          name: 'Price',
          value: this.item.property_detail_info.Price ? `$ ${this.item.property_detail_info.Price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}` : '',
        }
      ]

      return list
    },
  },

  methods: {
    ...mapActions({
      getSearchHomeByAuthor: 'search-home/getSearchHomeByAuthor',
    }),

    redirect () {
      const address = this.item.property_title.split(', ')

      this.$router.push({
        path: `/property/${address[2].replace(/[0-9]/g, '').replace(/\s/g, '')}/${address[1].replaceAll(' ', '-')}/${address[0].replaceAll(' ', '-')}/${this.item.id}`,
      })
    },

    getLinkUrl () {
      const city = this.item.address.city.replace(/\s/g, '-')
      const fullTitle = this.item.address.full.replace(/\s/g, '-').replace(/[&\\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/--/g, '-')

      return `/listing/${this.item.address.state}/${city}/${fullTitle}/${this.item.mlsId}`
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

  .SearchHomeListingsListCardAuthor {
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
