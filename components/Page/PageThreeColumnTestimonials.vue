<template>
  <section
    class="PageThreeColumnTestimonials"
    :class="{
      'PageThreeColumnTestimonials--light' : reviews.color_scheme === 'light',
      'PageThreeColumnTestimonials--dark' : reviews.color_scheme === 'dark'
    }"
  >
    <div class="container">
      <h3 class="PageThreeColumnTestimonials__title">
        {{ reviews.headline }}
      </h3>

      <div class="row">
        <div
          v-for="(item, index) in reviews.testimonials"
          :key="index"
          class="col-12 col-md-4 PageThreeColumnTestimonials__item"
        >
          <p
            class="PageThreeColumnTestimonials__comment"
            v-html="item.quote"
          />

          <p class="PageThreeColumnTestimonials__author">
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

  .PageThreeColumnTestimonials {
    position: relative;
    padding: 40px 0;

    &--light {
      background: transparent;

      .PageThreeColumnTestimonials__title {
        color: #226492;
      }

      .PageThreeColumnTestimonials__comment {
        color: gray;
      }

      .PageThreeColumnTestimonials__author {
        color: gray;
      }
    }

    &--dark {
      background: #999;

      .PageThreeColumnTestimonials__title {
        color: white;
      }

      .PageThreeColumnTestimonials__comment {
        color: white;
      }

      .PageThreeColumnTestimonials__author {
        color: white;
      }
    }

    &__title {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
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
      font-weight: 300;
      line-height: 1.5;
      padding-bottom: 20px;

      &::v-deep a {
        color: #226492;
      }
    }

    &__author {
      font-size: 18px;
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
