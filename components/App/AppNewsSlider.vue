<template>
  <div class="AppNewsSlider">
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
        <AppNewsSliderItem
          :item="item"
        />
      </swiper-slide>
    </swiper>

    <div class="swiper-controllers">
      <ArrowPrevImage
        slot="arrow-prev-news"
        class="arrow-prev-news"
        @click="newsSwipePrevSlide"
      />

      <div slot="pagination" class="swiper-news-pagination" />

      <ArrowNextImage
        slot="arrow-next-news"
        class="arrow-next-news"
        @click.prevent="newsSwipeNextSlide"
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
        loop: true,
        spaceBetween: 40,
        // allowTouchMove: false, // disable scrolling mouse
        pagination: {
          el: '.swiper-news-pagination',
          clickable: true,
          type: 'fraction',
        },
        prevButton: '.arrow-prev-news',
        nextButton: '.arrow-next-news',
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

  .AppNewsSlider {
    position: relative;
    padding: 30px 0 70px;
  }

  .swiper-container {
    position: relative;
    width: 100%;
    height: 400px;

    &:before {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      background: #C4C4C4;
      bottom: 6px;
      left: 0;
    }
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
    width: 150px;
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
  }

  .swiper-slide-active {
    &:before {
      content: '';
      position: absolute;
      bottom: 0px;
      right: 50%;
      height: 12px;
      width: 62%;
      background: $lightest-navy;
      transform: translateX(50%);
      transition: width .3s ease;

    }
  }

  @media (min-width: $medium-devices-width) {
    .AppNewsSlider {
      padding-top: 0;
    }

    .swiper-controllers {
      top: -100px;
      right: 65px;
    }

    .swiper-container {
      height: 436px;
    }
  }
</style>
