<template>
  <div class="HomeNewsCard">
    <AppTabsList
      id="tabNewsItems"
      ref="newsList"
      :list="tabs"
      color="pink"
      :active-item="activeItem"
      @changeTab="changeTab"
    />

    <div class="HomeNewsCard__fixed">
      <ArrowNextImage
        class="HomeNewsCard__arrow"
        @click.prevent="nextTab"
      />
    </div>

    <div class="HomeNewsCard__content">
      <div
        v-for="(item, index) in tabs"
        v-show="activeItem === index + 1"
        :key="index"
        class="HomeNewsCard__wrapper"
        :class="{ 'HomeNewsCard__wrapper--active': activeItem === index + 1 }"
      >
        <p
          v-if="item.tab_title"
          class="HomeNewsCard__title"
          v-html="item.tab_title"
        />

        <p
          v-if="item.tab_body"
          class="HomeNewsCard__description"
          v-html="item.tab_body.replace(/\n/g, '<br>')"
        />

        <div class="HomeNewsCard__action">
          <AppLinkButton
            color="pink"
            type="small"
            :text="item.link_primary.title"
            style="margin-bottom: 24px;"
            :navigate-to="getLinkUrl(index)"
          />

          <AppLink
            color="grey"
            :text="item.link_secondary.title"
            :navigate-to="item.link_secondary.url"
            class="HomeNewsCard__action-link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowNextImage from '~/assets/images/arrow-down.svg?inline'

export default {
  components: {
    ArrowNextImage,
  },

  props: {
    tabs: {
      type: Array,
      default: () => [],
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
      if (this.tabs.length > this.activeItem) {
        this.activeItem += 1
      } else {
        this.activeItem = 1
      }

      const list = this.$refs.newsList.$el

      const element = list.getElementsByClassName('AppTabsListItem')[this.activeItem - 1]

      this.$scrollTo(element, 300, {
        container: '#tabNewsItems',
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
      window.open(`${this.tabs[index].link_primary.url}`, '_blank')
    },

    getLinkUrl (index) {
      return `${this.tabs[index].link_primary.url}`
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .HomeNewsCard {
    position: relative;
    max-width: 730px;
    width: 100%;
    height: 100%;
    background: #FFFDFC;
    z-index: 12;
    padding: 45px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &__content {
      text-align: center;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-direction: column;

      &:nth-child(2) {
        margin: 0 auto;
      }
    }

    &__arrow {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 0;
      transform: rotate(-90deg);
    }

    &__fixed {
      position: absolute;
      top: 70px;
      right: -2px;
      background: linear-gradient(90deg, rgba(255, 253, 252, 0) 0%, #FFFDFC 50%);

      width: 100px;
      height: 40px;
    }

    // &__wrapper {
    //   display: none;

    //   &--active {
    //     display: block;
    //   }
    // }

    &__title {
      padding-top: 40px;
      padding-bottom: 15px;
      font-family: 'Bayshore', sans-serif;
      font-weight: normal;
      font-size: 58px;
      line-height: 100%;

      &::last-word {
        content:attr(data-text);
        color: $main-pink;
        transform:translateX(-100%);
        position:absolute;
      }
    }

    &__description {
      text-align: left;
      font-weight: normal;
      font-size: 16px;
      line-height: 120%;
      color: #1F2021;
      padding-bottom: 20px;
    }

    &__action {
      float: left;
    }

    @media (min-width: $medium-devices-width) {
      padding: 0px 60px 45px 60px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

      &__title {
        padding-top: 20px;
        padding-bottom: 5px;
        font-size: 68px;
      }

      &__description {
        padding-bottom: 44px;
      }

      &__action {
        margin: 0 auto;
        float: none;

        &-link {
          margin: 0 auto;
        }
      }

      &__fixed {
        right: 60px;
      }
    }
    @media (min-width: $large-devices-width) {
      &__fixed {
        display: none;
      }
    }
  }
</style>
