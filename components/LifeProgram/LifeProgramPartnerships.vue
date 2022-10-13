<template>
  <section class="LifeProgramPartnerships">
    <div class="container">
      <h3 class="LifeProgramPartnerships__title">
        {{ partnerships.section_headline }}
      </h3>

      <div class="row">
        <div class="col-12 col-md-4">
          <div
            class="LifeProgramPartnerships__list"
            v-html="partnerships.text"
          />
        </div>

        <div class="col-12 col-md-4">
          <div
            class="LifeProgramPartnerships__list"
            v-html="partnerships.text_2"
          />
        </div>

        <div class="col-12 col-md-4">
          <div
            class="LifeProgramPartnerships__list"
            v-html="partnerships.text_3"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    partnerships: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LifeProgramPartnerships {
    position: relative;
    padding: 40px 0;
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

    &__list::v-deep li {
      font-size: 18px;
      font-family: 'Work Sans', sans-serif;
      font-weight: 300;
      line-height: 1.5;
      color: #fff;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 32px;
      }
    }
  }
</style>
