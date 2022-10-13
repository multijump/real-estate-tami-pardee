<template>
  <section
    class="PageIntroText"
    :class="{
      'PageIntroText--light' : content.color_scheme === 'light',
      'PageIntroText--dkblue' : content.color_scheme === 'dkblue',
      'PageIntroText--dark' : content.color_scheme === 'dark'
    }"
  >
    <div class="container">
      <h3
        v-if="content.section_headline"
        class="PageIntroText__title"
      >
        {{ content.section_headline }}
      </h3>

      <p
        v-if="content.content"
        class="PageIntroText__subtitle"
        v-html="content.content"
      />

      <AppLinkButton
        v-if="content && content.cta_link"
        color="pink"
        :text="content.cta_link.title.toUpperCase()"
        :navigate-to="content.cta_link.url"
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
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageIntroText {
    position: relative;
    padding: 40px 0;
    text-align: center;

    &--light {
      background: transparent;

      .PageIntroText__title {
        color: $color-primary;
      }

      .PageIntroText__subtitle {
        color: $color-primary;
      }
    }
    &--dkblue {
      background: #003B5C;

      .PageIntroText__title {
        color: #fff;
      }

      .PageIntroText__subtitle {
        color: #fff;
      }
    }

    &--dark {
      background: #226492;

      .PageIntroText__title {
        color: #fff;
      }

      .PageIntroText__subtitle {
        color: #fff;
      }
    }

    &__title {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
      text-align: center;
    }

    &__subtitle {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      margin-bottom: 32px;
      letter-spacing: 0px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 32px;
      }

      &__subtitle {
        font-size: 30px;
      }
    }
  }
</style>
