<template>
  <div class="LandingCompanies">
    <div class="container">
      <AppSectionTitle
        :title="companies.title"
        class="text-center pb-50"
      />

      <div class="LandingCompanies__wrapper">
        <div
          v-for="(item, index) in companies.logos"
          :key="index"
          class="LandingCompanies__item"
        >
          <img
            :src="item.image.url"
            alt="Partner Companies"
          >
        </div>
      </div>

      <div class="LandingCompanies__action">
        <AppLinkButton
          color="blue"
          :text="companies.link.title"
          :navigate-to="companies.link.url"
          :aria-label="companies.link.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companies: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    redirect () {
      window.open(`${this.companies.link.url}`, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LandingCompanies {
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
