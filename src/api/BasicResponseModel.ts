/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-05 11:00:27
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-08 15:59:12
 * @Description: file content
 * @FilePath: /vue3_antd/src/api/BasicResponseModel.ts
 */
export interface BasicResponseModel<T = any> {
  code: number
  msg: string
  data: T
}
export interface BasicPageParams {
  currPage: number
  pageSize: number
  total: number
}
