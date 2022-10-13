<template>
  <section class="AboutUsServices">
    <div class="container">
      <h2 class="AboutUsServices__title">
        {{ services.headline }}
      </h2>

      <div class="row">
        <div class="col-12 col-md-6">
          <div class="AboutUsServices__block">
            <AppLinkButton
              :text="services.column_one.cta_link.title.toUpperCase()"
              color="pink"
              type="small"
              :navigate-to="services.column_one.cta_link.url"
            />

            <p
              class="AboutUsServices__text"
              v-html="services.column_one.content"
            />
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="AboutUsServices__block">
            <AppLinkButton
              :text="services.column_two.cta_link.title.toUpperCase()"
              color="pink"
              type="small"
              :navigate-to="services.column_two.cta_link.url"
            />

            <p
              class="AboutUsServices__text"
              v-html="services.column_two.content"
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
    services: {
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

  .AboutUsServices {
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

      // &__block {
        // &:first-of-type {
        //   // &::before {
        //   //   content: '';
        //   //   position: absolute;
        //   //   top: 0;
        //   //   right: 0;
        //   //   height: 100%;
        //   //   width: 2px;
        //   //   background: #efd7e5;
        //   // }
        // }
      // }

      &__text {
        font-size: 18px;
      }
    }
  }
</style>
