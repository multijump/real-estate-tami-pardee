<template>
  <section class="ListingShowing">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7">
          <div class="ListingShowing__title">
            Request a Showing
          </div>

          <ListingShowingReservationCard
            :card="reservationCard"
          />

          <AppSectionTitle
            :subtitle="getSubTitle()"
            color="black"
          />

          <p class="ListingShowing__description">
            {{ showing.remarks }}
          </p>

          <div class="ListingShowing__questions">
            <!-- <div class="ListingShowing__subtitle">
              Q&A
            </div>

            <p class="ListingShowing__text">
              <strong>What You Should Know About the House:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p> -->

            <p class="ListingShowing__text">
              <strong>Favorite Room:</strong> {{ showing.property.additionalRooms }}
            </p>
          </div>

          <div class="ListingShowing__highlights">
            <div class="ListingShowing__subtitle">
              Highlights
            </div>

            <div
              v-for="(item, index) in getHighLights()"
              :key="index"
              class="ListingShowing__highlight"
            >
              <font-awesome-icon
                class="ListingShowing__icon fa-xs"
                far
                icon="check-circle"
              />
              {{ item }}
            </div>
          </div>

          <div class="ListingShowing__features">
            <div class="ListingShowing__subtitle">
              Features
            </div>

            <div class="ListingShowing__tags">
              <div
                v-for="(item, index) in getFeatures()"
                :key="index"
                class="ListingShowing__feature"
              >
                <font-awesome-icon
                  class="ListingShowing__icon"
                  :icon="['fas', item.icon]"
                />
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4 offset-lg-1 d-flex align-items-center flex-column">
          <div class="ListingShowing__listed">
            {{ getAgentTitle() }}
          </div>

          <ListingShowingCard
            :card="getAgent()"
          />

          <p class="ListingShowing__code">
            Listed by Pardee + Partners • DRE #01858429
          </p>

          <button class="ListingShowing__share">
            <font-awesome-icon
              class="ListingShowing__icon"
              :icon="['fas', 'share']"
            />

            Share Listing
          </button>

          <div class="ListingShowing__estimate">
            <font-awesome-icon
              class="ListingShowing__icon fa-5x"
              style="margin-right: 0; margin-bottom: 12px;"
              :icon="['fas', 'chart-pie']"
            />

            <div class="ListingShowing__listed">
              Monthly Payment Estimate
            </div>

            <AppLink
              text="Show Details"
              color="grey"
              size="medium"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    showing: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      reservationCard: {
        title: 'When would you like to see it?',
        time: [
          { value: '9:00' },
          { value: '9:30' },
          { value: '10:00' },
          { value: '10:30' },
          { value: '11:00' },
          { value: '12:00' },
          { value: '12:30' },
          { value: '1:00' },
          { value: '1:30' },
          { value: '2:00' },
          { value: '2:30' },
          { value: '3:00' },
          { value: '3:30' },
          { value: '4:00' },
          { value: '4:30' },
          { value: '5:00' },
          { value: '5:30' },
          { value: '6:00' },
          { value: '6:30' },
          { value: '7:00' },
        ],
        date: this.getDateRange(),
        button: {
          title: 'Next',
          url: '/'
        },
      },

      showingCard: {
        title: 'Katie Pardee',
        job: 'Partner - Buyer',
        image: 'https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg',
        star_rating: 4.5,
        icons: [
          { icon: 'fas fa-phone-alt' },
          { icon: 'fas fa-envelope' },
        ],
      }
    }
  },

  methods: {
    getHighLights () {
      const items = []

      if (this.showing.mls && this.showing.mls.daysOnMarket) {
        items.push(`${this.showing.mls.daysOnMarket} days on market`)
      }
      if (this.showing.property && this.showing.property.yearBuilt) {
        items.push(`Built in ${this.showing.property.yearBuilt}`)
      }
      if (this.showing.property && this.showing.property.parking) {
        items.push(`Total parking spaces - ${this.showing.property.parking.spaces} Car`)
        items.push(`${this.showing.property.parking.description}`)
      }
      if (this.showing.property && this.showing.property.subTypeText) {
        items.push(`${this.showing.property.subTypeText}`)
      }
      if (this.showing.mls && this.showing.mls.area) {
        items.push(`Community | ${this.showing.mls.area}`)
      }
      if (this.showing.listingId) {
        items.push(`MLS# | ${this.showing.listingId}`)
      }

      return items
    },

    getFeatures () {
      const items = []

      if (this.showing.property && this.showing.property.cooling) {
        items.push({
          icon: 'home',
          text: `${this.showing.property.cooling} Cooling`
        })
      }
      if (this.showing.property && this.showing.property.heating) {
        items.push({
          icon: 'home',
          text: `${this.showing.property.heating} Heat`
        })
      }
      if (this.showing.property && this.showing.property.flooring) {
        items.push({
          icon: 'home',
          text: `${this.showing.property.flooring.split(', ').map(floor => `${floor} Floors`).join(', ')}`
        })
      }
      if (this.showing.property && this.showing.property.view && this.showing.property.view !== 'None') {
        items.push({
          icon: 'home',
          text: 'Has View'
        })
        items.push({
          icon: 'home',
          text: `${this.showing.property.view} Views `
        })
      }
      if (this.showing.property && this.showing.property.pool && this.showing.property.pool !== 'None') {
        items.push({
          icon: 'home',
          text: `${this.showing.property.pool} Pool`
        })
      }

      return items
    },

    getDateRange () {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((day) => {
        return { value: this.$moment().add(day, 'days').format('MMM D ddd') }
      })
    },

    getAgentTitle () {
      return this.showing.agent.photo ? 'Listed By' : 'Featured Agent'
    },

    getSubTitle () {
      return this.showing.association.amenities && this.showing.association.amenities !== 'None' ? this.showing.association.amenities : ''
    },

    getAgent () {
      return this.showing.agent.photo ? this.showing.agent : this.showing.pardeeAgent
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .ListingShowing {
    position: relative;
    padding: 30px 0 50px 0;

    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      padding-bottom: 18px;
    }

    &__listed {
      padding-top: 60px;
      font-weight: 600;
      font-size: 18px;
      padding-bottom: 18px;
      line-height: 120%;
      text-align: center;
      color: #1F2021;
    }

    &__code {
      padding-top: 14px;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      max-width: 80%;
      color: #747B7E;
    }

    &__share {
      margin-top: 24px;
      width: 100%;
      padding: 13px 0;
      background: #F3F3F3;
      border: none;
      outline: none;
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: #000000;
      opacity: 1;
      transition: opacity .3s ease;

      &:hover {
        opacity: .75;
      }
    }

    &__estimate {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #F3F3F3;
      padding: 24px;
      width: 100%;
    }

    &__description {
      padding-top: 16px;
      padding-bottom: 66px;
      font-weight: normal;
      font-size: 18px;
      line-height: 120%;
      color: #000000;
    }

    &__questions {
      padding-bottom: 48px;
    }

    &__subtitle {
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      padding-bottom: 20px;
    }

    &__text {
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      color: #000000;

      &:not(:last-of-type) {
        padding-bottom: 20px;
      }
    }

    &__highlights {
      padding-bottom: 48px;
    }

    &__icon {
      margin-right: 10px;
    }

    &__highlight {
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: #000000;
      display: flex;
      align-items: center;

      &:not(:last-of-type) {
        margin-bottom: 16px;
      }
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
    }

    &__feature {
      color: #000000;
      padding: 6px 12px;
      background: #F2F2F2;
      border-radius: 20px;
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 120%;

      &:not(:last-of-type) {
        margin-right: 20px;
      }
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0 100px 0;

      &__description {
        padding-top: 8px;
        padding-bottom: 44px;
        font-size: 20px;
      }

      &__questions {
        padding-bottom: 44px;
      }

      &__highlights {
        padding-bottom: 44px;
      }

      &__listed {
        padding-top: 0;
      }
    }
  }
</style>
