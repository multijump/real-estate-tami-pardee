<template>
  <div class="CommunityListingsCard">
    <div
      v-if="item.badge"
      class="badge"
      :class="{
        'badge--orange': item.badge.type === 'orange',
        'badge--blue': item.badge.type === 'blue',
      }"
    >
      <font-awesome-icon
        class="CommunityListingsCard__star"
        :icon="iconItem"
      />

      <p class="badge-name">
        {{ item.badge.name }}
      </p>
    </div>

    <img
      :src="item.image"
      class="CommunityListingsCard__image"
      alt="image"
    >

    <div class="CommunityListingsCard__content">
      <p class="CommunityListingsCard__description">
        {{ item.description }}
      </p>

      <h2 class="CommunityListingsCard__title">
        {{ item.title }}
      </h2>

      <p class="CommunityListingsCard__address">
        {{ item.address }}
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
        :text="item.button.title"
        color="pink"
        type="small"
        :navigate-to="item.button.url"
      />

      <AppLink
        class="mt-2"
        :text="item.link.title"
        :navigate-to="item.link.url"
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
          name: 'Bed',
          value: this.item.bed,
        },
        {
          name: 'Bath',
          value: this.item.bath
        },
        {
          name: 'sq ft.',
          value: `${this.item.size.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}`
        },
        {
          name: 'Price',
          value: `$ ${this.item.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}`
        }
      ]

      return list
    },

    iconItem () {
      const icon = this.item.badge.icon.replace(/fa-(.*)/, '$1').split(' ')

      return icon
    },
  },

  methods: {
    redirect () {
      window.open(`${this.item.Listing_Details_btn.button_link}`, '_blank')
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
      height: 100%;
      max-height: 285px;
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
          text-transform: uppercase;
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
