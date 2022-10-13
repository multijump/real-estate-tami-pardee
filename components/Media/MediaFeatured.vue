<template>
  <section class="MediaFeatured">
    <h2 class="MediaFeatured__title">
      {{ featured.section_title }}
    </h2>

    <div class="row">
      <div
        v-for="(item, index) in featured.press_logos"
        :key="index"
        class="col-12 col-md-6 col-lg-4"
      >
        <div class="MediaFeatured__item">
          <img
            :src="item.url"
            class="MediaFeatured__image"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    featured: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .MediaFeatured {
    position: relative;
    padding: 60px 0;
    background: #999;
    text-align: center;

    &__title {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #fff;
      margin-bottom: 24px;
    }

    &__item {
      padding: 36px;
      margin-bottom: 24px;
    }

    &__image {
      max-height: 80px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 40px 0;

      &__title {
        font-size: 40px;
      }
    }
  }
</style>
