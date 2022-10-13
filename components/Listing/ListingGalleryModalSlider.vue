<template>
  <div class="ListingGalleryModalSlider">
    <swiper
      ref="modalSlider"
      class="swiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="false"
    >
      <ListingGalleryModalSliderItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
      />
    </swiper>

    <div slot="pagination" class="swiper-modal-pagination" />

    <div class="swiper-model-left">
      <ArrowLeftImage class="arrow-prev-modal" />
    </div>

    <div class="swiper-model-right">
      <ArrowRightImage class="arrow-next-modal" />
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

    activeIndex: {
      type: Function,
      default: null,
    },

    followActiveSlide: {
      type: Number,
      default: null,
    },

    currentIndex: {
      type: Number,
      default: null,
    },
  },

  data () {
    return {
      swiperOptions: {
        slidesPerView: 1,
        direction: 'horizontal',
        paginationClickable: true,
        loop: true,
        pagination: {
          el: '.swiper-modal-pagination',
          clickable: true,
          type: 'fraction',
        },
        allowTouchMove: false, // disable scrolling mouse
        navigation: {
          nextEl: '.arrow-next-modal',
          prevEl: '.arrow-prev-modal',
          slidePrev: this.modalSwipePrevSlide,
          slideNext: this.modalSwipeNextSlide,
        }
      }
    }
  },

  watch: {
    followActiveSlide (newVal, oldVal) {
      if (oldVal >= 0 && newVal !== oldVal) {
        this.$refs.modalSlider.$swiper.slideTo(this.currentIndex + 1, 100, true)
      }
    }
  },

  mounted () {
    this.initSlider()

    this.$refs.modalSlider.$swiper.on('beforeDestroy', () => {
    })

    this.$refs.modalSlider.$swiper.on('slideChange', () => {
      this.$emit('activeIndex', this.$refs.modalSlider.$swiper.realIndex)
    })
  },

  methods: {
    initSlider () {
      this.$refs.modalSlider.$swiper.slideTo(this.currentIndex + 1, 100, true)
    },

    modalSwipePrevSlide () {
      this.$refs.modalSlider.$swiper.slidePrev()
    },

    modalSwipeNextSlide () {
      this.$refs.modalSlider.$swiper.slideNext()
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .ListingGalleryModalSlider {
    position: relative;
    height: 100%;
  }

  .swiper-container {
    // position: relative;
    width: 100%;
    height: 250px;

    @media (min-width: $small-devices-width) {
       height: 100%;
    }
  }

  .swiper-pagination {
    width: 100px;
    height: 10px;
    margin: 0;
  }

  .swiper-model-left {
    position: absolute;
    padding: 0 6px;
    height: 45px;
    width: 45px;
    bottom: 50%;
    left: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transform: translateY(50%);
    background: #FFFDFC;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    z-index: 100;
    border-radius: 50%;

    @media (min-width: $medium-devices-width) {
      left: 10px;
    }
  }

  .swiper-model-right {
    position: absolute;
    padding: 0 6px;
    height: 45px;
    width: 45px;
    bottom: 50%;
    right: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transform: translateY(50%);
    background: #FFFDFC;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
    z-index: 100;
    border-radius: 50%;

    @media (min-width: $medium-devices-width) {
      right: 10px;
    }
  }

  .swiper-modal-pagination {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: fit-content;
    height: fit-content;
    padding: 4px 8px;
    font-size: 10px;
    background-color: rgba(0,0,0,.7);
    color: white;
    border-radius: 3rem;

    @media (min-width: $medium-devices-width) {
      bottom: 14%;
      font-size: 16px;
    }
}

  .arrow-prev-modal, .arrow-next-modal {
    cursor: pointer;

    &:focus {
      @include focus-blue;
    }
  }
</style>
