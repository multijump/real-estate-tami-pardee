<template>
  <div class="AppPagination__pagination">
    <button
      class="AppPagination__text"
      @click="chooseFirstPage()"
    >
      «  First
    </button>

    <button
      class="AppPagination__text"
      @click="choosePrevPage()"
    >
      ‹  Prev
    </button>

    <template v-if="pages <= 5">
      <button
        v-for="(item, index) in pages"
        :key="index"
        class="AppPagination__number"
        :class="{
          'AppPagination__number--active': activeItem === index + 1,
        }"
        @click="choosePage(index)"
      >
        {{ item }}
      </button>
    </template>

    <template v-else>
      <button
        v-for="(item, index) in 5"
        :key="index"
        class="AppPagination__number"
        :class="{
          'AppPagination__number--active': activeItem === index + 1,
        }"
        @click="choosePage(index)"
      >
        {{ item }}
      </button>

      <span class="AppPagination__dots">
        ...
      </span>

      <button
        class="AppPagination__number"
        :class="{
          'AppPagination__number--active': activeItem === pages,
        }"
        @click="choosePage(pages - 1)"
      >
        {{ pages }}
      </button>
    </template>

    <button
      class="AppPagination__text"
      @click="chooseNextPage()"
    >
      Next  ›
    </button>

    <button
      class="AppPagination__text"
      @click="chooseLastPage()"
    >
      Last  »
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      default: null,
    },

    navigateToPage: {
      type: Function,
      default: () => {},
    },
  },

  data () {
    return {
      activeItem: 1,
    }
  },

  methods: {
    chooseFirstPage () {
      this.activeItem = 1

      this.$emit('navigateToPage', this.activeItem)
    },

    choosePrevPage () {
      if (this.activeItem <= 2) {
        this.activeItem = 1
      } else {
        this.activeItem = this.activeItem - 1
      }

      this.$emit('navigateToPage', this.activeItem)
    },

    choosePage (indexPage) {
      this.activeItem = indexPage + 1

      this.$emit('navigateToPage', this.activeItem)
    },

    chooseNextPage () {
      if (this.activeItem >= this.pages) {
        this.activeItem = this.pages
      } else {
        this.activeItem = this.activeItem + 1
      }

      this.$emit('navigateToPage', this.activeItem)
    },

    chooseLastPage () {
      this.activeItem = this.pages

      this.$emit('navigateToPage', this.activeItem)
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppPagination {
    &__pagination {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
    }

    &__dots {
      display: flex;
      align-items: center;
      padding: 12px 16px;
    }

    &__text {
      padding: 8px 12px;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      text-decoration-line: underline;
      color: #073C5C;
      border: none;
      outline: none;
      background: transparent;
      transition: opacity .3s ease;
      opacity: 1;

      &:hover {
        opacity: .75;
      }

      &:first-of-type, &:last-of-type {
        display: none;
      }
    }

    &__number {
      padding: 8px 12px;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      text-decoration-line: underline;
      color: #073C5C;
      border-radius: 6px;
      background: transparent;
      border: none;
      outline: none;
      transition: background .3s ease;

      &--active {
        background: $darkest-pink;
        color: #FFFFFF;
      }

      &:hover {
        background: #F2F2F2;
        color: #073C5C;
      }
    }

    @media (min-width: $small-devices-width) {
      &__text, &__number {
        padding: 12px 16px;
      }
    }

    @media (min-width: $medium-devices-width) {
      &__text {
        &:first-of-type, &:last-of-type {
          display: block;
        }
      }
    }
  }
</style>
