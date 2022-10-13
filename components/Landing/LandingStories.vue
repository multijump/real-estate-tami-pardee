<template>
  <div class="LandingStories">
    <AppSectionTitle
      :title="stories.section_title"
      class="text-center"
    />

    <div class="LandingStories__wrapper">
      <div class="LandingStories__bg" />

      <img
        class="LandingStories__image"
        :src="stories.background_image.url"
        alt="Featured Story Background"
      >

      <div class="container">
        <div class="LandingStories__content">
          <font-awesome-icon
            class="LandingStories__icon"
            fas
            icon="quote-left"
          />

          <h3 aria-label="Story Content" class="LandingStories__title" v-html="stories.quote" />

          <h4 aria-label="Stroy Author" class="LandingStories__client">
            - {{ stories.author }}
          </h4>

          <AppLink
            color="white"
            :text="stories.read_more_link.title"
            :navigate-to="stories.read_more_link.url"
            :aria-label="stories.read_more_link.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stories: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LandingStories {
    position: relative;
    padding-top: 80px;

    &__image {
      width: 100%;
      min-height: 250px;
      object-fit: cover;
    }

    &__wrapper {
      position: relative;
      margin-top: 34px;
      display: block;
      background: $darkest-navy;
    }

    &__icon {
      position: absolute;
      top: -25px;
      font-size: 42px;
      line-height: 48px;
      color: #FFFFFF;
    }

    &__content {
      position: relative;
      padding-top: 25px;
      padding-bottom: 45px;
      color: $white;
    }

    &__title {
      font-weight: bold;
      font-size: 24px;
      line-height: 120%;
      color: #FFFFFF;
      text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
      padding-bottom: 16px;
    }

    &__client {
      display: block;
      padding-bottom: 10px;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      color: #FFFFFF;
    }

     @media (min-width: $medium-devices-width) {
      &__image {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }

      &__bg {
        position: absolute;
        left: 0%;
        bottom: 0;
        width: 50%;
        height: 100%;
        background: linear-gradient(270deg, rgba(31, 32, 33, 0) 0%, rgba(31, 32, 33, 0.8) 100%);
        z-index: 2;
      }

      &__wrapper {
        min-height: 550px;
        margin-top: 42px;
        background: transparent;
        display: flex;
        align-items: center;
      }

      &__content {
        width: 40%;
        z-index: 100;
      }

      &__icon {
        position: relative;
        top: 0;
        padding-bottom: 10px;
      }

      &__title {
        padding-bottom: 24px;
      }
    }
  }
</style>
