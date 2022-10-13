<template>
  <AppNewListing
    v-if="badge"
    :badge="badge"
    class="HomeNewListing"
  />
</template>

<script>
export default {
  props: {
    badge: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .HomeNewListing {
    position: relative;
    background: #FFFDFC;
    width: 100%;
    z-index: 3;
    display: flex;
    justify-content: space-between;

    @media (min-width: $medium-devices-width) {
      position: absolute;
      top: -130px;
      right: 56px;
      max-width: 715px;
    }
  }
</style>
