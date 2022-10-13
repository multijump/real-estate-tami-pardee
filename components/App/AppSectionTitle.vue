<template>
  <div
    class="AppSectionTitle"
    :class="[
      `AppSectionTitle--${color}`,
    ]"
  >
    <h1
      v-if="display"
      class="AppSectionTitle__display"
      v-html="display"
    />

    <h2
      v-if="title"
      :id="titleId"
      class="AppSectionTitle__title"
      :tabindex="titleId ? 0 : -1"
      v-html="title"
    />

    <h3
      v-if="subtitle"
      class="AppSectionTitle__subtitle"
      v-html="subtitle"
    />

    <p
      v-if="lead"
      class="AppSectionTitle__lead"
      v-html="lead"
    />
  </div>
</template>

<script>
export default {
  props: {
    display: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    lead: {
      type: String,
      default: '',
    },

    color: {
      type: String,
      default: '',
    },

    titleId: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppSectionTitle {
    position: relative;
    z-index: 10;

    &__display {
      margin-bottom: 0px;
      font-weight: normal;
      font-size: 58px;
      line-height: 100%;
      font-family: 'Bayshore', sans-serif;
      text-transform: lowercase;
    }

    &__title {
      font-weight: 300;
      font-size: 36px;
      line-height: 140%;
      text-transform: lowercase;
      max-width: calc(100% - 8px);
      margin: auto;

      &:focus {
        @include focus-blue;
      }
    }

    &__subtitle {
      font-weight: bold;
      font-size: 24px;
      line-height: 120%;
      padding-top: 8px;
    }

    &__lead {
      font-weight: normal;
      font-size: 18px;
      line-height: 120%;
      padding-top: 16px;
    }

    @media (min-width: $small-devices-width) {
      &__display {
        font-size: 64px;
      }

      &__title {
        font-size: 40px;
      }

      &__subtitle {
        font-size: 26px;
      }

      &__lead {
        font-size: 20px;
      }
    }

    @media (min-width: $medium-devices-width) {
      &__display {
        font-size: 68px;
      }

      &__title {
        font-size: 48px;
      }

      &__subtitle {
        font-size: 28px;
      }

      &__lead {
        font-size: 20px;
      }
    }

    &--blue {
      .AppSectionTitle__display {
        color: $darkest-powder-blue;
      }

      .AppSectionTitle__title{
        color: $color-primary;
      }

      .AppSectionTitle__subtitle{
        color: $grey;
      }

      .AppSectionTitle__lead{
        color: $black;
      }
    }

    &--navy {
      .AppSectionTitle__display {
        color: $lightest-navy;
      }

      .AppSectionTitle__title{
        color: $color-primary;
      }

      .AppSectionTitle__subtitle{
        color: $grey;
      }

      .AppSectionTitle__lead{
        color: $black;
      }
    }

    &--pink {
      .AppSectionTitle__display {
        color: $darkest-pink;
      }

      .AppSectionTitle__title{
        color: $color-primary;
      }

      .AppSectionTitle__subtitle{
        color: $grey;
      }

      .AppSectionTitle__lead{
        color: $black;
      }
    }

    &--black {
      .AppSectionTitle__display {
        color: $black;
      }

      .AppSectionTitle__title{
        color: $black;
      }

      .AppSectionTitle__subtitle{
        color: $black;
      }

      .AppSectionTitle__lead{
        color: $black;
      }
    }

    &--orange {
      .AppSectionTitle__display {
        color: $burnt-orange;
      }

      .AppSectionTitle__title{
        color: $color-primary;
      }

      .AppSectionTitle__subtitle{
        color:#000000;
      }

      .AppSectionTitle__lead{
        color:#000000;
      }
    }

    &--white {
      .AppSectionTitle__display {
        color:#FFFDFC;
      }

      .AppSectionTitle__title{
        color:#FFFDFC;
      }

      .AppSectionTitle__subtitle{
        color:#FFFDFC;
      }

      .AppSectionTitle__lead{
        color:#FFFDFC;
      }
    }
  }
</style>
