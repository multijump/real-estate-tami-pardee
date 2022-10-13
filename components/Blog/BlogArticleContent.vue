<template>
  <section class="BlogArticleContent">
    <img
      class="BlogArticleContent__star"
      src="~/assets/images/star-blog.png"
      alt="star"
    >

    <div class="BlogArticleContent__bg-top" />

    <div class="BlogArticleContent__bg-bottom" />

    <div
      class="container BlogArticleContent__fixed_width"
      style="z-index: 100; position: relative"
    >
      <h2
        class="BlogArticleContent__title"
        v-html="content.blog_title"
      />

      <img
        class="BlogArticleContent__image"
        :src="content.blog_image"
        alt="image"
      >

      <h3
        v-if="content.blog_intro"
        class="BlogArticleContent__intro"
        v-html="content.blog_intro"
      />

      <p
        v-if="content.blog_data[0] && content.blog_data[0].text"
        class="BlogArticleContent__text"
        v-html="content.blog_data[0].text"
      />
      <p
        v-if="content.blog_data[0] && content.blog_data[0].text_2"
        class="BlogArticleContent__text"
        v-html="content.blog_data[0].text_2"
      />
      <p
        v-if="content.blog_data[0] && content.blog_data[0].text_3"
        class="BlogArticleContent__text"
        v-html="content.blog_data[0].text_3"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";
  .BlogArticleContent {
    padding: 80px 0;
    position: relative;

    &__bg-top {
      display: none;
    }

    &__bg-bottom {
      display: none;
    }

    &__star {
      position: absolute;
      width: 60%;
      top: 0;
      left: 0;
    }

    &__title {
      text-align: center;
      font-size: 28px;
      line-height: 1;
      font-weight: normal;
      padding-bottom: 30px;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding-bottom: 30px;
    }

    &__intro {
      font-size: 20px;
      line-height: 1;
      font-weight: 600;
      padding-bottom: 30px;
    }

    &__text::v-deep p {
      color: gray;
      font-family: 'Work Sans', sans-serif;
      font-weight: 300;
      line-height: 1.5;
      padding-bottom: 20px;
    }

    &__text::v-deep h3 {
      font-family: 'Work Sans', sans-serif;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
    }

    @media (min-width: $medium-devices-width) {
      &__fixed_width {
        max-width: 900px;
      }

      &__bg-top {
        display: block;
        position: absolute;
        top: 20%;
        right: 0;
        width: 95%;
        height: 25%;
        // background: $lightest-powder-blue;
      }

      &__star {
        width: 40%;
        top: -2%;
      }

      &__bg-bottom {
        display: block;
        position: absolute;
        bottom: 15%;
        left: 0;
        width: 95%;
        height: 25%;
        // background: $lightest-blush;
      }

       &__title {
        font-size: 50px;
        padding-bottom: 30px;
      }
    }

    @media (min-width: $large-devices-width) {
       &__title {
        font-size: 60px;
      }
    }

    @media (min-width: $extra-large-devices-width) {
      &__bg-top {
        top: 25%;
      }

      &__star {
        width: 30%;
      }
    }
  }
</style>
