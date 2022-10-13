<template>
  <section class="ListingInfo">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div
            v-if="checkNewListing()"
            class="ListingInfo__badge"
          >
            <font-awesome-icon
              class="ListingInfo__badge-icon"
              :icon="['fas', 'star']"
            />

            <p class="ListingInfo__badge-name">
              New listing!
            </p>
          </div>

          <h1
            v-if="info.address.full"
            class="ListingInfo__name"
          >
            {{ info.address.full }}
          </h1>

          <h2
            v-if="info.address.city && info.address.state && info.address.postalCode"
            class="ListingInfo__address"
          >
            {{ info.address.city }}, {{ info.address.state }} {{ info.address.postalCode }}
          </h2>

          <p class="ListingInfo__description">
            {{ info.association.amenities }}
          </p>
        </div>

        <div class="col-12 col-md-5 d-flex flex-column justify-content-end">
          <div class="ListingInfo__top">
            <p class="ListingInfo__price">
              <strong>Sales Price</strong>

              ${{ info.listPrice && info.listPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,') }}
            </p>

            <p
              v-if="info.property.subTypeText"
              class="ListingInfo__type"
            >
              {{ info.address.city }}
              {{ info.property.subTypeText }}
            </p>
          </div>

          <div class="ListingInfo__details">
            <div
              v-for="(detail, index) in list"
              :key="index"
              class="ListingInfo__detail"
              :class="{
                'ListingInfo__detail-center' : detail.name === 'Beds' || detail.name === 'Baths',
              }"
            >
              <p
                class="ListingInfo__details-name"
                v-html="detail.name"
              />

              <p
                class="ListingInfo__details-value"
                v-html="detail.value"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      list: [
        {
          name: 'Beds',
          value: this.info.property.bedrooms,
        },
        {
          name: 'Baths',
          value: this.info.property.bathsFull + this.info.property.bathsHalf,
        },
        {
          name: 'Home Size',
          value: `${this.info.property.area && this.info.property.area.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')} Sq. Ft.`,
        },
        {
          name: 'Lot Size',
          value: `${this.info.property.lotSizeArea && this.info.property.lotSizeArea.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')} Sq. Ft.`,
        },
      ]
    }
  },

  methods: {
    checkNewListing () {
      if (this.$moment(this.info.listDate).isBefore(this.$moment().subtract(7, 'days'))) {
        return false
      }

      return true
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";
  .ListingInfo {
    padding: 22px 0 50px;

    &__badge {
      display: flex;
      padding: 8px 12px;
      background: $burnt-orange;
      border-radius: 4px;
      width: fit-content;
      margin-bottom: 20px;

      &-icon {
        color: #FFFDFC;
        margin-right: 6px;
      }

      &-name {
        font-weight: 600;
        font-size: 12px;
        line-height: 140%;
        text-align: center;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #FFFDFC;
      }
    }

    &__name {
      font-weight: bold;
      font-size: 28px;
      line-height: 120%;
      color: #000000;
      padding-bottom: 10px;
    }

    &__address {
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: #000000;
      padding-bottom: 14px;
    }

    &__description {
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      color: #000000;
      padding-bottom: 24px;
    }

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 20px;
    }

    &__price {
      padding-right: 15px;
      display: flex;
      flex-direction: column;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      color: #1F2021;

      strong {
        font-weight: 600;
        font-size: 12px;
        line-height: 175%;
      }
    }

    &__type {
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: #000000;
    }

    &__details {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 175%;
      color: #1F2021;
      padding-bottom: 0;

      &-name {
        font-size: 12px;
        font-weight: 600;
        text-transform: capitalize;
      }

      &-value {
        font-size: 16px;
      }
    }

    &__detail {
      &-center {
        text-align: center;
      }
    }

    @media (min-width: $medium-devices-width) {
      &__description {
        padding-bottom: 0;
      }
    }
  }

</style>
