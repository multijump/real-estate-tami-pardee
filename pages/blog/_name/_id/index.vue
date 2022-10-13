<template>
  <div>
    <BlogArticleContent
      :content="blogArticle"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store, route }) {
    await Promise.all([
      store.dispatch('footer/getFooter'),
      store.dispatch('header/getHeader'),
      store.dispatch('blog/getBlogArcticle', route.params.id),
    ])
  },

  // head () {
  //   const params = {
  //     title: this.blogArticle.meta_tags['twitter:title'],
  //     image: this.blogArticle.meta_tags['twitter:image'],
  //     card: this.blogArticle.meta_tags['twitter:card'],
  //     site: this.blogArticle.meta_tags['twitter:site'],
  //   }

  //   const headData = MetaTagsHelpers.generateHeadData(params)

  //   return headData
  // },

  computed: {
    ...mapGetters({
      header: 'header/header',
      blogArticle: 'blog/blogArticle',
    }),
  },

  mounted () {
    this.setIsDarkMode(true)

    console.log(this.blogArticle)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
