/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-04 20:35:33
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-05 15:49:10
 * @Description: file content
 * @FilePath: /vue3_antd/src/router/modules/project.ts
 */
import { RouteRecordRaw } from 'vue-router'
import { RouterTransition } from '@/components/transition'

const routeName = 'project'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/project',
    name: routeName,
    // redirect: '/dashboard/welcome',
    // component: RouterTransition,
    component: () => import(/* webpackChunkName: "demos-button" */ '@/views/project/index.vue'),

    meta: { title: '工程', icon: 'icon-liucheng1' }
    // children: [
    //   {
    //     path: 'welcome',
    //     name: `${routeName}-welcome`,
    //     meta: {
    //       title: '首页',
    //       icon: 'icon-shouye'
    //     },
    //     component: () => import(/* webpackChunkName: "demos-button" */ '@/views/project/index.vue')
    //   }
    // ]
  }
]

export default routes
