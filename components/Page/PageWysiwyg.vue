<template>
  <section class="PageWysiwyg">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2 text-center">
          <AppSectionTitle
            :title="content.title"
            color="blue"
          />

          <p class="PageWysiwyg__text" v-html="content.body" />
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
}
</script>

<style lang="scss" scoped>
  .PageWysiwyg {
    padding: 80px 0;

    &__text {
      text-align: left;
      padding-top: 30px;
      font-weight: normal;
      font-size: 18px;
      line-height: 120%;
      color: #000000;
    }
  }
</style>
