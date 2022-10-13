<template>
  <section class="LifeProgramQuote">
    <div class="container">
      <p
        class="LifeProgramQuote__content"
        v-html="quote.content"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LifeProgramQuote {
    position: relative;
    padding: 40px 0;
    background: $color-primary;

    &__content {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #fff;
      letter-spacing: 0px;
      text-align: center;
    }

    @media (min-width: $medium-devices-width) {
    padding: 60px 0;

      &__content {
        font-size: 30px;
      }
    }
  }
</style>
