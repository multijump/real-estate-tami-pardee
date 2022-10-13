<template>
  <section class="PageLocations">
    <div class="PageLocations__block-red">
      <AppLocationsItem :item="content.location_los_angeles.location[0]" />

      <AppLocationsItem :item="content.location_los_angeles.location[1]" />
    </div>

    <div class="PageLocations__block-yellow">
      <AppLocationsItem :item="content.location_palm_desert.location[0]" />
    </div>

    <div class="PageLocations__love">
      <span>{{ content.tagline }}</span>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageLocations {
    position: relative;
    padding: 0;

    &__block-red {
      padding: 50px;
      background: $lighter-blush;
    }

    &__block-yellow {
      padding: 50px;
      position: relative;
      background: $rose-white;
    }

    &__love {
      display: none;
    }

    @media (min-width: $medium-devices-width) {
      &__block-red {
        display: flex;
        justify-content: space-around;
      }
    }

    @media (min-width: $large-devices-width) {
      padding: 120px 60px;

      &__block-red {
        width: 65%;
        padding: 72px 100px;
        background: $lighter-blush;
        display: flex;
        justify-content: space-around;
      }

      &__block-yellow {
        position: absolute;
        top: 0;
        right: 60px;
        width: 34%;
        padding: 60px 100px 85px 100px;
        background: $rose-white;
      }

      &__love {
        display: block;
        position: absolute;
        bottom: 55px;
        right: 240px;
        max-width: 150px;
        text-align: center;
        word-break: break-word;
        opacity: 0.5;
        color: $main-pink;
        font-family: 'Bayshore', sans-serif;
        font-weight: normal;
        font-size: 58px;
        line-height: 60%;
        text-transform: lowercase;
      }
    }

    @media (min-width: $extra-large-devices-width) {
      padding: 120px 135px;

      &__block-yellow {
        position: absolute;
        top: 0;
        right: 135px;
        width: 34%;
        padding: 60px 100px 85px 100px;
        background: $rose-white;
      }
    }
  }
</style>
