<template>
  <swiper-slide>
    <div class="PropertyExploreSliderItem">
      <img
        class="img--bg"
        :src="item.images"
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
