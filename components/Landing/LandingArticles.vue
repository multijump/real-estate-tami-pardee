<template>
  <div class="LandingArticles">
    <!-- <StampImage class="LandingArticles__stamp" /> -->
    <img
      v-if="articles.decoration_image"
      class="LandingArticles__stamp"
      :class="articles.decoration_option"
      :src="articles.decoration_image"
      alt="Article Decoration Image"
    >

    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8 offset-lg-2">
          <AppSectionTitle
            :title="articles.title"
            class="text-center"
          />

          <div class="LandingArticles__text" v-html="articles.body" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import StampImage from '~/assets/images/stamp.svg?inline'

export default {
  // components: {
  //   StampImage,
  // },

  props: {
    articles: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LandingArticles {
    position: relative;
    padding: 80px 0;

    &__stamp {
      display: none;
    }

    &__text {
      padding-top: 40px;
    }

    &__text ::v-deep p {
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      color: #000000;

      &:first-of-type {
        padding-bottom: 40px;
      }
      &:last-of-type {
        padding-top: 40px;
      }
    }

    &__text ::v-deep ul {
      position: relative;
      padding: 90px 0 40px 50px;
      margin: 0;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #C4C4C4;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #C4C4C4;
      }
    }

    &__text ::v-deep ul[title]::before {
      content: attr(title);
      display: block;
      color: $darkest-pink;
      font-weight: 600;
      font-size: 18px;
      line-height: 500%;
    }

    &__text ::v-deep li {
      &::marker {
        color: #000000;
      }

      &:not(:last-of-type) {
        padding-bottom: 30px;
      }

       @media (min-width: $medium-devices-width) {
        padding-left: 30px;
      }
    }

    &__text ::v-deep a {
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      text-decoration-line: underline;
      color: #000000;
      word-break: break-word;

      &:focus {
        @include focus-black;
      }
    }

    @media (min-width: $medium-devices-width) {
      padding: 150px 0 130px 0;
    }

    @media (min-width: $extra-large-devices-width) {
      padding: 150px 0 130px 0;

      &__stamp {
        display: block;
        position: absolute;
        width: 260px;
        top: 40px;
      }

      &__stamp.top_right {
        right: 65px;
      }

      &__stamp.top_left {
        left: 65px;
      }
    }
  }
</style>
