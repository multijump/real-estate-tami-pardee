<template>
  <ul
    class="AppList list--reset"
    :style="cssProps"
  >
    <AppTabsListItem
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      :index="index"
      :color="color"
      :size="size"
      :active-item="activeItem"
      @activeTab="selectTab"
    />
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },

    color: {
      type: String,
      default: 'orange',
    },

    size: {
      type: String,
      default: 'common',
    },

    activeItem: {
      type: Number,
      default: null,
    },

    changeTab: {
      type: Function,
      default: () => {},
    },

    minWidth: {
      type: Number,
      default: 40,
    }
  },

  computed: {
    cssProps () {
      return {
        '--min-width': this.minWidth + 'em',
      }
    }
  },

  methods: {
    selectTab (tab) {
      this.$emit('changeTab', tab)
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppList {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    overflow-x: scroll;
    overflow-y:  hidden;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      min-width: var(--min-width);
      height: 1px;
      left: 0;
      bottom: 6px;
      background: #C4C4C4;
    }
  }
</style>
