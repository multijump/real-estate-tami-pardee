<template>
  <section class="PageAffordabilityCalculator">
    <div class="container">
      <h3 class="PageAffordabilityCalculator__title">
        {{ content.headline }}
      </h3>

      <p
        class="PageAffordabilityCalculator__subtitle"
        v-html="content.subheadline"
      />

      <AppLinkButton
        v-if="content && content.button_text"
        color="pink"
        :text="content.button_text.toUpperCase()"
        :navigate-to="content.button_text.url"
      />
    </div>
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

  .PageAffordabilityCalculator {
    position: relative;
    padding: 40px 0;
    background: #3688b6;
    text-align: center;

    &__title {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #fff;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
      text-align: center;
    }

    &__subtitle {
      font-size: 18px;
      color: #fff;
      font-weight: 300;
      line-height: 1.3;
      margin-bottom: 32px;
      letter-spacing: 0px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 38px;
      }

      &__subtitle {
        font-size: 24px;
      }
    }
  }
</style>
