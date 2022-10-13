<template>
  <div class="HomeImageTabbed">
    <ArrowImage class="HomeImageTabbed__arrow" />

    <div class="HomeImageTabbed__bg" />

    <div class="HomeImageTabbed__info">
      <img
        v-if="tabs.image"
        :src="tabs.image"
        class="HomeImageTabbed__image img--bg"
        alt=""
      >

      <HomeNewsCard :tabs="tabs.tabs" />
    </div>
  </div>
</template>

<script>
import ArrowImage from '~/assets/images/arrow-5.svg?inline'
export default {
  components: {
    ArrowImage,
  },

  props: {
    tabs: {
      type: Object,
      default: () => {},
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .HomeImageTabbed {
    position: relative;
    padding: 80px 25px;

    &__arrow {
      display: none;
    }

    &__bg {
      position: absolute;
      width: 100%;
      height: 0;
      // max-height: 768px;
      left: 0px;
      top: 0px;
      background: $lightest-powder-blue;
    }

    &__info {
      position: relative;
      cursor: pointer;
    }

    &__image {
      display: none;
    }

    @media (min-width: $medium-devices-width) {
      padding: 0px 65px 120px 130px;

      &__arrow {
        display: block;
        position: absolute;
        top: -130px;
        left: 30px;
        z-index: 100;
        transform: rotate(-2deg);
      }

      &__bg {
        height: 65%;
      }

      &__info {
        left: 0;
        margin-top: 120px;
        width: 100%;
        max-height: 600px;
        height: 100%;
        padding: 80px;
      }

      &__image {
        display: block;
      }
    }

    @media (min-width: $extra-large-devices-width) {
      padding: 0px 65px 120px 180px;

    }
  }
</style>
