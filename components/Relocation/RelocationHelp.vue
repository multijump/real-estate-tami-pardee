<template>
  <section class="RelocationHelp">
    <div class="container">
      <h3 class="RelocationHelp__title">
        {{ help.section_headline }}
      </h3>

      <p
        class="RelocationHelp__subtitle"
        v-html="help.intro"
      />

      <div class="row">
        <div
          v-for="(item, index) in help.icons"
          :key="index"
          class="col-12 col-md-6 col-lg-4 RelocationHelp__item"
        >
          <img
            class="RelocationHelp__icon"
            :src="item.icon"
          >

          <h4 class="RelocationHelp__heading">
            {{ item.title }}
          </h4>
        </div>
      </div>

      <p class="RelocationHelp__contact">
        {{ contact.content }}
      </p>

      <AppLinkButton
        color="pink"
        :text="contact.cta_link.title.toUpperCase()"
        :navigate-to="contact.cta_link.url"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    help: {
      type: Object,
      default: () => {},
    },

    contact: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .RelocationHelp {
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
    }

    &__subtitle {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.5;
      color: #fff;
      margin-bottom: 20px;
      letter-spacing: 0px;
    }

    &__item {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 24px;
    }

    &__icon {
      max-height: 55px;
      max-width: 55px;
      width: 100%;
      height: 100%;
      margin-bottom: 26px;
    }

    &__heading {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #fff;
      letter-spacing: 0px;
    }

    &__contact {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #fff;
      padding: 32px 0;
      letter-spacing: 0px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 32px;
      }

      &__heading {
        font-size: 28px;
      }

      &__contact {
        font-size: 30px;
      }
    }
  }
</style>
