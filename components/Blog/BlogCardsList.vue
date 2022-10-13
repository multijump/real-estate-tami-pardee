<template>
  <div class="BlogCardsList">
    <BlogCard
      v-for="(item, index) in list"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .BlogCardsList {
    position: relative;
    padding: 80px 0;
    display: grid;
    row-gap: 40px;
    column-gap: 30px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, minmax(75px, auto));

    &::before {
      content: '';
      width: 100%;
      height: 1px;
      background: #C4C4C4;
      position: absolute;
      top: 48px;
      left: 0;
    }

    &__title {
      padding-bottom: 10px;
      font-weight: 300;
      font-size: 32px;
      line-height: 150%;
      text-transform: lowercase;
      color: #024E79;
    }

    @media (min-width: $medium-devices-width) {
      padding: 72px 0 120px 0;
      grid-template-columns: repeat(2, 1fr)
    }

    @media (min-width: $large-devices-width) {
      grid-template-columns: repeat(3, 1fr)
    }
  }
</style>
