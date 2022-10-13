<template>
  <section class="LookingSellProactive">
    <div class="container">
      <h3 class="LookingSellProactive__title">
        {{ proactive.section_headline }}
      </h3>

      <p
        class="LookingSellProactive__subtitle"
        v-html="proactive.intro"
      />

      <div class="row">
        <div
          v-for="(item, index) in proactive.icons"
          :key="index"
          class="col-12 col-md-6 col-lg-4 LookingSellProactive__item"
        >
          <img
            class="LookingSellProactive__icon"
            :src="item.icon"
          >

          <h4 class="LookingSellProactive__heading">
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
    proactive: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LookingSellProactive {
    position: relative;
    padding: 40px 0;
    text-align: center;
    background: #003B5C;

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

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 38px;
      }

      &__heading {
        font-size: 28px;
      }
    }
  }
</style>
