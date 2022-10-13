export const state = () => ({
  sell: null,
  sellLoading: false
})

export const getters = {
  sell: state => state.sell,
  sellLoading: state => state.sellLoading
}

export const mutations = {
  'GET_SELL_REQUEST': (state) => {
    state.sellLoading = true
  },

  'GET_SELL_SUCCESS': (state, payload) => {
    state.sell = payload
    state.sellLoading = false
  },

  'GET_SELL_FAILURE': (state) => {
    state.sell = null
    state.sellLoading = false
  }
}

export const actions = {
  async getSell ({ commit }) {
    commit('GET_SELL_REQUEST')

    try {
      const sell = await this.$axios.get('page?id=42416')

      commit('GET_SELL_SUCCESS', sell.data.data)
    } catch {
      commit('GET_SELL_FAILURE')
    }
  }
}
