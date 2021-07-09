/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-09 10:09:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-09 10:44:16
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/router/index.ts
 */
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

import { createRouterGuards } from './router-guards'
import 'nprogress/css/nprogress.css' // 进度条样式

import shared from './modules/shared'
import { errorRoutes, notFound } from './modules/error'
import common from '@/router/common'
import { App } from 'vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/dashboard',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    meta: {
      title: '首页'
    },
    children: [...common]
  },
  ...shared,
  errorRoutes
]

const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}
export default router
