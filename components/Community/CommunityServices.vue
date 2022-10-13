<template>
  <section class="CommunityServices">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <AppSectionTitle
            :title="services.section_heading"
            :lead="services.section_description"
            color="blue"
          />

          <AppButton
            :text="services.learn_more_button.title"
            color="blue"
            class="mt-25"
            @click.native="redirect()"
          />
        </div>

        <div class="col-12 col-md-6">
          <div class="CommunityServices__wrapper">
            <div
              v-for="(item, index) in services.relocation_services"
              :key="index"
              class="CommunityServices__item"
            >
              <font-awesome-icon
                class="HomeNewListing__star fa-2x"
                :icon="iconItem(index)"
              />

              <p class="CommunityServices__text">
                {{ item.title }}
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
    services: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    iconItem (index) {
      const icon = this.services.relocation_services[index].icon.replace(/fa-(.*)/, '$1').split(' ')

      return icon
    },

    redirect () {
      window.open(`${this.services.learn_more_button.url}`, '_blank')
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .CommunityServices {
    position: relative;
    padding: 60px 0;
    background: $background-gray;

    &__wrapper {
      padding-top: 60px;
    }

    &__text {
      margin-left: 15px;
      font-weight: normal;
      word-break: break-word;
      font-size: 16px;
      line-height: 140%;
      color: #1F2021;
    }

    &__item {
      display: flex;
      align-items: center;

      &:not(:last-of-type) {
        padding-bottom: 32px;
      }
    }

    @media (min-width: $small-devices-width) {
      padding: 80px 0;

      &__wrapper {
        padding-top: 40px;
        display: flex;
        flex-wrap: wrap;
      }

      &__item {
        width: 50%;

        &:nth-last-of-type(2n) {
          padding-right: 35px;
        }

        &:nth-last-of-type(-n+2) {
          padding-bottom: 0 !important;
        }
      }
    }
  }
</style>
