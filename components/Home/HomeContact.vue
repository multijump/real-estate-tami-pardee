<template>
  <div class="HomeContact">
    <div class="HomeContact__block-red">
      <HomeContactItem :item="contacts.location_los_angeles.location[0]" />

      <HomeContactItem :item="contacts.location_los_angeles.location[1]" />
    </div>

    <div class="HomeContact__block-yellow">
      <HomeContactItem :item="contacts.location_palm_desert.location[0]" />
    </div>

    <div class="HomeContact__love">
      <span>{{ contacts.tagline }}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    contacts: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .HomeContact {
    position: relative;
    padding: 0;

    &__block-red {
      padding: 50px 50px 20px 50px;
      background: $lightest-blush;
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
        padding: 50px;
        display: flex;
        justify-content: space-between;
      }
    }

    @media (min-width: $large-devices-width) {
      padding: 120px 60px;

      &__block-red {
        width: 70%;
        padding: 72px 100px;
        background: $lightest-blush;
        display: flex;
        justify-content: space-between;
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
        bottom: 120px;
        right: 180px;
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
        right: 60px;
        width: 34%;
        padding: 60px 100px 85px 100px;
        background: $rose-white;
      }
    }
  }
</style>
