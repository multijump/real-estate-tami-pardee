<template>
  <section
    class="PageIconGrid"
    :class="{
      'PageIconGrid--light' : iconGrid.color_scheme === 'light',
      'PageIconGrid--dkblue' : iconGrid.color_scheme === 'dkblue',
      'PageIconGrid--dark' : iconGrid.color_scheme === 'dark',
    }"
  >
    <div class="container">
      <h2 class="PageIconGrid__heading">
        {{ iconGrid.section_headline }}
      </h2>

      <div class="row">
        <div
          v-for="(item, index) in iconGrid.icons"
          :key="index"
          class="col-12 col-sm-6 col-md-4"
        >
          <div class="PageIconGrid__block">
            <img
              class="PageIconGrid__icon"
              :src="item.icon"
            >

            <h3 class="PageIconGrid__title">
              {{ item.title }}
            </h3>

            <p class="PageIconGrid__description">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    iconGrid: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageIconGrid {
    position: relative;
    padding: 40px 0;

    &--light {
      background: transparent;

      .PageIconGrid__heading {
        color: $color-primary;
      }

      .PageIconGrid__title {
        color: $color-primary;
      }

      .PageIconGrid__subtitle {
        color: $color-primary;
      }

      .PageIconGrid__description {
        color: #fff;
      }
    }

    &--dkblue {
      background: #003B5C;

      .PageIconGrid__heading {
        color: #fff;
      }

      .PageIconGrid__title {
        color: #fff;
      }

      .PageIconGrid__subtitle {
        color: #fff;
      }

      .PageIconGrid__description {
        color: #fff;
      }
    }

    &--dark {
      background: #226492;

      .PageIconGrid__heading {
        color: #fff;
      }

      .PageIconGrid__title {
        color: #fff;
      }

      .PageIconGrid__subtitle {
        color: #fff;
      }

      .PageIconGrid__description {
        color: #fff;
      }
    }

    &__heading {
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #226492;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
    }

    &__block {
      text-align: center;
      margin-bottom: 20px;
    }

    &__title {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
    }

    &__icon {
      max-height: 55px;
      max-width: 55px;
      width: 100%;
      height: 100%;
      margin-bottom: 26px;
    }

    &__description {
      font-weight: 300;
      line-height: 1.5;
      font-size: 18px;
      color: $grey;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__heading {
        font-size: 40px;
      }

      &__title {
        font-size: 28px;
      }
    }
  }
</style>
