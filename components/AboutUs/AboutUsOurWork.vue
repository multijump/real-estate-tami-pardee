<template>
  <section class="AboutUsOurWork">
    <div class="container">
      <h2 class="AboutUsOurWork__title">
        {{ work.section_headline }}
      </h2>

      <div class="row">
        <div class="col-12 col-md-6">
          <div
            class="AboutUsOurWork__list"
            v-html="work.text"
          />
        </div>
        <div class="col-12 col-md-6">
          <div
            class="AboutUsOurWork__list"
            v-html="work.text_2"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AboutUsOurWork {
    position: relative;
    padding: 40px 0;
    background: #226492;
    color: #fff;

    &__title {
      text-align: center;
      padding-bottom: 20px;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
    }

    &__list::v-deep ul li {
      font-weight: 300;
      line-height: 1.5;
      font-size: 18px;
    }

    @media (min-width: $small-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 40px;
      }
    }
  }
</style>
