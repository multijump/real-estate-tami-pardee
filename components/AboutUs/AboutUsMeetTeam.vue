<template>
  <section class="AboutUsMeetTeam">
    <p class="AboutUsMeetTeam__info">
      {{ meet.content }}
    </p>

    <AppLinkButton
      color="pink"
      type="small"
      :text="meet.cta_link.title"
      :navigate-to="meet.cta_link.url"
    />
  </section>
</template>

<script>
export default {
  props: {
    meet: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    redirect () {
      window.open(`${this.meet.cta_link.url}`, '_blank')
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";
  .AboutUsMeetTeam {
    position: relative;
    padding-bottom: 40px;
    text-align: center;

    &__info {
      text-align: center;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      font-size: 22px;
      padding-bottom: 32px;
    }

    @media (min-width: $medium-devices-width) {
      padding-bottom: 60px;

      &__info {
        font-size: 30px;
        max-width: 60%;
        margin: 0 auto;
      }
    }
  }
</style>
