export const state = () => ({
  page: null,
  pageLoading: false
})

export const getters = {
  page: state => state.page,
  pageLoading: state => state.pageLoading
}

export const mutations = {
  'GET_PAGE_REQUEST': (state) => {
    state.pageLoading = true
  },

  'GET_PAGE_SUCCESS': (state, payload) => {
    state.page = payload
    state.pageLoading = false
  },

  'GET_PAGE_FAILURE': (state) => {
    state.page = null
    state.pageLoading = false
  }
}

export const actions = {
  async getPage ({ commit }, params) {
    commit('GET_PAGE_REQUEST')

    try {
      const page = await this.$axios.get(`page_by_slug?slug=${params}`)

      commit('GET_PAGE_SUCCESS', page.data.data)
    } catch {
      commit('GET_PAGE_FAILURE')
    }
  }
}
