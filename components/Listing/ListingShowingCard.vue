<template>
  <div class="ListingShowingCard">
    <img
      class="ListingShowingCard__image"
      :src="getAgentPhoto()"
      alt="image"
    >

    <div class="ListingShowingCard__content">
      <div class="ListingShowingCard__wrapper">
        <div class="ListingShowingCard__rating">
          <star-rating
            :rating="5"
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

          <span class="ListingShowingCard__count">({{ 5 }})</span>
        </div>

        <div
          v-if="card.firstName && card.lastName"
          class="ListingShowingCard__title"
        >
          {{ card.firstName }} {{ card.lastName }}
        </div>

        <p
          class="ListingShowingCard__job"
        >
          {{ getJob() }}
        </p>
      </div>

      <div class="ListingShowingCard__icons">
        <div
          v-for="(icon, index) in getIcons()"
          :key="index"
          class="ListingShowingCard__item"
        >
          <AppIcons
            v-if="card.contact && card.contact.cell || card.contact && card.contact.email"
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

  methods: {
    getAgentPhoto () {
      if (this.card && this.card.photo) {
        return this.card.photo
      }

      return 'https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg'
    },

    getJob () {
      return this.card && this.card.photo ? 'Pardee - Partner' : ''
    },

    getIcons () {
      const icons = []
      if (this.card.contact && this.card.contact.cell) {
        icons.push({
          icon: 'fas fa-phone-alt',
          url: `tel:${this.getPhoneNumber()}`
        })
      }
      if (this.card.contact && this.card.contact.email) {
        icons.push({
          icon: 'fas fa-envelope',
          url: `mailto:${this.card.contact ? this.card.contact.email : ''}`
        })
      }

      return icons
    },

    getPhoneNumber () {
      return this.card.contact.cell && this.card.contact.cell !== '' ? this.card.contact.cell : this.card.contact.office
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .ListingShowingCard {
    position: relative;
    max-height: 470px;
    height: 100%;
    background: #FFFDFC;
    display: flex;
    flex-direction: column;

    &__image {
      max-height: 250px;
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
      margin-top: 16px;
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
