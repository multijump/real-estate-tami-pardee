<template>
  <swiper-slide>
    <div class="ListingExploreSliderItem">
      <img
        class="img--bg"
        :src="item.image"
        alt="image"
      >
    </div>
  </swiper-slide>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
