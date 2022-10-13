<template>
  <section class="MeetTeamContent">
    <div
      v-for="(group, index) in content"
      :key="index"
      class="MeetTeamContent__group"
    >
      <h2 class="MeetTeamContent__title">
        {{ group.section_headline }}
      </h2>

      <div class="MeetTeamContent__list">
        <div
          v-for="(item, indexItem) in group.team_members"
          :key="indexItem"
          class="MeetTeamContent__item"
        >
          <a :href="'/team/' + item.post_name" target="_self">
            <img
              v-if="item.post_image"
              class="MeetTeamContent__image"
              :src="item.post_image"
              :alt="item.post_title"
            >

            <div v-else class="MeetTeamContent__image" />

            <h3 class="MeetTeamContent__name">
              {{ item.post_title }}
            </h3>

            <p
              class="MeetTeamContent__job"
              v-html="item.sub_title"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .MeetTeamContent {
    position: relative;

    &__title {
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
      color: #226492;
      padding-bottom: 32px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__item {
      width: 290px;
      min-height: 320px;
      margin: 0 8px 16px 0;
      text-align: center;

      &:hover {
        img {
          transition: filter .4s ease-in-out;
          filter: grayscale(0%);
        }

        h3 {
          color: #226492;
          text-decoration: none;
        }
      }

      a {
        text-decoration: none;
      }

      img {
        filter: grayscale(100%);
        transition: filter .4s ease-in-out;
        animation-duration: .5s;
        animation-fill-mode: both;
        animation-name: h;
      }
    }

    &__image {
      max-height: 220px;
      max-width: 330px;
      height: 100%;
      width: 100%;
      background: red;
      object-fit: cover;
    }

    &__name {
      padding-top: 16px;
      font-size: 24px;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      word-break: break-word;
    }

    &__job {
      padding-top: 8px;
      font-size: 18px;
      color: gray;
      font-weight: 300;
      line-height: 1.5;
      word-break: break-word;
      text-decoration: none;
    }

    @media (min-width: $medium-devices-width) {
      &__title {
        font-size: 40px;
      }
    }
  }
</style>
