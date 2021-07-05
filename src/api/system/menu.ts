import http from '@/utils/http/axios'
import {
  GetByUserIdParams,
  GetMenuListByUserIdResult,
  GetAuthCodeByUserIdResult
} from './model/menuModel'

enum Api {
  adminMenus = '/admin/menus',
  GetBtnCodeListByUserId = '/getBtnCodeListByUserId'
}

export const getMenu = () => {
  let arr: any[] = []

  arr = [
    // {
    //   id: 72,
    //   url: 'string',
    //   sort: 0,
    //   icon: 'string',
    //   keepAlive: 0,
    //   parentId: 0,
    //   name: 'string'
    // },
    // {
    //   id: 1,
    //   url: 'system',
    //   sort: 1,
    //   icon: 'icon-BUG',
    //   keepAlive: 0,
    //   parentId: -1,
    //   name: '系统管理'
    // },
    // {
    //   id: 3,
    //   url: 'system/role',
    //   sort: 1,
    //   icon: 'icon-zhuzhuangtu',
    //   keepAlive: 1,
    //   parentId: 1,
    //   name: '角色管理'
    // },
    // {
    //   id: 87,
    //   url: 'sss',
    //   sort: 1,
    //   icon: 'icon-fuzhi',
    //   keepAlive: 1,
    //   parentId: -1,
    //   name: 'MAERSK'
    // },
    // {
    //   id: 90,
    //   url: '/kkkk',
    //   sort: 1,
    //   icon: 'icon-yun',
    //   keepAlive: 1,
    //   parentId: 87,
    //   name: 'maersk-TOKEN管理'
    // },
    // {
    //   id: 102,
    //   url: 'csed',
    //   sort: 1,
    //   icon: 'icon-jueceyinqing',
    //   keepAlive: 1,
    //   parentId: -1,
    //   name: 'fvdfv'
    // },
    // {
    //   id: 104,
    //   url: '/aaa',
    //   sort: 1,
    //   icon: 'icon-liucheng1',
    //   keepAlive: 1,
    //   parentId: -1,
    //   name: '测试111'
    // },
    // {
    //   id: 2,
    //   url: 'system/account',
    //   sort: 3,
    //   icon: 'icon-yun',
    //   keepAlive: 0,
    //   parentId: 1,
    //   name: '账号管理'
    // },
    // {
    //   id: 5,
    //   url: 'system/dict',
    //   sort: 4,
    //   icon: 'icon-BUG',
    //   keepAlive: 1,
    //   parentId: 1,
    //   name: '字典管理'
    // },
    // {
    //   id: 4,
    //   url: 'system/access',
    //   sort: 6,
    //   icon: 'icon-shuazi-1',
    //   keepAlive: 0,
    //   parentId: 1,
    //   name: '资源管理11'
    // },
    // {
    //   id: 23,
    //   url: 'project',
    //   sort: 1,
    //   icon: 'icon-fuzhi',
    //   keepAlive: 1,
    //   parentId: -1,
    //   name: '工程'
    // }
  ]
  return arr
}

/**
 * @description: 根据用户id获取用户菜单
 */
export function adminMenus() {
  return http.request<GetMenuListByUserIdResult>({
    url: Api.adminMenus,
    method: 'GET'
  })
}

/**
 * 根据用户Id获取权限编码
 * @param params
 */
export function getBtnCodeListByUserId(params: GetByUserIdParams) {
  return http.request<GetAuthCodeByUserIdResult>({
    url: Api.GetBtnCodeListByUserId,
    method: 'GET',
    params
  })
}
