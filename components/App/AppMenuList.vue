<template>
  <ul
    class="AppMenuList list--reset"
  >
    <AppMenuListItem
      v-for="(item, index) in list"
      :key="index"
      :item="item"
    />
  </ul>
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

  .AppMenuList {
    margin: 56px 0 46px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    &__item {
      width: 50%;
    }

    @media (min-width: $medium-devices-width) {
      margin: 0;
    }
  }
</style>
