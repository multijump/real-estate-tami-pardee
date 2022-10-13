<template>
  <section class="CommunityListings">
    <div class="container">
      <div class="CommunityListings__title">
        <AppSectionTitle
          :title="listings.featured_listings_section_heading"
          class="text-center"
        />
      </div>

      <div class="row">
        <div
          v-for="(item, index) in makeCards()"
          :key="index"
          class="col-12 col-lg-4 pt-sm-20"
        >
          <AppListingCard
            :item="item"
          />
        </div>
      </div>

      <!-- <div class="CommunityListings__action">
        <AppLinkButton
          :text="listings.see_more_button.title"
          color="blue"
          :navigate-to="listings.see_more_button.url"
        />
      </div> -->
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
    makeCards () {
      if (this.listings.featured_listings) {
        const cards = this.listings.featured_listings.filter((property) => {
          return !!property.mls_data
        }).map((property) => {
          // eslint-disable-next-line
          const full = property.mls_data.address.full.replace(/\s/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/--/g, '-')
          const city = property.mls_data.address.city.replace(/\s/g, '-')
          const btnUrl = `/listing/${property.mls_data.address.state}/${city}/${full}/${property.mls_data.mlsId}`

          return {
            image: property.mls_data.photos[0],
            description: property.mls_data.property.lotDescription ? property.mls_data.property.lotDescription : '',
            title: property.mls_data.address.full,
            address: `${property.mls_data.address.city}, ${property.mls_data.address.state}, ${property.mls_data.address.postalCode}`,
            bed: property.mls_data.property.bedrooms,
            bath: property.mls_data.property.bathsFull + property.mls_data.property.bathsHalf,
            size: `${property.mls_data.property.lotSizeArea}`,
            price: property.mls_data.listPrice,
            button: {
              url: btnUrl,
              title: 'View Listing',
            },
            link: {
              url: `/search-home?sort=listdate&page=1&cities=${property.mls_data.address.city}`,
              title: `Explore more in ${property.mls_data.address.city}`,
            },
          }
        })

        if (cards.length > 3) {
          cards.pop()
        }

        return cards
      } else {
        return []
      }
    },

    redirect () {
      window.open(`${this.listings.see_more_button.url}`, '_blank')
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityListings {
    position: relative;
    padding: 80px 0;

    &__title {
      padding-bottom: 28px;
    }

    &__action {
      padding-top: 30px;
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
