/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-09 10:09:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-09 10:21:19
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/store/modules/async-route/actions.ts
 */
import { generatorDynamicRouter1 } from '@/router/generator-routers'

export const actions = {
  async generateRoutes({ commit }) {
    // 动态获取菜单
    const routers = await generatorDynamicRouter1()
    commit('setRouters', routers)
    return routers
  }
}
