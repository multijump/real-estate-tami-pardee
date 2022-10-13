export const state = () => ({
  life: null,
  lifeLoading: false
})

export const getters = {
  life: state => state.life,
  lifeLoading: state => state.lifeLoading
}

export const mutations = {
  'GET_LIFE_REQUEST': (state) => {
    state.lifeLoading = true
  },

  'GET_LIFE_SUCCESS': (state, payload) => {
    state.life = payload
    state.lifeLoading = false
  },

  'GET_LIFE_FAILURE': (state) => {
    state.life = null
    state.lifeLoading = false
  }
}

export const actions = {
  async getLife ({ commit }) {
    commit('GET_LIFE_REQUEST')

    try {
      const life = await this.$axios.get('page?id=42418')

      commit('GET_LIFE_SUCCESS', life.data.data)
    } catch {
      commit('GET_LIFE_FAILURE')
    }
  }
}
