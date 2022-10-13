<template>
  <ul
    class="AppMainMenu list--reset"
    :class="[
      `AppMainMenu--${type}`,
      `AppMainMenu--${color}`
    ]"
  >
    <AppMainMenuItem
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

    type: {
      type: String,
      default: '',
    },

    color: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
  .AppMainMenu {
    &--horizontal {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
