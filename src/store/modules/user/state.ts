/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-09 10:09:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-09 10:38:24
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/store/modules/user/state.ts
 */
import { createStorage } from '@/utils/Storage'
import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types'
const Storage = createStorage({ storage: sessionStorage })

export type IUserState = {
  token: string
  name: string
  welcome: string
  avatar: string
  roles: any[]
  info: any
}

export const state: IUserState = {
  token: Storage.get(ACCESS_TOKEN, ''),
  name: '',
  welcome: '',
  avatar: '',
  roles: [],
  info: Storage.get(CURRENT_USER, {})
}
