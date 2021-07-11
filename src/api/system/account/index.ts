/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-05 11:00:27
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-11 17:50:59
 * @Description: file content
 * @FilePath: /vue3_antd/src/api/system/account/index.ts
 */
import http from '@/utils/http/axios'
import { RequestEnum } from '@/enums/httpEnum'

enum Api {
  adminAccount = '/admin/account'
}

/**
 * 获取账号管理列表
 * @param params
 */
export function getAdminAccount(params) {
  return http.request(
    {
      url: '/sys/user/list',
      method: RequestEnum.GET,
      params
    },
    {
      isShowErrorMessage: true
    }
  )
}

/**
 * 删除账号
 * @param params
 */
export function delAdminAccount(id: string) {
  return http.request(
    {
      url: [Api.adminAccount, id].join('/'),
      method: RequestEnum.DELETE
    },
    {
      isShowErrorMessage: true, // 是否显示错误提示信息
      successMessageText: '删除成功'
    }
  )
}

/**
 * 修改账号
 * @param params
 */
export function putAdminAccount(params) {
  return http.request(
    {
      url: `/sys/user/info`,
      method: RequestEnum.PUT,
      params
    },
    {
      isShowErrorMessage: true, // 是否显示错误提示信息
      successMessageText: '修改成功'
    }
  )
}

/**
 * 新建账号
 * @param params
 */
export function postAdminAccount(params) {
  return http.request(
    {
      url: `/sys/user/`,
      method: RequestEnum.POST,
      params
    },
    {
      isShowErrorMessage: true, // 是否显示错误提示信息
      successMessageText: '新建成功'
    }
  )
}
