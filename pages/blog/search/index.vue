<template>
  <div>
    <BlogSearch
      :search="blogSearch"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import queryString from 'query-string'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store, route }) {
    await Promise.all([
      store.dispatch('footer/getFooter'),
      store.dispatch('header/getHeader'),
      store.dispatch('blog/getBlogSearch', queryString.stringify(route.query)),
    ])
  },

  head () {
    const params = {
      title: this.blogSearch.meta_tags['twitter:title'],
      image: this.blogSearch.meta_tags['twitter:image'],
      card: this.blogSearch.meta_tags['twitter:card'],
      site: this.blogSearch.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      blogSearch: 'blog/blogSearch',
    }),
  },

  mounted () {
    this.setIsDarkMode(true)

    console.log(this.blogSearch)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
