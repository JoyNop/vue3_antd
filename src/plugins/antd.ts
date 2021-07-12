/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-09 10:09:16
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-11 18:04:41
 * @Description: file content
 * @FilePath: /vue3_antd/src/plugins/antd.ts
 */
import type { App } from 'vue'

import { AButton } from '@/components/button/index'

import { Modal, Table, Menu, Input, Form, Card, Checkbox, Radio, Switch } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

export function setupAntd(app: App<Element>) {
  app.component('AButton', AButton)

  app
    .use(Form)
    .use(Input)
    .use(Modal)
    .use(Table)
    .use(Menu)
    .use(Card)
    .use(Checkbox)
    .use(Radio)
    .use(Switch)
}
