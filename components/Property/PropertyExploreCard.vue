<template>
  <div class="PropertyExploreCard">
    <div class="PropertyExploreCard__block">
      <h2 class="PropertyExploreCard__name">
        {{ card.neighborhood_title }}
      </h2>

      <h3 class="PropertyExploreCard__description">
        {{ card.neighborhood_description }}
      </h3>

      <div class="PropertyExploreCard__info">
        <div
          v-for="(item, index) in card.neighborhood_tags"
          :key="index"
          class="PropertyExploreCard__info-item"
        >
          <p>{{ item.tags }}</p>
        </div>
      </div>
    </div>

    <div class="PropertyExploreCard__map d-none d-lg-block">
      <img :src="card.neighborhood_map" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PropertyExploreCard {
    position: relative;
    background: #FFFDFC;
    width: 100%;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

    &__block {
      padding: 26px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
    }

    &__name {
      font-weight: bold;
      font-size: 28px;
      line-height: 120%;
      padding-bottom: 2px;
    }

    &__description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 120%;
      color: #000000;
    }

    &__info {
      display: flex;
      padding-top: 30px;

      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #F2F2F2;
        border-radius: 20px;

        p {
          padding: 2px 5px;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 140%;
          color: #4F4F4F;
        }

        &:not(:last-of-type) {
          margin-right: 10px;
        }
      }
    }

    &__map {
      img {
        max-height: 280px;
      }
    }

    @media (min-width: $large-devices-width) {
      position: absolute;
      bottom: 0;
      right: 6%;
      max-width: 715px;

      &__block {
        max-width: 435px;
      }
    }
  }
</style>
