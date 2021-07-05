/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-01 10:46:44
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-05 15:22:40
 * @Description: file content
 * @FilePath: /vue3_antd/src/router/common.ts
 */
import hr from '@/router/modules/hr'
import project from '@/router/modules/project'
import dashboard from '@/router/modules/dashboard'
import demos from '@/router/modules/demos'
import redirect from '@/router/modules/redirect'
import externaLink from '@/router/modules/externa-link'

export default [...project, ...hr, ...dashboard, ...demos, ...externaLink, ...redirect]
