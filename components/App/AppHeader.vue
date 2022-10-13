<template>
  <header
    class="AppHeader"
    :class="{
      'AppHeader__static': scrollPosition < 200 || isMobileNavShown,
      'AppHeader__fixed': scrollPosition > 200 || isMobileNavShown,
      'AppHeader__transparent': !isDarkMode && scrollPosition < 200 && !isMobileNavShown,
      'AppHeader__dark': isDarkMode,
      'AppHeader__fixed-light': !isDarkMode && scrollPosition > 200 || isMobileNavShown,
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-4 col-md-3">
          <AppLogo
            :logo="header.logo"
            :type="changeMode"
          />
        </div>

        <div class="col-8 col-md-9 text-right">
          <div class="AppHeader__contact d-none d-md-flex">
            <AppContact
              :contacts="header.contact_menu"
              :color="changeMode"
              class="d-none d-md-flex"
            />

            <AppMainMenu
              :list="header.menu_main_nav"
              type="horizontal"
              :color="changeMode"
              class="d-none d-md-flex"
            />
          </div>

          <div
            class="hamburger d-inline-block d-md-none"
            :class="{
              isLight: isMobileNavShown && !isDarkMode,
              isActive: isMobileNavShown,
            }"
            @click="menuTrigger()"
          >
            <div class="hamburger-box">
              <div class="hamburger-inner hamburger-inner--dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
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

  data () {
    return {
      isActive: false,
      scrollPosition: null,
    }
  },

  computed: {
    ...mapGetters({
      isMobileNavShown: 'app/isMobileNavShown',
      isDarkMode: 'app/isDarkMode',
    }),

    changeMode () {
      if (this.isDarkMode || this.isMobileNavShown || this.scrollPosition > 200) {
        return 'dark'
      }

      return 'light'
    }
  },

  mounted () {
    window.addEventListener('scroll', this.updateScroll)

    this.updateScroll()
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.updateScroll)
  },

  methods: {
    ...mapActions({
      setIsMobileNavShown: 'app/setIsMobileNavShown'
    }),

    updateScroll () {
      this.scrollPosition = window.scrollY
    },

    menuTrigger () {
      this.setIsMobileNavShown(!this.isMobileNavShown)
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppHeader {
    width: 100%;
    z-index: 2000;

    &__contact {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  .hamburger {
    margin-right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    height: 25px;
    position: relative;
    cursor: pointer;
    transition: opacity, filter 0.3s cubic-bezier(0.83, 0, 0.17, 1);

    &:hover {
    opacity: 0.7
    }
  }

  .hamburger-box {
    width: 25px;
    height: 21px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 24px;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    transform: rotate(0deg);
    transform-origin: 50% 50%;
    transition: all 0.3s;
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }

  .hamburger-inner::before {
    top: -7px;
  }

  .hamburger-inner::after {
    bottom: -7px;
  }

  .hamburger.isActive {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: $color-primary;
    }

    .hamburger-inner {
      background-color: transparent;
    }

    .hamburger-inner::before {
      top: 0;
      transform: rotate(225deg);
    }

    .hamburger-inner::after {
      top: 0;
      transform: rotate(-225deg);
    }
  }

  .hamburger.isLight {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: $color-primary;
    }

    .hamburger-inner {
      background-color: transparent;
    }

    .hamburger-inner::before {
      top: 0;
      transform: rotate(225deg);
    }

    .hamburger-inner::after {
      top: 0;
      transform: rotate(-225deg);
    }
  }

  .AppHeader__fixed {
    position: fixed;
    background: #FFFDFC;
    // $color-primary;
    box-shadow: 0 3px 10px 5px rgba(0,0,0,.06);

    padding: 10px 0;
    opacity: 1;
    transition: opacity .4s ease-in-out;

    @media (min-width: $medium-devices-width) {
      padding: 30px 0;
    }
  }

  // .AppHeader__light {
  //   position: absolute;
  //   top: 10px;
  //   left: 0;

  //   @media (min-width: $small-devices-width) {
  //     top: 30px;
  //   }
  // }

  .AppHeader__transparent {
    position: absolute;
    top: 10px;
    left: 0;

    @media (min-width: $small-devices-width) {
      top: 30px;
    }
  }

  .AppHeader__fixed-light {
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        width: 24px;
        height: 3px;
        background-color: $color-primary;
        border-radius: 3px;
        position: absolute;
        transform: rotate(0deg);
        transform-origin: 50% 50%;
        transition: all 0.3s;
      }
  }

  .AppHeader__dark {
    background: #FFFDFC;
    filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.1));
    padding: 10px 0;

    @media (min-width: $medium-devices-width) {
      padding: 30px 0;
    }

    .hamburger.isActive {
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: $color-primary;
      }
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      width: 24px;
      height: 3px;
      background-color: $color-primary;
      border-radius: 3px;
      position: absolute;
      transform: rotate(0deg);
      transform-origin: 50% 50%;
      transition: all 0.3s;
    }
  }
</style>
