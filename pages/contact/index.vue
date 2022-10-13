<template>
  <div>
    <ContactMain
      v-if="contact && contact.main_sliders"
      :main="contact.main_sliders"
    />

    <AppContactForm
      v-if="contact && contact.form_data && contact.content_data[0]"
      :form="contact.form_data"
      :content="contact.content_data[0]"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('header/getHeader')
    await store.dispatch('footer/getFooter')
    await store.dispatch('contact/getContact')
  },

  head () {
    const params = {
      title: this.contact.meta_tags['twitter:title'],
      image: this.contact.meta_tags['twitter:image'],
      card: this.contact.meta_tags['twitter:card'],
      site: this.contact.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      contact: 'contact/contact',
    }),
  },

  mounted () {
    this.setIsDarkMode(false)
    console.log(this.contact)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
