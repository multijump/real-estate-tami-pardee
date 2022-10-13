<template>
  <div
    v-if="time.property_open_houses_title.date"
    class="PropertyOpenTime"
  >
    <div class="container">
      <div class="PropertyOpenTime__block">
        <p class="PropertyOpenTime__text">
          {{ time.property_open_houses_title }}:
          <span>{{ $moment(time.property_open_houses_data[0].date).format("MMM DD") }}, {{ time.property_open_houses_data[0].time }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PropertyOpenTime {
    position: relative;

    &__block {
      margin-top: 30px;
      background: $lightest-powder-blue;
      border-radius: 10px;
      padding: 22px 40px;
      text-align: center;

      span {
        text-decoration: underline;
      }
    }

    &__text {
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
    }

    @media (min-width: $medium-devices-width) {
      &__block {
        background: $lightest-powder-blue;
        border-radius: 10px;
        padding: 18px 0;
      }
    }
  }
</style>
