export const state = () => ({
  buy: null,
  buyLoading: false
})

export const getters = {
  buy: state => state.buy,
  buyLoading: state => state.buyLoading
}

export const mutations = {
  'GET_BUY_REQUEST': (state) => {
    state.buyLoading = true
  },

  'GET_BUY_SUCCESS': (state, payload) => {
    state.buy = payload
    state.buyLoading = false
  },

  'GET_BUY_FAILURE': (state) => {
    state.buy = null
    state.buyLoading = false
  }
}

export const actions = {
  async getBuy ({ commit }) {
    commit('GET_BUY_REQUEST')

    try {
      const buy = await this.$axios.get('page?id=42415')

      commit('GET_BUY_SUCCESS', buy.data.data)
    } catch {
      commit('GET_BUY_FAILURE')
    }
  }
}
