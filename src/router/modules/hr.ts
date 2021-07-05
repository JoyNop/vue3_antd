/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-04 20:35:33
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-05 10:53:38
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/router/modules/hr.ts
 */
import { RouteRecordRaw } from 'vue-router'
import { RouterTransition } from '@/components/transition'

const routeName = 'aaa'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/aaa',
    name: routeName,
    redirect: '/dashboard/welcome',
    component: RouterTransition,
    meta: {
      title: 'aaaa系统看板',
      icon: 'icon-liucheng1'
    },
    children: [
      {
        path: 'welcome',
        name: `${routeName}-welcome`,
        meta: {
          title: '首页',
          icon: 'icon-shouye'
        },
        component: () => import(/* webpackChunkName: "dashboard-welcome" */ '@/views/hr/index.vue')
      }
    ]
  }
  // {
  //   path: '/aaa',
  //   name: routeName,
  //   redirect: '/dashboard/welcome',
  //   component: RouterTransition,
  //   meta: {
  //     title: 'aaaa系统看板',
  //     icon: 'icon-liucheng1'
  //   },
]

export default routes
