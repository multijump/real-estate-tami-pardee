<template>
  <section class="LookingSellMain">
    <div class="LookingSellMain__bg--top" />
    <div class="LookingSellMain__bg--bottom" />

    <img
      v-if="main.image.url"
      class="LookingSellMain__image"
      :src="main.image.url"
      alt=""
    >

    <div
      class="container"
      style="position: relative;"
    >
      <div class="LookingSellMain__content">
        <AppSectionTitle
          :display="main.title"
          :title="main.subtitle"
          class="LookingSellMain__content--title"
          color="white"
        />

        <AppLinkButton
          color="pink"
          type="small"
          :text="main.cta_buttons[0].link.title.toUpperCase()"
          :navigate-to="main.cta_buttons[0].link.url"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    main: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LookingSellMain {
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

      &--title {
        margin-bottom: 20px;
      }
    }
  }
</style>
