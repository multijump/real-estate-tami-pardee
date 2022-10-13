<template>
  <div class="ListingOpenTime">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 d-none d-md-flex align-items-end">
          <AppLink
            text="Back to Search Results"
            color="grey"
            navigate-to="#"
            @click.native="goToSearchPage"
          />
        </div>

        <div class="col-12 col-md-5 offset-md-3">
          <!-- <AppTabsList
            :list="tabs"
            :active-item="activeItem"
            color="pink"
            size="small"
            :min-width="24"
            @changeTab="changeTab"
          /> -->
        </div>
      </div>

      <!-- <div class="row">
        <div class="col-12">
          <div
            v-for="(item, index) in tabs"
            v-show="activeItem === index + 1"
            :key="index"
            class="ListingOpenTime__block"
          >
            <p class="ListingOpenTime__text">
              {{ item.tab_text }}
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeItem: 1,

      tabs: [
        {
          tab_label: 'Buy this Property',
          tab_text: 'Upcoming Open Houses: Oct. 13, 11am-2pm & Oct. 16, 10am-3pm',
        },
        {
          tab_label: 'Lease this Property',
          tab_text: 'Upcoming Open Houses: Oct. 13, 11am-2pm & Oct. 16, 10am-3pm',
        },
      ]
    }
  },

  methods: {
    changeTab (tab) {
      this.activeItem = tab
    },

    goToSearchPage (e) {
      e.preventDefault()
      const url = window.localStorage.getItem('previous-search-url') ? window.localStorage.getItem('previous-search-url') : '/search-home'
      window.location.href = url
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .ListingOpenTime {
    position: relative;
    padding-top: 20px;

    &__block {
      margin-top: 30px;
      background: $lightest-powder-blue;
      border-radius: 10px;
      padding: 22px 40px;
      text-align: center;
    }

    &__text {
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
    }

    @media (min-width: $medium-devices-width) {
      &__block {
        background: $lightest-powder-blue;
        border-radius: 10px;
        padding: 18px 0;
      }
    }
  }
</style>
