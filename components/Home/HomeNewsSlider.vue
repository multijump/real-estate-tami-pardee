<template>
  <div class="HomeNewsSlider">
    <swiper
      ref="newsSlider"
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
        <HomeNewsSliderItem
          :item="item"
        />
      </swiper-slide>
    </swiper>

    <div class="swiper-controllers">
      <ArrowPrevImage
        slot="arrow-prev-news"
        class="arrow-prev-news"
        tabindex="0"
        @click="newsSwipePrevSlide"
        @keyup.enter="newsSwipePrevSlide"
      />

      <div slot="pagination" class="swiper-news-pagination" />

      <ArrowNextImage
        slot="arrow-next-news"
        class="arrow-next-news"
        tabindex="0"
        @click.prevent="newsSwipeNextSlide"
        @keyup.enter="newsSwipeNextSlide"
      />
    </div>

    <div class="swiper-news-scrollbar"></div>
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
        // loop: true,
        allowTouchMove: false, // disable scrolling mouse
        spaceBetween: 40,
        pagination: {
          el: '.swiper-news-pagination',
          clickable: true,
          type: 'fraction',
        },
        initialSlide: 0,
        prevButton: '.arrow-prev-news',
        nextButton: '.arrow-next-news',
        scrollbar: {
          el: '.swiper-news-scrollbar',
          draggable: true,
        },
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
            spaceBetween: 40
          },
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 40
          },
          1441: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          2101: {
            slidesPerView: 6,
            spaceBetween: 50
          }
        }
      },
    }
  },

  methods: {
    newsSwipePrevSlide () {
      this.$refs.newsSlider.$swiper.slidePrev()
    },

    newsSwipeNextSlide () {
      this.$refs.newsSlider.$swiper.slideNext()
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .HomeNewsSlider {
    position: relative;
    padding: 30px 0 0px;
  }

  .swiper-container {
    position: relative;
    width: 100%;
    height: 400px;

    // &:before {
    //   content: '';
    //   position: absolute;
    //   height: 1px;
    //   width: 100%;
    //   background: #C4C4C4;
    //   bottom: 6px;
    //   left: 0;
    // }
  }

  .swiper-news-pagination {
    width: 100px;
    height: 10px;
    margin: 0;
  }

  .swiper-news-pagination {
    width: inherit;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    &::before {
      content: none;
    }
  }

  .swiper-controllers {
    position: absolute;
    top: -60px;
    right: 50%;
    transform: translateX(50%);
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    z-index: 1000;
  }

  .arrow-prev-news, .arrow-next-news {
    cursor: pointer;
    height: 20px;
    width: 20px;
    z-index: 100;

    &:focus {
      @include focus-blue;
    }
  }

  // .swiper-slide-active {
  //   &:before {
  //     content: '';
  //     position: absolute;
  //     bottom: 0px;
  //     right: 50%;
  //     height: 12px;
  //     width: 62%;
  //     background: $lightest-navy;
  //     transform: translateX(50%);
  //     transition: width .3s ease;

  //   }
  // }

  .swiper-news-scrollbar {
    z-index: 1111;
    position: relative;
    height: 12px;

    &::before {
      content: '';
      position: absolute;
      bottom: 50%;
      right: 0;
      height: 1px;
      width: 100%;
      background: #C4C4C4;
    }

    &::v-deep  .swiper-scrollbar-drag {
      border-radius: 0 !important;
      background: #1172A8 !important;
    }
  }

  @media (min-width: $medium-devices-width) {
    .HomeNewsSlider {
      padding-top: 0;
    }

    .swiper-controllers {
      top: -100px;
      right: 140px;
    }

    .swiper-container {
      height: 436px;
    }
  }
</style>
