<template>
  <section class="PropertyShowing">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7">
          <h4
            v-if="showing.showings_title"
            class="PropertyShowing__title"
          >
            {{ showing.showings_title }}
          </h4>

          <PropertyShowingReservationCard
            :card="reservationCard"
          />

          <AppSectionTitle
            v-if="showing.descriptive_title"
            :subtitle="showing.descriptive_title"
            color="black"
          />

          <p
            v-if="showing.description"
            class="PropertyShowing__description"
            v-html="showing.description"
          />

          <div
            v-if="showing.qa"
            class="PropertyShowing__questions"
          >
            <h5 class="PropertyShowing__subtitle">
              {{ showing.qa.section_title }}
            </h5>

            <div
              v-for="(item, index) in showing.qa['q&a']"
              :key="index"
            >
              <p class="PropertyShowing__text-title">
                {{ item.ques_title }}
              </p>

              <p class="PropertyShowing__text">
                {{ item.answer }}
              </p>
            </div>
          </div>

          <div
            v-if="showing.highlights"
            class="PropertyShowing__highlights"
          >
            <h5 class="PropertyShowing__subtitle">
              {{ showing.highlights.section_title }}
            </h5>

            <div
              v-for="(item, index) in showing.highlights.highlights_data"
              :key="index"
              class="PropertyShowing__highlight"
            >
              <font-awesome-icon
                class="PropertyShowing__icon fa-xs"
                far
                icon="check-circle"
              />

              {{ item.detail }}
            </div>
          </div>

          <div
            v-if="showing.features"
            class="PropertyShowing__features"
          >
            <h5 class="PropertyShowing__subtitle">
              {{ showing.features.section_title }}
            </h5>

            <div class="PropertyShowing__tags">
              <div
                v-for="(item, index) in showing.features.features_data"
                :key="index"
                class="PropertyShowing__feature"
              >
                <font-awesome-icon
                  class="PropertyShowing__icon"
                  :icon="['fas', 'home']"
                />

                {{ item.amenity }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4 offset-md-1 d-flex align-items-center flex-column">
          <h4 class="PropertyShowing__listed">
            {{ listedBy.agents_section.agents_title }}
          </h4>

          <PropertyShowingCard
            :card="listedBy.agents_section.agents_data[0]"
          />

          <p class="PropertyShowing__code">
            Listed by Brian Wollner • DRE #01889264 • Coldwell Banker Realty
          </p>

          <button class="PropertyShowing__share">
            <font-awesome-icon
              class="PropertyShowing__icon"
              :icon="iconItem(listedBy.share_section.share_listing_icon)"
            />

            {{ listedBy.share_section.share_listing_text }}
          </button>

          <div class="PropertyShowing__estimate">
            <font-awesome-icon
              class="PropertyShowing__icon fa-5x"
              style="margin-right: 0; margin-bottom: 12px;"
              :icon="iconItem(listedBy.marketing_section.pie_chart_icon)"
            />

            <h4 class="PropertyShowing__listed">
              {{ listedBy.marketing_section.title }}
            </h4>

            <AppLink
              :text="listedBy.marketing_section.Show_detail.Show_detail_text"
              color="grey"
              size="medium"
              :navigato-to="listedBy.marketing_section.Show_detail.Show_detail_link"
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

    listedBy: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      reservationCard: {
        title: 'When would you like to see it?',
        time: [
          { value: '10:15' },
          { value: '11:15' },
          { value: '12:15' },
          { value: '13:15' },
          { value: '14:15' },
          { value: '15:15' },
        ],
        date: [
          { value: 'Aug 24 Mon' },
          { value: 'Aug 25 Tues' },
          { value: 'Aug 26 Mon' },
        ],
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
    iconItem (iconName) {
      const icon = iconName.replace(/fa-(.*)/, '$1').split(' ')

      return icon
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PropertyShowing {
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
      text-transform: capitalize;
    }

    &__text {
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      color: #000000;
      padding-bottom: 20px;

      &-title {
        font-weight: bold;
        font-size: 16px;
        line-height: 140%;
        color: #000000;
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
      padding: 6px 12px;
      background: #F2F2F2;
      border-radius: 20px;
      margin-bottom: 20px;

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
    }
  }
</style>
