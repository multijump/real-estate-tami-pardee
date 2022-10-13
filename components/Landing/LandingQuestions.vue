<template>
  <div class="LandingQuestions">
    <AppSectionTitle
      :title="questions.title"
      title-id="faqs"
      class="text-center"
    />

    <ArrowCurveImage
      class="LandingQuestions__arrow"
    />

    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8 offset-lg-2">
          <div class="LandingQuestions__wrapper">
            <div
              v-for="(item, index) in questions.questions"
              :key="index"
              class="LandingQuestions__card"
            >
              <div
                class="LandingQuestions__content"
                @click="changeActive(index)"
              >
                <span class="LandingQuestions__symbol-question">Q:</span>

                <p class="LandingQuestions__question">
                  {{ item.question_title }}
                </p>

                <ArrowImage
                  class="LandingQuestions__icon"
                  :class="{
                    'LandingQuestions__icon--active': activeIndex === index,
                  }"
                />
              </div>

              <div
                v-if="activeIndex === index"
                class="LandingQuestions__description"
              >
                <span class="LandingQuestions__symbol-answer">A:</span>

                <p class="LandingQuestions__answer">
                  {{ index }}
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowImage from '~/assets/images/arrow-down-pink.svg?inline'
import ArrowCurveImage from '~/assets/images/arrow-faq.svg?inline'

export default {
  components: {
    ArrowImage,
    ArrowCurveImage,
  },

  props: {
    questions: {
      type: Object,
      default: () => {},
    },
  },

  data () {
    return {
      activeIndex: null
    }
  },

  methods: {
    changeActive (index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index
      } else {
        this.activeIndex = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/common/variables.scss";

  .LandingQuestions {
    position: relative;
    padding: 80px 0;

    &__arrow {
      display: none;
    }

    &__wrapper {
      padding-top: 40px;
    }

    &__content, &__description {
      position: relative;
    }

    &__content {
      cursor: pointer;
    }

    &__description {
      margin-top: 14px;
      animation: fadeIn 1s;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    &__card {
      position: relative;
      padding-bottom: 14px;
      &:not(:first-of-type) {
        padding: 18px 0 14px 0;
      }

      &:not(:last-of-type) {
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          left: 0;
          bottom: 0;
          background: #C4C4C4;
        }
      }
    }

    &__icon {
      position: absolute;
      top: 4px;
      right: 0;
      cursor: pointer;

      &--active {
        transform: rotate(180deg);
      }
    }

    &__question {
      max-width: 80%;
      margin: 0 auto;
      font-weight: normal;
      font-size: 18px;
      line-height: 120%;
      color: #024E79;
    }

    &__answer {
      max-width: 80%;
      margin: 0 auto;
      font-weight: normal;
      font-size: 18px;
      line-height: 120%;
      color: #000000;
    }

    &__symbol {
      &-question {
        position: absolute;
        color: #024E79;
        top: 0;
        left: 0;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
      }

      &-answer {
        position: absolute;
        color: #1F2021;
        top: 0;
        left: 0;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
      }
    }

    @media (min-width: $medium-devices-width) {
      &__symbol {
        &-question {
          position: absolute;
          left: 30px;
        }

        &-answer {
          position: absolute;
          left: 30px;
        }
      }
    }

    @media (min-width: $large-devices-width) {
      padding: 140px 0;

      &__arrow {
        display: block;
        transform: rotate(-6deg);
        position: absolute;
        bottom: 0;
        left: 65px;
        max-width: 160px;
      }
    }
  }
</style>
