<template>
  <section class="PolicyContent">
    <div class="container">
      <h2 class="PolicyContent__title">
        {{ title }}
      </h2>

      <div
        class="PolicyContent__content"
        v-html="content.text"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },

    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PolicyContent {
    position: relative;
    padding: 40px 0;

    &__title {
      font-size: 28px;
      font-weight: 500;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
      text-align: center;
    }

    &__content::v-deep h3 {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
    }

    &__content::v-deep p {
      color: $grey;
      font-weight: 300;
      line-height: 1.5;
      font-size: 18px;
      margin-bottom: 20px;
    }

    @media (min-width: $large-devices-width) {
      padding: 60px 0;

      &__title  {
        font-size: 60px;
      }

      &__content::v-deep h3 {
        font-size: 30px;
      }
    }
  }
</style>
