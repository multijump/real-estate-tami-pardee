<template>
  <div class="PropertyListingsCard">
    <img
      :src="item.featured_image"
      class="PropertyListingsCard__image"
      alt="image"
    >

    <div class="PropertyListingsCard__content">
      <p
        v-if="item.descriptive_title"
        class="PropertyListingsCard__description"
      >
        {{ item.descriptive_title }}
      </p>

      <h2
        v-if="item.post_title"
        class="PropertyListingsCard__title"
      >
        {{ item.post_title }}
      </h2>

      <p
        v-if="item.listing_map && item.listing_map.address"
        class="PropertyListingsCard__address"
      >
        {{ item.listing_map.address }}
      </p>

      <div class="PropertyListingsCard__info">
        <div
          v-for="(info, index) in infoList"
          :key="index"
          class="PropertyListingsCard__info-item"
        >
          <h5>{{ info.name }}</h5>

          <p>{{ info.value }}</p>
        </div>
      </div>

      <AppButton
        v-if="item.listing_details_btn"
        :text="item.listing_details_btn"
        color="pink"
        type="small"
        @click.native="redirect()"
      />

      <AppLink
        v-if="item.Explore_more_text"
        class="mt-2"
        :text="item.Explore_more_text"
        :navigate-to="item.Explore_more_text"
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
          name: this.item.bedrooms_title,
          value: this.item.bedrooms,
        },
        {
          name: this.item.bathrooms_title,
          value: this.item.bathrooms
        },
        {
          name: this.item.living_area_title,
          value: this.item.living_area
        },
        {
          name: 'Price',
          value: this.item.price ? `$ ${this.item.price.replace(/(\d)(?=(\d{3})+$)/g, '$1,')}` : ''
        }
      ]

      return list
    },

    iconItem () {
      const icon = this.item.star_icon ? this.item.star_icon.replace(/fa-(.*)/, '$1').split(' ') : ''

      return icon
    },
  },

  methods: {
    redirect () {
      window.open(`${this.item.listing_details_url}`, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PropertyListingsCard {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;

    &__image {
      width: 100%;
      max-height: 220px;
      height: 100%;
      object-fit: cover;
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

        h5 {
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
</style>
