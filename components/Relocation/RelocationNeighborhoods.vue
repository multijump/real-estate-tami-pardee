<template>
  <section class="RelocationNeighborhoods">
    <div class="container">
      <h3 class="RelocationNeighborhoods__title">
        {{ neighborhoods.section_headline }}
      </h3>

      <p
        class="RelocationNeighborhoods__subtitle"
        v-html="neighborhoods.content"
      />

      <AppLinkButton
        color="pink"
        :text="neighborhoods.cta_link.title.toUpperCase()"
        :navigate-to="neighborhoods.cta_link.url"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    neighborhoods: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .RelocationNeighborhoods {
    position: relative;
    padding: 40px 0;
    background: #226492;
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
      font-size: 22px;
      color: #fff;
      font-weight: 300;
      line-height: 1.3;
      margin-bottom: 32px;
      letter-spacing: 0px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 32px;
      }

      &__subtitle {
        font-size: 30px;
      }
    }
  }
</style>
