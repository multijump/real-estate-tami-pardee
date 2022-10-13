<template>
  <button
    class="button AppButton"
    :class="[
      `button--${type}`,
      `button--${color}`
    ]"
  >
    <span>{{ text }}</span>
  </button>
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

    &:focus {
      @include focus-dark;
    }

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
    }

    &--blue {
      background: $lightest-navy;

      &:hover {
        opacity: 0.75;
      }
    }

    &--orange {
      background: $burnt-orange;

      &:hover {
        opacity: 0.75;
      }
    }
  }

</style>
