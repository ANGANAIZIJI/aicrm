import router from './router'
// import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// import { getToken } from '@/utils/auth'
// import getPageTitle from '@/utils/get-page-title'

// const whiteList = ['/login', '/auth-redirect']

// // eslint-disable-next-line space-before-function-paren
// router.beforeEach(async(to, from, next) => {
//   // 设置页面title
//   document.title = getPageTitle(to.meta.title)

//   // 确定用户是否已经登陆
//   const hasToken = getToken()

//   if (hasToken) {
//     if (to.path === '/login') {
//       // 如果已经登陆，重定向到主页
//       next({ path: '/' })
//     } else {
//       // 确定用户是否通过getInfo获取了权限角色
//       const hasRoles = store.getters.roles && store.getters.roles.length > 0
//       if (hasRoles) {
//         next()
//       } else {
//         try {
//           // 获取用户信息
//           // 注意：角色必须是对象数组！例如：['admin']或，['developer'，'editor']
//           const { roles } = await store.dispatch('user/getInfo')

//           // 基于角色生成可访问路由图
//           const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
//           // 动态添加可访问路由
//           router.addRoutes(accessRoutes)
//           // 确保addRoutes完整的hack方法
//           // 设置replace:true，这样导航就不会留下历史记录
//           next({ ...to, replace: true })
//         } catch (error) {
//           await store.dispatch('user/resetToken')
//           next(`/login?redirect=${to.path}`)
//         }
//       }
//     }
//   } else {
//     // 用户没有登陆
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next(`/login?redirect=${to.path}`)
//     }
//   }
// })

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
