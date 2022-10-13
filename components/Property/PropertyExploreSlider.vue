<template>
  <div class="PropertyExploreSlider">
    <swiper
      ref="exploreSlider"
      class="swiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="false"
    >
      <PropertyExploreSliderItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
      />
    </swiper>

    <div class="swiper-controller">
      <ArrowLeftImage class="arrow-prev-explore" />

      <ArrowRightImage class="arrow-next-explore" />
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
          nextEl: '.arrow-next-explore',
          prevEl: '.arrow-prev-explore',
          slidePrev: this.exploreSwipePrevSlide,
          slideNext: this.exploreSwipeNextSlide,
        }
      }
    }
  },

  methods: {
    exploreSwipePrevSlide () {
      this.$refs.exploreSlider.$swiper.slidePrev()
    },

    exploreSwipeNextSlide () {
      this.$refs.exploreSlider.$swiper.slideNext()
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PropertyExploreSlider {
    position: relative;
  }

  .swiper-container {
    // position: relative;
    width: 100%;
    height: 250px;

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
      left: 135px;
    }
  }

  .arrow-prev-explore, .arrow-next-explore {
    cursor: pointer;
  }
</style>
