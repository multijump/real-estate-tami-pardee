<template>
  <div class="AppFooter">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-2 d-flex justify-content-center">
          <AppLogo :logo="footer['footer-logo']" />
        </div>

        <div
          role="region"
          aria-label="Footer Menu"
          class="col-12 offset-md-1 col-md-4"
        >
          <AppMenuList :list="footer.footer_menu" />
        </div>

        <div class="col-12 col-md-5 d-flex align-items-center">
          <div
            role="region"
            aria-label="Footer Contact"
            class="AppFooter__contact"
          >
            <AppContact
              :contacts="footer.footer_contact_menu"
              type="large"
            />
          </div>
        </div>

        <img
          class="AppFooter__star"
          src="~/assets/images/star-logo.png"
          alt="Footer Background Image"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    footer: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppFooter {
    position: relative;
    padding: 40px 0 140px;
    background: #003B5C;
    overflow: hidden;

    &__star {
      position: absolute;
      bottom: -5px;
      transform: translateX(-50%);
      left: 50%;
    }

    &__contact {
      width: 100%;
    }

    @media (min-width: $medium-devices-width) {
      padding: 40px 0;

      &__star {
        position: absolute;
        transform: translateX(0);
        top: -10px;
      }
    }
  }
</style>
