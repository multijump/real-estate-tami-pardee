<template>
  <div class="PropertyShowingReservationCard">
    <h4 class="PropertyShowingReservationCard__title">
      {{ card.title }}
    </h4>

    <div class="PropertyShowingReservationCard__actions">
      <div class="PropertyShowingReservationCard__date">
        <label
          class="PropertyShowingReservationCard__label"
          for="date"
        >
          Select a date
        </label>

        <div class="PropertyShowingReservationCard__date-items">
          <div
            v-for="(item, index) in card.date"
            :key="index"
            class="PropertyShowingReservationCard__date-item d-none d-md-block"
            :class="{
              'PropertyShowingReservationCard__date-item--active': date === index,
            }"
            @click="selectDate(index)"
          >
            {{ item.value }}
          </div>
        </div>

        <select
          id="date"
          v-model="date"
          class="PropertyShowingReservationCard__date-select d-block d-md-none"
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

      <div class="PropertyShowingReservationCard__time">
        <label
          class="PropertyShowingReservationCard__label"
          for="time"
        >
          Time
        </label>

        <div class="PropertyShowingReservationCard__time-actions">
          <select
            id="time"
            v-model="time"
            class="PropertyShowingReservationCard__time-select"
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
            class="PropertyShowingReservationCard__time-button"
            :class="{
              'PropertyShowingReservationCard__time-button--active': beforeMidday,
            }"
            @click.prevent="beforeMidday = !beforeMidday"
          >
            AM
          </button>

          <button
            class="PropertyShowingReservationCard__time-button"
            :class="{
              'PropertyShowingReservationCard__time-button--active': !beforeMidday,
            }"
            @click.prevent="beforeMidday = !beforeMidday"
          >
            PM
          </button>
        </div>
      </div>

      <div class="PropertyShowingReservationCard__step">
        <label
          class="PropertyShowingReservationCard__step-label PropertyShowingReservationCard__label"
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
export default {
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
    }
  },

  methods: {
    selectDate (index) {
      this.date = index
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PropertyShowingReservationCard {
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
      display: flex;
      flex-direction: column;
      padding-bottom: 24px;

      &-items {
        display: flex;
      }

      &-item {
        max-width: 60px;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        text-decoration: underline;
        display: flex;
        cursor: pointer;
        align-items: center;
        text-align: center;
        color: #747B7E;

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
      }
    }

    &__time {
      display: flex;
      flex-direction: column;
      padding-bottom: 24px;

      &-select {
        padding: 12px 20px;
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

      &__time {
        padding-bottom: 0;
      }
    }
  }
</style>
