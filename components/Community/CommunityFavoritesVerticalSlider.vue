<template>
  <ClientOnly>
    <div class="CommunityNeighborhoodsSlider">
      <swiper
        ref="communitySlider"
        class="swiper"
        :options="communityVerticalSlider"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="false"
      >
        <swiper-slide
          v-for="(item, index) in list"
          :key="index"
          style="width: 75% !important"
        >
          <CommunityFavoritesVerticalSliderItem
            :item="item"
          />
        </swiper-slide>
      </swiper>

      <div class="CommunityNeighborhoodsSlider--pagination__wrapper">
        <div slot="pagination" class="swiper-communities-vertical-pagination" />
      </div>

      <ArrowUpImage
        class="arrow-prev-communities-vertical"
      />

      <ArrownextImage
        class="arrow-next-communities-vertical"
      />
    </div>
  </ClientOnly>
</template>

<script>
import ArrowUpImage from '~/assets/images/arrow-up.svg?inline'
import ArrownextImage from '~/assets/images/arrow-down.svg?inline'

export default {
  components: {
    ArrowUpImage,
    ArrownextImage,
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
      communityVerticalSlider: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        direction: 'vertical',
        paginationClickable: true,
        allowTouchMove: false, // disable scrolling mouse
        paginationType: 'custom',
        a11y: false,
        pagination: {
          el: '.swiper-communities-vertical-pagination',
          bulletClass: 'swiper-communities-vertical-pagination-bullet',
          bulletActiveClass: 'swiper-communities-vertical-pagination-bullet-active',
          clickable: true,
          renderBullet: this.renderBulletFunction,
        },
        navigation: {
          nextEl: '.arrow-next-communities-vertical',
          prevEl: '.arrow-prev-communities-vertical',
          slidePrev: this.communitiesSwipePrevSlide,
          slideNext: this.communitiesSwipeNextSlide,
        },
        // on: {
        //   init: function (swiper) {

        //   }
        // }
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

    communitiesSwipePrevSlide () {
      return this.$refs.communitySlider.$swiper.slidePrev()
    },

    communitiesSwipeNextSlide () {
      return this.$refs.communitySlider.$swiper.slideNext()
    },
  },
}
</script>

<style lang="scss">
  @import "~/assets/styles/common/variables.scss";
  .CommunityNeighborhoodsSlider {
    position: relative;

    &--pagination__wrapper {
      position: absolute;
      top: 50% !important;
      transform: translateY(-50%);
      left: calc(74% + 40px);
      width: 20%;
      height: 85%;
      z-index: 10;
      margin: 0;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .swiper-container {
    position: relative;
    width: 100%;
    height: 450px;
  }

  @media (min-width: $medium-devices-width) {
    .swiper-container {
      height: 620px;
    }
  }

  .swiper-slide {
    width: 80%;
  }

  .swiper-communities-vertical-pagination-bullets {
    top: 42% !important;
  }

  .swiper-communities-vertical-pagination {
    position: relative;
    padding: 0 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .swiper-communities-vertical-pagination::before {
    content: '';
    position: absolute;
    top: 0%;
    left: 10px;
    width: 1px;
    height: 100%;
    background: #C4C4C4;
  }

  .swiper-communities-vertical-pagination-bullet {
    position: relative;
    width: 100%;
    text-align: left;
    height: 24px;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #1F2021;
    cursor: pointer;
    background: transparent;
    margin: 19px 18px !important;
    outline: none;
    opacity: 1;
    transition: .3s ease;
  }

  .swiper-communities-vertical-pagination-bullet:hover {
   text-decoration: underline;
  }

  .swiper-communities-vertical-pagination-bullet-active {
    background: transparent !important;
  }

  .swiper-communities-vertical-pagination-bullet-active::before {
    content: '';
    position: absolute;
    top: 0;
    left: -24px;
    background: #DC008B;
    width: 12px;
    height: 200%;
    transform: translateY(-25%);
  }

  .arrow-prev-communities-vertical, .arrow-next-communities-vertical {
    position: absolute;
    height: 20px;
    width: 20px;
    cursor: pointer;
    z-index: 1000;
    outline: none;
  }

  .arrow-prev-communities-vertical {
    top: 0;
    left: calc(95% + 10px);

    &:focus {
      @include focus-dark;
    }
  }
  .arrow-next-communities-vertical {
    bottom: 0;
    left: calc(95% + 10px);

    &:focus {
      @include focus-dark;
    }
  }
</style>
