/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-05 11:00:27
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-08 09:51:34
 * @Description: file content
 * @FilePath: /vue3_antd/src/api/system/model/userModel.ts
 */
import { RoleEnum } from '@/enums/roleEnum'

/**
 * @description: 登陆接口参数
 */
export interface LoginParams {
  username: string
  password: string
}

/**
 * @description: 获取用户信息
 */
export interface GetUserInfoByUserIdParams {
  userId: string | number
}

/**
 * @description: 登录接口返回值
 */
export interface LoginResultModel {
  avatar: string
  gender: number
  id: number
  permList: string[]

  phone: string
  roleList: Role[]
  token: string
  username: string
}

interface Role {
  id: number
  name: string
  code: string
  type: number
  parentId: number
}

/**
 * @description: 获取用户信息返回值
 */
export interface GetUserInfoByUserIdModel {
  roles: { roleName: string; value: RoleEnum }[]
  // 用户id
  userId: string | number
  // 用户名
  username: string
  // 真实名字
  realName: string
  // 介绍
  desc?: string
}
