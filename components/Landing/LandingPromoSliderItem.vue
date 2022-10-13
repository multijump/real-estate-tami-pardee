<template>
  <swiper-slide>
    <div class="LandingPromoSliderItem">
      <div class="LandingPromoSliderItem__bg--bottom" />

      <img
        v-if="item.image.url"
        class="img--bg"
        :src="item.image.url"
        :alt="item.title"
      >

      <div class="LandingPromoSliderItem__content container">
        <AppSectionTitle
          :display="item.pre_title"
          :title="item.title"
          :lead="item.subtitle"
          color="white"
        />

        <div class="LandingPromoSliderItem__actions">
          <AppLinkButton
            color="pink"
            type="small"
            :text="item.cta_buttons[0].link.title"
            :navigate-to="item.cta_buttons[0].link.url"
            :aria-label="item.cta_buttons[0].link.title"
          />

          <AppLink
            :text="item.cta_buttons[1].link.title"
            :navigate-to="item.cta_buttons[1].link.url"
            :aria-label="item.cta_buttons[1].link.title"
            color="white"
            style="padding-top: 8px"
          />
        </div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    redirect () {
      window.open(`${this.item.cta_buttons[0].link.url}`, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LandingPromoSliderItem {
    position: relative;
    width: 100%;
    max-height: 660px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    background: $grey;

    &__bg--bottom {
      display: none;
    }

    &__content {
      position: relative;
      display: flex;
      flex-direction: column;
      z-index: 3;
      padding: 25px 25px 50px;
      width: 100%;
    }

    &__actions {
      padding-top: 22px;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
    }

    @media (min-width: $medium-devices-width) {
      &__bg--bottom {
        display: block;
        position: absolute;
        left: 0%;
        bottom: 0;
        width: 100%;
        max-height: 70%;
        height: 100%;
        background: linear-gradient(180deg, rgba(31, 32, 33, 0) 0%, rgba(31, 32, 33, 0.8) 100%);
        z-index: 2;
      }

      &__actions {
        padding: 0;
      }

      &__content {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
</style>
