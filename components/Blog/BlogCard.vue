
<template>
  <a
    class="BlogCard"
    :href="`/blog/${item.blog_name}/${item.ID}`"
    target="_self"
  >
    <img
      v-if="item.post_banner_image"
      class="BlogCard__image"
      :src="item.post_banner_image"
      alt="image"
    >

    <h4 class="BlogCard__title">
      {{ item.post_title }}
    </h4>

    <div class="BlogCard__info">
      <p class="BlogCard__author">
        {{ item.post_author_name }}
      </p>

      <span class="BlogCard__symbol">&#10072;</span>

      <p class="BlogCard__date">
        {{ $moment(new Date(item.post_date)).format('ll') }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    redirectToArticle () {
      this.$router.push({ path: `/blog/${this.item.blog_name}/${this.item.ID}` })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .BlogCard {
    position: relative;
    min-height: 100%;
    height: max-content;
    cursor: pointer;

    &:focus {
      @include focus-dark;
    }

    &__image {
      width: 100%;
      height: 255px;
      object-fit: cover;
    }

    &__title {
      padding-top: 20px;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      color: #1F2021;
    }

    &__info {
      display: flex;
      align-items: flex-end;
    }

    &__author, &__date {
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      white-space: pre-line;
      color: $color-primary;
    }

    &__symbol {
      padding: 0 6px;
    }

    @media (min-width: $medium-devices-width) {
      &__image {
        height: 278px;
      }
    }
  }
</style>
