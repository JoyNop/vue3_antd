/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-09 10:09:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-09 10:57:28
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/router/common.ts
 */
import dashboard from '@/router/modules/dashboard'
import demos from '@/router/modules/demos'
import redirect from '@/router/modules/redirect'
import externaLink from '@/router/modules/externa-link'
import system from '@/router/modules/biz/system'

export default [...system, ...dashboard, ...demos, ...externaLink, ...redirect]
