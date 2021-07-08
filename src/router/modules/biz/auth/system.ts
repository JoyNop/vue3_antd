/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-08 10:57:00
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-08 11:10:08
 * @Description: file content
 * @FilePath: /vue3_antd/src/router/modules/biz/auth/system.ts
 */
import { RouteRecordRaw } from 'vue-router'
import { RouterTransition } from '@/components/transition'

const routeName = 'system'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    name: routeName,
    redirect: '/system/account',
    component: RouterTransition,
    meta: {
      title: '系统管理',
      icon: 'icon-yibiaopan'
    },
    children: [
      {
        path: 'account',
        name: `${routeName}-account`,
        meta: {
          title: '用户管理',
          icon: 'icon-shouye'
        },
        component: () =>
          import(/* webpackChunkName: "dashboard-welcome" */ '@/views/auth/system/access/index.vue')
      },
      {
        path: 'role',
        name: `${routeName}-role`,
        meta: {
          title: '角色管理',
          icon: 'icon-role'
        },
        component: () =>
          import(/* webpackChunkName: "dashboard-welcome" */ '@/views/auth/system/role/index.vue')
      }
    ]
  }
]

export default routes
