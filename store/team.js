export const state = () => ({
  team: null,
  teamLoading: false,

  teamMember: null,
  teamMemberLoading: false,
})

export const getters = {
  team: state => state.team,
  teamLoading: state => state.teamLoading,

  teamMember: state => state.teamMember,
  teamMemberLoading: state => state.teamMemberLoading,
}

export const mutations = {
  'GET_TEAM_REQUEST': (state) => {
    state.teamLoading = true
  },

  'GET_TEAM_SUCCESS': (state, payload) => {
    state.team = payload
    state.teamLoading = false
  },

  'GET_TEAM_FAILURE': (state) => {
    state.team = null
    state.teamLoading = false
  },

  'GET_TEAM_MEMBER_REQUEST': (state) => {
    state.teamMemberLoading = true
  },

  'GET_TEAM_MEMBER_SUCCESS': (state, payload) => {
    state.teamMember = payload
    state.teamMemberLoading = false
  },

  'GET_TEAM_MEMBER_FAILURE': (state) => {
    state.teamMember = null
    state.teamMemberLoading = false
  },
}

export const actions = {
  async getTeam ({ commit }) {
    commit('GET_TEAM_REQUEST')

    try {
      const team = await this.$axios.get('meet_the_team')

      commit('GET_TEAM_SUCCESS', team.data.data)
    } catch {
      commit('GET_TEAM_FAILURE')
    }
  },

  async getTeamMember ({ commit }, params) {
    commit('GET_TEAM_MEMBER_REQUEST')

    try {
      const team = await this.$axios.get(`team/singleteam?slug=${params}`)

      commit('GET_TEAM_MEMBER_SUCCESS', team.data.data)
    } catch {
      commit('GET_TEAM_MEMBER_FAILURE')
    }
  },
}
