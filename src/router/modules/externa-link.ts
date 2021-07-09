/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-09 10:09:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-09 10:53:54
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/router/modules/externa-link.ts
 */
import { RouteRecordRaw } from 'vue-router'
import { RouterTransition } from '@/components/transition'

const routes: Array<RouteRecordRaw> = [
  {
    path: 'http://baidu.com',
    name: 'http://baidu.com',
    component: RouterTransition,
    meta: {
      title: 'externa-link',
      icon: 'icon-externa-link'
    }
  }
]

export default routes
