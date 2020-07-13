const book = {
  state: {
    test: 1
  },
  mutations: {
    setTest: (state, val) => {
      state.test = val
    }
  },
  actions: {
    activeSetTest: ({ commit, state }, val) => {
      commit('setTest', val)
    }
  }
}
export default book
