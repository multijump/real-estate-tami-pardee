<template>
  <section class="AboutUsWhoWeAre">
    <div class="container">
      <h2 class="AboutUsWhoWeAre__heading">
        {{ whoWeAre.section_headline }}
      </h2>

      <div class="row">
        <div
          v-for="(item, index) in whoWeAre.icons"
          :key="index"
          class="col-12 col-sm-6 col-md-4"
        >
          <div class="AboutUsWhoWeAre__block">
            <div>
              <img
                v-if="item.icon"
                :src="item.icon"
                :alt="item.title"
              >
            </div>
            <h3 class="AboutUsWhoWeAre__title">
              {{ item.title }}
            </h3>

            <p class="AboutUsWhoWeAre__description">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    whoWeAre: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AboutUsWhoWeAre {
    position: relative;
    padding: 40px 0;

    &__heading {
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #226492;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
    }

    &__block {
      text-align: center;
      margin-bottom: 20px;

      img {
        width: 55px;
        height: 55px;
        margin-bottom: 20px;
      }
    }

    &__title {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
    }

    &__description {
      font-weight: 300;
      line-height: 1.5;
      font-size: 18px;
      color: $grey;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__heading {
        font-size: 40px;
      }

      &__title {
        font-size: 28px;
      }
    }
  }
</style>
