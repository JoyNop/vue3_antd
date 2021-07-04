/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-01 10:46:44
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-04 20:30:24
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/store/modules/async-route/actions.ts
 */
import { generatorDynamicRouter, generatorDynamicRouter1 } from '@/router/generator-routers'

export const actions = {
  async generateRoutes({ commit }) {
    // 动态获取菜单
    const routers = await generatorDynamicRouter1()
    commit('setRouters', routers)
    return routers
  }
}
