export const state = () => ({
  community: null,
  communityLoading: false
})

export const getters = {
  community: state => state.community,
  communityLoading: state => state.communityLoading
}

export const mutations = {
  'GET_COMMUNITIES_REQUEST': (state) => {
    state.communityLoading = true
  },

  'GET_COMMUNITIES_SUCCESS': (state, payload) => {
    state.community = payload
    state.communityLoading = false
  },

  'GET_COMMUNITIES_FAILURE': (state) => {
    state.community = null
    state.communityLoading = false
  }
}

export const actions = {
  async getCommunities ({ commit }, params) {
    commit('GET_COMMUNITIES_REQUEST')

    try {
      const community = await this.$axios.get(`singlecommunity?slug=${params}`)

      commit('GET_COMMUNITIES_SUCCESS', community.data.data)
    } catch {
      commit('GET_COMMUNITIES_FAILURE')
    }
  }
}
