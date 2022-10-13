<template>
  <div class="LandingPromoSlider">
    <swiper
      ref="promoSlider"
      class="swiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="false"
    >
      <LandingPromoSliderItem
        :item="list"
      />
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      swiperOptions: {
        slidesPerView: 1,
        direction: 'horizontal',
        loop: false,
        // autoplay: {
        //   delay: 6000,
        // },
        allowTouchMove: false, // disable scrolling mouse
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/common/variables.scss";

  .LandingPromoSlider {
    position: relative;
  }

  .swiper-container {
    // position: relative;
    width: 100%;
    height: 550px;

    @media (min-width: $small-devices-width) {
       height: 660px;
    }
  }
</style>
