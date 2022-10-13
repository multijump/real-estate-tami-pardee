<template>
  <section class="AboutUsRelocating">
    <div class="container">
      <p class="AboutUsRelocating__info">
        {{ relocating.content }}
      </p>

      <AppLinkButton
        :text="relocating.cta_link.title.toUpperCase()"
        color="pink"
        type="small"
        :navigate-to="relocating.cta_link.url"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    relocating: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    redirect () {
      window.open(`${this.relocating.cta_link.url}`, '_blank')
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AboutUsRelocating {
    position: relative;
    background: $color-primary;
    padding: 40px 0;
    text-align: center;

    &__info {
      color: #fff;
      font-weight: 300;
      line-height: 1.5;
      font-size: 1.2rem;
      padding-bottom: 32px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__info {
        font-size: 30px;
      }
    }
  }
</style>
