/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-05 11:00:27
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-08 09:45:10
 * @Description: file content
 * @FilePath: /vue3_antd/src/api/system/user.ts
 */
import http from '@/utils/http/axios'
import { BasicResponseModel } from '@/api/BasicResponseModel'
import { LoginParams, LoginResultModel } from './model/userModel'

enum Api {
  login = '/token/login',
  logout = '/token/logout'
}

/**
 * @description: 获取用户信息
 */
export function getUserInfo() {
  return http.request(
    {
      url: Api.login,
      method: 'POST'
    },
    {
      isTransformRequestResult: false
    }
  )
}

/**
 * @description: 用户登录
 */
export function login(params: LoginParams) {
  return http.request<BasicResponseModel<LoginResultModel>>(
    {
      url: Api.login,
      method: 'POST',
      params
    },
    {
      isTransformRequestResult: false
    }
  )
}

/**
 * @description: 用户修改密码
 */
export function changePassword(params, uid) {
  return http.request(
    {
      url: `/user/u${uid}/changepw`,
      method: 'POST',
      params
    },
    {
      isTransformRequestResult: false
    }
  )
}

/**
 * @description: 用户登出
 */
export function logout(params) {
  return http.request({
    url: Api.logout,
    method: 'POST',
    params
  })
}
