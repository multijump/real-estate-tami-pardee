<template>
  <section class="TeamMemberContent">
    <div class="container">
      <h2 class="TeamMemberContent__title">
        {{ content.team_member_title }}
      </h2>

      <p class="TeamMemberContent__job">
        {{ content.team_member_subtitle }}
      </p>

      <div class="row">
        <div class="col-12 col-md-8">
          <img
            class="TeamMemberContent__image"
            :src="content.team_member_featured_image"
            :alt="content.team_member_title"
          >

          <div
            class="TeamMemberContent__content"
            v-html="content.team_member_bio"
          />
        </div>

        <div class="col-12 col-sm-4">
          <div
            v-if="content && content.team_member_contact_details"
            class="TeamMemberContent__contact"
          >
            <h3 class="TeamMemberContent__text">
              {{ content.team_member_contact_details.sidebar_headline }}
            </h3>

            <hr>

            <p class="TeamMemberContent__connect">
              {{ content.team_member_contact_details.mobile_phone }}
            </p>

            <p class="TeamMemberContent__connect">
              {{ content.team_member_contact_details.phone }}
            </p>

            <p class="TeamMemberContent__connect">
              {{ content.team_member_contact_details.email }}
            </p>
          </div>
        </div>

        <div
          v-if="content.team_member_testimonials"
          class="row"
        >
          <div class="col-12 col-md-8">
            <hr>

            <div
              v-for="(item, index) in content.team_member_testimonials"
              :key="index"
              class="TeamMemberContent__testimonials"
            >
              <h5 class="TeamMemberContent__heading">
                {{ item.attribution }}
              </h5>

              <p
                class="TeamMemberContent__subheading"
                v-html="item.content"
              />
            </div>
          </div>
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
  @import "~/assets/styles/common/variables.scss";

  .TeamMemberContent {
    position: relative;
    padding: 40px 0;

    &__bg {
      position: absolute;
      top: -100px;
      left: 0;
      background: $color-primary;
      width: 100%;
      height: 100px;
    }

    &__image {
      float:left;
      max-width: 450px;
      max-height: 300px;
      object-fit: cover;
      margin: .6rem 1.5rem .5rem 0;
    }

    &__title {
      text-align: center;
      font-size: 28px;
      font-weight: 500;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 14px;
      letter-spacing: 0px;
    }

    &__job {
      text-align: center;
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 14px;
      letter-spacing: 0px;
    }

    &__content::v-deep h3 {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.3;
      color: #212121;
      margin-bottom: 1.5rem;
      letter-spacing: 0px;
    }

    &__content::v-deep p {
      color: gray;
      font-family: 'Work Sans', sans-serif;
      font-weight: 300;
      line-height: 1.5;
      font-size: 18px;
      margin-bottom: 20px;
    }

    &__contact {
      background-color: #226492;
      color: #fff;
      padding: 1rem 2rem;
      margin-left: 0;
    }

    &__text, &__connect {
      font-weight: 300;
      text-transform: uppercase;
      color: #fff;
      font-size: 17px;
      padding-bottom: 16px;
    }

    &__testimonials {
      margin-bottom: 16px;
    }

    &__heading {
      line-height: 1;
      font-weight: 500;
      letter-spacing: 0;
      margin-bottom: .6rem;
      color: #212121;
    }

    &__subheading {
      color: gray;
      font-weight: 300;
      line-height: 1.5;
      font-size: 16px;
    }

    @media (min-width: $medium-devices-width) {
      padding: 60px 0;

      &__title {
        font-size: 60px;
        margin-bottom: 24px;
      }

      &__job {
        font-size: 30px;
        margin-bottom: 24px;
      }

      &__content::v-deep h3 {
        font-size: 30px;
      }
    }
  }
</style>
