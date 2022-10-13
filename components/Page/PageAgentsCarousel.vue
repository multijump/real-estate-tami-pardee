<template>
  <section class="PageAgentsCarousel">
    <div class="PageAgentsCarousel__bg" />
    <AppSectionTitle
      :title="content.section_title"
      class="text-center"
    />

    <div>
      <div class="PageAgentsCarousel__tabs">
        <AppTabsList
          :list="tabItems"
          :active-item="activeItem"
          color="peach"
          :min-width="36"
          @changeTab="changeTab"
        />
      </div>

      <AppAgentsSlider
        :list="activeSlider"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      tabs: [
        this.content.buyers_agent_tab_title,
        this.content.leasing_agents_tab_title,
        this.content.listing_agents_tab_title
      ],

      activeItem: 1,
    }
  },

  computed: {
    activeSlider () {
      if (this.activeItem === 1) {
        return this.content.featured_buyers_agents
      } if (this.activeItem === 2) {
        return this.content.featured_leasing_agents
      }

      return this.content.featured_listing_agents
    },

    tabItems () {
      const tabs = this.tabs.map((item) => {
        return {
          tab_label: item,
        }
      })

      return tabs
    }
  },

  methods: {
    changeTab (tab) {
      this.activeItem = tab
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageAgentsCarousel {
    position: relative;
    padding: 80px 25px;

    &__bg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60%;
      background: $main-blush;
    }

    @media (min-width: $medium-devices-width) {
      &__tabs {
        width: fit-content;
      }
    }

    @media (min-width: $large-devices-width) {
      padding: 140px 0 140px 135px;
    }
  }
</style>
