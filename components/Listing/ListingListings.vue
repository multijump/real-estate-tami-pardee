
<template>
  <section class="ListingListings">
    <div class="container">
      <div class="ListingListings__title">
        <AppSectionTitle
          title="Similar Listings"
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

      <div class="ListingListings__action">
        <AppLinkButton
          text="See More"
          color="blue"
          navigate-to="/search-home?sort=listdate&page=1"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    properties: {
      type: Object,
      default: () => {},
    },
    mlsid: {
      type: Number,
      default: 0,
    }
  },

  methods: {
    makeCards () {
      if (this.properties && this.properties.propertiessearch) {
        const cards = this.properties.propertiessearch.filter((property) => {
          return property.mlsId !== this.mlsid
        }).map((property) => {
          // eslint-disable-next-line
          const full = property.address.full.replace(/\s/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/--/g, '-')
          const city = property.address.city.replace(/\s/g, '-')
          const btnUrl = `/listing/${property.address.state}/${city}/${full}/${property.mlsId}`

          return {
            image: property.photos[0],
            description: property.property.lotDescription ? property.property.lotDescription : '',
            title: property.address.full,
            address: `${property.address.city}, ${property.address.state}, ${property.address.postalCode}`,
            bed: property.property.bedrooms,
            bath: property.property.bathsFull + property.property.bathsHalf,
            size: `${property.property.lotSizeArea}`,
            price: property.listPrice,
            button: {
              url: btnUrl,
              title: 'View Listing',
            },
            link: {
              url: `/search-home?sort=listdate&page=1&cities=${property.address.city}`,
              title: `Explore more in ${property.address.city}`,
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

  .ListingListings {
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
        padding-bottom: 8px;
      }
    }
  }
</style>
