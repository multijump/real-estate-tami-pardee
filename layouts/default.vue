<template>
  <div>
    <AppMobileNav v-if="header" :header="header" />

    <AppHeader v-if="header" :header="header" />

    <main class="main">
      <Nuxt />
    </main>

    <AppFooter v-if="footer" :footer="footer" />

    <AppCopyright v-if="footer" :copyright="footer" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head () {
    return {
      bodyAttrs: {
        class: this.isMobileNavShown ? 'hide-scroll' : ''
      }
    }
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      footer: 'footer/footer',

      isMobileNavShown: 'app/isMobileNavShown',
    }),
  },

  mounted () {
    // console.log(this.header)
    // console.log(this.footer)
  }
}
</script>
