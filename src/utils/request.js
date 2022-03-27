// 1.创建一个新的axios实例
// 2.请求拦截器,如果有token进行头部携带
// 3.响应拦截器：1.玻璃无效数据 2.处理token失效
// 4.导出一个函数，调用当前的axios发送请求的地方用上基准地址

import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 导出基准地址,原因：其他地方不是通过axios发请求的地方用基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    // 如果本地有token就在头部携带
    // 1.获取用户信息对象
    const { profile } = store.state.user
    // 2.判断是否有token
    if (profile.token) {
      // 3. 设置token
      config.headers.Authorization = `Bearer ${profile.token}`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      // 1.清空无效信息
      // 2.跳转到登录页面
      // 3.跳转需要传参（当前路由地址）给登录页面
      store.commit('user/setuser', {})
      // 当前路由地址
      // 组件里 '/user?s=10' $router.path===/user $router/fullPath===/user?a=10
      // js模块中：router.currentRouter 是ref响应式的数据
      const fullPath = encodeURIComponent(router.currentRouter.value.fullPath)
      router.push('/login?redireactUrl=' + fullPath)
    }
    return Promise.reject(err)
  }
)

export default (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
