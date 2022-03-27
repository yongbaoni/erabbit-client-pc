import { createStore } from 'vuex'
// A模块
const moduleA = {
  namespaced: true,
  state: {
    username: 'moduleA'
  },
  mutations: {
    updateName(state) {
      state.username = 'moduleAAAAAA'
    }
  },
  getters: {
    newName(state) {
      return state.username + '!!!'
    }
  }
}
// B模块
const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  getters: {
    newNames(state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName(state) {
      state.username = '李四'
    }
  },
  actions: {
    initList(context) {
      setTimeout(() => {
        context.commit('updateName')
      }, 1000)
    }
  }
}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})
