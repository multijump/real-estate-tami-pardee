<template>
  <div class="HomeLearn">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
          <div class="HomeLearn__title">
            <AppSectionTitle
              color="orange"
              :display="learn.pretitle"
              :title="learn.title"
            />
          </div>
        </div>

        <div class="col-12 col-md-7 d-flex align-items-center justify-content-end h-80">
          <AppTabsList
            id="tabLearnItems"
            ref="learnList"
            :list="learn.tabs"
            :active-item="activeItem"
            @changeTab="changeTab"
          />

          <div class="HomeLearn__fixed">
            <ArrowNextImage
              class="HomeLearn__arrow-next"
              @click.prevent="nextTab"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="HomeLearn__arrow">
      <ArrowImage />
    </div>

    <div class="HomeLearn__block">
      <div
        v-for="(item, index) in learn.tabs"
        v-show="activeItem === index + 1"
        :key="index"
        class="HomeLearn__wrapper"
        :class="{ 'HomeLearn__wrapper--active': activeItem === index + 1 }"
      >
        <div class="HomeLearn__content">
          <AppSectionTitle
            color="orange"
            :subtitle="item.tab_title"
            :lead="item.tab_body"
          />

          <p class="HomeLearn__text" v-html="item.tab_sub_title" />

          <div class="HomeLearn__field">
            <AppLink
              type="common"
              color="black"
              :text="item.tab_sub_link.title"
              :navigate-to="item.tab_sub_link.url"
              style="
                font-weight: normal;
                font-size: 18px;
                white-space: nowrap;
                text-decoration: none;
                "
            />
          </div>
        </div>

        <div class="HomeLearn__image">
          <img :src="item.tab_image" alt="">

          <div
            v-if="item.tab_link"
            class="HomeLearn__action"
          >
            <AppLinkButton
              color="orange"
              :text="item.tab_link.title"
              :navigate-to="getLinkUrl(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowImage from '~/assets/images/arrow-2.svg?inline'

import ArrowNextImage from '~/assets/images/arrow-left-orange.svg?inline'

export default {
  components: {
    ArrowImage,
    ArrowNextImage,
  },

  props: {
    learn: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      activeItem: 1
    }
  },

  methods: {
    changeTab (tab) {
      this.activeItem = tab
    },

    nextTab () {
      if (this.learn.tabs.length > this.activeItem) {
        this.activeItem += 1
      } else {
        this.activeItem = 1
      }

      const list = this.$refs.learnList.$el

      const element = list.getElementsByClassName('AppTabsListItem')[this.activeItem - 1]

      this.$scrollTo(element, 300, {
        container: '#tabLearnItems',
        easing: 'ease-in',
        lazy: false,
        offset: -60,
        force: true,
        cancelable: true,
        x: true,
        y: false
      })
    },

    redirect (index) {
      window.open(`${this.learn.tabs[index].url}`, '_blank')
    },

    getLinkUrl (index) {
      return `${this.learn.tabs[index].url}`
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .HomeLearn {
    position: relative;
    padding: 80px 0 200px;

    &__block {
      position: relative;
      width: 100%;
      margin-top: 45px;
      padding: 45px 0 180px;
      background: $rose-white;
    }

    &__title {
      text-align: center;
    }

    &__content {
      padding: 0 25px;
    }

    &__text {
      padding-top: 42px;
      padding-bottom: 24px;
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: $grey;
    }

    &__arrow-next {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 0;
    }

    &__fixed {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 14px;
      background: linear-gradient(90deg, rgba(255, 253, 252, 0) 0%, #FFFDFC 50%);

      width: 100px;
      height: 40px;
    }

    &__arrow {
      display: none;
    }

    &__field {
      position: relative;
      width: fit-content;
      z-index: 1;

      &::after {
        content: '';
        z-index: -1;
        position: absolute;
        transform: rotate(-2deg);
        bottom: -4px;
        left: 0;
        width: 100%;
        min-width: 287px;
        height: 18px;
        border-radius: 10px;
        background: $lighter-sand;
      }
    }

    &__image {
      position: absolute;
      bottom: -360px;
      right: 50%;
      transform: translate(50%, -50%);

      img {
        max-width: 320px;
        height: 100%;
        max-height: 320px;
        object-fit: cover;
      }
    }

    &__action {
      position: absolute;
      bottom: 26px;
      right: 50%;
      transform: translateX(50%);
    }

    // @media (min-width: $medium-devices-width) {
    //   &__image {
    //     position: absolute;
    //     bottom: -400px;
    //     right: 50%;
    //     transform: translate(50%, -50%);

    //     img {
    //       max-width: 400px;
    //       height: 100%;
    //       max-height: 400px;
    //       object-fit: cover;
    //     }
    //   }
    // }

    @media (min-width: $large-devices-width) {
      padding-top: 110px;
      padding-bottom: 120px;

      &__title {
        text-align: left;
        margin-bottom: 30px;
      }

       &__content {
        padding: 0 80px 0 0;
      }

      &__block {
        position: relative;
        width: 84%;
        min-height: 600px;
        height: 100%;
        margin-top: 20px;
        margin-left: 70px;
        padding: 70px 450px 120px 67px;
        background: $rose-white;
      }

      &__image {
        top: 50px;
        right: -120px;
        transform: unset;
        max-height: 500px;

        img {
          max-width: 500px;
          width: 100%;
          max-height: 500px;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    @media (min-width: $extra-large-devices-width) {
      &__arrow {
        display: block;
        position: absolute;
        top: 160px;
        left: 43%;
        z-index: 2;
      }

      &__fixed {
        display: none;
      }
    }
  }
</style>
