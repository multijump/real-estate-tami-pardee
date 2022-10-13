<template>
  <section class="SearchHomeListingsList">
    <div class="container">
      <div class="SearchHomeListingsList__line" />

      <template>
        <div
          v-if="searchHomeLoading"
          class="SearchHomeListingsList__loading"
        >
          <AppLoader />
        </div>

        <div class="SearchHomeListingsList__content">
          <SearchHomeListingsListCard
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
    }
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

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .SearchHomeListingsList {
    position: relative;
    padding: 60px 0 80px 0;

    &__line {
      margin-bottom: 60px;
      height: 1px;
      background: #C4C4C4;
      z-index: 11;
    }

    &__content {
      position: relative;
      z-index: 2;
      padding-bottom: 80px;
      display: grid;
      grid-gap: 56px;
      grid-template-rows: minmax(150px, 1fr);
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
  }
</style>
