<template>
  <section class="LookingSellCover">
    <div class="container">
      {{ cover }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cover: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  .LookingSellCover {
    position: relative;
  }
</style>
