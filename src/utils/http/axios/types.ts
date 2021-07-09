/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-05 11:00:27
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-08 16:43:14
 * @Description: file content
 * @FilePath: /vue3_antd/src/utils/http/axios/types.ts
 */
import { AxiosRequestConfig } from 'axios'
import { AxiosTransform } from './axiosTransform'

export interface CreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string
  transform?: AxiosTransform
  requestOptions?: RequestOptions
}

export interface RequestOptions {
  // 请求参数拼接到url
  joinParamsToUrl?: boolean
  // 格式化请求参数时间
  formatDate?: boolean
  //  是否处理请求结果
  isTransformRequestResult?: boolean
  // 是否显示提示信息
  isShowMessage?: boolean
  // 是否解析成JSON
  isParseToJson?: boolean
  // 成功的文本信息
  successMessageText?: string
  // 是否显示成功信息
  isShowSuccessMessage?: boolean
  // 是否显示失败信息
  isShowErrorMessage?: boolean
  // 错误的文本信息
  errorMessageText?: string
  // 是否加入url
  joinPrefix?: boolean
  // 接口地址， 不填则使用默认apiUrl
  apiUrl?: string
  // 错误消息提示类型
  errorMessageMode?: 'none' | 'modal'
}

export interface Result<T = any> {
  code: number
  type?: 'success' | 'error' | 'warning'
  msg: string
  data?: T
}
