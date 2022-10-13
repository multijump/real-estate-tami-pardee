<template>
  <div class="PropertyShowingCard">
    <img
      class="PropertyShowingCard__image"
      src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
      alt="image"
    >

    <div class="PropertyShowingCard__content">
      <div class="PropertyShowingCard__wrapper">
        <div
          v-if="card.star_rating"
          class="PropertyShowingCard__rating"
        >
          <star-rating
            :rating="card.star_rating"
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

          <span class="PropertyShowingCard__count">({{ card.post_title }})</span>
        </div>

        <h3
          v-if="card.post_title"
          class="PropertyShowingCard__title"
        >
          {{ card.post_title }}
        </h3>

        <p
          v-if="card.title"
          class="PropertyShowingCard__job"
        >
          {{ card.title }}
        </p>
      </div>

      <div class="PropertyShowingCard__icons">
        <div
          v-for="(icon, index) in icons"
          :key="index"
          class="PropertyShowingCard__item"
        >
          <AppIcons
            v-if="card.phone || card.email"
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
    card: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      icons: [
        {
          icon: this.card.phone_icon,
          url: `tel:${this.card.phone}`
        },
        {
          icon: this.card.email_icon,
          url: `mailto:${this.card.email}`
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PropertyShowingCard {
    position: relative;
    max-height: 470px;
    height: 100%;
    background: #FFFDFC;
    display: flex;
    flex-direction: column;
    box-shadow: 0px -1px 20px rgba(0, 0, 0, 0.25);

    &__image {
      max-height: 200px;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &__content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 24px;
      background: #F2F2F2;
      height: 100%;
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
      color: white;
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
