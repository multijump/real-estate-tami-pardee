<template>
  <section class="HomePromo">
    <LandingPromoSlider :list="landing" />
  </section>
</template>

<script>
export default {
  props: {
    landing: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
