<template>
  <section class="BuildingResourcesIntro">
    <div class="container">
      <p
        class="BuildingResourcesIntro__text"
        v-html="intro"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    intro: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .BuildingResourcesIntro {
    position: relative;
    padding: 40px 0;

    &__text {
      text-align: center;
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      letter-spacing: 0px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__text {
        font-size: 30px;
      }
    }
  }
</style>
