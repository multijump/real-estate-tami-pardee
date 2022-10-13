export const state = () => ({
  policy: null,
  policyLoading: false
})

export const getters = {
  policy: state => state.policy,
  policyLoading: state => state.policyLoading
}

export const mutations = {
  'GET_POLICY_REQUEST': (state) => {
    state.policyLoading = true
  },

  'GET_POLICY_SUCCESS': (state, payload) => {
    state.policy = payload
    state.policyLoading = false
  },

  'GET_POLICY_FAILURE': (state) => {
    state.policy = null
    state.policyLoading = false
  }
}

export const actions = {
  async getPolicy ({ commit }) {
    commit('GET_POLICY_REQUEST')

    try {
      const policy = await this.$axios.get('page?id=843')

      commit('GET_POLICY_SUCCESS', policy.data.data)
    } catch {
      commit('GET_POLICY_FAILURE')
    }
  }
}
