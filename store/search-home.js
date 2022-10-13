export const state = () => ({
  searchHome: null,
  searchHomeLoading: false,

  searchHomeByAuthor: null,
  searchHomeByAuthorLoading: false,

  metaData: null,
  metaDataLoading: false,
})

export const getters = {
  searchHome: state => state.searchHome,
  searchHomeLoading: state => state.searchHomeLoading,

  searchHomeByAuthor: state => state.searchHomeByAuthor,
  searchHomeByAuthorLoading: state => state.searchHomeByAuthorLoading,

  metaData: state => state.metaData,
  metaDataLoading: state => state.metaDataLoading,
}

export const mutations = {
  'GET_SEARCH_HOME_REQUEST': (state) => {
    state.searchHomeLoading = true
  },

  'GET_SEARCH_HOME_SUCCESS': (state, payload) => {
    state.searchHome = payload
    state.searchHomeLoading = false
  },

  'GET_SEARCH_HOME_FAILURE': (state) => {
    state.searchHome = null
    state.searchHomeLoading = false
  },

  'GET_SEARCH_HOME_BY_AUTHOR_REQUEST': (state) => {
    state.searchHomeByAuthorLoading = true
  },

  'GET_SEARCH_HOME_BY_AUTHOR_SUCCESS': (state, payload) => {
    state.searchHomeByAuthor = payload
    state.searchHomeByAuthorLoading = false
  },

  'GET_SEARCH_HOME_BY_AUTHOR_FAILURE': (state) => {
    state.searchHomeByAuthor = null
    state.searchHomeByAuthorLoading = false
  },

  'GET_META_DATA_REQUEST': (state) => {
    state.metaDataLoading = true
  },

  'GET_META_DATA_SUCCESS': (state, payload) => {
    state.metaData = payload
    state.metaDataLoading = false
  },

  'GET_META_DATA_FAILURE': (state) => {
    state.metaData = null
    state.metaDataLoading = false
  },
}

export const actions = {
  async getSearchHome ({ commit }, params) {
    commit('GET_SEARCH_HOME_REQUEST')

    try {
      const searchHome = await this.$axios.get(`searchproperty?${params}`)

      commit('GET_SEARCH_HOME_SUCCESS', searchHome.data.data)
    } catch {
      commit('GET_SEARCH_HOME_FAILURE')
    }
  },

  async getSearchHomeByAuthor ({ commit }, params) {
    commit('GET_SEARCH_HOME_BY_AUTHOR_REQUEST')

    try {
      const searchHomeByAuthor = await this.$axios.get(`searchpropertylisting?${params}`)

      commit('GET_SEARCH_HOME_BY_AUTHOR_SUCCESS', searchHomeByAuthor.data.data)
    } catch {
      commit('GET_SEARCH_HOME_BY_AUTHOR_FAILURE')
    }
  },

  async getMetaDataListing ({ commit }) {
    commit('GET_META_DATA_REQUEST')

    try {
      const metaData = await this.$axios.get('metadatalisting')

      commit('GET_META_DATA_SUCCESS', metaData.data.data)
    } catch {
      commit('GET_META_DATA_FAILURE')
    }
  }
}
