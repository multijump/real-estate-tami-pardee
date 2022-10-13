<template>
  <section class="LifeProgramSupport">
    <div class="container">
      <h3 class="LifeProgramSupport__title">
        {{ support.section_headline }}
      </h3>

      <div class="row">
        <div class="col-12 col-md-4">
          <div
            class="LifeProgramSupport__list"
            v-html="support.text"
          />
        </div>

        <div class="col-12 col-md-4">
          <div
            class="LifeProgramSupport__list"
            v-html="support.text_2"
          />
        </div>

        <div class="col-12 col-md-4">
          <div
            class="LifeProgramSupport__list"
            v-html="support.text_3"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    support: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LifeProgramSupport {
    position: relative;
    padding: 40px 0;

    &__title {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #226492;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
      text-align: center;
    }

    &__list::v-deep li {
      font-size: 18px;
      font-family: 'Work Sans', sans-serif;
      font-weight: 300;
      line-height: 1.5;
      color: gray;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 32px;
      }
    }
  }
</style>
