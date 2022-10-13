<template>
  <section class="ListingExplore">
    <ListingExploreSlider :list="slider_images" />

    <ListingExploreCard
      :card="slider_overlay_text"
      class="d-block d-lg-flex"
    />
  </section>
</template>

<script>
export default {
  data () {
    return {
      slider_images: [
        { image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' },
        { image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' },
        { image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' },
      ],
      slider_overlay_text: {
        title: 'Explore Venice, CA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tags: [
          { tag: 'Eclectic' },
          { tag: 'Walkable' },
          { tag: 'Beach adjacent' },
        ],
        map: 'https://reliefweb.int/sites/reliefweb.int/files/resources/aze_ocha_1000px.png',
      },
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .ListingExplore {
    position: relative;

    @media (min-width: $large-devices-width) {
      padding-bottom: 150px;
    }
  }
</style>
