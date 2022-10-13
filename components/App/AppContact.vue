<template>
  <div class="AppContact">
    <AppContactItem
      v-for="(item, index) in contacts"
      :key="index"
      :item="item"
      :type="type"
      :color="color"
    />
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      default: () => [],
    },

    type: {
      type: String,
      default: 'common',
    },

    color: {
      type: String,
      default: 'light',
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppContact {
    display: flex;
    justify-content: center;
    margin-bottom: 22px;

    @media (min-width: $medium-devices-width) {
      justify-content: flex-end;
      margin-bottom: 0;
    }
  }
</style>
