<template>
  <section class="BuildingResourcesMain">
    <div class="BuildingResourcesMain__bg--top" />
    <div class="BuildingResourcesMain__bg--bottom" />

    <img
      v-if="image.url"
      class="BuildingResourcesMain__image"
      :src="image.url"
      alt=""
    >

    <div
      class="container"
      style="position: relative;"
    >
      <div class="BuildingResourcesMain__content">
        <AppSectionTitle
          :title="title"
          :lead="subtitle"
          color="white"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: null,
    },

    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .BuildingResourcesMain {
    position: relative;

    &__bg--top {
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(180deg, rgba(31, 32, 33, 0.8) 0%, rgba(31, 32, 33, 0) 100%);
      max-height: 150px;
      width: 100%;
      height: 100%;
      z-index: 2;
    }

    &__bg--bottom {
      display: block;
      position: absolute;
      left: 0%;
      bottom: 0;
      width: 100%;
      max-height: 70%;
      height: 100%;
      background: linear-gradient(180deg, rgba(31, 32, 33, 0) 0%, rgba(31, 32, 33, 0.8) 100%);
      z-index: 2;
    }

    &__image {
      width: 100%;
      max-height: 660px;
      height: 100%;
      object-fit: cover;
    }

    &__content {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
      padding: 25px 25px 50px;
    }
  }
</style>
