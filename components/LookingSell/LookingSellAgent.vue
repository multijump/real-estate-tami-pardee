<template>
  <section class="LookingSellAgent">
    <div class="container">
      <h3 class="LookingSellAgent__title">
        {{ agent.section_headline }}
      </h3>

      <p
        class="LookingSellAgent__subtitle"
        v-html="agent.content"
      />

      <AppLinkButton
        v-if="agent.cta_link"
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

  .LookingSellAgent {
    position: relative;
    padding: 40px 0;
    text-align: center;
    background: #226492;

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
