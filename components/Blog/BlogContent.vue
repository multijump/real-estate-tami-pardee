<template>
  <section class="BlogContent">
    <img
      class="BlogContent__star"
      :src="head.background_image"
      alt="star"
    >

    <div class="BlogContent__bg-top" />

    <div class="BlogContent__bg-bottom" />

    <div class="container">
      <AppSectionTitle
        :title="head.title"
        class="text-center"
      />

      <span
        class="BlogContent__subtitle"
        v-html="head.body"
      />

      <div class="BlogContent__article">
        <input
          id="article"
          v-model="article"
          class="BlogContent__input"
          type="text"
          placeholder="Search..."
          @keyup.enter="searchLocation"
        >

        <div
          class="BlogContent__search"
          @click.prevent="searchLocation()"
        >
          <font-awesome-icon
            class="fa-lg"
            style="color: white"
            :icon="['fas', 'search']"
          />
        </div>

        <img
          class="BlogContent__cursor"
          src="~/assets/images/cursor-blog.png"
          alt="cursor"
        >
      </div>

      <div
        v-for="(row, index) in content.category_blogs"
        :key="index"
      >
        <BlogContentList
          :list="row"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    head: {
      type: Object,
      default: () => {},
    },

    content: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      article: '',
    }
  },

  methods: {
    searchLocation () {
      if (this.article) {
        this.$router.push({
          path: '/blog/search',
          query: {
            keyword: this.article,
            page: '1',
          },
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .BlogContent {
    position: relative;
    padding: 104px 0 72px 0;

    &__bg-top {
      display: none;
    }

    &__bg-bottom {
      display: none;
    }

    &__subtitle {
      position: relative;
      font-weight: normal;
      font-size: 17px;
      line-height: 20px;
      text-align: center;
      color: #747B7E;
      z-index: 10;
    }

    &__star {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }

    &__article {
      width: 100%;
      padding-top: 28px;
      position: relative;
      z-index: 100;
    }

    &__input {
      width: 100%;
      background: #FFFDFC;
      border: 2px solid #DDDDDD;
      box-sizing: border-box;
      outline: none;
      border-radius: 24px;
      padding: 13px 22px;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      color: #747B7E;
    }

    &__search {
      position: absolute;
      cursor: pointer;
      bottom: 2px;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 46px;
      max-height: 46px;
      height: 100%;
      width: 100%;
      background: $darkest-pink;
      border-radius: 24px;
    }

    &__cursor {
      display: none;
    }

    @media (min-width: $medium-devices-width) {
      padding: 90px 0 164px 0;

      &__bg-top {
        display: block;
        position: absolute;
        top: 22%;
        right: 0;
        width: 95%;
        height: 21.5%;
        background: $lightest-powder-blue;
      }

      &__star {
        top: -2%;
      }

      &__article {
        width: 60%;
        margin: 0 auto;
      }

      &__cursor {
        display: block;
        position: absolute;
        right: -50px;
      }

      &__bg-bottom {
        display: block;
        position: absolute;
        bottom: 15%;
        left: 0;
        width: 95%;
        height: 21.5%;
        background: $lightest-blush;
      }
    }
  }
</style>
