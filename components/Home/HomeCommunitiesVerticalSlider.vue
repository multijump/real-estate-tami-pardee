<template>
  <ClientOnly>
    <div class="HomeCommunitiesVerticalSlider">
      <swiper
        ref="homeCommunitiesVerticalSlider"
        class="swiper"
        :options="communitiesVerticalSlider"
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
          <HomeCommunitiesVerticalSliderItem
            v-if="item.items_on_banner"
            :item="item"
            :index="index"
            :length="list.length"
          />
        </swiper-slide>
      </swiper>

      <div class="HomeCommunitiesVerticalSlider--pagination__wrapper">
        <div slot="pagination" class="swiper-communities-vertical-pagination" />
      </div>

      <ArrowUpImage
        ref="homeCommunitiesVerticalSliderArrowUp"
        class="arrow-prev-home-communities"
        tabindex="0"
        @keyup.enter="homeCommunitiesSwipePrevSlide"
      />

      <ArrowDownImage
        ref="homeCommunitiesVerticalSliderArrowDown"
        class="arrow-next-home-communities"
        tabindex="0"
        @keyup.enter="homeCommunitiesSwipeNextSlide"
      />
    </div>
  </ClientOnly>
</template>

<script>
import ArrowUpImage from '~/assets/images/arrow-up.svg?inline'
import ArrowDownImage from '~/assets/images/arrow-down.svg?inline'

export default {
  components: {
    ArrowUpImage,
    ArrowDownImage,
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
      communitiesVerticalSlider: {
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
          nextEl: '.arrow-next-home-communities',
          prevEl: '.arrow-prev-home-communities',
          slidePrev: this.homeCommunitiesSwipePrevSlide,
          slideNext: this.homeCommunitiesSwipeNextSlide,
        },
        keyboard: {
          enabled: true,
          pageUpDown: true,
          onlyInViewport: true,
        },
      },
    }
  },

  created () {
    this.$nuxt.$on('home:community:slider:move:next', this.moveNextSliderBullet)
    this.$nuxt.$on('home:community:slider:move:prev', this.movePrevSliderBullet)
  },

  mounted () {
    this.list.forEach((item) => {
      return this.names.push(item.post_title)
    })
  },

  methods: {
    renderBulletFunction (index, className) {
      return '<a class="' + className + '" aria-label="Go to ' + (this.names[index]) + '" tabindex=0>' + (this.names[index]) + '</a>'
    },

    homeCommunitiesSwipePrevSlide () {
      return this.$refs.homeCommunitiesVerticalSlider.$swiper.slidePrev()
    },

    homeCommunitiesSwipeNextSlide () {
      return this.$refs.homeCommunitiesVerticalSlider.$swiper.slideNext()
    },

    moveNextSliderBullet (index) {
      console.log(index)
      // this.$refs.homeCommunitiesVerticalSlider.$swiper.pagination.el
      this.$refs.homeCommunitiesVerticalSliderArrowUp.focus()
    },

    movePrevSliderBullet (index) {
      console.log(index)
    },
  },
}
</script>

<style lang="scss">
  @import "~/assets/styles/common/variables.scss";
  .HomeCommunitiesVerticalSlider {
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
    height: 28px;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    color: #1F2021;
    cursor: pointer;
    background: transparent;
    margin: 19px 18px !important;
    outline: none;
    opacity: 1;
    transition: .3s ease;

    &:focus {
      @include focus-dark;
    }
  }

  .swiper-communities-vertical-pagination-bullet:hover {
    text-decoration: underline;
    color: #1F2021;

  }

  .swiper-communities-vertical-pagination-bullet-active {
    background: transparent !important;
    font-weight: 600;
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

  .arrow-prev-home-communities, .arrow-next-home-communities {
    position: absolute;
    height: 20px;
    width: 20px;
    cursor: pointer;
    z-index: 1000;
    outline: none;
  }

  .arrow-prev-home-communities {
    top: 0;
    left: calc(95% + 10px);

    &:focus {
      @include focus-dark;
    }
  }
  .arrow-next-home-communities {
    bottom: 0;
    left: calc(95% + 10px);

    &:focus {
      @include focus-dark;
    }
  }
</style>
