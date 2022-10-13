<template>
  <div class="AppListingCard">
    <div
      v-if="item.badge"
      class="badge"
      :class="{
        'badge--orange': item.badge.type === 'orange',
        'badge--blue': item.badge.type === 'blue',
      }"
    >
      <font-awesome-icon
        class="AppListingCard__star"
        :icon="iconItem"
      />

      <p class="badge-name">
        {{ item.badge.name }}
      </p>
    </div>

    <img
      :src="item.image"
      class="AppListingCard__image"
      alt="Property Image"
    >

    <div class="AppListingCard__content">
      <p
        v-if="item.description"
        class="AppListingCard__description"
      >
        {{ item.description }}
      </p>

      <h2 class="AppListingCard__title">
        {{ item.title }}
      </h2>

      <p class="AppListingCard__address">
        {{ item.address }}
      </p>

      <div class="AppListingCard__info">
        <div
          v-for="(info, index) in infoList"
          :key="index"
          class="AppListingCard__info-item"
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
        class="mt-3"
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
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppListingCard {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;

    &__image {
      width: 100%;
      object-fit: cover;
      height: 100%;
      max-height: 185px;
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

    @media (min-width: $medium-devices-width) {
      &__image {
        max-height: 215px;
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
