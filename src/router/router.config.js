/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/layout/index'),
    redirect: '/sign-in',
    meta: {
      title: '',
      keepAlive: false
    },
    children: [
      // 商品图册
      {
        path: '/commodity-chart',
        name: 'CommodityChart',
        component: () => import('@/views/commodity-chart'),
        meta: {
          title: '商品图册',
          keepAlive: false
        }
      },
      // 客户信息
      {
        path: '/customer-information',
        name: 'CustomerInformation',
        component: () => import('@/views/customer-information'),
        meta: {
          title: '客户信息',
          keepAlive: false
        }
      },
      // 激活话术
      {
        path: '/activate-conversation',
        name: 'ActivateConversation',
        component: () => import('@/views/activate-conversation'),
        meta: {
          title: '激活话术',
          keepAlive: false
        }
      },
      // 话术素材
      {
        path: '/conversation-material',
        name: 'ConversationMaterial',
        component: () => import('@/views/conversation-material'),
        meta: {
          title: '话术素材',
          keepAlive: false
        }
      },
      // 快捷回复
      {
        path: '/quick-reply',
        name: 'QuickReply',
        component: () => import('@/views/quick-reply'),
        meta: {
          title: '快捷回复',
          keepAlive: false
        }
      },
      // 客户详情
      {
        path: '/customer-details',
        name: 'CustomerDetails',
        component: () => import('@/views/customer-details'),
        meta: {
          title: '客户详情',
          keepAlive: false
        }
      },
      // 任务列表
      {
        path: '/customer-list',
        name: 'CustomerList',
        component: () => import('@/views/customer-list'),
        meta: {
          title: '任务列表',
          keepAlive: false
        }
      },
      // 客户列表
      {
        path: '/customer-list',
        name: 'CustomerList',
        component: () => import('@/views/customer-list'),
        meta: {
          title: '客户列表',
          keepAlive: false
        }
      },
      // 跟进信息
      {
        path: '/follow-up',
        name: 'FollowUp',
        component: () => import('@/views/follow-up'),
        meta: {
          title: '跟进信息',
          keepAlive: false
        }
      }
    ]
  },
  // 授权登录
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('@/views/sign-in'),
    meta: {
      title: '授权登录',
      keepAlive: false
    }
  }
]
