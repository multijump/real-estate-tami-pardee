<template>
  <div class="HomeContactItem">
    <h2
      v-if="item.location_name"
      class="HomeContactItem__title"
      v-html="item.location_name"
    />

    <p class="HomeContactItem__text" v-html="item.address" />

    <div class="HomeContactItem__contact">
      <a
        class="HomeContactItem__link"
        :href="`mailto:${item.email}`"
      >
        <font-awesome-icon
          class="HomeContactItem__icon"
          fas
          icon="envelope"
        />

        Email
      </a>

      <a
        class="HomeContactItem__link"
        :href="`tel:${item.phone}`"
      >
        <font-awesome-icon
          class="HomeContactItem__icon"
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
  @import "~/assets/styles/common/variables.scss";

  .HomeContactItem {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 30px;

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

      &:focus {
        @include focus-blue;
      }
    }

    @media (min-width: $medium-devices-width) {
      padding: 0;
    }
  }
</style>
