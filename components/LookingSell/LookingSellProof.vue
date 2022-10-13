<template>
  <section class="LookingSellRent">
    <div class="container">
      <h2 class="LookingSellRent__title">
        {{ proof.headline }}
      </h2>

      <div class="row">
        <div
          v-for="(item, index) in proof.testimonials"
          :key="index"
          class="col-12 col-md-4"
        >
          {{ item.testimonials }}

          <p
            class="LookingSellRent__quote"
            v-html="item.quote"
          />

          <p class="LookingSellRent__author">
            {{ item.attribution }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    proof: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LookingSellRent {
    position: relative;
    padding: 40px 0;
    background: #999;

    &__title {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #fff;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
      text-align: center;
    }

    &__quote {
      color: #fff;
      font-weight: 300;
      line-height: 1.5;
      font-size: 18px;
      margin-bottom: 20px;
    }

    &__author {
      font-weight: 700;
      font-style: normal;
      color: #fff;
      font-size: 18px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 38px;
      }
    }
  }
</style>
