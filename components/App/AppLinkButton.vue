<template>
  <a
    class="button AppButton"
    :class="[
      `button--${type}`,
      `button--${color}`
    ]"
    :target="target"
    :href="navigateTo"
  >
    <span v-html="text" />
  </a>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: 'common'
    },

    color: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    },

    target: {
      type: String,
      default: '_self'
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

  .button {
    position: relative;
    font-weight: 600;
    line-height: 140%;
    text-align: center;
    color: #FFFDFC;
    white-space: nowrap;
    text-align: center;
    border: none;
    outline: none;
    transition: all .2s;
    border-radius: 24px;
    display: inline-block;

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
    &--small {
      padding: 6px 38px;
      font-size: 14px;
    }

    &--common {
      padding: 12px 44px;
      font-size: 18px;
    }

    &--pink {
      background: $darkest-pink;

      &:hover {
        opacity: 0.75;
      }

      &:focus {
        @include focus-dark;
      }
    }

    &--blue {
      background: $lightest-navy;

      &:hover {
        opacity: 0.75;
      }

      &:focus {
        @include focus-blue;
      }
    }

    &--orange {
      background: $burnt-orange;

      &:hover {
        opacity: 0.75;
      }

      &:focus {
        @include focus-orange;
      }
    }
  }

</style>
