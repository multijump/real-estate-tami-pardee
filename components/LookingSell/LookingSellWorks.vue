<template>
  <section class="LookingSellWorks">
    <div class="container">
      <h3 class="LookingSellWorks__title">
        {{ works.section_headline }}
      </h3>

      <p
        class="LookingSellWorks__subtitle"
        v-html="works.content"
      />

      <AppLinkButton
        color="pink"
        :text="works.cta_link.title.toUpperCase()"
        :navigate-to="works.cta_link.url"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    works: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LookingSellWorks {
    position: relative;
    padding: 40px 0;
    text-align: center;

    &__title {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #226492;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
      text-align: center;
    }

    &__subtitle {
      font-size: 18px;
      color: #212121;
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
