<template>
  <a
    v-if="icon.icon.length"
    class="logo__link"
    :href="getUrl()"
    target="_blank"
    aria-label="Social Icons"
  >
    <img
      v-if="icon.network === 'zillow'"
      class="logo__img"
      :src="icon.icon"
      alt="zillow"
    >

    <font-awesome-icon
      v-else
      class="logo__icon fa-lg"
      :icon="iconItem"
    />
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      default: () => {}
    },
  },

  computed: {
    iconItem () {
      const icon = this.icon.icon.replace(/fa-(.*)/, '$1').split(' ')

      return icon
    },
  },

  methods: {
    getUrl () {
      if (this.icon.url && typeof this.icon.url === 'object') {
        return this.icon.url.url
      } else {
        return this.icon.url
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .logo {
    &__icon {
      fill: white;
    }

    &__img {
      height: 18px;
    }

    &__link {
      margin-right: 0;
      color: white;
      text-decoration: none;

      &:not(:last-of-type) {
        margin-right: 23px;
      }

      &:focus {
        @include focus-light;
      }
    }
  }
</style>
