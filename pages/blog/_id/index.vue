<template>
  <div>
    <BlogCategories
      :categories="blogCategory"
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
      store.dispatch('blog/getBlogCategory', queryString.stringify(route.query)),
    ])
  },

  head () {
    const params = {
      title: this.blogCategory.meta_tags['twitter:title'],
      image: this.blogCategory.meta_tags['twitter:image'],
      card: this.blogCategory.meta_tags['twitter:card'],
      site: this.blogCategory.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      blogCategory: 'blog/blogCategory',
    }),
  },

  mounted () {
    this.setIsDarkMode(true)

    console.log(this.blogCategory)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
