<template>
  <swiper-slide>
    <div class="ListingGalleryModalSliderItem">
      <img
        class="ListingGalleryModalSliderItem__image"
        :src="item"
        alt=""
      >
    </div>
  </swiper-slide>
</template>

<script>

export default {
  props: {
    item: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" >
  @import "~/assets/styles/common/variables.scss";

  .ListingGalleryModalSliderItem {
    margin: 0 15px;
    overflow: hidden;
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    &__image {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      max-height: 720px;
      object-fit: cover;
      overflow: hidden;
    }

    @media (min-width: $medium-devices-width) {
      margin: 0 30px;

      &__image {
        border-radius: 8px;
        width: 100%;
        height: 60%;
        max-height: 720px;
        object-fit: cover;
        overflow: hidden;
      }
    }
  }
</style>
