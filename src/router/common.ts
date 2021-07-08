/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-01 10:46:44
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-08 11:14:32
 * @Description: file content
 * @FilePath: /vue3_antd/src/router/common.ts
 */
import system from '@/router/modules/biz/auth/system'
import project from '@/router/modules/project'
import dashboard from '@/router/modules/dashboard'
import demos from '@/router/modules/demos'
import redirect from '@/router/modules/redirect'
import externaLink from '@/router/modules/externa-link'

export default [...project, ...system, ...dashboard, ...demos, ...externaLink, ...redirect]
