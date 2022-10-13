<template>
  <section class="PageCommunitiesVerticalSlider">
    <div class="PageCommunitiesVerticalSlider__bg" />

    <StampImage class="PageCommunitiesVerticalSlider__stamp" />

    <div class="PageCommunitiesVerticalSlider__title">
      <AppSectionTitle
        color="pink"
        :display="content.pretitle"
        :title="content.title"
      />
    </div>

    <PageVerticalSlider v-if="$device.isDesktop" :list="content.community_items" />
    <PageHorizontalSlider v-else :list="content.community_items" />
  </section>
</template>

<script>
import StampImage from '~/assets/images/stamp.svg?inline'

export default {
  components: {
    StampImage,
  },

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

  .PageCommunitiesVerticalSlider {
    position: relative;
    padding: 80px 0 0;

    &__bg {
      display: none;
    }

    &__stamp {
      display: none;
    }

    &__title {
      position: relative;
      padding-bottom: 0;
      text-align: center;
      z-index: 2;
    }

    @media (min-width: $medium-devices-width) {
      padding: 100px 0 160px;

      &__title {
        padding-bottom: 35px;
      }

      &__stamp {
        display: block;
        position: absolute;
        top: -80px;
        right: 65px;
      }
    }

    @media (min-width: $large-devices-width) {
      &__bg {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 65%;
        height: 100%;
        background: $lighter-blush;
      }
    }
  }
</style>
