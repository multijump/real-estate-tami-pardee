<template>
  <section class="LookingBuyAgent">
    <div class="container">
      <h3 class="LookingBuyAgent__title">
        {{ agent.section_headline }}
      </h3>

      <p
        class="LookingBuyAgent__subtitle"
        v-html="agent.content"
      />

      <AppLinkButton
        color="pink"
        :text="agent.cta_link.title.toUpperCase()"
        :navigate-to="agent.cta_link.url"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    agent: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LookingBuyAgent {
    position: relative;
    padding: 40px 0;
    background: $color-primary;
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
