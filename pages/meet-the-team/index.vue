<template>
  <div>
    <MeetTeamMain v-if="team" :main="team.main_sliders" />

    <MeetTeamContent :content="team.team_data" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import MetaTagsHelpers from '~/helpers/meta-tags'

export default {
  async asyncData ({ store }) {
    await store.dispatch('header/getHeader')
    await store.dispatch('footer/getFooter')
    await store.dispatch('team/getTeam')
  },

  head () {
    const params = {
      title: this.team.meta_tags['twitter:title'],
      image: this.team.meta_tags['twitter:image'],
      card: this.team.meta_tags['twitter:card'],
      site: this.team.meta_tags['twitter:site'],
    }

    const headData = MetaTagsHelpers.generateHeadData(params)

    return headData
  },

  computed: {
    ...mapGetters({
      header: 'header/header',
      team: 'team/team',
    }),
  },

  mounted () {
    this.setIsDarkMode(false)
    console.log(this.team)
  },

  methods: {
    ...mapActions({
      setIsDarkMode: 'app/setIsDarkMode',
    }),
  },
}
</script>
