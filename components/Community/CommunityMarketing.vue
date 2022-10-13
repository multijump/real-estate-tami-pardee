<template>
  <section class="CommunityMarketing">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
          <div class="CommunityMarketing__title">
            <AppSectionTitle
              :title="marketing.section_heading"
            />
          </div>
        </div>

        <div class="col-12 col-md-7 d-flex align-items-center justify-content-end h-80">
          <AppTabsList
            v-if="Array.isArray(marketing.tabbed_content)"
            id="tabMarketingItems"
            ref="marketingList"
            :list="marketing.tabbed_content"
            :active-item="activeItem"
            color="pink"
            @changeTab="changeTab"
          />

          <div class="CommunityMarketing__fixed">
            <ArrowNextImage
              class="CommunityMarketing__arrow"
              @click.prevent="nextTab"
            />
          </div>
        </div>
      </div>

      <div class="row pt-lg-50">
        <div class="col-12 col-lg-8 pt-sm-20">
          <CommunityMarketingTable
            v-if="marketing.tabbed_content[activeItem - 1]"
            :headings="table.headings"
            :data="marketing.tabbed_content[activeItem - 1].tab_data"
          />
        </div>
        <div class="col-12 col-lg-4 pt-sm-20">
          <div
            v-for="(item, index) in marketing.tabbed_content"
            v-show="activeItem === index + 1"
            :key="index"
            class="CommunityMarketing__wrapper"
            :class="{ 'CommunityMarketing__wrapper--active': activeItem === index + 1 }"
          >
            <div class="CommunityMarketing__item">
              <img
                :src="item.tab_image"
                class="CommunityMarketing__image"
                alt=""
              >

              <div
                class="CommunityMarketing__action"
              >
                <AppButton
                  color="pink"
                  type="small"
                  :text="item.tab_download_button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowNextImage from '~/assets/images/arrow-down-pink.svg?inline'

export default {
  components: {
    ArrowNextImage,
  },

  props: {
    marketing: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      activeItem: 1,

      table: {
        headings: [
          { title: '', field: 'title' },
          { title: 'Active', field: 'active' },
          { title: 'in Escrow', field: 'in_escrow' },
          { title: 'Sold - Past 6 month', field: 'sold_past_6months' }
        ],
      }
    }
  },

  methods: {
    changeTab (tab) {
      this.activeItem = tab
    },

    nextTab () {
      if (this.marketing.tabbed_content.length > this.activeItem) {
        this.activeItem += 1
      } else {
        this.activeItem = 1
      }

      const list = this.$refs.marketingList.$el

      const element = list.getElementsByClassName('AppTabsListItem')[this.activeItem - 1]

      this.$scrollTo(element, 300, {
        container: '#tabMarketingItems',
        easing: 'ease-in',
        lazy: false,
        offset: -60,
        force: true,
        cancelable: true,
        x: true,
        y: false
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityMarketing {
    position: relative;
    padding: 80px 0;

    &__title {
      text-align: center;
    }

    &__fixed {
      position: absolute;
      top: 26px;
      right: -2px;
      background: linear-gradient(90deg, rgba(255, 253, 252, 0) 0%, #FFFDFC 50%);

      width: 100px;
      height: 40px;
    }

    &__arrow {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 15px;
      transform: rotate(-90deg);
    }

    &__item {
      position: relative;
    }

    &__image {
      width: 100%;
      min-height: 320px;
      height: 100%;
      object-fit: cover;
    }

    &__action {
      width: 100%;
      position: absolute;
      bottom: 24px;
      display: flex;
      justify-content: center;
    }

    @media (min-width: $large-devices-width) {
      &__title {
        text-align: left;
      }

      &__action {
        position: relative;
        background: #F2F2F2;
        padding: 24px 0;
        display: flex;
        justify-content: center;
      }
    }

    @media (min-width: $extra-large-devices-width) {
      &__fixed {
        display: none;
      }
    }
  }
</style>
