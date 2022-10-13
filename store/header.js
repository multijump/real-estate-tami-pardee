export const state = () => ({
  header: null,
  headerLoading: false
})

export const getters = {
  header: state => state.header,
  headerLoading: state => state.headerLoading
}

export const mutations = {
  'GET_HEADER_REQUEST': (state) => {
    state.headerLoading = true
  },

  'GET_HEADER_SUCCESS': (state, payload) => {
    state.header = payload
    state.headerLoading = false
  },

  'GET_HEADER_FAILURE': (state) => {
    state.header = null
    state.headerLoading = false
  }
}

export const actions = {
  async getHeader ({ commit }) {
    commit('GET_HEADER_REQUEST')

    try {
      const header = await this.$axios.get('newheader')

      commit('GET_HEADER_SUCCESS', header.data.data)
    } catch {
      commit('GET_HEADER_FAILURE')
    }
  }
}
