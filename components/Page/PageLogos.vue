<template>
  <section class="PageLogos">
    <div class="container">
      <AppSectionTitle
        :title="content.title"
        class="text-center"
      />

      <div class="PageLogos__wrapper">
        <div
          v-for="(item, index) in content.logos"
          :key="index"
          class="PageLogos__item"
        >
          <img
            :src="item.image.url"
            alt="company"
          >
        </div>
      </div>

      <div class="PageLogos__action">
        <AppLinkButton
          color="blue"
          :text="content.link.title"
          :navigate-to="content.link.url"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    redirect () {
      window.open(`${this.content.link.url}`, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageLogos {
    position: relative;
    padding: 60px 0;
    background: $lightest-powder-blue;

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 44px;
    }

    &__action {
      display: flex;
      justify-content: center;
    }

    &__item {
      display: flex;
      align-items: center;
      padding: 14px;

      img {
        max-width: 150px;
        max-height: 50px;
      }
    }
  }
</style>
