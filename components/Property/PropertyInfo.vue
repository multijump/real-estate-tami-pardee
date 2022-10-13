<template>
  <section class="PropertyInfo">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="PropertyInfo__badge">
            <font-awesome-icon
              class="PropertyInfo__badge-icon"
              :icon="iconItem"
            />

            <p class="PropertyInfo__badge-name">
              {{ info['new_listing tag'] }}
            </p>
          </div>

          <h1
            v-if="info.property_address"
            class="PropertyInfo__name"
          >
            {{ info.property_address }}
          </h1>

          <h2
            v-if="info.property_title"
            class="PropertyInfo__address"
          >
            {{ info.property_title }}
          </h2>

          <p
            v-if="info.descriptive_title"
            class="PropertyInfo__description"
          >
            {{ info.descriptive_title }}
          </p>
        </div>

        <div class="col-12 col-md-5 d-flex flex-column justify-content-end">
          <div class="PropertyInfo__top">
            <p class="PropertyInfo__price">
              <strong>{{ info.price_title }}</strong>

              ${{ info.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,') }}
            </p>

            <p
              v-if="info.property_type"
              class="PropertyInfo__type"
            >
              {{ info.property_type[0].name }}
            </p>
          </div>

          <div class="PropertyInfo__details">
            <div
              v-for="(detail, index) in list"
              :key="index"
              class="PropertyInfo__detail"
            >
              <p
                class="SearchHomeListingsTileCard__detail-name"
                v-html="detail.name"
              />

              <p
                class="SearchHomeListingsTileCard__detail-value"
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
          name: this.info.bed_title,
          value: this.info.bedrooms,
        },
        {
          name: this.info.bath_title,
          value: this.info.bathrooms,
        },
        {
          name: this.info.living_area_title,
          value: `${this.info.living_area.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')} Sq. Ft.`,
        },
        {
          name: this.info.lot_size_title,
          value: `${this.info.lot_size.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')} Sq. Ft.`,
        },
      ]
    }
  },

  computed: {
    iconItem () {
      const icon = this.info['star-icon'].replace(/fa-(.*)/, '$1').split(' ')

      return icon
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";
  .PropertyInfo {
    padding: 22px 0;

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
        text-transform: uppercase;
      }

      &-value {
        font-size: 16px;
      }
    }

    @media (min-width: $medium-devices-width) {
      &__description {
        padding-bottom: 0;
      }
    }
  }

</style>
