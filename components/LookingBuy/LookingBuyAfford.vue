<template>
  <section class="LookingBuyAfford">
    <div class="container">
      <h3 class="LookingBuyAfford__title">
        {{ afford.headline }}
      </h3>

      <p
        class="LookingBuyAfford__subtitle"
        v-html="afford.subheadline"
      />

      <AppLinkButton
        color="pink"
        :text="afford.button_text.toUpperCase()"
        :navigate-to="afford.button_text.url"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    afford: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LookingBuyAfford {
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
