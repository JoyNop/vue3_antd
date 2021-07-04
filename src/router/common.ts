/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-01 10:46:44
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-04 20:36:53
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/router/common.ts
 */
import hr from '@/router/modules/hr'
import dashboard from '@/router/modules/dashboard'
import demos from '@/router/modules/demos'
import redirect from '@/router/modules/redirect'
import externaLink from '@/router/modules/externa-link'

export default [...hr, ...dashboard, ...demos, ...externaLink, ...redirect]
