<template>
  <section class="PageTabbedContent">
    <ArrowImage class="PageTabbedContent__arrow" />

    <div class="PageTabbedContent__bg" />

    <div class="PageTabbedContent__info">
      <img
        v-if="content.image"
        :src="content.image"
        class="PageTabbedContent__image img--bg"
        alt=""
      >

      <PageTabbedContentCard :tabs="content.tabs" />
    </div>
  </section>
</template>

<script>
import ArrowImage from '~/assets/images/arrow-5.svg?inline'
export default {
  components: {
    ArrowImage,
  },

  props: {
    content: {
      type: Object,
      default: () => {},
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageTabbedContent {
    position: relative;
    padding: 80px 25px;

    &__arrow {
      display: none;
    }

    &__bg {
      position: absolute;
      width: 100%;
      height: 20%;
      // max-height: 768px;
      left: 0px;
      top: 40%;
      transform: translateY(-70%);
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
      padding: 72px 65px 120px 130px;

      &__arrow {
        display: block;
        position: absolute;
        top: 50%;
        left: 64px;
        z-index: 100;
        transform: rotate(-2deg);
      }

      &__bg {
        height: 50%;
        transform: translateY(-50%);
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
      padding: 72px 65px 120px 130px;
    }
  }
</style>
