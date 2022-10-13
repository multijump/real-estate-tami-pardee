<template>
  <div class="LandingAgents">
    <div class="LandingAgents__bg" />
    <AppSectionTitle
      :title="agents.section_title"
      class="text-center pb-50"
    />

    <div>
      <div class="LandingAgents__tabs">
        <AppTabsList
          :list="tabItems"
          :active-item="activeItem"
          color="peach"
          :min-width="36"
          @changeTab="changeTab"
        />
      </div>

      <LandingAgentsSlider
        :list="activeSlider"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    agents: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      tabs: [
        this.agents.buyers_agent_tab_title,
        this.agents.leasing_agents_tab_title,
        this.agents.listing_agents_tab_title
      ],

      activeItem: 1,
    }
  },

  computed: {
    activeSlider () {
      if (this.activeItem === 1) {
        return this.agents.featured_buyers_agents
      } if (this.activeItem === 2) {
        return this.agents.featured_leasing_agents
      }

      return this.agents.featured_listing_agents
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

  .LandingAgents {
    position: relative;
    padding: 80px 25px;

    &__bg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
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
