<template>
  <section class="SearchHomeFilterMobile">
    <div class="SearchHomeFilterMobile__bg" />

    <div class="container">
      <div class="row pb-md-80">
        <div class="col-12 col-md-6">
          <AppSectionTitle
            :title="search.title"
          />
        </div>
        <div class="col-12 col-md-4 offset-md-2">
          <div class="SearchHomeFilterMobile__subtitle">
            <p class="SearchHomeFilterMobile__text">
              {{ search.properties }}
            </p>

            <input
              id="properties"
              class="SearchHomeFilterMobile__checkbox"
              type="checkbox"
              name="properties"
              :value="search.properties_checkbox"
              :checked="isAuthor"
              @click="checkIsAuthor()"
            >
            <label for="properties">{{ search.properties_checkbox }}</label>
          </div>
        </div>
      </div>

      <div class="SearchHomeFilterMobile__content">
        <form
          class="SearchHomeFilterMobile__form"
          action=""
        >
          <div class="SearchHomeFilterMobile__location">
            <label
              class="SearchHomeFilterMobile__label"
              for="location"
            >
              {{ search.form.location.label }}
            </label>

            <input
              id="location"
              v-model="location"
              class="SearchHomeFilterMobile__input"
              type="text"
              :placeholder="search.form.location.placeholder"
            >

            <div
              class="SearchHomeFilterMobile__search"
              @click.prevent="onSubmit()"
            >
              <font-awesome-icon
                v-if="!disabledButton"
                class="fa-lg"
                style="color: white"
                :icon="['fas', 'search']"
              />

              <AppLoader v-else :height="24" :width="24" />
            </div>
          </div>

          <div
            v-if="tags.length"
            class="SearchHomeFilterMobile__tags"
          >
            <div
              v-for="(item, index) in allTags"
              :key="index"
              class="SearchHomeFilterMobile__tags-item"
            >
              <font-awesome-icon
                class="SearchHomeFilterMobile__tags-icon fa-sm"
                :icon="['fas', 'times-circle']"
                @click="deleteTag(index, item)"
              />

              <p class="SearchHomeFilterMobile__tags-text">
                {{ item }}
              </p>
            </div>
          </div>

          <div
            v-if="!isMap"
            class="SearchHomeFilterMobile__view"
          >
            <label
              class="SearchHomeFilterMobile__view-label"
            >
              View:
            </label>

            <font-awesome-icon
              class="SearchHomeFilterMobile__view-icon fa-lg"
              :class="{
                'SearchHomeFilterMobile__view-icon--active': !tableView,
              }"
              :icon="['fas', 'th-list']"
              @click="changeView()"
            />

            <font-awesome-icon
              class="SearchHomeFilterMobile__view-icon fa-lg"
              :class="{
                'SearchHomeFilterMobile__view-icon--active': tableView,
              }"
              :icon="['fas', 'th-large']"
              @click="changeView()"
            />
          </div>

          <div
            v-if="showMore"
            class="SearchHomeFilterMobile__type"
          >
            <label
              class="SearchHomeFilterMobile__label"
            >
              {{ search.form.type.label }}
            </label>

            <div class="SearchHomeFilterMobile__list">
              <label
                v-for="(item, index) in search.form.type.list"
                :key="index"
                class="SearchHomeFilterMobile__type-checkbox"
              >
                <input
                  type="checkbox"
                  :checked="!!tags.includes(item.value)"
                  name="type"
                  @click="selectType($event, item.value)"
                >

                {{ item.text }}
              </label>
            </div>
          </div>

          <div
            v-if="showMore"
            class="SearchHomeFilterMobile__price"
          >
            <label class="SearchHomeFilterMobile__label">
              {{ search.form.price.label }}
            </label>

            <div class="SearchHomeFilterMobile__price-content">
              <select
                v-model="priceFrom"
                class="SearchHomeFilterMobile__price-select"
              >
                <option
                  v-for="(item, index) in search.form.price.from"
                  :key="index"
                  :value="item.value"
                >
                  {{ item.text }}
                </option>
              </select>

              <span class="SearchHomeFilterMobile__to">to</span>

              <select
                v-model="priceTo"
                class="SearchHomeFilterMobile__price-select"
              >
                <option
                  v-for="(item, index) in search.form.price.to"
                  :key="index"
                  :value="item.value"
                >
                  {{ item.text }}
                </option>
              </select>
            </div>
          </div>

          <div
            v-if="showMore"
            class="SearchHomeFilterMobile__beds"
          >
            <label
              class="SearchHomeFilterMobile__beds SearchHomeFilterMobile__label"
              for="beds"
            >
              {{ search.form.beds.label }}
            </label>

            <button
              class="SearchHomeFilterMobile__beds-button"
              @click.prevent="decreaseBeds()"
            >
              -
            </button>

            <select
              v-model="bedsIndex"
              class="SearchHomeFilterMobile__beds-select"
            >
              <option
                v-for="(item, index) in search.form.beds.list"
                :key="index"
                :value="item.value"
              >
                {{ item.text }}
              </option>
            </select>

            <button
              class="SearchHomeFilterMobile__beds-button"
              @click.prevent="increaseBeds()"
            >
              +
            </button>
          </div>

          <div
            v-if="showMore"
            class="SearchHomeFilterMobile__baths"
          >
            <label
              class="SearchHomeFilterMobile__baths SearchHomeFilterMobile__label"
              for="baths"
            >
              {{ search.form.baths.label }}
            </label>

            <button
              class="SearchHomeFilterMobile__baths-button"
              @click.prevent="decreaseBaths()"
            >
              -
            </button>

            <select
              v-model="bathsIndex"
              class="SearchHomeFilterMobile__baths-select"
            >
              <option
                v-for="(item, index) in search.form.baths.list"
                :key="index"
                :value="item.value"
              >
                {{ item.text }}
              </option>
            </select>

            <button
              class="SearchHomeFilterMobile__baths-button"
              @click.prevent="increaseBaths()"
            >
              +
            </button>
          </div>

          <div
            v-if="showMore"
            class="SearchHomeFilterMobile__sort"
          >
            <label
              class="SearchHomeFilterMobile__label"
              for="sort"
            >
              {{ search.form.sort_by.label }}
            </label>

            <select
              id="sort"
              v-model="sort_by"
              class="SearchHomeFilterMobile__sort-select"
            >
              <option
                v-for="(item, index) in search.form.sort_by.list"
                :key="index"
                :value="item.value"
              >
                {{ item.text }}
              </option>
            </select>
          </div>

          <div
            v-if="showMore"
            class="SearchHomeFilterMobile__submit"
          >
            <button
              class="SearchHomeFilterMobile__reset"
              @click.prevent="clearAll()"
            >
              Reset all
            </button>

            <AppButton
              v-if="!disabledButton"
              text="Apply Filters"
              color="pink"
              :disabled="disabledButton || searchHomeLoading"
              @click.native.prevent="onSubmit()"
            />

            <button
              v-else
              class="SearchHomeFilterMobile__loading"
              :disabled="true"
            >
              <AppLoader :height="24" :width="24" />
            </button>
          </div>

          <div class="SearchHomeFilterMobile__hide">
            <div
              class="SearchHomeFilterMobile__show"
            >
              <button
                :class="{
                  'SearchHomeFilterMobile__more': showMore,
                  'SearchHomeFilterMobile__fewer': !showMore,
                }"
                @click.prevent="showMore = !showMore"
              >
                <template v-if="!showMore">
                  More Filters

                  <font-awesome-icon
                    :icon="['fas', 'chevron-down']"
                  />
                </template>

                <template v-else>
                  Fewer Filters

                  <font-awesome-icon
                    :icon="['fas', 'chevron-up']"
                  />
                </template>
              </button>
            </div>

            <div
              v-if="tableView"
              class="SearchHomeFilterMobile__map"
            >
              <label class="SearchHomeFilterMobile__map-label">
                Map:
              </label>

              <div
                class="SearchHomeFilterMobile__map-toggle"
                :class="{
                  'SearchHomeFilterMobile__map-toggle--active': activeMap,
                }"
              >
                <button
                  class="SearchHomeFilterMobile__map-button"
                  :class="{
                    'SearchHomeFilterMobile__map-button--active': activeMap,
                  }"
                  @click.prevent="setActiveMap()"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import queryString from 'query-string'

export default {
  props: {
    search: {
      type: Object,
      default: () => {},
    },

    isMap: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      showMore: false,
      activeMap: false,
      tableView: true,

      disabledButton: false,
      isAuthor: false,

      location: null,

      priceFrom: 0,
      priceTo: 0,

      sort_by: 'listdate',

      bedsIndex: 0,
      bathsIndex: 0,

      tags: [],

      selectedTagsType: [],
      selectedTagsLocation: [],
      selectedTagsPrice: [],
    }
  },

  computed: {
    ...mapGetters({
      metaData: 'search-home/metaData',
      searchHomeLoading: 'search-home/searchHomeLoading',
    }),

    allTags () {
      const tagsArr = this.tags

      return tagsArr
    },
  },

  created () {
    if (this.$route.query.q) {
      this.location = this.$route.query.q
    } else if (this.$route.query.counties) {
      this.location = this.$route.query.counties
    } else if (this.$route.query.postalCode) {
      this.location = this.$route.query.postalCode
    } else if (this.$route.query.features) {
      this.location = this.$route.query.features
    } else if (this.$route.query.neighborhoods) {
      this.location = this.$route.query.neighborhoods
    } else if (this.$route.query.cities) {
      this.location = this.$route.query.cities
    }
    if (this.$route.query.baths) {
      this.bathsIndex = this.$route.query.baths
    }
    if (this.$route.query.beds) {
      this.bedsIndex = this.$route.query.beds
    }
    if (this.$route.query.minprice) {
      this.priceFrom = this.$route.query.minprice
    }
    if (this.$route.query.maxprice) {
      this.priceTo = this.$route.query.maxprice
    }
    if (this.$route.query.type) {
      this.selectedTagsType = this.$route.query.type
    }
    if (this.$route.query.agent) {
      this.isAuthor = true
    }
    if (this.$route.query.sort) {
      this.sort_by = this.$route.query.sort
    }

    this.changePrice()
    this.searchLocation()
    this.tags = [...this.selectedTagsType, ...this.selectedTagsPrice, ...this.selectedTagsLocation]
  },

  methods: {
    ...mapActions({
      getSearchHome: 'search-home/getSearchHome',
      getSearchHomeByAuthor: 'search-home/getSearchHomeByAuthor',
      getMetaDataListing: 'search-home/getMetaDataListing',
    }),

    checkIsAuthor () {
      this.isAuthor = !this.isAuthor
      // this.onSubmit()
      // this.$emit('checkIsAuthor', this.isAuthor)
    },

    setActiveMap () {
      this.activeMap = !this.activeMap

      this.$emit('changeMap', this.activeMap)
    },

    changeView () {
      this.tableView = !this.tableView

      this.$emit('changeView', this.tableView)
    },

    searchLocation () {
      if (this.location && !this.selectedTagsLocation.includes(this.location)) {
        this.selectedTagsLocation.push(this.location)
      }
    },

    selectType (event, item) {
      if (event.target.checked) {
        this.selectedTagsType.push(item)
      } else {
        const index = this.selectedTagsType.indexOf(item)

        this.selectedTagsType.splice(index, 1)
      }

      this.selectedTagsType = this.selectedTagsType.filter(Boolean)
    },

    deleteTag (index) {
      if (this.tags.includes(this.location)) {
        this.location = ''
      }

      this.tags.splice(index, 1)
    },

    changePrice () {
      if (this.priceFrom !== 0 && this.priceTo !== 0) {
        let priceFrom = 0
        let priceTo = 0

        if (this.priceFrom >= 1e3 && this.priceFrom < 1e6) {
          priceFrom = (this.priceFrom / 1e3) + 'K'
        }

        if (this.priceFrom >= 1e6 && this.priceFrom < 1e9) {
          priceFrom = (this.priceFrom / 1e6) + 'M'
        }

        if (this.priceTo >= 1e3 && this.priceTo < 1e6) {
          priceTo = (this.priceTo / 1e3) + 'K'
        }

        if (this.priceTo >= 1e6 && this.priceTo < 1e9) {
          priceTo = (this.priceTo / 1e6) + 'M'
        }
        const price = `$${priceFrom} - $${priceTo}`

        this.selectedTagsPrice.push(price)
      }
    },

    decreaseBeds () {
      if (this.bedsIndex > 1) {
        this.bedsIndex = this.bedsIndex - 1
      }
    },

    increaseBeds () {
      if (this.search.form.beds.list.length - 1 > this.bedsIndex) {
        this.bedsIndex = this.bedsIndex + 1
      }
    },

    decreaseBaths () {
      if (this.bathsIndex > 1) {
        this.bathsIndex = this.bathsIndex - 1
      }
    },

    increaseBaths () {
      if (this.search.form.baths.list.length - 1 > this.bathsIndex) {
        this.bathsIndex = this.bathsIndex + 1
      }
    },

    clearAll () {
      this.location = null
      this.priceFrom = 0
      this.priceTo = 0
      this.bedsIndex = 0
      this.bathsIndex = 0
      this.tags = []
      this.selectedTagsType = []
      this.selectedTagsLocation = []
      this.selectedTagsPrice = []
      this.isAuthor = false
    },

    async onSubmit () {
      this.disabledButton = true
      await this.getMetaDataListing()

      this.changePrice()
      this.searchLocation()
      this.tags = [...this.selectedTagsType, ...this.selectedTagsPrice, ...this.selectedTagsLocation]

      const searchHome = {}

      if (this.bedsIndex && this.bedsIndex > 0) {
        searchHome.beds = this.bedsIndex
      }

      if (this.bathsIndex && this.bathsIndex > 0) {
        searchHome.baths = this.bathsIndex
      }

      if (this.location && /^\d+$/.test(this.location)) {
        searchHome.postalCode = this.location
      }

      if (
        this.location &&
        !this.metaData.metadata.fields.cities.includes(this.location) &&
        !this.metaData.metadata.fields.features.includes(this.location) &&
        !this.metaData.metadata.fields.neighborhoods.includes(this.location) &&
        !this.metaData.metadata.fields.counties.includes(this.location) &&
        !/^\d+$/.test(this.location)
      ) {
        searchHome.q = this.location
      }

      if (this.location && this.metaData.metadata.fields.cities.includes(this.location)) {
        searchHome.cities = this.location
      }

      if (this.location && this.metaData.metadata.fields.features.includes(this.location)) {
        searchHome.features = this.location
      }

      if (this.location && this.metaData.metadata.fields.neighborhoods.includes(this.location)) {
        searchHome.neighborhoods = this.location
      }

      if (this.location && this.metaData.metadata.fields.counties.includes(this.location)) {
        searchHome.counties = this.location
      }

      if (this.sort_by) {
        searchHome.sort = this.sort_by
      }

      if (this.priceTo) {
        searchHome.maxprice = this.priceTo
      }

      if (this.selectedTagsType.length > 0) {
        searchHome.type = this.selectedTagsType
      }

      if (this.priceFrom) {
        searchHome.minprice = this.priceFrom
      }

      if (this.isAuthor) {
        searchHome.agent = 'claw'
      }

      searchHome.page = '1'

      const queryParams = queryString.stringify(searchHome, { arrayFormat: 'bracket' })

      this.$router.push({
        path: this.$route.path,
        query: searchHome,
      })

      // this.selectedTagsType = []
      this.selectedTagsPrice = []
      this.selectedTagsLocation = []

      try {
        // if (!this.isAuthor) {
        await this.getSearchHome(queryParams)
        // } else {
        //   await this.getSearchHomeByAuthor(queryParams)
        // }
      } catch (err) {
        console.log(err)
      }

      this.disabledButton = false
      window.localStorage.setItem('previous-search-url', window.location.href)
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .SearchHomeFilterMobile {
    position: relative;
    padding: 40px 0 10px 0;

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 130%;
      background: $lightest-blush;
    }

    &__content {
      position: relative;
      z-index: 222;
    }

    &__subtitle {
      padding: 40px 0 35px 0;
    }

    &__text {
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      padding-bottom: 15px;
    }

    &__form {
      display: flex;
      flex-direction: column;
    }

    &__location {
      position: relative;
      margin-bottom: 30px;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 30px;

      &-item {
        background: #F2F2F2;
        border-radius: 20px;
        padding: 2px 5px;
        height: fit-content;
        display: flex;
        align-items: center;

        &:not(:last-of-type) {
          margin-right: 10px;
        }
      }

      &-icon {
        color: #4F4F4F;
        cursor: pointer;
      }

      &-text {
        padding-left: 5px;
        font-weight: 600;
        font-size: 12px;
        line-height: 175%;
        color: #4F4F4F;
      }
    }

    &__label {
      margin-bottom: 15px;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      color: #1F2021;
    }

    &__input {
      width: 100%;
      background: #FFFDFC;
      border: 2px solid #DDDDDD;
      box-sizing: border-box;
      outline: none;
      border-radius: 24px;
      padding: 13px 22px;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      color: #747B7E;
    }

    &__search {
      position: absolute;
      bottom: 2px;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      max-width: 46px;
      max-height: 46px;
      height: 100%;
      width: 100%;
      background: $darkest-pink;
      border-radius: 24px;

    }

    &__sort {
      margin-bottom: 30px;

      &-select {
        padding: 13px 22px;
        width: 100%;
        outline: none;
        background: #FFFDFC;
        border: 2px solid #DDDDDD;
        border-radius: 24px;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #747B7E;

        appearance: none;
      }
    }

    &__view {
      display: none;
      padding-bottom: 9px;

      &-label {
        padding-right: 10px;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #747B7E;
        margin: 0;
      }

      &-icon {
        color: #DDDDDD;

        &--active {
          color: $color-primary;
        }
      }
    }

    &__hide {
      display: flex;
      justify-content: space-between;
    }

    &__map {
      display: flex;
      position: relative;
      min-width: 100px;

      &-label {
        margin: 0;
        display: flex;
        align-items: center;
        padding-right: 10px;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #747B7E;
      }

      &-toggle {
        position: relative;
        background: rgba(120, 120, 128, 0.32);
        padding: 2px;
        height: 31px !important;
        max-width: 51px;
        width: 100%;
        border-radius: 25px;

        &--active {
          background: #32D74B;
        }
      }

      &-button {
        position: absolute;
        max-width: 27px;
        max-height: 27px;
        width: 100%;
        height: 100%;
        left: calc(50% - 27px/2 - 10px);
        top: calc(50% - 27px/2);
        outline: none;
        border: none;
        border-radius: 50%;
        background: #FFFFFF;
        border: 0.5px solid rgba(0, 0, 0, 0.04);
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);

        &--active {
          left: calc(50% - 27px/2 + 10px);
          top: calc(50% - 27px/2);
        }
      }
    }

    &__type {
      margin-bottom: 30px;

      &-checkbox {
        width: 50%;
      }
    }

    &__list {
      width: 100%;
    }

    &__price {
      margin-bottom: 30px;

      &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-select {
        padding: 11px 4px 11px 18px;
        width: 40%;
        background: #FFFDFC;
        border: 2px solid #DDDDDD;
        border-radius: 32px;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #747B7E;

        appearance: none;
      }
    }

    &__to {
      padding: 0 12px;
      font-weight: normal;
      font-size: 17px;
      line-height: 20px;
      color: #747B7E;
    }

    // &__beds {
    // }

    &__beds, &__baths {
      position: relative;
      margin-bottom: 30px;

      &-button {
        position: absolute;
        bottom: 0;
        background: #FFFDFC;
        border: 2px solid #DDDDDD;
        border-radius: 31px;
        max-width: 42px;
        max-height: 42px;
        width: 100%;
        height: 100%;
        font-weight: normal;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        outline: none;

        &:first-of-type {
          left: 0;
        }

        &:last-of-type {
          right: 0;
        }
      }

      &-select {
        padding: 10px 50px;
        outline: none;
        background: #FFFDFC;
        border: 2px solid #DDDDDD;
        border-radius: 31px;
        appearance: none;
        width: 100%;
        font-size: 14px;
        line-height: 140%;
        color: #747B7E;
        text-align: center;
        text-align-last: center;

        option {
          text-align: center;
        }
      }
    }

    // &__baths {
    // }

    // &__show {
    // }

    &__more {
      background: none;
      outline: none;
      border: none;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      text-decoration-line: underline;
      color: $darkest-pink;
    }

    &__fewer {
      background: none;
      outline: none;
      border: none;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      text-decoration: underline;
      color: #747B7E;
    }

    &__submit {
      display: flex;
      justify-content: space-around;
      margin-bottom: 30px;
    }

    &__reset {
      padding: 0 20px;
      font-weight: normal;
      background: none;
      outline: none;
      border: none;
      font-size: 16px;
      line-height: 140%;
      text-decoration-line: underline;
      color: #747B7E;
    }

    &__loading {
      width: 200px;
      position: relative;
      border: none;
      outline: none;
      transition: all .2s;
      border-radius: 24px;
      padding: 12px 44px;
      background: $darkest-pink;

      &:disabled {
        pointer-events: none;
        opacity: 0.5;
      }
    }
  }
</style>
