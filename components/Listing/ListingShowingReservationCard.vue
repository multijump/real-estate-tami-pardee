<template>
  <div class="ListingShowingReservationCard">
    <div class="ListingShowingReservationCard__title">
      {{ card.title }}
    </div>

    <div class="ListingShowingReservationCard__actions">
      <div class="ListingShowingReservationCard__date">
        <label
          class="ListingShowingReservationCard__label"
          for="date"
        >
          Select a date
        </label>

        <ArrowRightImage
          v-if="index > 0"
          class="ListingShowingReservationCard__arrow-left"
          @click="loadPreviousDate()"
        />

        <div
          id="datesListItems"
          ref="datesList"
          class="ListingShowingReservationCard__date-items d-none d-md-flex"
        >
          <div
            v-for="(item, index) in card.date"
            :key="index"
            class="ListingShowingReservationCard__date-item"
            :class="{
              'ListingShowingReservationCard__date-item--active': date === index,
            }"
            @click="selectDate(index)"
          >
            {{ item.value }}
          </div>
        </div>

        <ArrowRightImage
          class="ListingShowingReservationCard__arrow-right"
          @click="loadNewDate()"
        />

        <select
          id="date"
          v-model="date"
          class="ListingShowingReservationCard__date-select d-block d-md-none"
        >
          <option
            v-for="(item, index) in card.date"
            :key="index"
            :value="item.value"
          >
            {{ item.value }}
          </option>
        </select>
      </div>

      <div class="ListingShowingReservationCard__time">
        <label
          class="ListingShowingReservationCard__label"
          for="time"
        >
          Time
        </label>

        <div class="ListingShowingReservationCard__time-actions">
          <select
            id="time"
            v-model="time"
            class="ListingShowingReservationCard__time-select"
          >
            <option
              v-for="(item, index) in card.time"
              :key="index"
              :value="item.value"
            >
              {{ item.value }}
            </option>
          </select>

          <button
            class="ListingShowingReservationCard__time-button"
            :class="{
              'ListingShowingReservationCard__time-button--active': beforeMidday,
            }"
            @click.prevent="beforeMidday = !beforeMidday"
          >
            AM
          </button>

          <button
            class="ListingShowingReservationCard__time-button"
            :class="{
              'ListingShowingReservationCard__time-button--active': !beforeMidday,
            }"
            @click.prevent="beforeMidday = !beforeMidday"
          >
            PM
          </button>
        </div>
      </div>

      <div class="ListingShowingReservationCard__step">
        <label
          class="ListingShowingReservationCard__step-label ListingShowingReservationCard__label"
          for="date"
        >
          Step 1 of 2
        </label>

        <AppButton
          :text="card.button.title"
          color="orange"
          type="small"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRightImage from '~/assets/images/arrow-dark-right.svg?inline'

export default {
  components: {
    ArrowRightImage,
  },

  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      beforeMidday: true,

      date: null,
      time: null,
      index: 0,
    }
  },

  methods: {
    selectDate (index) {
      this.date = index
    },

    loadPreviousDate () {
      if (this.index + 3 >= -3) {
        this.index = this.index - 3
      } else {
        this.index = this.card.date.length
      }

      console.log(this.index)

      const list = this.$refs.datesList

      const element = list.getElementsByClassName('ListingShowingReservationCard__date-item')[this.index]

      this.$scrollTo(element, 300, {
        container: '#datesListItems',
        easing: 'ease-in',
        lazy: false,
        offset: -60,
        force: true,
        cancelable: true,
        x: true,
        y: false
      })
    },

    loadNewDate () {
      if (this.index + 3 < this.card.date.length) {
        this.index = this.index + 3
      } else {
        this.index = 0
      }

      const list = this.$refs.datesList

      const element = list.getElementsByClassName('ListingShowingReservationCard__date-item')[this.index]

      this.$scrollTo(element, 300, {
        container: '#datesListItems',
        easing: 'ease-in',
        lazy: false,
        offset: -60,
        force: true,
        cancelable: true,
        x: true,
        y: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .ListingShowingReservationCard {
    position: relative;
    padding: 22px 10px;
    background: $rose-white;
    margin-bottom: 40px;

    &__title {
      font-weight: normal;
      text-align: center;
      font-size: 14px;
      line-height: 140%;
      padding-bottom: 10px;
    }

    &__label {
      font-weight: 600;
      font-size: 12px;
      line-height: 175%;
      color: #747B7E;
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__date {
      position: relative;
      display: flex;
      flex-direction: column;
      padding-bottom: 24px;
      width: fit-content;

      &-items {
        display: flex;
        align-items: flex-start;
        width: 180px;
        overflow-y: hidden;
        overflow-x: scroll;

        &::-webkit-scrollbar {
          width: 0;
          background: transparent;
        }
      }

      &-item {
        width: 60px;
        min-width: 60px;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        text-decoration: underline;
        display: flex;
        cursor: pointer;
        align-items: center;
        text-align: center;
        color: #747B7E;
        padding: 3px;

        &--active {
          font-weight: 600;
          color: #1F2021;
          background: #DDBCB0;
          border-radius: 7px;
        }
      }

      &-select {
        max-width: 100px;
        padding: 12px 20px;
        background: #FFFDFC;
        border: 2px solid #DDDDDD;
        outline: none;
        border-radius: 11px;
        font-weight: 600;
        font-size: 14px;
        line-height: 140%;
        color: #1F2021;
        margin-right: 10px;
        appearance: none;
        background: url("~/assets/images/arrow-down-simple.svg") 80% 50% no-repeat #FFFDFC;
      }
    }

    &__arrow {
      &-left {
        display: none;
      }

      &-right {
        display: none;
      }
    }

    &__time {
      display: flex;
      flex-direction: column;
      padding-bottom: 24px;

      &-select {
        position: relative;
        padding: 12px 20px;
        min-width: 100px;
        background: #FFFDFC;
        border: 2px solid #DDDDDD;
        outline: none;
        box-sizing: border-box;
        border-radius: 11px;
        font-weight: 600;
        font-size: 14px;
        line-height: 140%;
        color: #1F2021;
        margin-right: 10px;
        appearance: none;
        background: url("~/assets/images/arrow-down-simple.svg") 80% 50% no-repeat #FFFDFC;

        // &::before {
        //   content: '';
        //   position: absolute;
        //   top: 50%;
        //   right: 5px;
        //   width: 10px;
        //   height: 10px;
        //   background: url("~/assets/images/arrow-dark-right.svg") 0 0 no-repeat;
        // }
      }

      &-button {
        padding: 11px 9px;
        background: transparent;
        font-weight: 600;
        font-size: 12px;
        line-height: 175%;
        border: none;
        outline: none;
        color: #747B7E;

        &--active {
          font-weight: 600;
          font-size: 12px;
          line-height: 175%;
          text-decoration-line: underline;
          color: #000000;
          background: #DDBCB0;
          border-radius: 5px;
        }
      }
    }

    &__step {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-label {
        text-align: center;
      }
    }

    @media (min-width: $medium-devices-width) {
      padding: 30px 40px;

      &__title {
        text-align: left;
      }

      &__actions {
        display: flex;
        justify-content: space-between;
      }

      &__date {
        padding-bottom: 0;
      }

      &__arrow {
        &-left {
          display: block;
          position: absolute;
          top: 50%;
          transform: translateY(50%);
          left: -15px;
          transform: rotate(180deg);
          cursor: pointer;
        }

        &-right {
          display: block;
          position: absolute;
          top: 50%;
          transform: translateY(50%);
          transform: rotate(360deg);
          right: -15px;
          cursor: pointer;
        }
      }

      &__time {
        padding-bottom: 0;
      }
    }
  }
</style>
