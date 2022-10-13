<template>
  <li class="AppMenuList__item">
    <NuxtLink
      v-if="item.title"
      :to="item.url"
      class="AppMenuList__link"
      :aria-label="item.title"
    >
      {{ item.title }}
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppMenuList {
      &__item {
        text-transform: capitalize;
        text-align: left;

        &:not(:last-of-type) {
          margin-bottom: 15px;
      }
    }

    &__link {
      transition: opacity .3s;
      font-weight: 600;
      font-size: 14px;
      line-height: 140%;
      color: #FFFDFC;

      &:hover {
        opacity: 0.7;
        text-decoration: none;
      }

      &:focus {
        @include focus-light;
      }
    }
  }
</style>
