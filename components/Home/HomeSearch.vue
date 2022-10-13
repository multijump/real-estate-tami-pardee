<template>
  <section class="HomeSearch">
    <div class="HomeSearch__bg" />

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5 com-sm-12">
          <h5 class="HomeSearch__title">
            <span>find</span> your dream home
          </h5>

          <div class="HomeSearch__field">
            <input
              v-model="location"
              class="HomeSearch__input"
              type="text"
              placeholder="Search... (city, zip code, lease, etc.)"
              @keyup="keyup"
            >

            <div class="HomeSearch__search">
              <SearchImage
                v-if="!isSearch"
                class="AppLink__icon"
                tabindex="-1"
                @click.prevent="searchHomes()"
              />

              <AppLoader v-else :height="24" :width="24" />
            </div>
          </div>

          <CursorImage class="HomeSearch__cursor" />
        </div>
      </div>
    </div>

    <AppNewListing
      v-if="badge"
      :badge="badge"
      skip-map="play-button"
      class="d-none d-md-flex HomeSearch--featured"
    />
  </section>
</template>

<script>
import SearchImage from '~/assets/images/search.svg?inline'
import CursorImage from '~/assets/images/big-icon-misc.svg?inline'

export default {
  components: {
    SearchImage,
    CursorImage
  },

  props: {
    badge: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      location: null,
      isSearch: false,
    }
  },

  methods: {
    searchHomes () {
      this.isSearch = true
      this.onSubmit()
    },

    keyup (e) {
      if (e.keyCode === 13) {
        this.onSubmit()
      }
    },

    onSubmit () {
      if (!this.location) {
        window.open('/search-home?page=1', '_self')
      } else {
        window.open(`/search-home?q=${this.location}&page=1`, '_self')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .HomeSearch {
    position: relative;
    text-align: center;
    padding: 30px 0 60px;
    display: flex;
    flex-direction: column-reverse;

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: $background-gray;
    }

    &__title {
      font-family: 'Bayshore', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 58px;
      line-height: 100%;
      margin-bottom: 14px;

      span {
        color: $main-pink;
      }
    }

    &__field {
      margin: 0 auto;
      width: 100%;
      max-width: 385px;
      position: relative;
    }

    &__input {
      width: inherit;
      padding: 13px 21px 13px 21px;
      background: #FFFDFC;
      border: 2px solid #DDDDDD;
      box-sizing: border-box;
      border-radius: 24px;
      outline: none;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 120%;

      &::placeholder {
        color: $grey;
      }

      &:focus {
        @include focus-dark;
      }
    }

    &__search {
      background: $darkest-pink;
      position: absolute;
      width: 46px;
      height: 46px;
      right: 0;
      top: 0;
      border-radius: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: opacity .3s ease;
      opacity: 1;

      &:hover {
        opacity: 0.75;
      }
    }

    &__icon {
      height: 20px;
      fill: $white;
    }

    &__cursor {
      display: none;
    }

    &--featured {
      position: relative;
      background: #FFFDFC;
      width: 100%;
      z-index: 3;
      display: flex;
      justify-content: space-between;

      @media (min-width: $medium-devices-width) {
        position: absolute;
        top: -130px;
        right: 56px;
        max-width: 715px;
      }
    }

    @media (min-width: $medium-devices-width) {
      &__title {
        font-size: 68px;
        margin-bottom: 4px;
      }

      &__cursor {
        display: block;
        position: absolute;
        bottom: -36px;
        right: -4px;
      }
    }
  }
</style>
