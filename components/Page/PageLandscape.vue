<template>
  <section class="PageLandscape">
    <div
      class="PageLandscape__wrapper"
      :class="{
        'PageLandscape__wrapper--common': content.orientation === 'standard',
        'PageLandscape__wrapper--inverted': content.orientation === 'reverse',
      }"
    >
      <div class="PageLandscape__image PageLandscape__image-landcape">
        <img
          src="~/assets/images/slide.png"
        >
      </div>

      <div class="PageLandscape__image PageLandscape__image-top">
        <img src="~/assets/images/slide.png" alt="">
      </div>

      <div class="PageLandscape__image PageLandscape__image-bottom">
        <img src="~/assets/images/slide.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageLandscape {
    position: relative;
    padding: 40px 0;

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(1fr, auto);
      grid-template-rows: 2fr;
      gap: 4px;
      padding-bottom: 32px;
    }

    &__image {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &-landcape {
        grid-column:  1 / 3;
        grid-row: 1 / 2;
      }

      &-top {
        grid-column:  1 / 2;
        grid-row: 2 / 3;
      }

      &-bottom {
        grid-column:  2 / 3;
        grid-row: 2 / 3;
      }
    }
    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__wrapper {
        &--common {
          .PageLandscape__image {
            &-landcape {
              grid-column:  1 / 3;
              grid-row: 1 / 3;
            }

            &-top {
              grid-column:  3 / 4;
              grid-row: 1 / 2;
            }

            &-bottom {
              grid-column:  3 / 4;
              grid-row: 2 / 3;
            }
          }
        }

        &--inverted {
          .PageLandscape__image {
            &-landcape {
              grid-column:  2 / 4;
              grid-row: 1 / 3;
            }

            &-top {
              grid-column:  1 / 2;
              grid-row: 1 / 2;
            }

            &-bottom {
              grid-column:  1 / 2;
              grid-row: 2 / 3;
            }
          }
        }
      }
    }
  }
</style>
