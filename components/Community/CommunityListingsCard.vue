<template>
  <div class="CommunityListingsCard">
    <!-- <div
      class="badge"
      :class="{
        'badge--orange': item.listing_image_tag.badge_color === 'orange',
        'badge--blue': item.listing_image_tag.badge_color === 'blue',
      }"
    >
      <font-awesome-icon
        class="CommunityListingsCard__star"
        :icon="iconItem"
      />

      <p class="badge-name">
        {{ item.listing_image_tag.listing_image_tag_text }}
      </p>
    </div> -->

    <img
      :src="item.mls_data.photos[0]"
      class="CommunityListingsCard__image"
      alt="Property Photo"
    >

    <div class="CommunityListingsCard__content">
      <p class="CommunityListingsCard__description">
        {{ item.mls_data.property.additionalRooms }}
      </p>

      <h2 class="CommunityListingsCard__title">
        {{ item.mls_data.address.full }}
      </h2>

      <p class="CommunityListingsCard__address">
        {{ `${item.mls_data.address.city}, ${item.mls_data.address.state}, ${item.mls_data.address.postalCode}` }}
      </p>

      <div class="CommunityListingsCard__info">
        <div
          v-for="(info, index) in infoList"
          :key="index"
          class="CommunityListingsCard__info-item"
        >
          <h1>{{ info.name }}</h1>

          <p>{{ info.value }}</p>
        </div>
      </div>

      <AppLinkButton
        text="View Listing"
        color="pink"
        type="small"
        :navigate-to="getUrl()"
      />

      <AppLink
        class="mt-2"
        :text="'Explore more in ' + item.mls_data.address.city"
        :navigate-to="'/search-home?city=' + item.mls_data.address.city"
        color="grey"
      />
    </div>
  </div>
</template>

<script>
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
          name: 'BED',
          value: this.item.mls_data.property.bedrooms,
        },
        {
          name: 'BATH',
          value: this.item.mls_data.property.bathrooms
        },
        {
          name: 'SQ FT.',
          value: this.item.mls_data.property.area
        },
        {
          name: 'PRICE',
          value: `$ ${this.item.mls_data.listPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}`
        }
      ]

      return list
    },

    // iconItem () {
    //   const icon = this.item.star_icon.replace(/fa-(.*)/, '$1').split(' ')

    //   return icon
    // },
  },

  methods: {
    redirect () {
      window.open(`${this.item.Listing_Details_btn.button_link}`, '_blank')
    },

    getUrl () {
      // eslint-disable-next-line
      const full = this.item.mls_data.address.full.replace(/\s/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/--/g, '-')
      const city = this.item.mls_data.address.city.replace(/\s/g, '-')
      return `/listing/${this.item.mls_data.address.state}/${city}/${full}/${this.item.mls_data.mlsId}`
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityListingsCard {
    position: relative;

    &__image {
      width: 100%;
      object-fit: cover;
      max-height: 220px;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        max-height: 285px;
        object-fit: cover;
      }
    }

    &__content {
      background: #F2F2F2;
      padding: 24px;
      height: 100%;
    }

    &__description {
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      min-height: 38px;
      color: #747B7E;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &__title {
      font-weight: 300;
      font-size: 32px;
      line-height: 150%;
      text-transform: lowercase;
      color: #1F2021;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &__address {
      font-size: 20px;
      line-height: 120%;
      color: #1F2021;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &__info {
      display: flex;
      padding: 20px 0;

      &-item {
        text-align: center;

        &:not(:last-of-type) {
          margin-right: 24px;
        }

        h1 {
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
  }

  .badge {
    margin-bottom: 6px;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .badge--orange {
    background: $burnt-orange;
  }

  .badge--blue {
    background: $color-primary;
  }
</style>
