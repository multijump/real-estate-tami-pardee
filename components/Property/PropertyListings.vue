
<template>
  <section class="PropertyListings">
    <div class="container">
      <div class="PropertyListings__title">
        <AppSectionTitle
          :title="listings.section_title"
          class="text-center"
        />
      </div>

      <div class="row">
        <div
          v-for="(item, index) in listings.similar_listings_data"
          :key="index"
          class="col-12 col-lg-4 pt-sm-20"
        >
          <PropertyListingsCard
            :item="item"
          />
        </div>
      </div>

      <div class="PropertyListings__action">
        <AppButton
          :text="listings.similar_listings_btn.similar_listings_btn_text"
          color="blue"
          @click.native="redirect()"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    listings: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    redirect () {
      window.open(`${this.listings.similar_listings_btn.similar_listings_btn_link}`, '_blank')
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PropertyListings {
    position: relative;
    padding: 80px 0;

    &__title {
      padding-bottom: 28px;
    }

    &__action {
      padding-top: 50px;
      display: flex;
      justify-content: center;
    }

    @media (min-width: $medium-devices-width) {
      padding: 140px 0;

      &__title {
        padding-bottom: 45px;
      }
    }
  }
</style>
