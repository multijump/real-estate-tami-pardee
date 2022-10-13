<template>
  <section class="RelocationReviews">
    <div class="container">
      <h3 class="RelocationReviews__title">
        {{ reviews.headline }}
      </h3>

      <div class="row">
        <div
          v-for="(item, index) in reviews.testimonials"
          :key="index"
          class="col-12 col-md-4 RelocationReviews__item"
        >
          <p
            class="RelocationReviews__comment"
            v-html="item.quote"
          />

          <p class="RelocationReviews__author">
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
    reviews: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .RelocationReviews {
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

    &__item {
      &:not(:last-of-type) {
        padding-bottom: 32px;
      }
    }

    &__comment {
      font-size: 18px;
      color: gray;
      font-weight: 300;
      line-height: 1.5;
      padding-bottom: 20px;

      &::v-deep a {
        color: #226492;
      }
    }

    &__author {
      font-size: 18px;
      color: gray;
      font-family: 'Work Sans', sans-serif;
      font-weight: 300;
      line-height: 1.5;
      font-weight: 700;
      font-style: normal;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

       &__title {
        font-size: 32px;
      }

      &__item {
        &:not(:last-of-type) {
          padding-bottom: 0;
        }
      }
    }
  }
</style>
