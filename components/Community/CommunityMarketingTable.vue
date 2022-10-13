<template>
  <div>
    <div v-html="data" />
  </div>
</template>

<script>
export default {
  props: {
    headings: {
      type: Array,
      default: () => [],
    },

    data: {
      type: String,
      default: '',
    },
  },
  watch: {
    /* eslint-disable */
    data: function (val, oldVal) {
      if (val && val !== oldVal) {
        setTimeout(() => {
          eval(val)
        }, 100)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityMarketingTable {
    position: relative;
    width: 100%;

    &__title, &__name {
      padding: 5px 8px;
      border: 2px solid $white;
      font-weight: normal;
      font-size: 14px;
      line-height: 120%;
      color: #000;
    }

    &__row {
      &:nth-child(odd) {
        background-color: $lightest-powder-blue;
      }
    }

    @media (min-width: $large-devices-width) {
      margin-top: 40px;
    }
  }
</style>
