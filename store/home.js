export const state = () => ({
  home: null,
  homeLoading: false
})

export const getters = {
  home: state => state.home,
  homeLoading: state => state.homeLoading
}

export const mutations = {
  'GET_HOME_REQUEST': (state) => {
    state.homeLoading = true
  },

  'GET_HOME_SUCCESS': (state, payload) => {
    state.home = payload
    state.homeLoading = false
  },

  'GET_HOME_FAILURE': (state) => {
    state.home = null
    state.homeLoading = false
  }
}

export const actions = {
  async getHome ({ commit }) {
    commit('GET_HOME_REQUEST')

    try {
      const home = await this.$axios.get('newhomepage')

      commit('GET_HOME_SUCCESS', home.data.data)
    } catch {
      commit('GET_HOME_FAILURE')
    }
  }
}
