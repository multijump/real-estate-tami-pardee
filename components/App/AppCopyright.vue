<template>
  <div class="AppCopyright">
    <div class="container">
      <div class="row flex-column-reverse flex-md-row">
        <div
          role="region"
          aria-label="Copyright"
          class="col-12 col-md-6"
        >
          <p
            class="AppCopyright__text"
            v-html="copyright.copywrite"
          />
        </div>

        <div class="col-12 col-md-6">
          <div class="AppCopyright__list">
            <AppIcons
              v-for="(item, index) in copyright.social_links"
              :key="index"
              :icon="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    copyright: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .AppCopyright {
    background: #1F2021;
    padding: 40px 0 50px;
    z-index: 10;

    &__text {
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      text-align: center;
      color: #F3F3F3;
      padding-top: 10px;
      width: 85%;
      margin: 0 auto;
    }

    &__list {
      &:nth-child(n) {
        margin-left: 25px;
      }
    }

    @media (min-width: $medium-devices-width) {
      padding: 12px 0;
     flex-direction: row;

     &__text {
      padding-top: 0;
      text-align: left;
      width: 100%;
      margin: 0;
     }

      &__list {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &:nth-child(n) {
          margin-left: 0;
        }
      }
    }
  }
</style>
