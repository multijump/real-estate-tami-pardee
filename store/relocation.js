export const state = () => ({
  relocation: null,
  relocationLoading: false
})

export const getters = {
  relocation: state => state.relocation,
  relocationLoading: state => state.relocationLoading
}

export const mutations = {
  'GET_RELOCATION_REQUEST': (state) => {
    state.relocationLoading = true
  },

  'GET_RELOCATION_SUCCESS': (state, payload) => {
    state.relocation = payload
    state.relocationLoading = false
  },

  'GET_RELOCATION_FAILURE': (state) => {
    state.relocation = null
    state.relocationLoading = false
  }
}

export const actions = {
  async getRelocation ({ commit }) {
    commit('GET_RELOCATION_REQUEST')

    try {
      const relocation = await this.$axios.get('page?id=74569')

      commit('GET_RELOCATION_SUCCESS', relocation.data.data)
    } catch {
      commit('GET_RELOCATION_FAILURE')
    }
  }
}
