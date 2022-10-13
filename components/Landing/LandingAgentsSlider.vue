<template>
  <div class="LandingAgentsSlider">
    <swiper
      ref="agentsSlider"
      class="swiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="false"
    >
      <swiper-slide
        v-for="(item, index) in list"
        :key="index"
      >
        <LandingAgentsSliderItem
          :item="item"
        />
      </swiper-slide>
    </swiper>

    <div class="swiper-controllers">
      <ArrowPrevImage
        slot="arrow-prev-agents"
        class="arrow-prev-agents"
        @click="agentsSwipePrevSlide"
      />

      <div slot="pagination" class="swiper-pagination" />

      <ArrowNextImage
        slot="arrow-next-agents"
        class="arrow-next-agents"
        @click="agentsSwipeNextSlide"
      />
    </div>
  </div>
</template>

<script>
import ArrowPrevImage from '~/assets/images/arrow-blue-left.svg?inline'
import ArrowNextImage from '~/assets/images/arrow-blue-right.svg?inline'

export default {
  components: {
    ArrowPrevImage,
    ArrowNextImage,
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
        slidesPerView: 3.5,
        direction: 'horizontal',
        loop: false,
        spaceBetween: 40,
        // allowTouchMove: false, // disable scrolling mouse
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction',
        },
        prevButton: '.arrow-prev-agents',
        nextButton: '.arrow-next-agents',
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          425: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 3.3,
            spaceBetween: 34
          },
          2101: {
            slidesPerView: 5,
            spaceBetween: 34
          }
        }
      },
    }
  },

  methods: {
    agentsSwipePrevSlide () {
      this.$refs.agentsSlider.$swiper.slidePrev()
    },

    agentsSwipeNextSlide () {
      this.$refs.agentsSlider.$swiper.slideNext()
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LandingAgentsSlider {
    position: relative;
    padding-top: 90px;
  }

  .swiper-container {
    position: relative;
    width: 100%;
    height: 520px;
  }

  .swiper-pagination {
    width: 100px;
    height: 10px;
    margin: 0;
  }

  .swiper-pagination {
    width: 100%;
    height: 100%;
    display: flex;
    top: 0;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .swiper-pagination-fraction {
    color: $color-primary;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
  }

  .swiper-controllers {
    position: absolute;
    top: 30px;
    right: 50%;
    transform: translateX(50%);
    max-width: 300px;
    width: 100%;
    height: inherit;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    z-index: 1000;
  }

  .arrow-prev-agents, .arrow-next-agents {
    cursor: pointer;
    height: 20px;
    width: 20px;
    z-index: 100;
  }

  @media (min-width: $medium-devices-width) {
    .LandingAgentsSlider {
      padding-top: 60px;
    }

    .swiper-controllers {
      top: -50px;
      right: 65px;
      max-width: 150px;
    }
  }

  @media (min-width: $large-devices-width) {
    .swiper-controllers {
      right: 250px;
      max-width: 250px;
    }
  }
</style>
