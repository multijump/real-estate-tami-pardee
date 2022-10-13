<template>
  <div>
    <TeamMemberContent :content="teamMember" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store, route }) {
    await store.dispatch('header/getHeader')
    await store.dispatch('footer/getFooter')
    await store.dispatch('team/getTeamMember', route.params.name)
  },

  // head () {
  //   const params = {
  //     title: this.teamMember.meta_tags['twitter:title'],
  //     image: this.teamMember.meta_tags['twitter:image'],
  //     card: this.teamMember.meta_tags['twitter:card'],
  //     site: this.teamMember.meta_tags['twitter:site'],
  //   }

  //   const headData = MetaTagsHelpers.generateHeadData(params)

  //   return headData
  // },

  computed: {
    ...mapGetters({
      header: 'header/header',
      teamMember: 'team/teamMember',
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
