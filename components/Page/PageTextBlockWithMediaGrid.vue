<template>
  <section class="PageTextBlockWithMediaGrid">
    <div class="PageTextBlockWithMediaGrid__articles">
      <div
        v-for="(item, index) in content.media_items"
        :key="index"
        class="PageTextBlockWithMediaGrid__item"
        :class="[
          `PageTextBlockWithMediaGrid__item-${index + 1}`
        ]"
      >
        <AppMeetCard :item="item" />
      </div>
    </div>

    <div class="PageTextBlockWithMediaGrid__block">
      <div class="PageTextBlockWithMediaGrid__content">
        <AppSectionTitle
          :display="content.text_content.pretitle"
          :title="content.text_content.title"
          :subtitle="content.text_content.subtitle"
          :lead="content.text_content.body"
          color="blue"
        />

        <div class="PageTextBlockWithMediaGrid__navigation">
          <AppLinkButton
            type="common"
            color="blue"
            :text="content.text_content.primary_link.title"
            style="margin: 0;"
            :navigate-to="content.text_content.primary_link.url"
          />

          <AppLink
            class="ml-25 mt-2 mt-md-0"
            color="grey"
            :text="content.text_content.secondary_link.title"
            :navigate-to="content.text_content.secondary_link.url"
          />
        </div>
      </div>
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

  methods: {
    redirect () {
      window.open(`${this.content.text_content.primary_link.url}`, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .PageTextBlockWithMediaGrid {
    position: relative;
    overflow: hidden;

    &__articles {
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      grid-template-areas:
        "item-1"
        "item-2"
        "item-3";
    }

    &__item-1 { grid-area: item-1; }
    &__item-2 { grid-area: item-2; }
    &__item-3 { grid-area: item-3; }

    &__block {
      width: 100%;
      padding: 80px 25px;
      background: $lightest-powder-blue;
    }

    &__content {
      padding: 0;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    &__navigation {
      padding-top: 30px;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: $small-devices-width) {
      &__articles {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 300px 300px;
        gap: 0px 0px;
        grid-template-areas:
          "item-1 item-3"
          "item-2 item-3";
      }
    }
    @media (min-width: $extra-large-devices-width) {
      padding-top: 110px;

      &__articles {
        position: absolute;
        left: 0;
        top: 25%;
        max-width: 50%;
        max-height: 500px;

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0px 0px;
        grid-template-areas:
          "item-1 item-3"
          "item-2 item-3";
      }

      &__block {
        float: right;
        max-width: 65%;
        padding: 0;
        background: $lightest-powder-blue;
      }

      &__content {
        padding: 95px 130px 95px 300px;
      }

      &__navigation {
        flex-direction: row;
      }
    }
  }
</style>
