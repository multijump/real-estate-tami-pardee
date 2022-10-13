<template>
  <div class="HomeCommunities">
    <div class="HomeCommunities__bg" />

    <StampImage class="HomeCommunities__stamp" />

    <div class="HomeCommunities__title">
      <AppSectionTitle
        color="pink"
        :display="communities.pretitle"
        :title="communities.title"
      />
    </div>

    <HomeCommunitiesVerticalSlider v-if="$device.isDesktop" :list="communities.community_items" />
    <HomeCommunitiesHorizontalSlider v-else :list="communities.community_items" />
  </div>
</template>

<script>
import StampImage from '~/assets/images/stamp.svg?inline'

export default {
  components: {
    StampImage,
  },

  props: {
    communities: {
      type: Object,
      default: () => {},
    },
  },

  // computed: {
  //   regsTitle () {
  //     // string.replace(/\s\s+/g, ' ')
  //     const title = this.title.split(' ')
  //     return title
  //   },
  // },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .HomeCommunities {
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
