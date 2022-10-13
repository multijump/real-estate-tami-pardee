export const state = () => ({
  landing: null,
  landingLoading: false
})

export const getters = {
  landing: state => state.landing,
  landingLoading: state => state.landingLoading
}

export const mutations = {
  'GET_LANDING_REQUEST': (state) => {
    state.landingLoading = true
  },

  'GET_LANDING_SUCCESS': (state, payload) => {
    state.landing = payload
    state.landingLoading = false
  },

  'GET_LANDING_FAILURE': (state) => {
    state.landing = null
    state.landingLoading = false
  }
}

export const actions = {
  async getLanding ({ commit }) {
    commit('GET_LANDING_REQUEST')

    try {
      const landing = await this.$axios.get('landingpage')

      commit('GET_LANDING_SUCCESS', landing.data.data)
    } catch {
      commit('GET_LANDING_FAILURE')
    }
  }
}
