<template>
  <div>
    <PageHero
      v-if="page.main_sliders.slider_type === 'hero'"
      :content="page.main_sliders"
    />

    <PageHeroSlider
      v-if="page.main_sliders.slider_type === 'image_slider'"
      :content="page.main_sliders"
    />

    <div
      v-for="(data, index) in page.content_data"
      :key="index"
    >
      <PageIconGrid
        v-if="data.acf_fc_layout === 'icon_grid'"
        :icon-grid="data"
      />

      <PageEmbedForm
        v-if="data.acf_fc_layout === 'embed_form'"
        :content="data"
      />

      <PageThreeColumnTestimonials
        v-if="data.acf_fc_layout === 'three_column_testimonial'"
        :reviews="data"
      />

      <PageAffordabilityCalculator
        v-if="data.acf_fc_layout === 'affordability_calculator'"
        :content="data"
      />

      <PageIntroText
        v-if="data.acf_fc_layout === 'intro_text'"
        :content="data"
      />

      <PageTextBlock
        v-if="data.acf_fc_layout === 'text_block'"
        :content="data"
      />

      <PageLandscape
        v-if="data.acf_fc_layout === 'landscape_with_two_squares'"
        :content="data"
      />

      <PageCtaBgPhoto
        v-if="data.acf_fc_layout === 'cta_bg_photo'"
        :content="data"
      />

      <PageTwoColumnCta
        v-if="data.acf_fc_layout === 'two_column_cta'"
        :content="data"
      />

      <PageVideoRow
        v-if="data.acf_fc_layout === 'video_row'"
        :content="data"
      />

      <PageFeaturedStory
        v-if="data.acf_fc_layout === 'featured_story'"
        :content="data"
      />

      <PageWysiwyg
        v-if="data.acf_fc_layout === 'wysiwyg'"
        :content="data"
      />

      <PageAgentsCarousel
        v-if="data.acf_fc_layout === 'agents_carousel'"
        :content="data"
      />

      <PageTextBlockWithImage
        v-if="data.acf_fc_layout === 'text_block_with_image'"
        :content="data"
      />

      <PageLogos
        v-if="data.acf_fc_layout === 'logos'"
        :content="data"
      />

      <PageTextBlockWithMediaGrid
        v-if="data.acf_fc_layout === 'text_block_with_media_grid'"
        :content="data"
      />

      <PageLatestNews
        v-if="data.acf_fc_layout === 'latest_news'"
        :content="data"
      />

      <PageLocations
        v-if="data.acf_fc_layout === 'locations'"
        :content="data"
      />

      <PageTabbedContent
        v-if="data.acf_fc_layout === 'tabbed_content'"
        :content="data"
      />

      <PageCommunitiesVerticalSlider
        v-if="data.acf_fc_layout === 'communities_vertical_slider'"
        :content="data"
      />

      <PageBlogsWithCategory
        v-if="data.acf_fc_layout === 'blogs_with_category'"
        :content="data"
      />

      <PageTabbedContentWithBackground
        v-if="data.acf_fc_layout === 'tabbed_content_with_background'"
        :content="data"
      />

      <PageFeaturedProperty
        v-if="data.acf_fc_layout === 'featured_property'"
        :content="data"
      />

      <AppContactForm
        v-if="data.acf_fc_layout === 'gravity_form'"
        :form="page.form_data"
        :content="data"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store, route }) {
    await store.dispatch('footer/getFooter')
    await store.dispatch('header/getHeader')
    await store.dispatch('page/getPage', route.params.slug)
  },

  head () {
    const params = {
      title: this.page.meta_tags['twitter:title'],
      image: this.page.meta_tags['twitter:image'],
      card: this.page.meta_tags['twitter:card'],
      site: this.page.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      page: 'page/page',
    }),
  },

  mounted () {
    console.log(this.page)
    if (!this.page.main_sliders ||
      (Array.isArray(this.page.main_sliders) && this.page.main_sliders.length === 0) ||
      (this.page.main_sliders && this.page.main_sliders.slider_type === 'No hero')) {
      this.setIsDarkMode(true)
    } else {
      this.setIsDarkMode(false)
    }
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },

}
</script>
