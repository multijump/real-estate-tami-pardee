<template>
  <div
    class="MobileNav"
    :class="{
      'MobileNav--active': isMobileNavShown
    }"
  >
    <div class="MobileNav__inner">
      <div
        class="MobileNav__item"
        @click="menuTrigger()"
      >
        <AppMainMenu
          :list="header.menu_main_nav"
          type="vertical"
          color="dark"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    header: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    ...mapGetters({
      isMobileNavShown: 'app/isMobileNavShown',
    }),
  },

  methods: {
    ...mapActions({
      setIsMobileNavShown: 'app/setIsMobileNavShown'
    }),

    menuTrigger () {
      this.setIsMobileNavShown(!this.isMobileNavShown)
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .MobileNav {
    display: block;
    position: fixed;
    left: 7px;
    top: 7px;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    opacity: 0;
    visibility: hidden;
    box-shadow: 0 0 0 1px #f6f9fc;
    z-index: 4;
    overflow-y: auto;
    transition: all .3s;
    z-index: 1000;

    @media (min-width: $medium-devices-width) {
      display: none;
    }

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      width: 100%;
      min-height: 100%;
      padding: 100px 19px;
      background-color: #FFF;
      transition: all .3s;
    }

    &--active {
      visibility: visible;
      opacity: 1;
    }
  }
</style>
