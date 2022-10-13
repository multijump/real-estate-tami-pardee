<template>
  <div class="MediaPressItem">
    <h3 class="MediaPressItem__title">
      {{ item.press_title }}
    </h3>

    <img
      :src="item.press_featured_image.featured_image"
      class="MediaPressItem__image"
      @click="openFile()"
    >

    <p class="MediaPressItem__subtitle">
      {{ item.press_headline }}
    </p>

    <p class="MediaPressItem__date">
      {{ item.press_date }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    openFile () {
      window.open(`${this.item.press_featured_image.file.url}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .MediaPressItem {
    position: relative;

    &__title {
      font-size: 28px;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      padding-bottom: 24px;
      letter-spacing: 0px;
    }

    &__subtitle {
      color: gray;
      font-weight: 300;
      line-height: 1.5;
      font-size: 18;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding-bottom: 16px;
    }

    &__date {
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 16px;
    }
  }
</style>
