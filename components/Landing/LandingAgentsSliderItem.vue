<template>
  <div class="LandingAgentsSliderItem">
    <img
      class="LandingAgentsSliderItem__image"
      :src="item.image_url"
      :alt="`${item.post_title}'s Photo`"
    >

    <span
      v-if="item.specialization_tag"
      class="LandingAgentsSliderItem__tag"
    >
      {{ item.specialization_tag }}
    </span>

    <div class="LandingAgentsSliderItem__content">
      <div class="LandingAgentsSliderItem__wrapper">
        <div class="LandingAgentsSliderItem__rating">
          <star-rating
            :rating="item.star_rating"
            :increment="0.5"
            :star-size="16"
            :border-width="2"
            active-color="#024E79"
            inactive-color="transparent"
            border-color="#024E79"
            :rounded-corners="true"
            :show-rating="false"
            :star-points="[51, 0, 61, 35, 98, 35, 68, 57, 79, 91, 50, 70, 21, 91, 32, 57, 2, 35, 39, 35]"
          />

          <span class="LandingAgentsSliderItem__count">({{ item.star_rating }})</span>
        </div>

        <h3 class="LandingAgentsSliderItem__title">
          {{ item.post_title }}
        </h3>

        <p class="LandingAgentsSliderItem__job">
          {{ item.title }}
        </p>
      </div>

      <div class="LandingAgentsSliderItem__icons">
        <div
          v-for="(icon, index) in item.member_social_icons"
          :key="index"
          class="LandingAgentsSliderItem__item"
        >
          <AppIcons
            :icon="icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LandingAgentsSliderItem {
    position: relative;
    height: 100%;
    background: #FFFDFC;
    display: flex;
    flex-direction: column;
    box-shadow: 0px -1px 20px rgba(0, 0, 0, 0.25);

    &__tag {
      position: absolute;
      top: 24px;
      left: 24px;
      padding: 4px 10px;
      background: #FFFDFC;
      border-radius: 20px;
      font-weight: 600;
      font-size: 12px;
      line-height: 175%;
      color: #1F2021;
    }

    &__image {
      flex: 1;
      width: 100%;
      min-height: 275px;
      object-fit: cover;
    }

    &__content {
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 24px;
    }

    &__rating {
      display: flex;
    }

    &__count {
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      margin-left: 8px;
    }

    &__title {
      font-weight: bold;
      font-size: 28px;
      line-height: 120%;
      color: #1F2021;
      padding-top: 10px;
    }

    &__job {
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: #1F2021;
      padding-top: 12px;
    }

    &__icons {
      display: flex;
      flex-direction: row;
      min-height: 46px;
    }

    &__item {
      max-height: 46px;
      max-width: 46px;
      height: 100%;
      width: 100%;
      opacity: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: $darkest-pink;
      transition: opacity .3s ease;

      &:not(:last-of-type)  {
        margin-right: 14px;
      }

      &:hover {
        opacity: 0.4;
      }
    }
  }
</style>
