<template>
  <div class="CommunityPromoSlider">
    <swiper
      ref="promoSlider"
      class="swiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="false"
    >
      <CommunityPromoSliderItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :type="type"
        :pretitle="pretitle"
        :title="title"
      />
    </swiper>

    <div class="swiper-controller">
      <ArrowLeftImage class="arrow-prev-promo" />

      <ArrowRightImage class="arrow-next-promo" />
    </div>
  </div>
</template>

<script>
import ArrowRightImage from '~/assets/images/arrow-blue-right.svg?inline'
import ArrowLeftImage from '~/assets/images/arrow-blue-left.svg?inline'

export default {
  components: {
    ArrowRightImage,
    ArrowLeftImage,
  },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'image_slider'
    },
    pretitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
  },

  data () {
    return {
      swiperOptions: {
        slidesPerView: 1,
        direction: 'horizontal',
        paginationClickable: true,
        loop: true,
        autoplay: {
          delay: 6000,
        },
        allowTouchMove: false, // disable scrolling mouse
        navigation: {
          nextEl: '.arrow-next-promo',
          prevEl: '.arrow-prev-promo',
          slidePrev: this.promoSwipePrevSlide,
          slideNext: this.promoSwipeNextSlide,
        }
      }
    }
  },

  methods: {
    promoSwipePrevSlide () {
      this.$refs.promoSlider.$swiper.slidePrev()
    },

    promoSwipeNextSlide () {
      this.$refs.promoSlider.$swiper.slideNext()
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityPromoSlider {
    position: relative;
  }

  .swiper-container {
    // position: relative;
    width: 100%;
    height: 375px;

    @media (min-width: $small-devices-width) {
       height: 660px;
    }
  }

  .swiper-pagination {
    width: 100px;
    height: 10px;
    margin: 0;
  }

  .swiper-controller {
    position: absolute;
    padding: 0 6px;
    height: 65px;
    width: 65px;
    bottom: -32px;
    right: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #FFFDFC;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    z-index: 100;
    border-radius: 50%;

    @media (min-width: $small-devices-width) {
      height: 78px;
      width: 78px;
      bottom: 50px;
      right: 135px;
    }

    @media (min-width: $extra-large-devices-width) {
      height: 78px;
      width: 78px;
      bottom: 50px;
      right: calc(50% - 565px);
    }
  }

  .arrow-prev-promo, .arrow-next-promo {
    cursor: pointer;
  }
</style>
