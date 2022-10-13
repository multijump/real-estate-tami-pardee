<template>
  <section class="BuildingResourcesArchitects">
    <div class="container">
      <h3 class="BuildingResourcesArchitects__title">
        {{ architects[0].section_headline }}
      </h3>

      <div
        v-for="(item, index) in architects"
        :key="index"
        class="BuildingResourcesArchitects__item"
      >
        <p
          class="BuildingResourcesArchitects__text"
          v-html="item.text"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    architects: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .BuildingResourcesArchitects {
    position: relative;
    padding: 40px 0;

    &__title {
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #226492;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
    }

    &__item {
      &:not(:last-of-type) {
        margin-bottom: 40px;
      }
    }

    &__text::v-deep p {
      font-size: 18px;
      color: gray;
      font-weight: 300;
      line-height: 1.5;
      padding-bottom: 15px;
    }

    &__text::v-deep hr {
      border: 0;
      height: 0;
      border-top: none;
      border-bottom: 1px solid #ededed;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 36px;
      }
    }
  }
</style>
