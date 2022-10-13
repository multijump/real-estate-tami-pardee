export const state = () => ({
  media: null,
  mediaLoading: false
})

export const getters = {
  media: state => state.media,
  mediaLoading: state => state.mediaLoading
}

export const mutations = {
  'GET_MEDIA_REQUEST': (state) => {
    state.mediaLoading = true
  },

  'GET_MEDIA_SUCCESS': (state, payload) => {
    state.media = payload
    state.mediaLoading = false
  },

  'GET_MEDIA_FAILURE': (state) => {
    state.media = null
    state.mediaLoading = false
  }
}

export const actions = {
  async getMedia ({ commit }) {
    commit('GET_MEDIA_REQUEST')

    try {
      const media = await this.$axios.get('pressmedia_content')

      commit('GET_MEDIA_SUCCESS', media.data.data)
    } catch {
      commit('GET_MEDIA_FAILURE')
    }
  }
}
