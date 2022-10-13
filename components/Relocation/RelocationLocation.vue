<template>
  <section class="RelocationLocation">
    <h3 class="RelocationLocation__title">
      {{ location.section_headline }}
    </h3>

    <div
      class="RelocationLocation__wrapper"
      :class="{
        'RelocationLocation__wrapper--common': isCommon,
        'RelocationLocation__wrapper--inverted': !isCommon,
      }"
    >
      <div class="RelocationLocation__image RelocationLocation__image-landcape">
        <img
          src="~/assets/images/slide.png"
        >
      </div>

      <div class="RelocationLocation__image RelocationLocation__image-top">
        <img src="~/assets/images/slide.png" alt="">
      </div>

      <div class="RelocationLocation__image RelocationLocation__image-bottom">
        <img src="~/assets/images/slide.png" alt="">
      </div>
    </div>

    <div class="container">
      <p
        class="RelocationLocation__content"
        v-html="content.content"
      />

      <AppLinkButton
        :text="content.cta_link.title"
        :navigate-to="content.cta_link.url"
        color="pink"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      default: () => {},
    },

    image: {
      type: Object,
      default: () => {},
    },

    content: {
      type: Object,
      default: () => {},
    },

    isCommon: {
      type: Boolean,
      default: true,
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .RelocationLocation {
    position: relative;
    padding: 40px 0;
    text-align: center;

    &__title {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color:#226492;
      margin-bottom: 46px;
      letter-spacing: 0px;
    }

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

    &__content {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 32px;
      letter-spacing: 0px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 32px;
      margin-bottom: 64px;
      }

      &__content {
        font-size: 30px;
      }

      &__wrapper {
        &--common {
          .RelocationLocation__image {
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
          .RelocationLocation__image {
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
