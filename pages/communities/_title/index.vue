<template>
  <div>
    <CommunityPromo v-if="community" :community="community.main_sliders" />

    <CommunityIntroduction
      v-if="community"
      :introduction="community.community_introduction"
      :stats="community.community_stats"
    />

    <CommunityNeighborhoods v-if="community" :neighborhoods="community.neighborhoods" />

    <CommunityArticles v-if="community" :articles="community.headline_section" />

    <CommunityFavorites v-if="community" :favorites="community.community_favourites" />

    <CommunityMarketing v-if="community" :marketing="community.marketing_insights" />

    <CommunityServices v-if="community" :services="community.relocation_section" />

    <CommunityListings v-if="community" :listings="community.featured_listings_section" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store, route }) {
    await store.dispatch('footer/getFooter')
    await store.dispatch('header/getHeader')
    await store.dispatch('community/getCommunities', route.params.title)
  },

  // head () {
  //   const params = {
  //     title: this.landing.meta_tags['twitter:title'],
  //     image: this.landing.meta_tags['twitter:image'],
  //     card: this.landing.meta_tags['twitter:card'],
  //     site: this.landing.meta_tags['twitter:site'],
  //   }

  //   const headData = MetaTagsHelpers.generateHeadData(params)

  //   return headData
  // },

  computed: {
    ...mapGetters({
      header: 'header/header',
      community: 'community/community',
    }),
  },

  mounted () {
    this.setIsDarkMode(false)
    console.log(this.community)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
