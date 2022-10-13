<template>
  <ClientOnly>
    <div class="CommunityNeighborhoodsSlider">
      <div class="swiper-navigation">
        <div slot="pagination" class="swiper-communities-horizontal-pagination" />

        <div class="arrow-fixed-left">
          <ArrowNextImage
            class="arrow-prev-communities"
          />
        </div>

        <div class="arrow-fixed-right">
          <ArrowNextImage
            class="arrow-next-communities"
          />
        </div>
      </div>

      <swiper
        ref="communitySlider"
        class="swiper"
        :options="swiperOption"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="false"
      >
        <CommunityFavoritesHorizontalSliderItem
          v-for="(item, index) in list"
          :key="index"
          :item="item"
        />
      </swiper>
    </div>
  </ClientOnly>
</template>

<script>
import ArrowNextImage from '~/assets/images/arrow-down-pink.svg?inline'

export default {
  components: {
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
      names: [],
      swiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        direction: 'horizontal',
        paginationClickable: true,
        allowTouchMove: false, // disable scrolling mouse
        paginationType: 'custom',
        a11y: false,
        pagination: {
          el: '.swiper-communities-horizontal-pagination',
          bulletClass: 'swiper-communities-horizontal-pagination-bullet',
          bulletActiveClass: 'swiper-communities-horizontal-pagination-bullet-active',
          clickable: true,
          // dynamicBullets: true,
          renderBullet: this.renderBulletFunction,
        },
        navigation: {
          nextEl: '.arrow-next-communities',
          prevEl: '.arrow-prev-communities',
          slidePrev: this.communitiesSwipePrevSlide,
          slideNext: this.communitiesSwipeNextSlide,
        },
      },
    }
  },

  mounted () {
    this.list.forEach((item) => {
      return this.names.push(item.community_favourite_name)
    })
  },

  methods: {
    renderBulletFunction (index, className) {
      return '<span class="' + className + '" aria-label="Go to ' + (this.names[index]) + '">' + (this.names[index]) + '</span>'
    },

    communitiesSwipeNextSlide () {
      return this.$refs.communitySlider.$swiper.slidePrev()
    },

    communitiesSwipePrevSlide () {
      return this.$refs.communitySlider.$swiper.slidePrev()
    },
  },
}
</script>

<style lang="scss">
  @import "~/assets/styles/common/variables.scss";

  .swiper-container {
    position: relative;
    width: 100%;
  }

  .swiper-slide {
    width: 100%;
  }

  // .swiper-container-horizontal > .swiper-communities-horizontal-pagination-bullets.swiper-communities-horizontal-pagination-bullets-dynamic {
  //   width: 100% !important;
  // }

  // .swiper-container-horizontal > .swiper-communities-horizontal-pagination-bullets.swiper-communities-horizontal-pagination-bullets-dynamic {
  //   left: 0;
  //   transform: translateX(0);
  // }

  // .swiper-communities-horizontal-pagination-bullets-dynamic,
  // .swiper-communities-horizontal-pagination-bullet,
  // .swiper-communities-horizontal-pagination-bullet-active-next-next,
  // .swiper-communities-horizontal-pagination-bullet-active-next,
  // .swiper-communities-horizontal-pagination-bullet-active-prev-prev,
  // .swiper-communities-horizontal-pagination-bullet-active-prev {
  //   transform: scale(1) !important;
  // }

  .swiper-navigation {
    position: relative;
    width: 100%;
    min-height: 55px;
    margin: 30px 0;
  }

  .swiper-communities-horizontal-pagination {
    width: 100%;
    height: 100%;
    min-height: 55px;
    z-index: 10;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    overflow-y:  hidden;

  }

  .swiper-communities-horizontal-pagination::-webkit-scrollbar {
    height: 1px;
    border: 1px solid #d5d5d5;
  }
  // .swiper-communities-horizontal-pagination::before {
  //   content: '';
  //   position: absolute;
  //   bottom: 10px;
  //   left: 0;
  //   width: 100vw;
  //   height: 1px;
  //   background: #C4C4C4;
  // }

  .swiper-communities-horizontal-pagination-bullet {
    position: relative;
    width: 100%;
    text-align: left;
    height: 24px;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #1F2021;
    white-space: nowrap;
    background: transparent;
    margin: 0 18px !important;
    outline: none;
    opacity: 1;
    transition: .3s ease;
  }

  .swiper-communities-horizontal-pagination-bullet:hover {
   text-decoration: underline;
  }

  .swiper-communities-horizontal-pagination-bullet-active {
    background: transparent !important;
  }

  .swiper-communities-horizontal-pagination-bullet-active::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    z-index: 100;
    background: #DC008B;
    width: 120%;
    height: 12px;
    transform: translateX(-12%);
  }

  .arrow-fixed-left {
    position: absolute;
    top:16px;
    left: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%);
    z-index: 100;

    transform: rotate(180deg);

    width: 100px;
    height: 30px;
  }

  .arrow-fixed-right {
    position: absolute;
    top: 16px;
    right: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%);
    z-index: 100;

    width: 100px;
    height: 30px;
  }

  .arrow-prev-communities {
    position: absolute;
    height: 20px;
    width: 20px;
    top: 5px;
    right: 15px;
    cursor: pointer;
    z-index: 1000;
    outline: none;
    transform: rotate(-90deg);

  }

  .arrow-prev-communities::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    // width: 50px;
    // height: 100px;

    // background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%);
    // opacity: 0.9;
  }
  .arrow-next-communities {
    position: absolute;
    height: 20px;
    width: 20px;
    top: 5px;
    right: 15px;
    cursor: pointer;
    z-index: 1000;
    outline: none;
    transform: rotate(-90deg);

  }

  .arrow-next-communities::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    // width: 50px;
    // height: 100px;

    // background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%);
    // opacity: 0.9;
  }
</style>
