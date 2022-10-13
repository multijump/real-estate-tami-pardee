<template>
  <section class="LookingBuyHelp">
    <div class="container">
      <h3 class="LookingBuyHelp__title">
        {{ help.section_headline }}
      </h3>

      <p
        class="LookingBuyHelp__subtitle"
        v-html="help.intro"
      />

      <div class="row">
        <div
          v-for="(item, index) in help.icons"
          :key="index"
          class="col-12 col-md-6 col-lg-4 LookingBuyHelp__item"
        >
          <img
            class="LookingBuyHelp__icon"
            :src="item.icon"
          >

          <h4 class="LookingBuyHelp__heading">
            {{ item.title }}
          </h4>
        </div>
      </div>
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
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LookingBuyHelp {
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
    }

    &__subtitle {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.5;
      color: gray;
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
      color: #212121;
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
    }
  }
</style>
