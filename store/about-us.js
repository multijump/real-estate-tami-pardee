export const state = () => ({
  aboutUs: null,
  aboutUsLoading: false
})

export const getters = {
  aboutUs: state => state.aboutUs,
  aboutUsLoading: state => state.aboutUsLoading
}

export const mutations = {
  'GET_ABOUT_US_REQUEST': (state) => {
    state.aboutUsLoading = true
  },

  'GET_ABOUT_US_SUCCESS': (state, payload) => {
    state.aboutUs = payload
    state.aboutUsLoading = false
  },

  'GET_ABOUT_US_FAILURE': (state) => {
    state.aboutUs = null
    state.aboutUsLoading = false
  }
}

export const actions = {
  async getAboutUs ({ commit }) {
    commit('GET_ABOUT_US_REQUEST')

    try {
      const aboutUs = await this.$axios.get('page?id=42614')

      commit('GET_ABOUT_US_SUCCESS', aboutUs.data.data)
    } catch {
      commit('GET_ABOUT_US_FAILURE')
    }
  }
}
