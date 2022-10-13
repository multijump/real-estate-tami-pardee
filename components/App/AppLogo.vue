<template>
  <div
    v-if="logo && logo.logo_src[0]"
    class="AppLogo"
  >
    <NuxtLink
      class="AppLogo__link"
      :class="`AppLogo__${type}`"
      aria-label="Go to the Homepage"
      :to="{ path: '/' }"
    >
      <!-- <img
        v-if="type === 'light'"
        class="AppLogo__img"
        :src="logo.logo_src[0]"
        alt="Logo"
      > -->
      <img
        v-if="type === 'light'"
        class="AppLogo__img"
        src="~/assets/images/logo-light.svg"
        alt="Logo"
      >

      <img
        v-if="type === 'dark'"
        class="AppLogo__img"
        src="~/assets/images/logo-dark.svg"
        alt="Logo"
      >
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: Object,
      default: () => {},
    },

    type: {
      type: String,
      default: 'light',
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppLogo {
    display: inline-block;
    transition: opacity .3s;

    &:hover {
      opacity: 0.6;
    }

    &__link,
    &__img {
      display: inline-block;
    }

    &__img {
      max-width: 190px;
      width: 100%;
    }

    &__light {
      &:focus {
        @include focus-light;
      }
    }

    &__dark {
      &:focus {
        @include focus-primary;
      }
    }
  }
</style>
