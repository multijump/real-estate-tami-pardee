<template>
  <div>
    <PolicyContent
      :content="policy.content_data[0]"
      :title="policy.page_title"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('header/getHeader')
    await store.dispatch('footer/getFooter')
    await store.dispatch('privacy-policy/getPolicy')
  },

  head () {
    const params = {
      title: this.policy.meta_tags['twitter:title'],
      image: this.policy.meta_tags['twitter:image'],
      card: this.policy.meta_tags['twitter:card'],
      site: this.policy.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      policy: 'privacy-policy/policy',
    }),
  },

  mounted () {
    this.setIsDarkMode(true)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
