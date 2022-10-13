<template>
  <section class="PageEmbedForm">
    <div v-html="content.code" />
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageEmbedForm {
    position: relative;
    padding: 40px 0;

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;
    }
  }
</style>
