export const state = () => ({
  footer: null,
  footerLoading: false
})

export const getters = {
  footer: state => state.footer,
  footerLoading: state => state.footerLoading
}

export const mutations = {
  'GET_FOOTER_REQUEST': (state) => {
    state.footerLoading = true
  },

  'GET_FOOTER_SUCCESS': (state, payload) => {
    state.footer = payload
    state.footerLoading = false
  },

  'GET_FOOTER_FAILURE': (state) => {
    state.footer = null
    state.footerLoading = false
  }
}

export const actions = {
  async getFooter ({ commit }) {
    commit('GET_FOOTER_REQUEST')

    try {
      const footer = await this.$axios.get('newfooter')

      commit('GET_FOOTER_SUCCESS', footer.data.data)
    } catch {
      commit('GET_FOOTER_FAILURE')
    }
  }
}
