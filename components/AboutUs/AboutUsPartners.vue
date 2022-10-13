<template>
  <section class="AboutUsPartners">
    <div class="container">
      <h3
        v-if="partners.section_headline"
        class="AboutUsPartners__title"
      >
        {{ partners.section_headline }}
      </h3>

      <div
        v-if="partners.text"
        class="AboutUsPartners__images"
        v-html="partners.text"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    partners: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AboutUsPartners {
    padding: 40px;
    background: $color-primary;
    color: #fff;

    &__title {
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      padding-bottom: 20px;
    }

    &__images {
      &::v-deep p {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        text-align: center !important;

        a {
          padding: 10px 22px;
          margin: auto;
          text-transform: uppercase;
          font-weight: 400;
          color: #FFFDFC;
          text-align: center;
          border: none;
          outline: none;
          transition: all .2s;
          border-radius: 24px;
          background: $darkest-pink;
          text-decoration: none;
          opacity: 1;
          transition: opacity .3s ease;

          &:hover {
            opacity: .75;
          }
        }
      }
    }

    @media (min-width: $small-devices-width) {
      &__images {
        &::v-deep p {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          text-align: center !important;

          a {
            margin: auto;
          }
        }
      }
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 40px;
      }
    }
  }
</style>
