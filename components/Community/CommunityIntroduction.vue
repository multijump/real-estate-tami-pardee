<template>
  <section class="CommunityIntroduction">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <AppSectionTitle
            :title="introduction.section_heading"
            :lead="introduction.comm_description"
            color="blue"
          />
        </div>
        <div class="col-12 col-md-4 offset-md-2">
          <div
            v-if="stats"
            class="CommunityIntroduction__wrapper"
          >
            <div
              v-for="(item, index) in list"
              :key="index"
              class="CommunityIntroduction__item"
            >
              <font-awesome-icon
                class="HomeNewListing__star fa-2x"
                :icon="iconItem(index)"
              />

              <p class="CommunityIntroduction__text">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    introduction: {
      type: Object,
      default: () => {},
    },
    stats: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      list: [
        { text: this.stats.Population, icon: this.stats.Population_icon },
        { text: this.stats.Population_Density, icon: this.stats.Population_Density_icon },
        { text: this.stats.Median_income, icon: this.stats.Median_income_icon },
        { text: this.stats.Area, icon: this.stats.Area_icon },
      ]
    }
  },

  methods: {
    iconItem (index) {
      const icon = this.list[index].icon.replace(/fa-(.*)/, '$1').split(' ')

      return icon
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityIntroduction {
    position: relative;
    padding: 80px 0 150px 0;

    &__wrapper {
      padding-top: 40px;
    }

    &__item {
      display: flex;
      align-items: center;

      &:not(:last-of-type) {
        padding-bottom: 30px;
      }
    }

    &__text {
      margin-left: 15px;
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: #1F2021;
    }

    @media (min-width: $small-devices-width) {
      &__wrapper {
        padding-top: 90px;
      }
    }
  }
</style>
