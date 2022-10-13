<template>
  <section class="PageTwoColumnCta">
    <div class="container">
      <h2 class="PageTwoColumnCta__title">
        {{ content.headline }}
      </h2>

      <div class="row">
        <div class="col-12 col-md-6">
          <div class="PageTwoColumnCta__block">
            <AppLinkButton
              v-if="content && content.column_two && content.column_two.cta_link"
              :text="content.column_one.cta_link.title.toUpperCase()"
              color="pink"
              type="small"
              :navigate-to="content.column_one.cta_link.url"
            />

            <p
              class="PageTwoColumnCta__text"
              v-html="content.column_one.content"
            />
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="PageTwoColumnCta__block">
            <AppLinkButton
              v-if="content && content.column_two && content.column_two.cta_link"
              :text="content.column_two.cta_link.title.toUpperCase()"
              color="pink"
              type="small"
              :navigate-to="content.column_two.cta_link.url"
            />

            <p
              class="PageTwoColumnCta__text"
              v-html="content.column_two.content"
            />
          </div>
        </div>
      </div>
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
  methods: {
    redirect (item) {
      window.open(`${item}`, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageTwoColumnCta {
    position: relative;
    padding: 40px 0;

    &__title {
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #226492;
      margin-bottom: 1.5rem;
    }

    &__block {
      padding: 48px 0;
      text-align: center;
    }

    &__text {
      padding-top: 24px;
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      color: #999;
      line-height: 1.5;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 40px;
      }

      &__text {
        font-size: 18px;
      }
    }
  }
</style>
