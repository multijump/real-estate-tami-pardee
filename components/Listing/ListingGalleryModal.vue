<template>
  <div class="ListingGalleryModal">
    <div class="ListingGalleryModal__header">
      <div
        class="ListingGalleryModal__close"
        @click.prevent="closeModal()"
      >
        <font-awesome-icon
          class="ListingGalleryModal__close-icon"
          :icon="['fas', 'times']"
        />
      </div>
    </div>

    <div class="ListingGalleryModal__content">
      <div
        id="imagesListItems"
        ref="imagesList"
        class="ListingGalleryModal__list"
      >
        <div
          v-for="(item, i) in list"
          :key="i"
          class="ListingGalleryModal__item"
          :class="{
            'ListingGalleryModal__item--active' : currentIndex === i
          }"
          @click.prevent="setActive(i)"
        >
          <img class="ListingGalleryModal__image" :src="item" alt="">
        </div>
      </div>

      <div
        v-if="parseInt(currentIndex) >= 0"
        class="ListingGalleryModal__slider"
      >
        <ListingGalleryModalSlider
          :list="list"
          :currentIndex="currentIndex"
          :followActiveSlide="currentIndex"
          @activeIndex="activeIndex"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },

    index: {
      type: Number,
      default: null,
    },
  },

  data () {
    return {
      currentIndex: null,
    }
  },

  mounted () {
    this.currentIndex = this.index
  },

  methods: {
    closeModal () {
      this.$modal.hideAll()
    },

    setActive (i) {
      this.currentIndex = i
    },

    activeIndex (value) {
      this.currentIndex = value

      const list = this.$refs.imagesList

      const element = list.getElementsByClassName('ListingGalleryModal__item')[this.currentIndex]

      if (this.$device.isMobile) {
        this.$scrollTo(element, 300, {
          container: '#imagesListItems',
          easing: 'ease-in',
          lazy: false,
          offset: 0,
          force: true,
          cancelable: true,
          x: true,
          y: false
        })
      } else {
        this.$scrollTo(element, 300, {
          container: '#imagesListItems',
          easing: 'ease-in',
          lazy: false,
          offset: -60,
          force: true,
          cancelable: true,
          x: false,
          y: true
        })
      }
    }
  },
}
</script>

<style lang="scss">
  @import "~/assets/styles/common/variables.scss";

  .ListingGalleryModal {
    position: relative;
    padding: 20px;
    overflow: hidden;

    &__header {
      width: 100%;
      padding-bottom: 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    &__close {
      height: 40px;
      width: 40px;
      background: #f5f5f5;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__content {
      display: flex;
      flex-direction: column;
    }

    &__list {
      display: flex;
      flex-direction: row;
      position: relative;
      overflow-x: scroll;
      width: 100%;
      height: 100%;
      min-height: 150px;
      border-radius: 8px;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__slider {
      position: relative;
      overflow: hidden;
    }

    &__item {
      position: relative;
      width: 100%;
      min-width: 300px;
      min-height: 150px;
      height: 100%;
      margin-bottom: 20px;

      &:not(:last-of-type) {
        margin-right: 10px;
      }

      &--active {
        &::before {
          content: "";
          border:  4px solid $color-primary;
          border-radius: 8px;
          top: -2px;
          left: 0;
          bottom: -2px;
          right: 0;
          position: absolute;
          z-index: 1;
          background: #e2e2e271;
          }
      }
    }

    &__image {
      max-height: 150px;
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
    }

    @media (min-width: $medium-devices-width) {
      &__header {
        padding: 10px 40px;
      }

      &__content {
        display: flex;
        flex-direction: row;
      }

      &__list {
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        overflow-y: scroll;
        flex: 0 0 20em;
        margin-right: 40px;
        max-height: 80vh;
      }

      &__item {
        margin: 0;
        &:not(:last-of-type) {
          margin-bottom: 10px;
          margin-right: 0;
        }
      }
    }
  }

  .vm--container, .vm--overlay {
    z-index: 11111 !important;
  }
</style>
