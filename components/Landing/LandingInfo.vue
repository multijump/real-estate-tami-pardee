<template>
  <div class="LandingInfo">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2 text-center">
          <AppSectionTitle
            :title="info.title"
            color="blue"
          />

          <p class="LandingInfo__text" v-html="info.body" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LandingInfo {
    padding: 80px 0;

    &__text {
      text-align: left;
      padding-top: 30px;
      font-weight: normal;
      font-size: 18px;
      line-height: 120%;
      color: #000000;
    }

    @media (min-width: $medium-devices-width) {
      padding: 80px 0 120px 0;
    }
  }
</style>
