<template>
  <li class="AppMainMenu__item">
    <NuxtLink
      :to="item.url"
      class="AppMainMenu__link"
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

  .AppMainMenu {
    &__item {
      padding: 0 18px;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      cursor: pointer;
      transition: .3s ease;

      &:hover {
        opacity: 0.75;
      }
    }
  }

  .AppMainMenu--horizontal {
    .AppMainMenu__item:first-of-type {
      padding-left: 0;
    }

    .AppMainMenu__item:last-of-type {
      padding-right: 0;
    }
  }

  .AppHeader__static {
    .AppMainMenu--light {
      .AppMainMenu__link {
        text-transform: lowercase;
        text-decoration: none;
        color: $white;

        &:focus {
          @include focus-light;
        }
      }
    }
  }

  .AppHeader__fixed {
    .AppMainMenu--light {
      .AppMainMenu__link {
        text-transform: lowercase;
        text-decoration: none;
        color: $color-primary;

        &:focus {
          @include focus-primary;
        }
      }
    }
  }

  .AppMainMenu--vertical {
    .AppMainMenu__item:not(:last-of-type) {
      margin-bottom: 14px;
    }
  }

  .AppMainMenu--dark {
    .AppMainMenu__link {
      text-transform: lowercase;
      text-decoration: none;
      color: $color-primary;

        &:focus {
          @include focus-primary;
        }
    }
  }
</style>
