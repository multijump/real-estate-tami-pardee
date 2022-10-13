export const state = () => ({
  isMobileNavShown: false,
  isDarkMode: false,
})

export const getters = {
  isMobileNavShown (state) {
    return state.isMobileNavShown
  },

  isDarkMode (state) {
    return state.isDarkMode
  },
}

export const mutations = {
  setIsMobileNavShown (state, isMobileNavShown) {
    state.isMobileNavShown = isMobileNavShown
  },

  setIsDarkMode (state, isDarkMode) {
    state.isDarkMode = isDarkMode
  },
}

export const actions = {
  setIsMobileNavShown ({ commit }, payload) {
    commit('setIsMobileNavShown', payload)
  },

  setIsDarkMode ({ commit }, payload) {
    commit('setIsDarkMode', payload)
  },
}
