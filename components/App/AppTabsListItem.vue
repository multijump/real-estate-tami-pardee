<template>
  <li
    class="AppTabsListItem"
    :class="{
      'AppTabsListItem__pink--active': color === 'pink' && activeItem === index + 1,
      'AppTabsListItem__orange--active': color === 'orange' && activeItem === index + 1,
      'AppTabsListItem__peach--active': color === 'peach' && activeItem === index + 1,
      'AppTabsListItem--common': size === 'common',
      'AppTabsListItem--small': size === 'small',
    }"
    tabindex="0"
    @click.prevent="selectedTab(index + 1)"
    @keyup.enter="keyupEnter"
  >
    {{ item.tab_label }}
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },

    index: {
      type: Number,
      default: null,
    },

    activeItem: {
      type: Number,
      default: null,
    },

    color: {
      type: String,
      default: 'orange'
    },

    size: {
      type: String,
      default: 'common'
    },

    activeTab: {
      type: Function,
      default: () => {},
    },
  },

  methods: {
    selectedTab (tab) {
      this.$emit('activeTab', tab)
    },

    keyupEnter () {
      this.selectedTab(this.index + 1)
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppTabsListItem {
    padding: 0 24px;
    display: inline-block;
    color: #000000;
    text-align: center;
    font-weight: normal;
    transition: all .3s ease;
    cursor: pointer;
    white-space: nowrap;

    // &:focus {
    //   @include focus-blue;
    // }

    &:first-of-type {
      padding-left: 12px;
    }

    &:last-of-type {
      padding-right: 12px;
    }

    &::after {
      content: '';
      width: 0px;
      height: 2px;
      display: block;
      background: black;
      transition: 300ms;
    }

    &:hover::after {
      width: 100%;
    }

    &--common {
      font-size: 20px;
      line-height: 120%;
    }

    &--small {
      font-weight: 600;
      font-size: 14px;
      line-height: 140%;
    }

    &__orange--active {
      font-weight: 600;
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -26px;
        left: 0;
        width: 100%;
        height: 12px;
        background: $burnt-orange;
        animation: activeTab .5s;
      }

      &::after {
        content: '';
        width: 0px;
        height: 2px;
        display: block;
        background: black;
      }
    }

    &__pink--active {
      font-weight: 600;
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -28px;
        left: 0;
        width: 100%;
        height: 12px;
        background: $darkest-pink;
        animation: activeTab .5s;
      }

      &::after {
        content: '';
        width: 0px;
        height: 2px;
        display: block;
        background: black;
        transition: 300ms;
      }
    }

    &__peach--active {
      font-weight: 600;
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -28px;
        left: 0;
        width: 100%;
        height: 12px;
        background: $darkest-blush;
        animation: activeTab .5s;
      }

      &::after {
        content: '';
        width: 0px;
        height: 2px;
        display: block;
        background: black;
        transition: 300ms;
      }
    }

    @keyframes activeTab {
      0%   { width: 0; }
      100% { width: 100%; }
    }
  }
</style>
