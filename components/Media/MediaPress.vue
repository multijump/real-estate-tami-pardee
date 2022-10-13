<template>
  <section class="MediaPress">
    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in pressArr"
          :key="index"
          class="col-12 col-md-6 col-lg-4 col-xl-3 MediaPress__col"
        >
          <MediaPressItem
            :item="item"
          />
        </div>
      </div>

      <AppButton
        v-if="countPress < press.length"
        text="LOAD MORE"
        color="blue"
        @click.native="loadMore()"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    press: {
      type: Array,
      default: () => [],
    },
  },

  data () {
    return {
      countPress: 40,
    }
  },

  computed: {
    pressArr () {
      return this.press.slice(0, this.countPress)
    }
  },

  methods: {
    loadMore () {
      this.countPress = this.countPress + 20

      this.pressArr.slice(0, this.countPress)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .MediaPress {
    position: relative;
    text-align: center;
    padding: 60px;

    &__col {
      padding-bottom: 32px;
      margin-bottom: 32px;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background: #ddd;
      }
    }

    @media (min-width: $medium-devices-width) {
      padding: 40px 0;
    }
  }
</style>
