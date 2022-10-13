<template>
  <section
    class="PageTextBlock"
    :class="{
      'PageTextBlock--light' : content.color_scheme === 'light',
      'PageTextBlock--dkblue' : content.color_scheme === 'dkblue',
      'PageTextBlock--dark' : content.color_scheme === 'dark'
    }"
  >
    <div class="container">
      <h2 class="PageTextBlock__title">
        {{ content.section_headline }}
      </h2>

      <div class="row">
        <div
          class="PageTextBlock__subtitle"
          v-html="content.text"
        />
        <div
          class="PageTextBlock__subtitle"
          v-html="content.text_2"
        />
        <div
          class="PageTextBlock__subtitle"
          v-html="content.text_3"
        />
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
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageTextBlock {
    position: relative;
    padding: 40px 0;

    &--light {
      background: transparent;

      .PageTextBlock__title {
        color: $color-primary;
      }

      .PageTextBlock__subtitle {
        color: $color-primary;

        &::v-deep p {
          color: $grey;
        }
      }
    }

    &--dkblue {
      background: #003B5C;

      .PageTextBlock__title {
        color: #fff;
      }

      .PageTextBlock__subtitle {
        color: #fff;

        &::v-deep p {
          color: #fff;
        }
      }
    }

    &--dark {
      background: #226492;

      .PageTextBlock__title {
        color: #fff;
      }

      .PageTextBlock__subtitle {
        color: #fff;

        &::v-deep p {
          color: #fff;
        }
      }
    }

    &__title {
      text-align: center;
      padding-bottom: 20px;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
    }

    &__subtitle::v-deep h3 {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
    }

    &__subtitle::v-deep p {
      font-weight: 300;
      line-height: 1.5;
      font-size: 18px;
      margin-bottom: 20px;
    }

    &__subtitle::v-deep ul li {
      font-weight: 300;
      line-height: 1.5;
      font-size: 18px;
    }

    @media (min-width: $small-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 40px;
      }
    }
  }
</style>
