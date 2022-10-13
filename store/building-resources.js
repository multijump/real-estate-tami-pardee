export const state = () => ({
  resources: null,
  resourcesLoading: false
})

export const getters = {
  resources: state => state.resources,
  resourcesLoading: state => state.resourcesLoading
}

export const mutations = {
  'GET_RESOURCES_REQUEST': (state) => {
    state.resourcesLoading = true
  },

  'GET_RESOURCES_SUCCESS': (state, payload) => {
    state.resources = payload
    state.resourcesLoading = false
  },

  'GET_RESOURCES_FAILURE': (state) => {
    state.resources = null
    state.resourcesLoading = false
  }
}

export const actions = {
  async getResources ({ commit }) {
    commit('GET_RESOURCES_REQUEST')

    try {
      const resources = await this.$axios.get('page?id=1844')

      commit('GET_RESOURCES_SUCCESS', resources.data.data)
    } catch {
      commit('GET_RESOURCES_FAILURE')
    }
  }
}
