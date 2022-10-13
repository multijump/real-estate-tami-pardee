<template>
  <div class="AppLocationsItem">
    <h2 class="AppLocationsItem__title" v-html="item.location_name" />

    <p class="AppLocationsItem__text" v-html="item.address" />

    <div class="AppLocationsItem__contact">
      <a
        class="AppLocationsItem__link"
        :href="`mailto:${item.email}`"
      >
        <font-awesome-icon
          class="AppLocationsItem__icon"
          fas
          icon="envelope"
        />

        Email
      </a>

      <a
        class="AppLocationsItem__link"
        :href="`tel:${item.phone}`"
      >
        <font-awesome-icon
          class="AppLocationsItem__icon"
          fas
          icon="phone"
        />

        Call
      </a>
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
}
</script>

<style lang="scss" scoped>
  .AppLocationsItem {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &__title {
      font-weight: 300;
      font-size: 32px;
      line-height: 150%;
      text-transform: lowercase;
      color: #000000;
      padding-bottom: 26px;
    }

    &__text {
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: #000000;
    }

    &__contact {
      padding-top: 56px;
    }

    &__link {
      font-weight: 600;
      font-size: 14px;
      line-height: 140%;
      text-align: center;
      color: #1172A8;
      text-decoration: none;

      &:not(:last-of-type) {
        margin-right: 40px;
      }
    }
  }
</style>
