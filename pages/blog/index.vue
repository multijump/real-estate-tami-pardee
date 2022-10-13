<template>
  <div>
    <BlogContent
      :head="blog.content_data[0][0]"
      :content="blog.content_data[0][1]"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('footer/getFooter')
    await store.dispatch('header/getHeader')
    await store.dispatch('blog/getBlog')
  },

  head () {
    const params = {
      title: this.blog.meta_tags['twitter:title'],
      image: this.blog.meta_tags['twitter:image'],
      card: this.blog.meta_tags['twitter:card'],
      site: this.blog.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      blog: 'blog/blog',
    }),
  },

  mounted () {
    this.setIsDarkMode(true)

    console.log(this.blog)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
