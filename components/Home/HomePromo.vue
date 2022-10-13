<template>
  <section class="HomePromo">
    <HomePromoSlider
      :list="home"
      @activeIndex="activeIndex"
    />
  </section>
</template>

<script>
export default {
  props: {
    home: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    activeIndex (value) {
      this.$emit('activeIndex', value)
    }
  }
}
</script>
