<template>
  <div class="BlogContentList">
    <div class="BlogContentList__info">
      <h2 class="BlogContentList__title">
        {{ list.blog_category_title }}
      </h2>

      <AppLink
        :text="list.category_link.title"
        :navigate-to="list.category_link.url"
        color="grey"
        style="padding-bottom: 18px"
      />
    </div>

    <div class="BlogContentList__list">
      <BlogCard
        v-for="(item, index) in list.blogs"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .BlogContentList {
    position: relative;
    padding-top: 72px;

    &__list {
      display: grid;
      grid-gap: 48px;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(1, minmax(150px, auto));
    }

    &__info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-bottom: 1px solid #C4C4C4;
      margin-bottom: 32px;
    }

    &__title {
      padding-bottom: 10px;
      font-weight: 300;
      font-size: 32px;
      line-height: 150%;
      text-transform: lowercase;
      color: #024E79;
    }

    @media (min-width: $small-devices-width) {
      &__list {
        grid-gap: 30px;
        grid-template-columns: repeat(2, 1fr)
      }
    }

    @media (min-width: $medium-devices-width) {
      &__list {
        grid-template-columns: repeat(3, 1fr)
      }

      &__info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
      }
    }
  }
</style>
