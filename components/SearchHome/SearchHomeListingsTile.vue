<template>
  <section class="SearchHomeListingsTile">
    <div class="SearchHomeListingsTile__bg" />

    <div
      class="container"
    >
      <div class="SearchHomeListingsTile__line" />

      <template v-if="isAuthor">
        <div
          v-if="searchHomeByAuthorLoading"
          class="SearchHomeListingsTile__loading"
        >
          <AppLoader />
        </div>

        <div class="SearchHomeListingsTile__content">
          <SearchHomeListingsTileCardAuthor
            v-for="(item, index) in listing.properties_data"
            :key="index"
            :item="item"
          />
        </div>

        <paginate
          v-if="listing.pagination.total_pages > 0"
          v-model="activePage"
          :page-count="listing.pagination.total_pages"
          :page-range="3"
          :margin-pages="$device.isMobile ? 0 : 1"
          :click-handler="navigateToPageAuthor"
          :prev-text="'‹  Prev'"
          :next-text="'Next  ›'"
          :first-last-button="true"
          first-button-text="«  First"
          last-button-text="Last  »"
          last-button-class="class"
          first-button-class="class"
          :container-class="'pagination'"
          active-class="page-item--active"
          page-link-class="page-item"
          :no-li-surround="true"
          prev-link-class="page-item text-item"
          next-link-class="page-item text-item"
        />
      </template>

      <template v-else>
        <div
          v-if="searchHomeLoading"
          class="SearchHomeListingsTile__loading"
        >
          <AppLoader />
        </div>

        <div class="SearchHomeListingsTile__content">
          <SearchHomeListingsTileCard
            v-for="(item, index) in listing.propertiessearch"
            :key="index"
            :item="item"
          />
        </div>

        <paginate
          v-if="listing.pagination.total_pages > 0"
          v-model="activePage"
          :page-count="listing.pagination.total_pages"
          :page-range="3"
          :margin-pages="$device.isMobile ? 0 : 1"
          :click-handler="navigateToPage"
          :prev-text="'‹  Prev'"
          :next-text="'Next  ›'"
          :first-last-button="true"
          first-button-text="«  First"
          last-button-text="Last  »"
          last-button-class="class"
          first-button-class="class"
          :container-class="'pagination'"
          active-class="page-item--active"
          page-link-class="page-item"
          :no-li-surround="true"
          prev-link-class="page-item text-item"
          next-link-class="page-item text-item"
        />
      </template>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import queryString from 'query-string'

export default {

  props: {
    listing: {
      type: Object,
      default: () => {},
    },

    isAuthor: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      currentPage: 1,
    }
  },

  computed: {
    ...mapGetters({
      searchHomeLoading: 'search-home/searchHomeLoading',
      searchHomeByAuthorLoading: 'search-home/searchHomeByAuthorLoading',
    }),

    activePage: {
      get () {
        return (this.$route.query.page === '1') ? 1 : this.currentPage
      },

      set (val) {
        this.currentPage = val
      }
    },
  },

  mounted () {
    if (this.$route.query.page) {
      this.currentPage = Number(this.$route.query.page)
    }

    this.navigateToPage(this.currentPage)
  },

  methods: {
    ...mapActions({
      getSearchHome: 'search-home/getSearchHome',
      getSearchHomeByAuthor: 'search-home/getSearchHomeByAuthor',
    }),

    navigateToPage (pageNumber) {
      const pagination = { ...this.$route.query }

      pagination.page = pageNumber.toString()

      this.$router.push({
        path: this.$route.path,
        query: pagination,
      })

      const queryParams = queryString.stringify(pagination)

      try {
        this.getSearchHome(queryParams)
      } catch (err) {
        console.log(err)
      }
    },

    navigateToPageAuthor (pageNumber) {
      const pagination = { ...this.$route.query }

      pagination.page = pageNumber.toString()

      this.$router.push({
        path: this.$route.path,
        query: pagination,
      })

      const queryParams = queryString.stringify(pagination)

      try {
        this.getSearchHomeByAuthor(queryParams)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/styles/common/variables.scss";

  .SearchHomeListingsTile {
    position: relative;
    padding: 10px 0 80px 0;

    &__line {
      margin-bottom: 60px;
      height: 1px;
      background: #C4C4C4;
      z-index: 11;
    }

    &__bg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      max-height: 400px;
      height: 100%;
      background: $lightest-blush;
    }

    &__content {
      position: relative;
      z-index: 2;
      padding-bottom: 80px;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: minmax(200px, 1fr);
    }

    &__loading {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: 100;
      background: rgba($color: #F2F2F2, $alpha: 0.4);
    }

    @media (min-width: $medium-devices-width) {
      padding: 10px 0 130px 0;

      &__content {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr);
      }
    }

    @media (min-width: $large-devices-width) {
      &__content {
        grid-gap: 40px;
        grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr);
      }
    }
  }

  .pagination {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    position: relative;
    z-index: 2;
    justify-content: center;
  }

  .text-item {
    display: none;
  }

  .page-item {
    padding: 8px 12px;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    text-decoration-line: underline;
    color: #073C5C;
    border-radius: 6px;
    background: transparent;
    border: none;
    outline: none;
    transition: background .3s ease;

    &--active {
      background: $darkest-pink;
      color: #FFFFFF;
    }

    &:hover {
      background: #F2F2F2;
      color: #073C5C;
    }

    &:focus {
      @include focus-blue;
    }
  }

  @media (min-width: $small-devices-width) {
    .page-item {
      padding: 12px 16px;
    }

    .text-item {
      display: block;
    }
  }
</style>
