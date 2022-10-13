<template>
  <div class="HomeNews">
    <AppSectionTitle
      class="pb-50"
      color="navy"
      :display="news.pretitle"
      :title="news.title"
      :subtitle="news.subtitle"
    />

    <HomeNewsSlider :list="news.latest_news" />

    <div class="HomeNews__bg" />
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    regsTitle () {
      // string.replace(/\s\s+/g, ' ')
      const title = this.news.news_section_title.split('    ')
      return title
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .HomeNews {
    position: relative;
    padding: 80px 25px 0px;

    &__bg {
      position: absolute;
      width: 100%;
      height: 40%;
      // max-height: 768px;
      left: 0px;
      top: 40%;
      transform: translateY(70%);
      background: $lightest-powder-blue;
    }

    @media (min-width: $medium-devices-width) {
      padding: 72px 65px 0px 130px;

      &__bg {
        height: 60%;
        transform: translateY(40%);
      }
    }

    @media (min-width: $extra-large-devices-width) {
      padding: 72px 0 65px 130px;
    }
  }
</style>
