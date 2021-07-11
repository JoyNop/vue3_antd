/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-05 11:00:27
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-11 16:18:46
 * @Description: file content
 * @FilePath: /vue3_antd/src/api/system/role/index.ts
 */
import http from '@/utils/http/axios'
import { RequestEnum } from '@/enums/httpEnum'

enum Api {
  adminRole = '/sys/role/list',
  adminRoleAccess = '/sys/permission/prod/list',
  editRole = '/sys/role/',
  deleteRole = '/sys/role/roleId'
}

/**
 * 获取角色权限资源列表
 * @param params
 */

export function getAdminRoleAccess(id?: string | number) {
  return http.request({
    url: id ? `/sys/role/roleId/${id}/info` : `/sys/permission/prod/list`,
    method: RequestEnum.GET
  })
}

/**
 * 获取角色列表
 * @param params
 */
export function getAdminRole(params) {
  return http.request({
    url: Api.adminRole,
    method: RequestEnum.GET,
    params
  })
}

/**
 * 获取全部角色列表
 */
export function getAllAdminRole() {
  return http.request({
    url: `/sys/role/list/all`,
    method: RequestEnum.GET
  })
}

/**
 * 删除角色
 * @param params
 */
export function delAdminRole(id: string) {
  return http.request(
    {
      url: [Api.deleteRole, id].join('/'),
      method: RequestEnum.DELETE
    },
    {
      isShowErrorMessage: true, // 是否显示错误提示信息
      successMessageText: '删除成功'
    }
  )
}

/**
 * 修改角色
 * @param params
 */
export function putAdminRole(params) {
  return http.request(
    {
      url: Api.editRole,
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
 * 新建角色
 * @param params
 */
export function postAdminRole(params) {
  return http.request(
    {
      url: Api.editRole,
      method: RequestEnum.POST,
      params
    },
    {
      isShowErrorMessage: true, // 是否显示错误提示信息
      successMessageText: '创建成功'
    }
  )
}
