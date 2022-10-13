<template>
  <a
    class="AppLink"
    :class="[
      `AppLink--${color}`,
      `AppLink--${type}`,
    ]"
    :href="navigateTo"
  >
    <span v-html="text" />

    <ArrowRightImage
      v-if="withArrow"
      class="AppLink__arrow"
    />
  </a>
</template>

<script>
import ArrowRightImage from '~/assets/images/arrow-right.svg?inline'

export default {
  components: {
    ArrowRightImage,
  },

  props: {
    type: {
      type: String,
      default: 'small',
    },

    color: {
      type: String,
      default: '',
    },

    text: {
      type: String,
      default: '',
    },

    withArrow: {
      type: Boolean,
      default: false,
    },

    navigateTo: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppLink {
    font-weight: normal;
    line-height: 140%;
    text-decoration-line: underline;
    display: flex;
    align-items: center;
    z-index: 2;
    width: fit-content;

    &__arrow {
      margin-left: 6px;
    }

    &--small {
      font-size: 14px;
    }

    &--medium {
      font-size: 16px;
    }

    &--common {
      font-size: 20px;
      font-weight: 600;
    }

    &--blue {
      color: $color-primary;

      &:focus {
        @include focus-blue;
      }
    }

    &--white {
      span {
        color: $white;
      }

      color: $white;

      &:focus {
        @include focus-light;
      }
    }

    &--grey {
      color: $grey;

      &:focus {
        @include focus-grey;
      }
    }

    &--black {
      color: $black;

      &:focus {
        @include focus-black;
      }
    }
  }
</style>
