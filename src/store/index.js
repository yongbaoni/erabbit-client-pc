import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cart from './modules/cart.js'
import user from './modules/user.js'
import category from './modules/category.js'
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    createPersistedState({
      // 本地存储的名字
      key: 'erabbit-client-pc-store',
      path: ['user', 'cart']
    })
  ]
})
