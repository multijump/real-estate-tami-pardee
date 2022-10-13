export const state = () => ({
  properties: null,
  propertiesLoading: false,

  propertiesAuthor: null,
  propertiesAuthorLoading: false,
})

export const getters = {
  properties: state => state.properties,
  propertiesLoading: state => state.propertiesLoading,

  propertiesAuthor: state => state.propertiesAuthor,
  propertiesAuthorLoading: state => state.propertiesAuthorLoading,
}

export const mutations = {
  'GET_PROPERTIES_REQUEST': (state) => {
    state.propertiesLoading = true
  },

  'GET_PROPERTIES_SUCCESS': (state, payload) => {
    state.properties = payload
    state.propertiesLoading = false
  },

  'GET_PROPERTIES_FAILURE': (state) => {
    state.properties = null
    state.propertiesLoading = false
  },

  'GET_PROPERTIES_AUTHOR_REQUEST': (state) => {
    state.propertiesAuthorLoading = true
  },

  'GET_PROPERTIES_AUTHOR_SUCCESS': (state, payload) => {
    state.propertiesAuthor = payload
    state.propertiesAuthorLoading = false
  },

  'GET_PROPERTIES_AUTHOR_FAILURE': (state) => {
    state.propertiesAuthor = null
    state.propertiesAuthorLoading = false
  }
}

export const actions = {
  async getProperties ({ commit }, params) {
    commit('GET_PROPERTIES_REQUEST')

    try {
      const properties = await this.$axios.get(`propertymlsid?mlsId=${params}`)

      commit('GET_PROPERTIES_SUCCESS', properties.data.data)
    } catch {
      commit('GET_PROPERTIES_FAILURE')
    }
  },

  async getPropertiesAuthor ({ commit }, params) {
    commit('GET_PROPERTIES_AUTHOR_REQUEST')

    try {
      const properties = await this.$axios.get(`property?id=${params}`)

      commit('GET_PROPERTIES_AUTHOR_SUCCESS', properties.data.data)
    } catch {
      commit('GET_PROPERTIES_AUTHOR_FAILURE')
    }
  },
}
