// 用户模块

export default {
  namespaced: true,
  state() {
    return {
      profile: {
        id: '',
        avater: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    // palload用户信息对象
    setUser(state, payload) {
      state.profile = payload
    }
  }
}
